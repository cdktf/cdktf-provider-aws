/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import * as cdktf from 'cdktf';
import { QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyle,
quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleToTerraform,
QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleOutputReference,
QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptions,
quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsToTerraform,
QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsOutputReference,
QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWells,
quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsToTerraform,
QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsOutputReference,
QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationPaginatedReportOptions,
quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationPaginatedReportOptionsToTerraform,
QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationPaginatedReportOptionsOutputReference,
QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfiguration,
quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationToTerraform,
QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationOutputReference,
QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptions,
quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsToTerraform,
QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsOutputReference } from './structs18000'
import { QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldOptions,
quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldOptionsToTerraform,
QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldOptionsOutputReference } from './structs17200'
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorderBottom {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorderBottomToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorderBottomOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorderBottom): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorderBottomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorderBottom | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorderBottom | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontal {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontalToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontalOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontal): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontal | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontal | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVertical {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVerticalToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVerticalOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVertical): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVerticalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVertical | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVertical | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorderLeft {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorderLeftToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorderLeftOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorderLeft): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorderLeftOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorderLeft | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorderLeft | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorderRight {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorderRightToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorderRightOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorderRight): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorderRightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorderRight | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorderRight | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorderTop {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorderTopToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorderTopOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorderTop): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorderTopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorderTop | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorderTop | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorder {
  /**
  * bottom block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#bottom QuicksightTemplate#bottom}
  */
  readonly bottom: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorderBottom;
  /**
  * inner_horizontal block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#inner_horizontal QuicksightTemplate#inner_horizontal}
  */
  readonly innerHorizontal: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontal;
  /**
  * inner_vertical block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#inner_vertical QuicksightTemplate#inner_vertical}
  */
  readonly innerVertical: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVertical;
  /**
  * left block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#left QuicksightTemplate#left}
  */
  readonly left: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorderLeft;
  /**
  * right block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#right QuicksightTemplate#right}
  */
  readonly right: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorderRight;
  /**
  * top block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#top QuicksightTemplate#top}
  */
  readonly top: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorderTop;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorderToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorderOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bottom: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorderBottomToTerraform(struct!.bottom),
    inner_horizontal: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontalToTerraform(struct!.innerHorizontal),
    inner_vertical: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVerticalToTerraform(struct!.innerVertical),
    left: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorderLeftToTerraform(struct!.left),
    right: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorderRightToTerraform(struct!.right),
    top: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorderTopToTerraform(struct!.top),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorder | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorder | undefined) {
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
  private _bottom = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorderBottomOutputReference(this, "bottom");
  public get bottom() {
    return this._bottom;
  }
  public putBottom(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorderBottom) {
    this._bottom.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bottomInput() {
    return this._bottom.internalValue;
  }

  // inner_horizontal - computed: false, optional: false, required: true
  private _innerHorizontal = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontalOutputReference(this, "inner_horizontal");
  public get innerHorizontal() {
    return this._innerHorizontal;
  }
  public putInnerHorizontal(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontal) {
    this._innerHorizontal.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get innerHorizontalInput() {
    return this._innerHorizontal.internalValue;
  }

  // inner_vertical - computed: false, optional: false, required: true
  private _innerVertical = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVerticalOutputReference(this, "inner_vertical");
  public get innerVertical() {
    return this._innerVertical;
  }
  public putInnerVertical(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVertical) {
    this._innerVertical.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get innerVerticalInput() {
    return this._innerVertical.internalValue;
  }

  // left - computed: false, optional: false, required: true
  private _left = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorderLeftOutputReference(this, "left");
  public get left() {
    return this._left;
  }
  public putLeft(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorderLeft) {
    this._left.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get leftInput() {
    return this._left.internalValue;
  }

  // right - computed: false, optional: false, required: true
  private _right = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorderRightOutputReference(this, "right");
  public get right() {
    return this._right;
  }
  public putRight(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorderRight) {
    this._right.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rightInput() {
    return this._right.internalValue;
  }

  // top - computed: false, optional: false, required: true
  private _top = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorderTopOutputReference(this, "top");
  public get top() {
    return this._top;
  }
  public putTop(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorderTop) {
    this._top.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topInput() {
    return this._top.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderUniformBorder {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderUniformBorderToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderUniformBorderOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderUniformBorder): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderUniformBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderUniformBorder | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderUniformBorder | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorder {
  /**
  * side_specific_border block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#side_specific_border QuicksightTemplate#side_specific_border}
  */
  readonly sideSpecificBorder?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorder;
  /**
  * uniform_border block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#uniform_border QuicksightTemplate#uniform_border}
  */
  readonly uniformBorder: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderUniformBorder;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    side_specific_border: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorderToTerraform(struct!.sideSpecificBorder),
    uniform_border: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderUniformBorderToTerraform(struct!.uniformBorder),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorder | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorder | undefined) {
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
  private _sideSpecificBorder = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorderOutputReference(this, "side_specific_border");
  public get sideSpecificBorder() {
    return this._sideSpecificBorder;
  }
  public putSideSpecificBorder(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderSideSpecificBorder) {
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
  private _uniformBorder = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderUniformBorderOutputReference(this, "uniform_border");
  public get uniformBorder() {
    return this._uniformBorder;
  }
  public putUniformBorder(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderUniformBorder) {
    this._uniformBorder.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uniformBorderInput() {
    return this._uniformBorder.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleFontConfigurationFontSize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#relative QuicksightTemplate#relative}
  */
  readonly relative?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleFontConfigurationFontSizeToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleFontConfigurationFontSizeOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relative: cdktf.stringToTerraform(struct!.relative),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleFontConfigurationFontSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relative !== undefined) {
      hasAnyValues = true;
      internalValueResult.relative = this._relative;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleFontConfigurationFontSize | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleFontConfigurationFontWeight {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#name QuicksightTemplate#name}
  */
  readonly name?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleFontConfigurationFontWeightToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleFontConfigurationFontWeightOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleFontConfigurationFontWeightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleFontConfigurationFontWeight | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleFontConfiguration {
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
  readonly fontSize?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleFontConfigurationFontSize;
  /**
  * font_weight block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_weight QuicksightTemplate#font_weight}
  */
  readonly fontWeight?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleFontConfigurationFontWeight;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleFontConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleFontConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    font_color: cdktf.stringToTerraform(struct!.fontColor),
    font_decoration: cdktf.stringToTerraform(struct!.fontDecoration),
    font_style: cdktf.stringToTerraform(struct!.fontStyle),
    font_size: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleFontConfigurationFontSizeToTerraform(struct!.fontSize),
    font_weight: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleFontConfigurationFontWeightToTerraform(struct!.fontWeight),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleFontConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleFontConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleFontConfiguration | undefined) {
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
  private _fontSize = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleFontConfigurationFontSizeOutputReference(this, "font_size");
  public get fontSize() {
    return this._fontSize;
  }
  public putFontSize(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleFontConfigurationFontSize) {
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
  private _fontWeight = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleFontConfigurationFontWeightOutputReference(this, "font_weight");
  public get fontWeight() {
    return this._fontWeight;
  }
  public putFontWeight(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleFontConfigurationFontWeight) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyle {
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
  readonly border?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorder;
  /**
  * font_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_configuration QuicksightTemplate#font_configuration}
  */
  readonly fontConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleFontConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyle): any {
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
    border: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderToTerraform(struct!.border),
    font_configuration: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleFontConfigurationToTerraform(struct!.fontConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyle | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyle | undefined) {
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
  private _border = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorderOutputReference(this, "border");
  public get border() {
    return this._border;
  }
  public putBorder(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleBorder) {
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
  private _fontConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleFontConfigurationOutputReference(this, "font_configuration");
  public get fontConfiguration() {
    return this._fontConfiguration;
  }
  public putFontConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleFontConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorderBottom {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorderBottomToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorderBottomOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorderBottom): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorderBottomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorderBottom | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorderBottom | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorderInnerHorizontal {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorderInnerHorizontalToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorderInnerHorizontalOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorderInnerHorizontal): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorderInnerHorizontalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorderInnerHorizontal | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorderInnerHorizontal | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorderInnerVertical {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorderInnerVerticalToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorderInnerVerticalOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorderInnerVertical): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorderInnerVerticalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorderInnerVertical | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorderInnerVertical | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorderLeft {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorderLeftToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorderLeftOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorderLeft): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorderLeftOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorderLeft | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorderLeft | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorderRight {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorderRightToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorderRightOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorderRight): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorderRightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorderRight | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorderRight | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorderTop {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorderTopToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorderTopOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorderTop): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorderTopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorderTop | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorderTop | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorder {
  /**
  * bottom block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#bottom QuicksightTemplate#bottom}
  */
  readonly bottom: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorderBottom;
  /**
  * inner_horizontal block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#inner_horizontal QuicksightTemplate#inner_horizontal}
  */
  readonly innerHorizontal: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorderInnerHorizontal;
  /**
  * inner_vertical block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#inner_vertical QuicksightTemplate#inner_vertical}
  */
  readonly innerVertical: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorderInnerVertical;
  /**
  * left block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#left QuicksightTemplate#left}
  */
  readonly left: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorderLeft;
  /**
  * right block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#right QuicksightTemplate#right}
  */
  readonly right: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorderRight;
  /**
  * top block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#top QuicksightTemplate#top}
  */
  readonly top: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorderTop;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorderToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorderOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bottom: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorderBottomToTerraform(struct!.bottom),
    inner_horizontal: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorderInnerHorizontalToTerraform(struct!.innerHorizontal),
    inner_vertical: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorderInnerVerticalToTerraform(struct!.innerVertical),
    left: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorderLeftToTerraform(struct!.left),
    right: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorderRightToTerraform(struct!.right),
    top: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorderTopToTerraform(struct!.top),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorder | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorder | undefined) {
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
  private _bottom = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorderBottomOutputReference(this, "bottom");
  public get bottom() {
    return this._bottom;
  }
  public putBottom(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorderBottom) {
    this._bottom.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bottomInput() {
    return this._bottom.internalValue;
  }

  // inner_horizontal - computed: false, optional: false, required: true
  private _innerHorizontal = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorderInnerHorizontalOutputReference(this, "inner_horizontal");
  public get innerHorizontal() {
    return this._innerHorizontal;
  }
  public putInnerHorizontal(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorderInnerHorizontal) {
    this._innerHorizontal.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get innerHorizontalInput() {
    return this._innerHorizontal.internalValue;
  }

  // inner_vertical - computed: false, optional: false, required: true
  private _innerVertical = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorderInnerVerticalOutputReference(this, "inner_vertical");
  public get innerVertical() {
    return this._innerVertical;
  }
  public putInnerVertical(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorderInnerVertical) {
    this._innerVertical.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get innerVerticalInput() {
    return this._innerVertical.internalValue;
  }

  // left - computed: false, optional: false, required: true
  private _left = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorderLeftOutputReference(this, "left");
  public get left() {
    return this._left;
  }
  public putLeft(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorderLeft) {
    this._left.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get leftInput() {
    return this._left.internalValue;
  }

  // right - computed: false, optional: false, required: true
  private _right = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorderRightOutputReference(this, "right");
  public get right() {
    return this._right;
  }
  public putRight(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorderRight) {
    this._right.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rightInput() {
    return this._right.internalValue;
  }

  // top - computed: false, optional: false, required: true
  private _top = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorderTopOutputReference(this, "top");
  public get top() {
    return this._top;
  }
  public putTop(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorderTop) {
    this._top.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topInput() {
    return this._top.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderUniformBorder {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderUniformBorderToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderUniformBorderOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderUniformBorder): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderUniformBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderUniformBorder | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderUniformBorder | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorder {
  /**
  * side_specific_border block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#side_specific_border QuicksightTemplate#side_specific_border}
  */
  readonly sideSpecificBorder?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorder;
  /**
  * uniform_border block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#uniform_border QuicksightTemplate#uniform_border}
  */
  readonly uniformBorder: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderUniformBorder;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    side_specific_border: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorderToTerraform(struct!.sideSpecificBorder),
    uniform_border: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderUniformBorderToTerraform(struct!.uniformBorder),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorder | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorder | undefined) {
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
  private _sideSpecificBorder = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorderOutputReference(this, "side_specific_border");
  public get sideSpecificBorder() {
    return this._sideSpecificBorder;
  }
  public putSideSpecificBorder(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderSideSpecificBorder) {
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
  private _uniformBorder = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderUniformBorderOutputReference(this, "uniform_border");
  public get uniformBorder() {
    return this._uniformBorder;
  }
  public putUniformBorder(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderUniformBorder) {
    this._uniformBorder.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uniformBorderInput() {
    return this._uniformBorder.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleFontConfigurationFontSize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#relative QuicksightTemplate#relative}
  */
  readonly relative?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleFontConfigurationFontSizeToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleFontConfigurationFontSizeOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relative: cdktf.stringToTerraform(struct!.relative),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleFontConfigurationFontSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relative !== undefined) {
      hasAnyValues = true;
      internalValueResult.relative = this._relative;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleFontConfigurationFontSize | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleFontConfigurationFontWeight {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#name QuicksightTemplate#name}
  */
  readonly name?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleFontConfigurationFontWeightToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleFontConfigurationFontWeightOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleFontConfigurationFontWeightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleFontConfigurationFontWeight | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleFontConfiguration {
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
  readonly fontSize?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleFontConfigurationFontSize;
  /**
  * font_weight block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_weight QuicksightTemplate#font_weight}
  */
  readonly fontWeight?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleFontConfigurationFontWeight;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleFontConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleFontConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    font_color: cdktf.stringToTerraform(struct!.fontColor),
    font_decoration: cdktf.stringToTerraform(struct!.fontDecoration),
    font_style: cdktf.stringToTerraform(struct!.fontStyle),
    font_size: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleFontConfigurationFontSizeToTerraform(struct!.fontSize),
    font_weight: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleFontConfigurationFontWeightToTerraform(struct!.fontWeight),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleFontConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleFontConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleFontConfiguration | undefined) {
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
  private _fontSize = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleFontConfigurationFontSizeOutputReference(this, "font_size");
  public get fontSize() {
    return this._fontSize;
  }
  public putFontSize(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleFontConfigurationFontSize) {
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
  private _fontWeight = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleFontConfigurationFontWeightOutputReference(this, "font_weight");
  public get fontWeight() {
    return this._fontWeight;
  }
  public putFontWeight(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleFontConfigurationFontWeight) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyle {
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
  readonly border?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorder;
  /**
  * font_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_configuration QuicksightTemplate#font_configuration}
  */
  readonly fontConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleFontConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyle): any {
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
    border: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderToTerraform(struct!.border),
    font_configuration: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleFontConfigurationToTerraform(struct!.fontConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyle | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyle | undefined) {
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
  private _border = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorderOutputReference(this, "border");
  public get border() {
    return this._border;
  }
  public putBorder(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleBorder) {
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
  private _fontConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleFontConfigurationOutputReference(this, "font_configuration");
  public get fontConfiguration() {
    return this._fontConfiguration;
  }
  public putFontConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleFontConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#custom_label QuicksightTemplate#custom_label}
  */
  readonly customLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#placement QuicksightTemplate#placement}
  */
  readonly placement?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#scroll_status QuicksightTemplate#scroll_status}
  */
  readonly scrollStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#totals_visibility QuicksightTemplate#totals_visibility}
  */
  readonly totalsVisibility?: string;
  /**
  * metric_header_cell_style block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#metric_header_cell_style QuicksightTemplate#metric_header_cell_style}
  */
  readonly metricHeaderCellStyle?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyle;
  /**
  * total_cell_style block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#total_cell_style QuicksightTemplate#total_cell_style}
  */
  readonly totalCellStyle?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyle;
  /**
  * value_cell_style block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#value_cell_style QuicksightTemplate#value_cell_style}
  */
  readonly valueCellStyle?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyle;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_label: cdktf.stringToTerraform(struct!.customLabel),
    placement: cdktf.stringToTerraform(struct!.placement),
    scroll_status: cdktf.stringToTerraform(struct!.scrollStatus),
    totals_visibility: cdktf.stringToTerraform(struct!.totalsVisibility),
    metric_header_cell_style: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleToTerraform(struct!.metricHeaderCellStyle),
    total_cell_style: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleToTerraform(struct!.totalCellStyle),
    value_cell_style: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleToTerraform(struct!.valueCellStyle),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.customLabel = this._customLabel;
    }
    if (this._placement !== undefined) {
      hasAnyValues = true;
      internalValueResult.placement = this._placement;
    }
    if (this._scrollStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.scrollStatus = this._scrollStatus;
    }
    if (this._totalsVisibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalsVisibility = this._totalsVisibility;
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customLabel = undefined;
      this._placement = undefined;
      this._scrollStatus = undefined;
      this._totalsVisibility = undefined;
      this._metricHeaderCellStyle.internalValue = undefined;
      this._totalCellStyle.internalValue = undefined;
      this._valueCellStyle.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customLabel = value.customLabel;
      this._placement = value.placement;
      this._scrollStatus = value.scrollStatus;
      this._totalsVisibility = value.totalsVisibility;
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

  // placement - computed: false, optional: true, required: false
  private _placement?: string; 
  public get placement() {
    return this.getStringAttribute('placement');
  }
  public set placement(value: string) {
    this._placement = value;
  }
  public resetPlacement() {
    this._placement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementInput() {
    return this._placement;
  }

  // scroll_status - computed: false, optional: true, required: false
  private _scrollStatus?: string; 
  public get scrollStatus() {
    return this.getStringAttribute('scroll_status');
  }
  public set scrollStatus(value: string) {
    this._scrollStatus = value;
  }
  public resetScrollStatus() {
    this._scrollStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scrollStatusInput() {
    return this._scrollStatus;
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

  // metric_header_cell_style - computed: false, optional: true, required: false
  private _metricHeaderCellStyle = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyleOutputReference(this, "metric_header_cell_style");
  public get metricHeaderCellStyle() {
    return this._metricHeaderCellStyle;
  }
  public putMetricHeaderCellStyle(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsMetricHeaderCellStyle) {
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
  private _totalCellStyle = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyleOutputReference(this, "total_cell_style");
  public get totalCellStyle() {
    return this._totalCellStyle;
  }
  public putTotalCellStyle(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsTotalCellStyle) {
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
  private _valueCellStyle = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyleOutputReference(this, "value_cell_style");
  public get valueCellStyle() {
    return this._valueCellStyle;
  }
  public putValueCellStyle(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsValueCellStyle) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsFieldLevelOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_id QuicksightTemplate#field_id}
  */
  readonly fieldId?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsFieldLevelOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsFieldLevelOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_id: cdktf.stringToTerraform(struct!.fieldId),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsFieldLevelOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsFieldLevelOptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsFieldLevelOptions | cdktf.IResolvable | undefined) {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsFieldLevelOptionsList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsFieldLevelOptions[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsFieldLevelOptionsOutputReference {
    return new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsFieldLevelOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderBottom {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderBottomToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderBottomOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderBottom): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderBottomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderBottom | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderBottom | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerHorizontal {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerHorizontalToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerHorizontalOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerHorizontal): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerHorizontalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerHorizontal | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerHorizontal | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerVertical {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerVerticalToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerVerticalOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerVertical): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerVerticalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerVertical | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerVertical | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderLeft {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderLeftToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderLeftOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderLeft): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderLeftOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderLeft | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderLeft | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderRight {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderRightToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderRightOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderRight): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderRightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderRight | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderRight | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderTop {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderTopToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderTopOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderTop): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderTopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderTop | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderTop | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorder {
  /**
  * bottom block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#bottom QuicksightTemplate#bottom}
  */
  readonly bottom: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderBottom;
  /**
  * inner_horizontal block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#inner_horizontal QuicksightTemplate#inner_horizontal}
  */
  readonly innerHorizontal: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerHorizontal;
  /**
  * inner_vertical block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#inner_vertical QuicksightTemplate#inner_vertical}
  */
  readonly innerVertical: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerVertical;
  /**
  * left block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#left QuicksightTemplate#left}
  */
  readonly left: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderLeft;
  /**
  * right block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#right QuicksightTemplate#right}
  */
  readonly right: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderRight;
  /**
  * top block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#top QuicksightTemplate#top}
  */
  readonly top: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderTop;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bottom: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderBottomToTerraform(struct!.bottom),
    inner_horizontal: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerHorizontalToTerraform(struct!.innerHorizontal),
    inner_vertical: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerVerticalToTerraform(struct!.innerVertical),
    left: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderLeftToTerraform(struct!.left),
    right: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderRightToTerraform(struct!.right),
    top: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderTopToTerraform(struct!.top),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorder | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorder | undefined) {
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
  private _bottom = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderBottomOutputReference(this, "bottom");
  public get bottom() {
    return this._bottom;
  }
  public putBottom(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderBottom) {
    this._bottom.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bottomInput() {
    return this._bottom.internalValue;
  }

  // inner_horizontal - computed: false, optional: false, required: true
  private _innerHorizontal = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerHorizontalOutputReference(this, "inner_horizontal");
  public get innerHorizontal() {
    return this._innerHorizontal;
  }
  public putInnerHorizontal(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerHorizontal) {
    this._innerHorizontal.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get innerHorizontalInput() {
    return this._innerHorizontal.internalValue;
  }

  // inner_vertical - computed: false, optional: false, required: true
  private _innerVertical = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerVerticalOutputReference(this, "inner_vertical");
  public get innerVertical() {
    return this._innerVertical;
  }
  public putInnerVertical(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerVertical) {
    this._innerVertical.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get innerVerticalInput() {
    return this._innerVertical.internalValue;
  }

  // left - computed: false, optional: false, required: true
  private _left = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderLeftOutputReference(this, "left");
  public get left() {
    return this._left;
  }
  public putLeft(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderLeft) {
    this._left.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get leftInput() {
    return this._left.internalValue;
  }

  // right - computed: false, optional: false, required: true
  private _right = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderRightOutputReference(this, "right");
  public get right() {
    return this._right;
  }
  public putRight(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderRight) {
    this._right.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rightInput() {
    return this._right.internalValue;
  }

  // top - computed: false, optional: false, required: true
  private _top = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderTopOutputReference(this, "top");
  public get top() {
    return this._top;
  }
  public putTop(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderTop) {
    this._top.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topInput() {
    return this._top.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderUniformBorder {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderUniformBorderToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderUniformBorderOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderUniformBorder): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderUniformBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderUniformBorder | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderUniformBorder | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorder {
  /**
  * side_specific_border block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#side_specific_border QuicksightTemplate#side_specific_border}
  */
  readonly sideSpecificBorder?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorder;
  /**
  * uniform_border block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#uniform_border QuicksightTemplate#uniform_border}
  */
  readonly uniformBorder: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderUniformBorder;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    side_specific_border: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderToTerraform(struct!.sideSpecificBorder),
    uniform_border: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderUniformBorderToTerraform(struct!.uniformBorder),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorder | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorder | undefined) {
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
  private _sideSpecificBorder = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderOutputReference(this, "side_specific_border");
  public get sideSpecificBorder() {
    return this._sideSpecificBorder;
  }
  public putSideSpecificBorder(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderSideSpecificBorder) {
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
  private _uniformBorder = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderUniformBorderOutputReference(this, "uniform_border");
  public get uniformBorder() {
    return this._uniformBorder;
  }
  public putUniformBorder(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderUniformBorder) {
    this._uniformBorder.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uniformBorderInput() {
    return this._uniformBorder.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleFontConfigurationFontSize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#relative QuicksightTemplate#relative}
  */
  readonly relative?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleFontConfigurationFontSizeToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleFontConfigurationFontSizeOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relative: cdktf.stringToTerraform(struct!.relative),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleFontConfigurationFontSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relative !== undefined) {
      hasAnyValues = true;
      internalValueResult.relative = this._relative;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleFontConfigurationFontSize | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleFontConfigurationFontWeight {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#name QuicksightTemplate#name}
  */
  readonly name?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleFontConfigurationFontWeightToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleFontConfigurationFontWeightOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleFontConfigurationFontWeightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleFontConfigurationFontWeight | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleFontConfiguration {
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
  readonly fontSize?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleFontConfigurationFontSize;
  /**
  * font_weight block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_weight QuicksightTemplate#font_weight}
  */
  readonly fontWeight?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleFontConfigurationFontWeight;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleFontConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleFontConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    font_color: cdktf.stringToTerraform(struct!.fontColor),
    font_decoration: cdktf.stringToTerraform(struct!.fontDecoration),
    font_style: cdktf.stringToTerraform(struct!.fontStyle),
    font_size: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleFontConfigurationFontSizeToTerraform(struct!.fontSize),
    font_weight: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleFontConfigurationFontWeightToTerraform(struct!.fontWeight),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleFontConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleFontConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleFontConfiguration | undefined) {
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
  private _fontSize = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleFontConfigurationFontSizeOutputReference(this, "font_size");
  public get fontSize() {
    return this._fontSize;
  }
  public putFontSize(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleFontConfigurationFontSize) {
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
  private _fontWeight = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleFontConfigurationFontWeightOutputReference(this, "font_weight");
  public get fontWeight() {
    return this._fontWeight;
  }
  public putFontWeight(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleFontConfigurationFontWeight) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyle {
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
  readonly border?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorder;
  /**
  * font_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_configuration QuicksightTemplate#font_configuration}
  */
  readonly fontConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleFontConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyle): any {
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
    border: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderToTerraform(struct!.border),
    font_configuration: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleFontConfigurationToTerraform(struct!.fontConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyle | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyle | undefined) {
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
  private _border = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorderOutputReference(this, "border");
  public get border() {
    return this._border;
  }
  public putBorder(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleBorder) {
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
  private _fontConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleFontConfigurationOutputReference(this, "font_configuration");
  public get fontConfiguration() {
    return this._fontConfiguration;
  }
  public putFontConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleFontConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderBottom {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderBottomToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderBottomOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderBottom): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderBottomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderBottom | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderBottom | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontal {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontalToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontalOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontal): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontal | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontal | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVertical {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVerticalToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVerticalOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVertical): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVerticalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVertical | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVertical | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderLeft {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderLeftToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderLeftOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderLeft): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderLeftOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderLeft | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderLeft | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderRight {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderRightToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderRightOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderRight): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderRightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderRight | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderRight | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderTop {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderTopToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderTopOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderTop): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderTopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderTop | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderTop | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorder {
  /**
  * bottom block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#bottom QuicksightTemplate#bottom}
  */
  readonly bottom: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderBottom;
  /**
  * inner_horizontal block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#inner_horizontal QuicksightTemplate#inner_horizontal}
  */
  readonly innerHorizontal: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontal;
  /**
  * inner_vertical block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#inner_vertical QuicksightTemplate#inner_vertical}
  */
  readonly innerVertical: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVertical;
  /**
  * left block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#left QuicksightTemplate#left}
  */
  readonly left: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderLeft;
  /**
  * right block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#right QuicksightTemplate#right}
  */
  readonly right: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderRight;
  /**
  * top block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#top QuicksightTemplate#top}
  */
  readonly top: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderTop;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bottom: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderBottomToTerraform(struct!.bottom),
    inner_horizontal: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontalToTerraform(struct!.innerHorizontal),
    inner_vertical: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVerticalToTerraform(struct!.innerVertical),
    left: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderLeftToTerraform(struct!.left),
    right: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderRightToTerraform(struct!.right),
    top: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderTopToTerraform(struct!.top),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorder | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorder | undefined) {
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
  private _bottom = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderBottomOutputReference(this, "bottom");
  public get bottom() {
    return this._bottom;
  }
  public putBottom(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderBottom) {
    this._bottom.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bottomInput() {
    return this._bottom.internalValue;
  }

  // inner_horizontal - computed: false, optional: false, required: true
  private _innerHorizontal = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontalOutputReference(this, "inner_horizontal");
  public get innerHorizontal() {
    return this._innerHorizontal;
  }
  public putInnerHorizontal(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontal) {
    this._innerHorizontal.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get innerHorizontalInput() {
    return this._innerHorizontal.internalValue;
  }

  // inner_vertical - computed: false, optional: false, required: true
  private _innerVertical = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVerticalOutputReference(this, "inner_vertical");
  public get innerVertical() {
    return this._innerVertical;
  }
  public putInnerVertical(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVertical) {
    this._innerVertical.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get innerVerticalInput() {
    return this._innerVertical.internalValue;
  }

  // left - computed: false, optional: false, required: true
  private _left = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderLeftOutputReference(this, "left");
  public get left() {
    return this._left;
  }
  public putLeft(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderLeft) {
    this._left.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get leftInput() {
    return this._left.internalValue;
  }

  // right - computed: false, optional: false, required: true
  private _right = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderRightOutputReference(this, "right");
  public get right() {
    return this._right;
  }
  public putRight(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderRight) {
    this._right.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rightInput() {
    return this._right.internalValue;
  }

  // top - computed: false, optional: false, required: true
  private _top = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderTopOutputReference(this, "top");
  public get top() {
    return this._top;
  }
  public putTop(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderTop) {
    this._top.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topInput() {
    return this._top.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderUniformBorder {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderUniformBorderToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderUniformBorderOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderUniformBorder): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderUniformBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderUniformBorder | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderUniformBorder | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorder {
  /**
  * side_specific_border block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#side_specific_border QuicksightTemplate#side_specific_border}
  */
  readonly sideSpecificBorder?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorder;
  /**
  * uniform_border block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#uniform_border QuicksightTemplate#uniform_border}
  */
  readonly uniformBorder: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderUniformBorder;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    side_specific_border: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderToTerraform(struct!.sideSpecificBorder),
    uniform_border: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderUniformBorderToTerraform(struct!.uniformBorder),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorder | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorder | undefined) {
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
  private _sideSpecificBorder = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorderOutputReference(this, "side_specific_border");
  public get sideSpecificBorder() {
    return this._sideSpecificBorder;
  }
  public putSideSpecificBorder(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderSideSpecificBorder) {
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
  private _uniformBorder = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderUniformBorderOutputReference(this, "uniform_border");
  public get uniformBorder() {
    return this._uniformBorder;
  }
  public putUniformBorder(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderUniformBorder) {
    this._uniformBorder.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uniformBorderInput() {
    return this._uniformBorder.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleFontConfigurationFontSize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#relative QuicksightTemplate#relative}
  */
  readonly relative?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleFontConfigurationFontSizeToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleFontConfigurationFontSizeOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relative: cdktf.stringToTerraform(struct!.relative),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleFontConfigurationFontSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relative !== undefined) {
      hasAnyValues = true;
      internalValueResult.relative = this._relative;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleFontConfigurationFontSize | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleFontConfigurationFontWeight {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#name QuicksightTemplate#name}
  */
  readonly name?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleFontConfigurationFontWeightToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleFontConfigurationFontWeightOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleFontConfigurationFontWeightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleFontConfigurationFontWeight | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleFontConfiguration {
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
  readonly fontSize?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleFontConfigurationFontSize;
  /**
  * font_weight block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_weight QuicksightTemplate#font_weight}
  */
  readonly fontWeight?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleFontConfigurationFontWeight;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleFontConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleFontConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    font_color: cdktf.stringToTerraform(struct!.fontColor),
    font_decoration: cdktf.stringToTerraform(struct!.fontDecoration),
    font_style: cdktf.stringToTerraform(struct!.fontStyle),
    font_size: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleFontConfigurationFontSizeToTerraform(struct!.fontSize),
    font_weight: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleFontConfigurationFontWeightToTerraform(struct!.fontWeight),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleFontConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleFontConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleFontConfiguration | undefined) {
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
  private _fontSize = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleFontConfigurationFontSizeOutputReference(this, "font_size");
  public get fontSize() {
    return this._fontSize;
  }
  public putFontSize(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleFontConfigurationFontSize) {
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
  private _fontWeight = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleFontConfigurationFontWeightOutputReference(this, "font_weight");
  public get fontWeight() {
    return this._fontWeight;
  }
  public putFontWeight(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleFontConfigurationFontWeight) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyle {
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
  readonly border?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorder;
  /**
  * font_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_configuration QuicksightTemplate#font_configuration}
  */
  readonly fontConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleFontConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyle): any {
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
    border: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderToTerraform(struct!.border),
    font_configuration: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleFontConfigurationToTerraform(struct!.fontConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyle | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyle | undefined) {
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
  private _border = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorderOutputReference(this, "border");
  public get border() {
    return this._border;
  }
  public putBorder(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleBorder) {
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
  private _fontConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleFontConfigurationOutputReference(this, "font_configuration");
  public get fontConfiguration() {
    return this._fontConfiguration;
  }
  public putFontConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleFontConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderBottom {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderBottomToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderBottomOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderBottom): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderBottomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderBottom | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderBottom | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderInnerHorizontal {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderInnerHorizontalToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderInnerHorizontalOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderInnerHorizontal): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderInnerHorizontalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderInnerHorizontal | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderInnerHorizontal | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderInnerVertical {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderInnerVerticalToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderInnerVerticalOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderInnerVertical): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderInnerVerticalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderInnerVertical | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderInnerVertical | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderLeft {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderLeftToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderLeftOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderLeft): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderLeftOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderLeft | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderLeft | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderRight {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderRightToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderRightOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderRight): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderRightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderRight | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderRight | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderTop {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderTopToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderTopOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderTop): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderTopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderTop | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderTop | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorder {
  /**
  * bottom block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#bottom QuicksightTemplate#bottom}
  */
  readonly bottom: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderBottom;
  /**
  * inner_horizontal block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#inner_horizontal QuicksightTemplate#inner_horizontal}
  */
  readonly innerHorizontal: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderInnerHorizontal;
  /**
  * inner_vertical block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#inner_vertical QuicksightTemplate#inner_vertical}
  */
  readonly innerVertical: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderInnerVertical;
  /**
  * left block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#left QuicksightTemplate#left}
  */
  readonly left: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderLeft;
  /**
  * right block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#right QuicksightTemplate#right}
  */
  readonly right: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderRight;
  /**
  * top block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#top QuicksightTemplate#top}
  */
  readonly top: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderTop;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bottom: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderBottomToTerraform(struct!.bottom),
    inner_horizontal: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderInnerHorizontalToTerraform(struct!.innerHorizontal),
    inner_vertical: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderInnerVerticalToTerraform(struct!.innerVertical),
    left: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderLeftToTerraform(struct!.left),
    right: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderRightToTerraform(struct!.right),
    top: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderTopToTerraform(struct!.top),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorder | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorder | undefined) {
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
  private _bottom = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderBottomOutputReference(this, "bottom");
  public get bottom() {
    return this._bottom;
  }
  public putBottom(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderBottom) {
    this._bottom.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bottomInput() {
    return this._bottom.internalValue;
  }

  // inner_horizontal - computed: false, optional: false, required: true
  private _innerHorizontal = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderInnerHorizontalOutputReference(this, "inner_horizontal");
  public get innerHorizontal() {
    return this._innerHorizontal;
  }
  public putInnerHorizontal(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderInnerHorizontal) {
    this._innerHorizontal.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get innerHorizontalInput() {
    return this._innerHorizontal.internalValue;
  }

  // inner_vertical - computed: false, optional: false, required: true
  private _innerVertical = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderInnerVerticalOutputReference(this, "inner_vertical");
  public get innerVertical() {
    return this._innerVertical;
  }
  public putInnerVertical(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderInnerVertical) {
    this._innerVertical.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get innerVerticalInput() {
    return this._innerVertical.internalValue;
  }

  // left - computed: false, optional: false, required: true
  private _left = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderLeftOutputReference(this, "left");
  public get left() {
    return this._left;
  }
  public putLeft(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderLeft) {
    this._left.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get leftInput() {
    return this._left.internalValue;
  }

  // right - computed: false, optional: false, required: true
  private _right = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderRightOutputReference(this, "right");
  public get right() {
    return this._right;
  }
  public putRight(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderRight) {
    this._right.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rightInput() {
    return this._right.internalValue;
  }

  // top - computed: false, optional: false, required: true
  private _top = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderTopOutputReference(this, "top");
  public get top() {
    return this._top;
  }
  public putTop(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderTop) {
    this._top.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topInput() {
    return this._top.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderUniformBorder {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderUniformBorderToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderUniformBorderOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderUniformBorder): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderUniformBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderUniformBorder | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderUniformBorder | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorder {
  /**
  * side_specific_border block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#side_specific_border QuicksightTemplate#side_specific_border}
  */
  readonly sideSpecificBorder?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorder;
  /**
  * uniform_border block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#uniform_border QuicksightTemplate#uniform_border}
  */
  readonly uniformBorder: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderUniformBorder;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    side_specific_border: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderToTerraform(struct!.sideSpecificBorder),
    uniform_border: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderUniformBorderToTerraform(struct!.uniformBorder),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorder | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorder | undefined) {
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
  private _sideSpecificBorder = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorderOutputReference(this, "side_specific_border");
  public get sideSpecificBorder() {
    return this._sideSpecificBorder;
  }
  public putSideSpecificBorder(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderSideSpecificBorder) {
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
  private _uniformBorder = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderUniformBorderOutputReference(this, "uniform_border");
  public get uniformBorder() {
    return this._uniformBorder;
  }
  public putUniformBorder(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderUniformBorder) {
    this._uniformBorder.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uniformBorderInput() {
    return this._uniformBorder.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleFontConfigurationFontSize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#relative QuicksightTemplate#relative}
  */
  readonly relative?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleFontConfigurationFontSizeToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleFontConfigurationFontSizeOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relative: cdktf.stringToTerraform(struct!.relative),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleFontConfigurationFontSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relative !== undefined) {
      hasAnyValues = true;
      internalValueResult.relative = this._relative;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleFontConfigurationFontSize | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleFontConfigurationFontWeight {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#name QuicksightTemplate#name}
  */
  readonly name?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleFontConfigurationFontWeightToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleFontConfigurationFontWeightOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleFontConfigurationFontWeightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleFontConfigurationFontWeight | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleFontConfiguration {
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
  readonly fontSize?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleFontConfigurationFontSize;
  /**
  * font_weight block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_weight QuicksightTemplate#font_weight}
  */
  readonly fontWeight?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleFontConfigurationFontWeight;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleFontConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleFontConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    font_color: cdktf.stringToTerraform(struct!.fontColor),
    font_decoration: cdktf.stringToTerraform(struct!.fontDecoration),
    font_style: cdktf.stringToTerraform(struct!.fontStyle),
    font_size: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleFontConfigurationFontSizeToTerraform(struct!.fontSize),
    font_weight: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleFontConfigurationFontWeightToTerraform(struct!.fontWeight),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleFontConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleFontConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleFontConfiguration | undefined) {
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
  private _fontSize = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleFontConfigurationFontSizeOutputReference(this, "font_size");
  public get fontSize() {
    return this._fontSize;
  }
  public putFontSize(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleFontConfigurationFontSize) {
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
  private _fontWeight = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleFontConfigurationFontWeightOutputReference(this, "font_weight");
  public get fontWeight() {
    return this._fontWeight;
  }
  public putFontWeight(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleFontConfigurationFontWeight) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyle {
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
  readonly border?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorder;
  /**
  * font_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_configuration QuicksightTemplate#font_configuration}
  */
  readonly fontConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleFontConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyle): any {
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
    border: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderToTerraform(struct!.border),
    font_configuration: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleFontConfigurationToTerraform(struct!.fontConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyle | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyle | undefined) {
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
  private _border = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorderOutputReference(this, "border");
  public get border() {
    return this._border;
  }
  public putBorder(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleBorder) {
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
  private _fontConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleFontConfigurationOutputReference(this, "font_configuration");
  public get fontConfiguration() {
    return this._fontConfiguration;
  }
  public putFontConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleFontConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptions {
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
  readonly fieldLevelOptions?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsFieldLevelOptions[] | cdktf.IResolvable;
  /**
  * metric_header_cell_style block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#metric_header_cell_style QuicksightTemplate#metric_header_cell_style}
  */
  readonly metricHeaderCellStyle?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyle;
  /**
  * total_cell_style block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#total_cell_style QuicksightTemplate#total_cell_style}
  */
  readonly totalCellStyle?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyle;
  /**
  * value_cell_style block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#value_cell_style QuicksightTemplate#value_cell_style}
  */
  readonly valueCellStyle?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyle;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_label: cdktf.stringToTerraform(struct!.customLabel),
    field_level: cdktf.stringToTerraform(struct!.fieldLevel),
    totals_visibility: cdktf.stringToTerraform(struct!.totalsVisibility),
    field_level_options: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsFieldLevelOptionsToTerraform, true)(struct!.fieldLevelOptions),
    metric_header_cell_style: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleToTerraform(struct!.metricHeaderCellStyle),
    total_cell_style: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleToTerraform(struct!.totalCellStyle),
    value_cell_style: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleToTerraform(struct!.valueCellStyle),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptions | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptions | undefined) {
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
  private _fieldLevelOptions = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsFieldLevelOptionsList(this, "field_level_options", false);
  public get fieldLevelOptions() {
    return this._fieldLevelOptions;
  }
  public putFieldLevelOptions(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsFieldLevelOptions[] | cdktf.IResolvable) {
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
  private _metricHeaderCellStyle = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyleOutputReference(this, "metric_header_cell_style");
  public get metricHeaderCellStyle() {
    return this._metricHeaderCellStyle;
  }
  public putMetricHeaderCellStyle(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsMetricHeaderCellStyle) {
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
  private _totalCellStyle = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyleOutputReference(this, "total_cell_style");
  public get totalCellStyle() {
    return this._totalCellStyle;
  }
  public putTotalCellStyle(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsTotalCellStyle) {
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
  private _valueCellStyle = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyleOutputReference(this, "value_cell_style");
  public get valueCellStyle() {
    return this._valueCellStyle;
  }
  public putValueCellStyle(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsValueCellStyle) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderBottom {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderBottomToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderBottomOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderBottom): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderBottomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderBottom | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderBottom | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerHorizontal {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerHorizontalToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerHorizontalOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerHorizontal): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerHorizontalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerHorizontal | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerHorizontal | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerVertical {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerVerticalToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerVerticalOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerVertical): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerVerticalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerVertical | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerVertical | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderLeft {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderLeftToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderLeftOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderLeft): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderLeftOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderLeft | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderLeft | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderRight {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderRightToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderRightOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderRight): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderRightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderRight | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderRight | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderTop {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderTopToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderTopOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderTop): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderTopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderTop | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderTop | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorder {
  /**
  * bottom block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#bottom QuicksightTemplate#bottom}
  */
  readonly bottom: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderBottom;
  /**
  * inner_horizontal block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#inner_horizontal QuicksightTemplate#inner_horizontal}
  */
  readonly innerHorizontal: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerHorizontal;
  /**
  * inner_vertical block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#inner_vertical QuicksightTemplate#inner_vertical}
  */
  readonly innerVertical: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerVertical;
  /**
  * left block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#left QuicksightTemplate#left}
  */
  readonly left: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderLeft;
  /**
  * right block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#right QuicksightTemplate#right}
  */
  readonly right: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderRight;
  /**
  * top block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#top QuicksightTemplate#top}
  */
  readonly top: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderTop;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bottom: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderBottomToTerraform(struct!.bottom),
    inner_horizontal: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerHorizontalToTerraform(struct!.innerHorizontal),
    inner_vertical: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerVerticalToTerraform(struct!.innerVertical),
    left: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderLeftToTerraform(struct!.left),
    right: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderRightToTerraform(struct!.right),
    top: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderTopToTerraform(struct!.top),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorder | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorder | undefined) {
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
  private _bottom = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderBottomOutputReference(this, "bottom");
  public get bottom() {
    return this._bottom;
  }
  public putBottom(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderBottom) {
    this._bottom.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bottomInput() {
    return this._bottom.internalValue;
  }

  // inner_horizontal - computed: false, optional: false, required: true
  private _innerHorizontal = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerHorizontalOutputReference(this, "inner_horizontal");
  public get innerHorizontal() {
    return this._innerHorizontal;
  }
  public putInnerHorizontal(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerHorizontal) {
    this._innerHorizontal.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get innerHorizontalInput() {
    return this._innerHorizontal.internalValue;
  }

  // inner_vertical - computed: false, optional: false, required: true
  private _innerVertical = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerVerticalOutputReference(this, "inner_vertical");
  public get innerVertical() {
    return this._innerVertical;
  }
  public putInnerVertical(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderInnerVertical) {
    this._innerVertical.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get innerVerticalInput() {
    return this._innerVertical.internalValue;
  }

  // left - computed: false, optional: false, required: true
  private _left = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderLeftOutputReference(this, "left");
  public get left() {
    return this._left;
  }
  public putLeft(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderLeft) {
    this._left.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get leftInput() {
    return this._left.internalValue;
  }

  // right - computed: false, optional: false, required: true
  private _right = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderRightOutputReference(this, "right");
  public get right() {
    return this._right;
  }
  public putRight(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderRight) {
    this._right.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rightInput() {
    return this._right.internalValue;
  }

  // top - computed: false, optional: false, required: true
  private _top = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderTopOutputReference(this, "top");
  public get top() {
    return this._top;
  }
  public putTop(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderTop) {
    this._top.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topInput() {
    return this._top.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderUniformBorder {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderUniformBorderToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderUniformBorderOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderUniformBorder): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderUniformBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderUniformBorder | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderUniformBorder | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorder {
  /**
  * side_specific_border block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#side_specific_border QuicksightTemplate#side_specific_border}
  */
  readonly sideSpecificBorder?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorder;
  /**
  * uniform_border block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#uniform_border QuicksightTemplate#uniform_border}
  */
  readonly uniformBorder: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderUniformBorder;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    side_specific_border: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderToTerraform(struct!.sideSpecificBorder),
    uniform_border: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderUniformBorderToTerraform(struct!.uniformBorder),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorder | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorder | undefined) {
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
  private _sideSpecificBorder = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorderOutputReference(this, "side_specific_border");
  public get sideSpecificBorder() {
    return this._sideSpecificBorder;
  }
  public putSideSpecificBorder(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderSideSpecificBorder) {
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
  private _uniformBorder = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderUniformBorderOutputReference(this, "uniform_border");
  public get uniformBorder() {
    return this._uniformBorder;
  }
  public putUniformBorder(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderUniformBorder) {
    this._uniformBorder.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uniformBorderInput() {
    return this._uniformBorder.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleFontConfigurationFontSize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#relative QuicksightTemplate#relative}
  */
  readonly relative?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleFontConfigurationFontSizeToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleFontConfigurationFontSizeOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relative: cdktf.stringToTerraform(struct!.relative),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleFontConfigurationFontSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relative !== undefined) {
      hasAnyValues = true;
      internalValueResult.relative = this._relative;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleFontConfigurationFontSize | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleFontConfigurationFontWeight {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#name QuicksightTemplate#name}
  */
  readonly name?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleFontConfigurationFontWeightToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleFontConfigurationFontWeightOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleFontConfigurationFontWeightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleFontConfigurationFontWeight | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleFontConfiguration {
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
  readonly fontSize?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleFontConfigurationFontSize;
  /**
  * font_weight block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_weight QuicksightTemplate#font_weight}
  */
  readonly fontWeight?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleFontConfigurationFontWeight;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleFontConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleFontConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    font_color: cdktf.stringToTerraform(struct!.fontColor),
    font_decoration: cdktf.stringToTerraform(struct!.fontDecoration),
    font_style: cdktf.stringToTerraform(struct!.fontStyle),
    font_size: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleFontConfigurationFontSizeToTerraform(struct!.fontSize),
    font_weight: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleFontConfigurationFontWeightToTerraform(struct!.fontWeight),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleFontConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleFontConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleFontConfiguration | undefined) {
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
  private _fontSize = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleFontConfigurationFontSizeOutputReference(this, "font_size");
  public get fontSize() {
    return this._fontSize;
  }
  public putFontSize(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleFontConfigurationFontSize) {
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
  private _fontWeight = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleFontConfigurationFontWeightOutputReference(this, "font_weight");
  public get fontWeight() {
    return this._fontWeight;
  }
  public putFontWeight(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleFontConfigurationFontWeight) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyle {
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
  readonly border?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorder;
  /**
  * font_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_configuration QuicksightTemplate#font_configuration}
  */
  readonly fontConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleFontConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyle): any {
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
    border: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderToTerraform(struct!.border),
    font_configuration: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleFontConfigurationToTerraform(struct!.fontConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyle | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyle | undefined) {
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
  private _border = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorderOutputReference(this, "border");
  public get border() {
    return this._border;
  }
  public putBorder(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleBorder) {
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
  private _fontConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleFontConfigurationOutputReference(this, "font_configuration");
  public get fontConfiguration() {
    return this._fontConfiguration;
  }
  public putFontConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleFontConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderBottom {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderBottomToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderBottomOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderBottom): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderBottomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderBottom | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderBottom | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontal {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontalToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontalOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontal): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontal | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontal | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVertical {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVerticalToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVerticalOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVertical): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVerticalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVertical | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVertical | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderLeft {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderLeftToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderLeftOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderLeft): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderLeftOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderLeft | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderLeft | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderRight {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderRightToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderRightOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderRight): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderRightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderRight | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderRight | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderTop {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderTopToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderTopOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderTop): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderTopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderTop | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderTop | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorder {
  /**
  * bottom block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#bottom QuicksightTemplate#bottom}
  */
  readonly bottom: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderBottom;
  /**
  * inner_horizontal block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#inner_horizontal QuicksightTemplate#inner_horizontal}
  */
  readonly innerHorizontal: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontal;
  /**
  * inner_vertical block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#inner_vertical QuicksightTemplate#inner_vertical}
  */
  readonly innerVertical: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVertical;
  /**
  * left block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#left QuicksightTemplate#left}
  */
  readonly left: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderLeft;
  /**
  * right block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#right QuicksightTemplate#right}
  */
  readonly right: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderRight;
  /**
  * top block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#top QuicksightTemplate#top}
  */
  readonly top: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderTop;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bottom: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderBottomToTerraform(struct!.bottom),
    inner_horizontal: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontalToTerraform(struct!.innerHorizontal),
    inner_vertical: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVerticalToTerraform(struct!.innerVertical),
    left: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderLeftToTerraform(struct!.left),
    right: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderRightToTerraform(struct!.right),
    top: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderTopToTerraform(struct!.top),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorder | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorder | undefined) {
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
  private _bottom = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderBottomOutputReference(this, "bottom");
  public get bottom() {
    return this._bottom;
  }
  public putBottom(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderBottom) {
    this._bottom.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bottomInput() {
    return this._bottom.internalValue;
  }

  // inner_horizontal - computed: false, optional: false, required: true
  private _innerHorizontal = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontalOutputReference(this, "inner_horizontal");
  public get innerHorizontal() {
    return this._innerHorizontal;
  }
  public putInnerHorizontal(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerHorizontal) {
    this._innerHorizontal.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get innerHorizontalInput() {
    return this._innerHorizontal.internalValue;
  }

  // inner_vertical - computed: false, optional: false, required: true
  private _innerVertical = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVerticalOutputReference(this, "inner_vertical");
  public get innerVertical() {
    return this._innerVertical;
  }
  public putInnerVertical(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderInnerVertical) {
    this._innerVertical.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get innerVerticalInput() {
    return this._innerVertical.internalValue;
  }

  // left - computed: false, optional: false, required: true
  private _left = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderLeftOutputReference(this, "left");
  public get left() {
    return this._left;
  }
  public putLeft(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderLeft) {
    this._left.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get leftInput() {
    return this._left.internalValue;
  }

  // right - computed: false, optional: false, required: true
  private _right = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderRightOutputReference(this, "right");
  public get right() {
    return this._right;
  }
  public putRight(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderRight) {
    this._right.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rightInput() {
    return this._right.internalValue;
  }

  // top - computed: false, optional: false, required: true
  private _top = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderTopOutputReference(this, "top");
  public get top() {
    return this._top;
  }
  public putTop(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderTop) {
    this._top.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topInput() {
    return this._top.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderUniformBorder {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderUniformBorderToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderUniformBorderOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderUniformBorder): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderUniformBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderUniformBorder | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderUniformBorder | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorder {
  /**
  * side_specific_border block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#side_specific_border QuicksightTemplate#side_specific_border}
  */
  readonly sideSpecificBorder?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorder;
  /**
  * uniform_border block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#uniform_border QuicksightTemplate#uniform_border}
  */
  readonly uniformBorder: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderUniformBorder;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    side_specific_border: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderToTerraform(struct!.sideSpecificBorder),
    uniform_border: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderUniformBorderToTerraform(struct!.uniformBorder),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorder | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorder | undefined) {
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
  private _sideSpecificBorder = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorderOutputReference(this, "side_specific_border");
  public get sideSpecificBorder() {
    return this._sideSpecificBorder;
  }
  public putSideSpecificBorder(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderSideSpecificBorder) {
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
  private _uniformBorder = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderUniformBorderOutputReference(this, "uniform_border");
  public get uniformBorder() {
    return this._uniformBorder;
  }
  public putUniformBorder(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderUniformBorder) {
    this._uniformBorder.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uniformBorderInput() {
    return this._uniformBorder.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleFontConfigurationFontSize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#relative QuicksightTemplate#relative}
  */
  readonly relative?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleFontConfigurationFontSizeToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleFontConfigurationFontSizeOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relative: cdktf.stringToTerraform(struct!.relative),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleFontConfigurationFontSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relative !== undefined) {
      hasAnyValues = true;
      internalValueResult.relative = this._relative;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleFontConfigurationFontSize | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleFontConfigurationFontWeight {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#name QuicksightTemplate#name}
  */
  readonly name?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleFontConfigurationFontWeightToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleFontConfigurationFontWeightOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleFontConfigurationFontWeightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleFontConfigurationFontWeight | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleFontConfiguration {
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
  readonly fontSize?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleFontConfigurationFontSize;
  /**
  * font_weight block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_weight QuicksightTemplate#font_weight}
  */
  readonly fontWeight?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleFontConfigurationFontWeight;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleFontConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleFontConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    font_color: cdktf.stringToTerraform(struct!.fontColor),
    font_decoration: cdktf.stringToTerraform(struct!.fontDecoration),
    font_style: cdktf.stringToTerraform(struct!.fontStyle),
    font_size: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleFontConfigurationFontSizeToTerraform(struct!.fontSize),
    font_weight: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleFontConfigurationFontWeightToTerraform(struct!.fontWeight),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleFontConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleFontConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleFontConfiguration | undefined) {
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
  private _fontSize = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleFontConfigurationFontSizeOutputReference(this, "font_size");
  public get fontSize() {
    return this._fontSize;
  }
  public putFontSize(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleFontConfigurationFontSize) {
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
  private _fontWeight = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleFontConfigurationFontWeightOutputReference(this, "font_weight");
  public get fontWeight() {
    return this._fontWeight;
  }
  public putFontWeight(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleFontConfigurationFontWeight) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyle {
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
  readonly border?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorder;
  /**
  * font_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_configuration QuicksightTemplate#font_configuration}
  */
  readonly fontConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleFontConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyle): any {
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
    border: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderToTerraform(struct!.border),
    font_configuration: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleFontConfigurationToTerraform(struct!.fontConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyle | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyle | undefined) {
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
  private _border = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorderOutputReference(this, "border");
  public get border() {
    return this._border;
  }
  public putBorder(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleBorder) {
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
  private _fontConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleFontConfigurationOutputReference(this, "font_configuration");
  public get fontConfiguration() {
    return this._fontConfiguration;
  }
  public putFontConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleFontConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderBottom {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderBottomToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderBottomOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderBottom): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderBottomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderBottom | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderBottom | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderInnerHorizontal {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderInnerHorizontalToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderInnerHorizontalOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderInnerHorizontal): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderInnerHorizontalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderInnerHorizontal | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderInnerHorizontal | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderInnerVertical {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderInnerVerticalToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderInnerVerticalOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderInnerVertical): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderInnerVerticalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderInnerVertical | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderInnerVertical | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderLeft {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderLeftToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderLeftOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderLeft): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderLeftOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderLeft | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderLeft | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderRight {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderRightToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderRightOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderRight): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderRightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderRight | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderRight | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderTop {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderTopToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderTopOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderTop): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderTopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderTop | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderTop | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorder {
  /**
  * bottom block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#bottom QuicksightTemplate#bottom}
  */
  readonly bottom: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderBottom;
  /**
  * inner_horizontal block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#inner_horizontal QuicksightTemplate#inner_horizontal}
  */
  readonly innerHorizontal: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderInnerHorizontal;
  /**
  * inner_vertical block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#inner_vertical QuicksightTemplate#inner_vertical}
  */
  readonly innerVertical: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderInnerVertical;
  /**
  * left block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#left QuicksightTemplate#left}
  */
  readonly left: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderLeft;
  /**
  * right block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#right QuicksightTemplate#right}
  */
  readonly right: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderRight;
  /**
  * top block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#top QuicksightTemplate#top}
  */
  readonly top: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderTop;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bottom: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderBottomToTerraform(struct!.bottom),
    inner_horizontal: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderInnerHorizontalToTerraform(struct!.innerHorizontal),
    inner_vertical: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderInnerVerticalToTerraform(struct!.innerVertical),
    left: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderLeftToTerraform(struct!.left),
    right: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderRightToTerraform(struct!.right),
    top: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderTopToTerraform(struct!.top),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorder | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorder | undefined) {
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
  private _bottom = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderBottomOutputReference(this, "bottom");
  public get bottom() {
    return this._bottom;
  }
  public putBottom(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderBottom) {
    this._bottom.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bottomInput() {
    return this._bottom.internalValue;
  }

  // inner_horizontal - computed: false, optional: false, required: true
  private _innerHorizontal = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderInnerHorizontalOutputReference(this, "inner_horizontal");
  public get innerHorizontal() {
    return this._innerHorizontal;
  }
  public putInnerHorizontal(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderInnerHorizontal) {
    this._innerHorizontal.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get innerHorizontalInput() {
    return this._innerHorizontal.internalValue;
  }

  // inner_vertical - computed: false, optional: false, required: true
  private _innerVertical = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderInnerVerticalOutputReference(this, "inner_vertical");
  public get innerVertical() {
    return this._innerVertical;
  }
  public putInnerVertical(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderInnerVertical) {
    this._innerVertical.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get innerVerticalInput() {
    return this._innerVertical.internalValue;
  }

  // left - computed: false, optional: false, required: true
  private _left = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderLeftOutputReference(this, "left");
  public get left() {
    return this._left;
  }
  public putLeft(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderLeft) {
    this._left.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get leftInput() {
    return this._left.internalValue;
  }

  // right - computed: false, optional: false, required: true
  private _right = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderRightOutputReference(this, "right");
  public get right() {
    return this._right;
  }
  public putRight(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderRight) {
    this._right.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rightInput() {
    return this._right.internalValue;
  }

  // top - computed: false, optional: false, required: true
  private _top = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderTopOutputReference(this, "top");
  public get top() {
    return this._top;
  }
  public putTop(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderTop) {
    this._top.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topInput() {
    return this._top.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderUniformBorder {
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

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderUniformBorderToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderUniformBorderOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderUniformBorder): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderUniformBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderUniformBorder | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderUniformBorder | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorder {
  /**
  * side_specific_border block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#side_specific_border QuicksightTemplate#side_specific_border}
  */
  readonly sideSpecificBorder?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorder;
  /**
  * uniform_border block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#uniform_border QuicksightTemplate#uniform_border}
  */
  readonly uniformBorder: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderUniformBorder;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    side_specific_border: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderToTerraform(struct!.sideSpecificBorder),
    uniform_border: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderUniformBorderToTerraform(struct!.uniformBorder),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorder | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorder | undefined) {
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
  private _sideSpecificBorder = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorderOutputReference(this, "side_specific_border");
  public get sideSpecificBorder() {
    return this._sideSpecificBorder;
  }
  public putSideSpecificBorder(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderSideSpecificBorder) {
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
  private _uniformBorder = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderUniformBorderOutputReference(this, "uniform_border");
  public get uniformBorder() {
    return this._uniformBorder;
  }
  public putUniformBorder(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderUniformBorder) {
    this._uniformBorder.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uniformBorderInput() {
    return this._uniformBorder.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleFontConfigurationFontSize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#relative QuicksightTemplate#relative}
  */
  readonly relative?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleFontConfigurationFontSizeToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleFontConfigurationFontSizeOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relative: cdktf.stringToTerraform(struct!.relative),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleFontConfigurationFontSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relative !== undefined) {
      hasAnyValues = true;
      internalValueResult.relative = this._relative;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleFontConfigurationFontSize | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleFontConfigurationFontWeight {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#name QuicksightTemplate#name}
  */
  readonly name?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleFontConfigurationFontWeightToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleFontConfigurationFontWeightOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleFontConfigurationFontWeightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleFontConfigurationFontWeight | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleFontConfiguration {
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
  readonly fontSize?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleFontConfigurationFontSize;
  /**
  * font_weight block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_weight QuicksightTemplate#font_weight}
  */
  readonly fontWeight?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleFontConfigurationFontWeight;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleFontConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleFontConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    font_color: cdktf.stringToTerraform(struct!.fontColor),
    font_decoration: cdktf.stringToTerraform(struct!.fontDecoration),
    font_style: cdktf.stringToTerraform(struct!.fontStyle),
    font_size: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleFontConfigurationFontSizeToTerraform(struct!.fontSize),
    font_weight: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleFontConfigurationFontWeightToTerraform(struct!.fontWeight),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleFontConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleFontConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleFontConfiguration | undefined) {
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
  private _fontSize = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleFontConfigurationFontSizeOutputReference(this, "font_size");
  public get fontSize() {
    return this._fontSize;
  }
  public putFontSize(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleFontConfigurationFontSize) {
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
  private _fontWeight = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleFontConfigurationFontWeightOutputReference(this, "font_weight");
  public get fontWeight() {
    return this._fontWeight;
  }
  public putFontWeight(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleFontConfigurationFontWeight) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyle {
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
  readonly border?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorder;
  /**
  * font_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_configuration QuicksightTemplate#font_configuration}
  */
  readonly fontConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleFontConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyle): any {
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
    border: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderToTerraform(struct!.border),
    font_configuration: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleFontConfigurationToTerraform(struct!.fontConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyle | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyle | undefined) {
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
  private _border = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorderOutputReference(this, "border");
  public get border() {
    return this._border;
  }
  public putBorder(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleBorder) {
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
  private _fontConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleFontConfigurationOutputReference(this, "font_configuration");
  public get fontConfiguration() {
    return this._fontConfiguration;
  }
  public putFontConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleFontConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#custom_label QuicksightTemplate#custom_label}
  */
  readonly customLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#placement QuicksightTemplate#placement}
  */
  readonly placement?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#scroll_status QuicksightTemplate#scroll_status}
  */
  readonly scrollStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#totals_visibility QuicksightTemplate#totals_visibility}
  */
  readonly totalsVisibility?: string;
  /**
  * metric_header_cell_style block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#metric_header_cell_style QuicksightTemplate#metric_header_cell_style}
  */
  readonly metricHeaderCellStyle?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyle;
  /**
  * total_cell_style block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#total_cell_style QuicksightTemplate#total_cell_style}
  */
  readonly totalCellStyle?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyle;
  /**
  * value_cell_style block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#value_cell_style QuicksightTemplate#value_cell_style}
  */
  readonly valueCellStyle?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyle;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_label: cdktf.stringToTerraform(struct!.customLabel),
    placement: cdktf.stringToTerraform(struct!.placement),
    scroll_status: cdktf.stringToTerraform(struct!.scrollStatus),
    totals_visibility: cdktf.stringToTerraform(struct!.totalsVisibility),
    metric_header_cell_style: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleToTerraform(struct!.metricHeaderCellStyle),
    total_cell_style: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleToTerraform(struct!.totalCellStyle),
    value_cell_style: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleToTerraform(struct!.valueCellStyle),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.customLabel = this._customLabel;
    }
    if (this._placement !== undefined) {
      hasAnyValues = true;
      internalValueResult.placement = this._placement;
    }
    if (this._scrollStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.scrollStatus = this._scrollStatus;
    }
    if (this._totalsVisibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalsVisibility = this._totalsVisibility;
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customLabel = undefined;
      this._placement = undefined;
      this._scrollStatus = undefined;
      this._totalsVisibility = undefined;
      this._metricHeaderCellStyle.internalValue = undefined;
      this._totalCellStyle.internalValue = undefined;
      this._valueCellStyle.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customLabel = value.customLabel;
      this._placement = value.placement;
      this._scrollStatus = value.scrollStatus;
      this._totalsVisibility = value.totalsVisibility;
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

  // placement - computed: false, optional: true, required: false
  private _placement?: string; 
  public get placement() {
    return this.getStringAttribute('placement');
  }
  public set placement(value: string) {
    this._placement = value;
  }
  public resetPlacement() {
    this._placement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementInput() {
    return this._placement;
  }

  // scroll_status - computed: false, optional: true, required: false
  private _scrollStatus?: string; 
  public get scrollStatus() {
    return this.getStringAttribute('scroll_status');
  }
  public set scrollStatus(value: string) {
    this._scrollStatus = value;
  }
  public resetScrollStatus() {
    this._scrollStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scrollStatusInput() {
    return this._scrollStatus;
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

  // metric_header_cell_style - computed: false, optional: true, required: false
  private _metricHeaderCellStyle = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyleOutputReference(this, "metric_header_cell_style");
  public get metricHeaderCellStyle() {
    return this._metricHeaderCellStyle;
  }
  public putMetricHeaderCellStyle(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsMetricHeaderCellStyle) {
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
  private _totalCellStyle = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyleOutputReference(this, "total_cell_style");
  public get totalCellStyle() {
    return this._totalCellStyle;
  }
  public putTotalCellStyle(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsTotalCellStyle) {
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
  private _valueCellStyle = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyleOutputReference(this, "value_cell_style");
  public get valueCellStyle() {
    return this._valueCellStyle;
  }
  public putValueCellStyle(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsValueCellStyle) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptions {
  /**
  * column_subtotal_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_subtotal_options QuicksightTemplate#column_subtotal_options}
  */
  readonly columnSubtotalOptions?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptions;
  /**
  * column_total_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_total_options QuicksightTemplate#column_total_options}
  */
  readonly columnTotalOptions?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptions;
  /**
  * row_subtotal_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#row_subtotal_options QuicksightTemplate#row_subtotal_options}
  */
  readonly rowSubtotalOptions?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptions;
  /**
  * row_total_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#row_total_options QuicksightTemplate#row_total_options}
  */
  readonly rowTotalOptions?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptions;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_subtotal_options: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsToTerraform(struct!.columnSubtotalOptions),
    column_total_options: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsToTerraform(struct!.columnTotalOptions),
    row_subtotal_options: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsToTerraform(struct!.rowSubtotalOptions),
    row_total_options: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsToTerraform(struct!.rowTotalOptions),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnSubtotalOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnSubtotalOptions = this._columnSubtotalOptions?.internalValue;
    }
    if (this._columnTotalOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnTotalOptions = this._columnTotalOptions?.internalValue;
    }
    if (this._rowSubtotalOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rowSubtotalOptions = this._rowSubtotalOptions?.internalValue;
    }
    if (this._rowTotalOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rowTotalOptions = this._rowTotalOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._columnSubtotalOptions.internalValue = undefined;
      this._columnTotalOptions.internalValue = undefined;
      this._rowSubtotalOptions.internalValue = undefined;
      this._rowTotalOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._columnSubtotalOptions.internalValue = value.columnSubtotalOptions;
      this._columnTotalOptions.internalValue = value.columnTotalOptions;
      this._rowSubtotalOptions.internalValue = value.rowSubtotalOptions;
      this._rowTotalOptions.internalValue = value.rowTotalOptions;
    }
  }

  // column_subtotal_options - computed: false, optional: true, required: false
  private _columnSubtotalOptions = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptionsOutputReference(this, "column_subtotal_options");
  public get columnSubtotalOptions() {
    return this._columnSubtotalOptions;
  }
  public putColumnSubtotalOptions(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnSubtotalOptions) {
    this._columnSubtotalOptions.internalValue = value;
  }
  public resetColumnSubtotalOptions() {
    this._columnSubtotalOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnSubtotalOptionsInput() {
    return this._columnSubtotalOptions.internalValue;
  }

  // column_total_options - computed: false, optional: true, required: false
  private _columnTotalOptions = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptionsOutputReference(this, "column_total_options");
  public get columnTotalOptions() {
    return this._columnTotalOptions;
  }
  public putColumnTotalOptions(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsColumnTotalOptions) {
    this._columnTotalOptions.internalValue = value;
  }
  public resetColumnTotalOptions() {
    this._columnTotalOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnTotalOptionsInput() {
    return this._columnTotalOptions.internalValue;
  }

  // row_subtotal_options - computed: false, optional: true, required: false
  private _rowSubtotalOptions = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptionsOutputReference(this, "row_subtotal_options");
  public get rowSubtotalOptions() {
    return this._rowSubtotalOptions;
  }
  public putRowSubtotalOptions(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowSubtotalOptions) {
    this._rowSubtotalOptions.internalValue = value;
  }
  public resetRowSubtotalOptions() {
    this._rowSubtotalOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowSubtotalOptionsInput() {
    return this._rowSubtotalOptions.internalValue;
  }

  // row_total_options - computed: false, optional: true, required: false
  private _rowTotalOptions = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptionsOutputReference(this, "row_total_options");
  public get rowTotalOptions() {
    return this._rowTotalOptions;
  }
  public putRowTotalOptions(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsRowTotalOptions) {
    this._rowTotalOptions.internalValue = value;
  }
  public resetRowTotalOptions() {
    this._rowTotalOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowTotalOptionsInput() {
    return this._rowTotalOptions.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfiguration {
  /**
  * field_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_options QuicksightTemplate#field_options}
  */
  readonly fieldOptions?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldOptions;
  /**
  * field_wells block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_wells QuicksightTemplate#field_wells}
  */
  readonly fieldWells?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWells;
  /**
  * paginated_report_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#paginated_report_options QuicksightTemplate#paginated_report_options}
  */
  readonly paginatedReportOptions?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationPaginatedReportOptions;
  /**
  * sort_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#sort_configuration QuicksightTemplate#sort_configuration}
  */
  readonly sortConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfiguration;
  /**
  * table_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#table_options QuicksightTemplate#table_options}
  */
  readonly tableOptions?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptions;
  /**
  * total_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#total_options QuicksightTemplate#total_options}
  */
  readonly totalOptions?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptions;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_options: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldOptionsToTerraform(struct!.fieldOptions),
    field_wells: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsToTerraform(struct!.fieldWells),
    paginated_report_options: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationPaginatedReportOptionsToTerraform(struct!.paginatedReportOptions),
    sort_configuration: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationToTerraform(struct!.sortConfiguration),
    table_options: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsToTerraform(struct!.tableOptions),
    total_options: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsToTerraform(struct!.totalOptions),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldOptions = this._fieldOptions?.internalValue;
    }
    if (this._fieldWells?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldWells = this._fieldWells?.internalValue;
    }
    if (this._paginatedReportOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.paginatedReportOptions = this._paginatedReportOptions?.internalValue;
    }
    if (this._sortConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortConfiguration = this._sortConfiguration?.internalValue;
    }
    if (this._tableOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableOptions = this._tableOptions?.internalValue;
    }
    if (this._totalOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalOptions = this._totalOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fieldOptions.internalValue = undefined;
      this._fieldWells.internalValue = undefined;
      this._paginatedReportOptions.internalValue = undefined;
      this._sortConfiguration.internalValue = undefined;
      this._tableOptions.internalValue = undefined;
      this._totalOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fieldOptions.internalValue = value.fieldOptions;
      this._fieldWells.internalValue = value.fieldWells;
      this._paginatedReportOptions.internalValue = value.paginatedReportOptions;
      this._sortConfiguration.internalValue = value.sortConfiguration;
      this._tableOptions.internalValue = value.tableOptions;
      this._totalOptions.internalValue = value.totalOptions;
    }
  }

  // field_options - computed: false, optional: true, required: false
  private _fieldOptions = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldOptionsOutputReference(this, "field_options");
  public get fieldOptions() {
    return this._fieldOptions;
  }
  public putFieldOptions(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldOptions) {
    this._fieldOptions.internalValue = value;
  }
  public resetFieldOptions() {
    this._fieldOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldOptionsInput() {
    return this._fieldOptions.internalValue;
  }

  // field_wells - computed: false, optional: true, required: false
  private _fieldWells = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWellsOutputReference(this, "field_wells");
  public get fieldWells() {
    return this._fieldWells;
  }
  public putFieldWells(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationFieldWells) {
    this._fieldWells.internalValue = value;
  }
  public resetFieldWells() {
    this._fieldWells.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldWellsInput() {
    return this._fieldWells.internalValue;
  }

  // paginated_report_options - computed: false, optional: true, required: false
  private _paginatedReportOptions = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationPaginatedReportOptionsOutputReference(this, "paginated_report_options");
  public get paginatedReportOptions() {
    return this._paginatedReportOptions;
  }
  public putPaginatedReportOptions(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationPaginatedReportOptions) {
    this._paginatedReportOptions.internalValue = value;
  }
  public resetPaginatedReportOptions() {
    this._paginatedReportOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paginatedReportOptionsInput() {
    return this._paginatedReportOptions.internalValue;
  }

  // sort_configuration - computed: false, optional: true, required: false
  private _sortConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfigurationOutputReference(this, "sort_configuration");
  public get sortConfiguration() {
    return this._sortConfiguration;
  }
  public putSortConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationSortConfiguration) {
    this._sortConfiguration.internalValue = value;
  }
  public resetSortConfiguration() {
    this._sortConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortConfigurationInput() {
    return this._sortConfiguration.internalValue;
  }

  // table_options - computed: false, optional: true, required: false
  private _tableOptions = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptionsOutputReference(this, "table_options");
  public get tableOptions() {
    return this._tableOptions;
  }
  public putTableOptions(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTableOptions) {
    this._tableOptions.internalValue = value;
  }
  public resetTableOptions() {
    this._tableOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableOptionsInput() {
    return this._tableOptions.internalValue;
  }

  // total_options - computed: false, optional: true, required: false
  private _totalOptions = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptionsOutputReference(this, "total_options");
  public get totalOptions() {
    return this._totalOptions;
  }
  public putTotalOptions(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualChartConfigurationTotalOptions) {
    this._totalOptions.internalValue = value;
  }
  public resetTotalOptions() {
    this._totalOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalOptionsInput() {
    return this._totalOptions.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellScope {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#role QuicksightTemplate#role}
  */
  readonly role?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellScopeToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellScopeOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellScope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role: cdktf.stringToTerraform(struct!.role),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellScopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellScope | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellScope | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._role = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._role = value.role;
    }
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColorStops {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#color QuicksightTemplate#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_value QuicksightTemplate#data_value}
  */
  readonly dataValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#gradient_offset QuicksightTemplate#gradient_offset}
  */
  readonly gradientOffset: number;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColorStopsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColorStops | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    data_value: cdktf.numberToTerraform(struct!.dataValue),
    gradient_offset: cdktf.numberToTerraform(struct!.gradientOffset),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColorStopsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColorStops | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._dataValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataValue = this._dataValue;
    }
    if (this._gradientOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.gradientOffset = this._gradientOffset;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColorStops | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._dataValue = undefined;
      this._gradientOffset = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._dataValue = value.dataValue;
      this._gradientOffset = value.gradientOffset;
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

  // data_value - computed: false, optional: true, required: false
  private _dataValue?: number; 
  public get dataValue() {
    return this.getNumberAttribute('data_value');
  }
  public set dataValue(value: number) {
    this._dataValue = value;
  }
  public resetDataValue() {
    this._dataValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataValueInput() {
    return this._dataValue;
  }

  // gradient_offset - computed: false, optional: false, required: true
  private _gradientOffset?: number; 
  public get gradientOffset() {
    return this.getNumberAttribute('gradient_offset');
  }
  public set gradientOffset(value: number) {
    this._gradientOffset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gradientOffsetInput() {
    return this._gradientOffset;
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColorStopsList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColorStops[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColorStopsOutputReference {
    return new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColorStopsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColor {
  /**
  * stops block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#stops QuicksightTemplate#stops}
  */
  readonly stops?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColorStops[] | cdktf.IResolvable;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColorToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColorOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stops: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColorStopsToTerraform, true)(struct!.stops),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stops?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stops = this._stops?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._stops.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._stops.internalValue = value.stops;
    }
  }

  // stops - computed: false, optional: true, required: false
  private _stops = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColorStopsList(this, "stops", false);
  public get stops() {
    return this._stops;
  }
  public putStops(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColorStops[] | cdktf.IResolvable) {
    this._stops.internalValue = value;
  }
  public resetStops() {
    this._stops.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopsInput() {
    return this._stops.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradient {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#expression QuicksightTemplate#expression}
  */
  readonly expression: string;
  /**
  * color block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#color QuicksightTemplate#color}
  */
  readonly color: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColor;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    color: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColorToTerraform(struct!.color),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradient | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._color?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradient | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expression = undefined;
      this._color.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expression = value.expression;
      this._color.internalValue = value.color;
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

  // color - computed: false, optional: false, required: true
  private _color = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColorOutputReference(this, "color");
  public get color() {
    return this._color;
  }
  public putColor(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientColor) {
    this._color.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorSolid {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#color QuicksightTemplate#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#expression QuicksightTemplate#expression}
  */
  readonly expression: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorSolidToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorSolidOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorSolid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    expression: cdktf.stringToTerraform(struct!.expression),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorSolidOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorSolid | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorSolid | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._color = undefined;
      this._expression = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._color = value.color;
      this._expression = value.expression;
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
}
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColor {
  /**
  * gradient block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#gradient QuicksightTemplate#gradient}
  */
  readonly gradient?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradient;
  /**
  * solid block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#solid QuicksightTemplate#solid}
  */
  readonly solid?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorSolid;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gradient: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientToTerraform(struct!.gradient),
    solid: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorSolidToTerraform(struct!.solid),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gradient?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gradient = this._gradient?.internalValue;
    }
    if (this._solid?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.solid = this._solid?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gradient.internalValue = undefined;
      this._solid.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gradient.internalValue = value.gradient;
      this._solid.internalValue = value.solid;
    }
  }

  // gradient - computed: false, optional: true, required: false
  private _gradient = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradientOutputReference(this, "gradient");
  public get gradient() {
    return this._gradient;
  }
  public putGradient(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorGradient) {
    this._gradient.internalValue = value;
  }
  public resetGradient() {
    this._gradient.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gradientInput() {
    return this._gradient.internalValue;
  }

  // solid - computed: false, optional: true, required: false
  private _solid = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorSolidOutputReference(this, "solid");
  public get solid() {
    return this._solid;
  }
  public putSolid(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorSolid) {
    this._solid.internalValue = value;
  }
  public resetSolid() {
    this._solid.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get solidInput() {
    return this._solid.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionDisplayConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#icon_display_option QuicksightTemplate#icon_display_option}
  */
  readonly iconDisplayOption?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionDisplayConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionDisplayConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionDisplayConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    icon_display_option: cdktf.stringToTerraform(struct!.iconDisplayOption),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionDisplayConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionDisplayConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iconDisplayOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.iconDisplayOption = this._iconDisplayOption;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionDisplayConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._iconDisplayOption = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._iconDisplayOption = value.iconDisplayOption;
    }
  }

  // icon_display_option - computed: false, optional: true, required: false
  private _iconDisplayOption?: string; 
  public get iconDisplayOption() {
    return this.getStringAttribute('icon_display_option');
  }
  public set iconDisplayOption(value: string) {
    this._iconDisplayOption = value;
  }
  public resetIconDisplayOption() {
    this._iconDisplayOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconDisplayOptionInput() {
    return this._iconDisplayOption;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionIconOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#icon QuicksightTemplate#icon}
  */
  readonly icon?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#unicode_icon QuicksightTemplate#unicode_icon}
  */
  readonly unicodeIcon?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionIconOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionIconOptionsOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionIconOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    icon: cdktf.stringToTerraform(struct!.icon),
    unicode_icon: cdktf.stringToTerraform(struct!.unicodeIcon),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionIconOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionIconOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._icon !== undefined) {
      hasAnyValues = true;
      internalValueResult.icon = this._icon;
    }
    if (this._unicodeIcon !== undefined) {
      hasAnyValues = true;
      internalValueResult.unicodeIcon = this._unicodeIcon;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionIconOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._icon = undefined;
      this._unicodeIcon = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._icon = value.icon;
      this._unicodeIcon = value.unicodeIcon;
    }
  }

  // icon - computed: false, optional: true, required: false
  private _icon?: string; 
  public get icon() {
    return this.getStringAttribute('icon');
  }
  public set icon(value: string) {
    this._icon = value;
  }
  public resetIcon() {
    this._icon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconInput() {
    return this._icon;
  }

  // unicode_icon - computed: false, optional: true, required: false
  private _unicodeIcon?: string; 
  public get unicodeIcon() {
    return this.getStringAttribute('unicode_icon');
  }
  public set unicodeIcon(value: string) {
    this._unicodeIcon = value;
  }
  public resetUnicodeIcon() {
    this._unicodeIcon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unicodeIconInput() {
    return this._unicodeIcon;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#color QuicksightTemplate#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#expression QuicksightTemplate#expression}
  */
  readonly expression: string;
  /**
  * display_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#display_configuration QuicksightTemplate#display_configuration}
  */
  readonly displayConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionDisplayConfiguration;
  /**
  * icon_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#icon_options QuicksightTemplate#icon_options}
  */
  readonly iconOptions: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionIconOptions;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    expression: cdktf.stringToTerraform(struct!.expression),
    display_configuration: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionDisplayConfigurationToTerraform(struct!.displayConfiguration),
    icon_options: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionIconOptionsToTerraform(struct!.iconOptions),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._displayConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayConfiguration = this._displayConfiguration?.internalValue;
    }
    if (this._iconOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iconOptions = this._iconOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._color = undefined;
      this._expression = undefined;
      this._displayConfiguration.internalValue = undefined;
      this._iconOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._color = value.color;
      this._expression = value.expression;
      this._displayConfiguration.internalValue = value.displayConfiguration;
      this._iconOptions.internalValue = value.iconOptions;
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

  // display_configuration - computed: false, optional: true, required: false
  private _displayConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionDisplayConfigurationOutputReference(this, "display_configuration");
  public get displayConfiguration() {
    return this._displayConfiguration;
  }
  public putDisplayConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionDisplayConfiguration) {
    this._displayConfiguration.internalValue = value;
  }
  public resetDisplayConfiguration() {
    this._displayConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayConfigurationInput() {
    return this._displayConfiguration.internalValue;
  }

  // icon_options - computed: false, optional: false, required: true
  private _iconOptions = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionIconOptionsOutputReference(this, "icon_options");
  public get iconOptions() {
    return this._iconOptions;
  }
  public putIconOptions(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionIconOptions) {
    this._iconOptions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iconOptionsInput() {
    return this._iconOptions.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconIconSet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#expression QuicksightTemplate#expression}
  */
  readonly expression: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#icon_set_type QuicksightTemplate#icon_set_type}
  */
  readonly iconSetType?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconIconSetToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconIconSetOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconIconSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    icon_set_type: cdktf.stringToTerraform(struct!.iconSetType),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconIconSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconIconSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._iconSetType !== undefined) {
      hasAnyValues = true;
      internalValueResult.iconSetType = this._iconSetType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconIconSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expression = undefined;
      this._iconSetType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expression = value.expression;
      this._iconSetType = value.iconSetType;
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

  // icon_set_type - computed: false, optional: true, required: false
  private _iconSetType?: string; 
  public get iconSetType() {
    return this.getStringAttribute('icon_set_type');
  }
  public set iconSetType(value: string) {
    this._iconSetType = value;
  }
  public resetIconSetType() {
    this._iconSetType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconSetTypeInput() {
    return this._iconSetType;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIcon {
  /**
  * custom_condition block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#custom_condition QuicksightTemplate#custom_condition}
  */
  readonly customCondition?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomCondition;
  /**
  * icon_set block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#icon_set QuicksightTemplate#icon_set}
  */
  readonly iconSet?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconIconSet;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIcon): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_condition: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionToTerraform(struct!.customCondition),
    icon_set: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconIconSetToTerraform(struct!.iconSet),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIcon | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customCondition = this._customCondition?.internalValue;
    }
    if (this._iconSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iconSet = this._iconSet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIcon | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customCondition.internalValue = undefined;
      this._iconSet.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customCondition.internalValue = value.customCondition;
      this._iconSet.internalValue = value.iconSet;
    }
  }

  // custom_condition - computed: false, optional: true, required: false
  private _customCondition = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomConditionOutputReference(this, "custom_condition");
  public get customCondition() {
    return this._customCondition;
  }
  public putCustomCondition(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconCustomCondition) {
    this._customCondition.internalValue = value;
  }
  public resetCustomCondition() {
    this._customCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customConditionInput() {
    return this._customCondition.internalValue;
  }

  // icon_set - computed: false, optional: true, required: false
  private _iconSet = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconIconSetOutputReference(this, "icon_set");
  public get iconSet() {
    return this._iconSet;
  }
  public putIconSet(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconIconSet) {
    this._iconSet.internalValue = value;
  }
  public resetIconSet() {
    this._iconSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconSetInput() {
    return this._iconSet.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientColorStops {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#color QuicksightTemplate#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_value QuicksightTemplate#data_value}
  */
  readonly dataValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#gradient_offset QuicksightTemplate#gradient_offset}
  */
  readonly gradientOffset: number;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientColorStopsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientColorStops | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    data_value: cdktf.numberToTerraform(struct!.dataValue),
    gradient_offset: cdktf.numberToTerraform(struct!.gradientOffset),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientColorStopsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientColorStops | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._dataValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataValue = this._dataValue;
    }
    if (this._gradientOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.gradientOffset = this._gradientOffset;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientColorStops | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._dataValue = undefined;
      this._gradientOffset = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._dataValue = value.dataValue;
      this._gradientOffset = value.gradientOffset;
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

  // data_value - computed: false, optional: true, required: false
  private _dataValue?: number; 
  public get dataValue() {
    return this.getNumberAttribute('data_value');
  }
  public set dataValue(value: number) {
    this._dataValue = value;
  }
  public resetDataValue() {
    this._dataValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataValueInput() {
    return this._dataValue;
  }

  // gradient_offset - computed: false, optional: false, required: true
  private _gradientOffset?: number; 
  public get gradientOffset() {
    return this.getNumberAttribute('gradient_offset');
  }
  public set gradientOffset(value: number) {
    this._gradientOffset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gradientOffsetInput() {
    return this._gradientOffset;
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientColorStopsList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientColorStops[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientColorStopsOutputReference {
    return new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientColorStopsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientColor {
  /**
  * stops block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#stops QuicksightTemplate#stops}
  */
  readonly stops?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientColorStops[] | cdktf.IResolvable;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientColorToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientColorOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientColor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stops: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientColorStopsToTerraform, true)(struct!.stops),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientColorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientColor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stops?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stops = this._stops?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientColor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._stops.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._stops.internalValue = value.stops;
    }
  }

  // stops - computed: false, optional: true, required: false
  private _stops = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientColorStopsList(this, "stops", false);
  public get stops() {
    return this._stops;
  }
  public putStops(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientColorStops[] | cdktf.IResolvable) {
    this._stops.internalValue = value;
  }
  public resetStops() {
    this._stops.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopsInput() {
    return this._stops.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradient {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#expression QuicksightTemplate#expression}
  */
  readonly expression: string;
  /**
  * color block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#color QuicksightTemplate#color}
  */
  readonly color: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientColor;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    color: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientColorToTerraform(struct!.color),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradient | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._color?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradient | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expression = undefined;
      this._color.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expression = value.expression;
      this._color.internalValue = value.color;
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

  // color - computed: false, optional: false, required: true
  private _color = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientColorOutputReference(this, "color");
  public get color() {
    return this._color;
  }
  public putColor(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientColor) {
    this._color.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorSolid {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#color QuicksightTemplate#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#expression QuicksightTemplate#expression}
  */
  readonly expression: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorSolidToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorSolidOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorSolid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    expression: cdktf.stringToTerraform(struct!.expression),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorSolidOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorSolid | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorSolid | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._color = undefined;
      this._expression = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._color = value.color;
      this._expression = value.expression;
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
}
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColor {
  /**
  * gradient block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#gradient QuicksightTemplate#gradient}
  */
  readonly gradient?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradient;
  /**
  * solid block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#solid QuicksightTemplate#solid}
  */
  readonly solid?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorSolid;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gradient: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientToTerraform(struct!.gradient),
    solid: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorSolidToTerraform(struct!.solid),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gradient?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gradient = this._gradient?.internalValue;
    }
    if (this._solid?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.solid = this._solid?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gradient.internalValue = undefined;
      this._solid.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gradient.internalValue = value.gradient;
      this._solid.internalValue = value.solid;
    }
  }

  // gradient - computed: false, optional: true, required: false
  private _gradient = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradientOutputReference(this, "gradient");
  public get gradient() {
    return this._gradient;
  }
  public putGradient(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorGradient) {
    this._gradient.internalValue = value;
  }
  public resetGradient() {
    this._gradient.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gradientInput() {
    return this._gradient.internalValue;
  }

  // solid - computed: false, optional: true, required: false
  private _solid = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorSolidOutputReference(this, "solid");
  public get solid() {
    return this._solid;
  }
  public putSolid(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorSolid) {
    this._solid.internalValue = value;
  }
  public resetSolid() {
    this._solid.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get solidInput() {
    return this._solid.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormat {
  /**
  * background_color block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#background_color QuicksightTemplate#background_color}
  */
  readonly backgroundColor: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColor;
  /**
  * icon block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#icon QuicksightTemplate#icon}
  */
  readonly icon: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIcon;
  /**
  * text_color block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#text_color QuicksightTemplate#text_color}
  */
  readonly textColor: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColor;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    background_color: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorToTerraform(struct!.backgroundColor),
    icon: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconToTerraform(struct!.icon),
    text_color: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorToTerraform(struct!.textColor),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backgroundColor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backgroundColor = this._backgroundColor?.internalValue;
    }
    if (this._icon?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.icon = this._icon?.internalValue;
    }
    if (this._textColor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.textColor = this._textColor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backgroundColor.internalValue = undefined;
      this._icon.internalValue = undefined;
      this._textColor.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backgroundColor.internalValue = value.backgroundColor;
      this._icon.internalValue = value.icon;
      this._textColor.internalValue = value.textColor;
    }
  }

  // background_color - computed: false, optional: false, required: true
  private _backgroundColor = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColorOutputReference(this, "background_color");
  public get backgroundColor() {
    return this._backgroundColor;
  }
  public putBackgroundColor(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatBackgroundColor) {
    this._backgroundColor.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundColorInput() {
    return this._backgroundColor.internalValue;
  }

  // icon - computed: false, optional: false, required: true
  private _icon = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIconOutputReference(this, "icon");
  public get icon() {
    return this._icon;
  }
  public putIcon(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatIcon) {
    this._icon.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iconInput() {
    return this._icon.internalValue;
  }

  // text_color - computed: false, optional: false, required: true
  private _textColor = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColorOutputReference(this, "text_color");
  public get textColor() {
    return this._textColor;
  }
  public putTextColor(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatTextColor) {
    this._textColor.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textColorInput() {
    return this._textColor.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCell {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_id QuicksightTemplate#field_id}
  */
  readonly fieldId: string;
  /**
  * scope block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#scope QuicksightTemplate#scope}
  */
  readonly scope?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellScope;
  /**
  * text_format block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#text_format QuicksightTemplate#text_format}
  */
  readonly textFormat?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormat;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCell): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_id: cdktf.stringToTerraform(struct!.fieldId),
    scope: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellScopeToTerraform(struct!.scope),
    text_format: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatToTerraform(struct!.textFormat),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCell | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldId = this._fieldId;
    }
    if (this._scope?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope?.internalValue;
    }
    if (this._textFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.textFormat = this._textFormat?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCell | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fieldId = undefined;
      this._scope.internalValue = undefined;
      this._textFormat.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fieldId = value.fieldId;
      this._scope.internalValue = value.scope;
      this._textFormat.internalValue = value.textFormat;
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

  // scope - computed: false, optional: true, required: false
  private _scope = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellScopeOutputReference(this, "scope");
  public get scope() {
    return this._scope;
  }
  public putScope(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellScope) {
    this._scope.internalValue = value;
  }
  public resetScope() {
    this._scope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }

  // text_format - computed: false, optional: true, required: false
  private _textFormat = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormatOutputReference(this, "text_format");
  public get textFormat() {
    return this._textFormat;
  }
  public putTextFormat(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellTextFormat) {
    this._textFormat.internalValue = value;
  }
  public resetTextFormat() {
    this._textFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textFormatInput() {
    return this._textFormat.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptions {
  /**
  * cell block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#cell QuicksightTemplate#cell}
  */
  readonly cell?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCell;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cell: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellToTerraform(struct!.cell),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cell?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cell = this._cell?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cell.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cell.internalValue = value.cell;
    }
  }

  // cell - computed: false, optional: true, required: false
  private _cell = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCellOutputReference(this, "cell");
  public get cell() {
    return this._cell;
  }
  public putCell(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsCell) {
    this._cell.internalValue = value;
  }
  public resetCell() {
    this._cell.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cellInput() {
    return this._cell.internalValue;
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptions[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsOutputReference {
    return new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormatting {
  /**
  * conditional_formatting_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#conditional_formatting_options QuicksightTemplate#conditional_formatting_options}
  */
  readonly conditionalFormattingOptions?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptions[] | cdktf.IResolvable;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormatting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conditional_formatting_options: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsToTerraform, true)(struct!.conditionalFormattingOptions),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormatting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionalFormattingOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionalFormattingOptions = this._conditionalFormattingOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormatting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._conditionalFormattingOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._conditionalFormattingOptions.internalValue = value.conditionalFormattingOptions;
    }
  }

  // conditional_formatting_options - computed: false, optional: true, required: false
  private _conditionalFormattingOptions = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptionsList(this, "conditional_formatting_options", false);
  public get conditionalFormattingOptions() {
    return this._conditionalFormattingOptions;
  }
  public putConditionalFormattingOptions(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualConditionalFormattingConditionalFormattingOptions[] | cdktf.IResolvable) {
    this._conditionalFormattingOptions.internalValue = value;
  }
  public resetConditionalFormattingOptions() {
    this._conditionalFormattingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionalFormattingOptionsInput() {
    return this._conditionalFormattingOptions.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualSubtitleFormatText {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#plain_text QuicksightTemplate#plain_text}
  */
  readonly plainText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#rich_text QuicksightTemplate#rich_text}
  */
  readonly richText?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualSubtitleFormatTextToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualSubtitleFormatTextOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualSubtitleFormatText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    plain_text: cdktf.stringToTerraform(struct!.plainText),
    rich_text: cdktf.stringToTerraform(struct!.richText),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualSubtitleFormatTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualSubtitleFormatText | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualSubtitleFormatText | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualSubtitle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
  /**
  * format_text block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#format_text QuicksightTemplate#format_text}
  */
  readonly formatText?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualSubtitleFormatText;
}

export function quicksightTemplateDefinitionSheetsVisualsPivotTableVisualSubtitleToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualSubtitleOutputReference | QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualSubtitle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    visibility: cdktf.stringToTerraform(struct!.visibility),
    format_text: quicksightTemplateDefinitionSheetsVisualsPivotTableVisualSubtitleFormatTextToTerraform(struct!.formatText),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualSubtitleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualSubtitle | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualSubtitle | undefined) {
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
  private _formatText = new QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualSubtitleFormatTextOutputReference(this, "format_text");
  public get formatText() {
    return this._formatText;
  }
  public putFormatText(value: QuicksightTemplateDefinitionSheetsVisualsPivotTableVisualSubtitleFormatText) {
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
