/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import * as cdktf from 'cdktf';
export interface QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfigurationFreeFormCanvasSizeOptionsScreenCanvasSizeOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#optimized_view_port_width QuicksightTemplate#optimized_view_port_width}
  */
  readonly optimizedViewPortWidth: string;
}

export function quicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfigurationFreeFormCanvasSizeOptionsScreenCanvasSizeOptionsToTerraform(struct?: QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfigurationFreeFormCanvasSizeOptionsScreenCanvasSizeOptionsOutputReference | QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfigurationFreeFormCanvasSizeOptionsScreenCanvasSizeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    optimized_view_port_width: cdktf.stringToTerraform(struct!.optimizedViewPortWidth),
  }
}

export class QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfigurationFreeFormCanvasSizeOptionsScreenCanvasSizeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfigurationFreeFormCanvasSizeOptionsScreenCanvasSizeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optimizedViewPortWidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.optimizedViewPortWidth = this._optimizedViewPortWidth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfigurationFreeFormCanvasSizeOptionsScreenCanvasSizeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._optimizedViewPortWidth = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._optimizedViewPortWidth = value.optimizedViewPortWidth;
    }
  }

  // optimized_view_port_width - computed: false, optional: false, required: true
  private _optimizedViewPortWidth?: string; 
  public get optimizedViewPortWidth() {
    return this.getStringAttribute('optimized_view_port_width');
  }
  public set optimizedViewPortWidth(value: string) {
    this._optimizedViewPortWidth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get optimizedViewPortWidthInput() {
    return this._optimizedViewPortWidth;
  }
}
export interface QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfigurationFreeFormCanvasSizeOptions {
  /**
  * screen_canvas_size_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#screen_canvas_size_options QuicksightTemplate#screen_canvas_size_options}
  */
  readonly screenCanvasSizeOptions?: QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfigurationFreeFormCanvasSizeOptionsScreenCanvasSizeOptions;
}

export function quicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfigurationFreeFormCanvasSizeOptionsToTerraform(struct?: QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfigurationFreeFormCanvasSizeOptionsOutputReference | QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfigurationFreeFormCanvasSizeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    screen_canvas_size_options: quicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfigurationFreeFormCanvasSizeOptionsScreenCanvasSizeOptionsToTerraform(struct!.screenCanvasSizeOptions),
  }
}

export class QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfigurationFreeFormCanvasSizeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfigurationFreeFormCanvasSizeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._screenCanvasSizeOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.screenCanvasSizeOptions = this._screenCanvasSizeOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfigurationFreeFormCanvasSizeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._screenCanvasSizeOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._screenCanvasSizeOptions.internalValue = value.screenCanvasSizeOptions;
    }
  }

  // screen_canvas_size_options - computed: false, optional: true, required: false
  private _screenCanvasSizeOptions = new QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfigurationFreeFormCanvasSizeOptionsScreenCanvasSizeOptionsOutputReference(this, "screen_canvas_size_options");
  public get screenCanvasSizeOptions() {
    return this._screenCanvasSizeOptions;
  }
  public putScreenCanvasSizeOptions(value: QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfigurationFreeFormCanvasSizeOptionsScreenCanvasSizeOptions) {
    this._screenCanvasSizeOptions.internalValue = value;
  }
  public resetScreenCanvasSizeOptions() {
    this._screenCanvasSizeOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get screenCanvasSizeOptionsInput() {
    return this._screenCanvasSizeOptions.internalValue;
  }
}
export interface QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfigurationFreeForm {
  /**
  * canvas_size_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#canvas_size_options QuicksightTemplate#canvas_size_options}
  */
  readonly canvasSizeOptions: QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfigurationFreeFormCanvasSizeOptions;
}

export function quicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfigurationFreeFormToTerraform(struct?: QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfigurationFreeFormOutputReference | QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfigurationFreeForm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    canvas_size_options: quicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfigurationFreeFormCanvasSizeOptionsToTerraform(struct!.canvasSizeOptions),
  }
}

export class QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfigurationFreeFormOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfigurationFreeForm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._canvasSizeOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.canvasSizeOptions = this._canvasSizeOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfigurationFreeForm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._canvasSizeOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._canvasSizeOptions.internalValue = value.canvasSizeOptions;
    }
  }

  // canvas_size_options - computed: false, optional: false, required: true
  private _canvasSizeOptions = new QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfigurationFreeFormCanvasSizeOptionsOutputReference(this, "canvas_size_options");
  public get canvasSizeOptions() {
    return this._canvasSizeOptions;
  }
  public putCanvasSizeOptions(value: QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfigurationFreeFormCanvasSizeOptions) {
    this._canvasSizeOptions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get canvasSizeOptionsInput() {
    return this._canvasSizeOptions.internalValue;
  }
}
export interface QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfigurationGridCanvasSizeOptionsScreenCanvasSizeOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#optimized_view_port_width QuicksightTemplate#optimized_view_port_width}
  */
  readonly optimizedViewPortWidth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#resize_option QuicksightTemplate#resize_option}
  */
  readonly resizeOption: string;
}

export function quicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfigurationGridCanvasSizeOptionsScreenCanvasSizeOptionsToTerraform(struct?: QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfigurationGridCanvasSizeOptionsScreenCanvasSizeOptionsOutputReference | QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfigurationGridCanvasSizeOptionsScreenCanvasSizeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    optimized_view_port_width: cdktf.stringToTerraform(struct!.optimizedViewPortWidth),
    resize_option: cdktf.stringToTerraform(struct!.resizeOption),
  }
}

export class QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfigurationGridCanvasSizeOptionsScreenCanvasSizeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfigurationGridCanvasSizeOptionsScreenCanvasSizeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optimizedViewPortWidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.optimizedViewPortWidth = this._optimizedViewPortWidth;
    }
    if (this._resizeOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.resizeOption = this._resizeOption;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfigurationGridCanvasSizeOptionsScreenCanvasSizeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._optimizedViewPortWidth = undefined;
      this._resizeOption = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._optimizedViewPortWidth = value.optimizedViewPortWidth;
      this._resizeOption = value.resizeOption;
    }
  }

  // optimized_view_port_width - computed: false, optional: true, required: false
  private _optimizedViewPortWidth?: string; 
  public get optimizedViewPortWidth() {
    return this.getStringAttribute('optimized_view_port_width');
  }
  public set optimizedViewPortWidth(value: string) {
    this._optimizedViewPortWidth = value;
  }
  public resetOptimizedViewPortWidth() {
    this._optimizedViewPortWidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optimizedViewPortWidthInput() {
    return this._optimizedViewPortWidth;
  }

  // resize_option - computed: false, optional: false, required: true
  private _resizeOption?: string; 
  public get resizeOption() {
    return this.getStringAttribute('resize_option');
  }
  public set resizeOption(value: string) {
    this._resizeOption = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resizeOptionInput() {
    return this._resizeOption;
  }
}
export interface QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfigurationGridCanvasSizeOptions {
  /**
  * screen_canvas_size_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#screen_canvas_size_options QuicksightTemplate#screen_canvas_size_options}
  */
  readonly screenCanvasSizeOptions?: QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfigurationGridCanvasSizeOptionsScreenCanvasSizeOptions;
}

export function quicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfigurationGridCanvasSizeOptionsToTerraform(struct?: QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfigurationGridCanvasSizeOptionsOutputReference | QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfigurationGridCanvasSizeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    screen_canvas_size_options: quicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfigurationGridCanvasSizeOptionsScreenCanvasSizeOptionsToTerraform(struct!.screenCanvasSizeOptions),
  }
}

export class QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfigurationGridCanvasSizeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfigurationGridCanvasSizeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._screenCanvasSizeOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.screenCanvasSizeOptions = this._screenCanvasSizeOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfigurationGridCanvasSizeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._screenCanvasSizeOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._screenCanvasSizeOptions.internalValue = value.screenCanvasSizeOptions;
    }
  }

  // screen_canvas_size_options - computed: false, optional: true, required: false
  private _screenCanvasSizeOptions = new QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfigurationGridCanvasSizeOptionsScreenCanvasSizeOptionsOutputReference(this, "screen_canvas_size_options");
  public get screenCanvasSizeOptions() {
    return this._screenCanvasSizeOptions;
  }
  public putScreenCanvasSizeOptions(value: QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfigurationGridCanvasSizeOptionsScreenCanvasSizeOptions) {
    this._screenCanvasSizeOptions.internalValue = value;
  }
  public resetScreenCanvasSizeOptions() {
    this._screenCanvasSizeOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get screenCanvasSizeOptionsInput() {
    return this._screenCanvasSizeOptions.internalValue;
  }
}
export interface QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfigurationGrid {
  /**
  * canvas_size_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#canvas_size_options QuicksightTemplate#canvas_size_options}
  */
  readonly canvasSizeOptions: QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfigurationGridCanvasSizeOptions;
}

export function quicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfigurationGridToTerraform(struct?: QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfigurationGridOutputReference | QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfigurationGrid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    canvas_size_options: quicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfigurationGridCanvasSizeOptionsToTerraform(struct!.canvasSizeOptions),
  }
}

export class QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfigurationGridOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfigurationGrid | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._canvasSizeOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.canvasSizeOptions = this._canvasSizeOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfigurationGrid | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._canvasSizeOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._canvasSizeOptions.internalValue = value.canvasSizeOptions;
    }
  }

  // canvas_size_options - computed: false, optional: false, required: true
  private _canvasSizeOptions = new QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfigurationGridCanvasSizeOptionsOutputReference(this, "canvas_size_options");
  public get canvasSizeOptions() {
    return this._canvasSizeOptions;
  }
  public putCanvasSizeOptions(value: QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfigurationGridCanvasSizeOptions) {
    this._canvasSizeOptions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get canvasSizeOptionsInput() {
    return this._canvasSizeOptions.internalValue;
  }
}
export interface QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfiguration {
  /**
  * free_form block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#free_form QuicksightTemplate#free_form}
  */
  readonly freeForm?: QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfigurationFreeForm;
  /**
  * grid block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#grid QuicksightTemplate#grid}
  */
  readonly grid?: QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfigurationGrid;
}

export function quicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfigurationToTerraform(struct?: QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfigurationOutputReference | QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    free_form: quicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfigurationFreeFormToTerraform(struct!.freeForm),
    grid: quicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfigurationGridToTerraform(struct!.grid),
  }
}

export class QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._freeForm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.freeForm = this._freeForm?.internalValue;
    }
    if (this._grid?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grid = this._grid?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._freeForm.internalValue = undefined;
      this._grid.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._freeForm.internalValue = value.freeForm;
      this._grid.internalValue = value.grid;
    }
  }

  // free_form - computed: false, optional: true, required: false
  private _freeForm = new QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfigurationFreeFormOutputReference(this, "free_form");
  public get freeForm() {
    return this._freeForm;
  }
  public putFreeForm(value: QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfigurationFreeForm) {
    this._freeForm.internalValue = value;
  }
  public resetFreeForm() {
    this._freeForm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeFormInput() {
    return this._freeForm.internalValue;
  }

  // grid - computed: false, optional: true, required: false
  private _grid = new QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfigurationGridOutputReference(this, "grid");
  public get grid() {
    return this._grid;
  }
  public putGrid(value: QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfigurationGrid) {
    this._grid.internalValue = value;
  }
  public resetGrid() {
    this._grid.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gridInput() {
    return this._grid.internalValue;
  }
}
export interface QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationPaginatedLayoutConfigurationSectionBasedCanvasSizeOptionsPaperCanvasSizeOptionsPaperMargin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#bottom QuicksightTemplate#bottom}
  */
  readonly bottom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#left QuicksightTemplate#left}
  */
  readonly left?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#right QuicksightTemplate#right}
  */
  readonly right?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#top QuicksightTemplate#top}
  */
  readonly top?: string;
}

export function quicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationPaginatedLayoutConfigurationSectionBasedCanvasSizeOptionsPaperCanvasSizeOptionsPaperMarginToTerraform(struct?: QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationPaginatedLayoutConfigurationSectionBasedCanvasSizeOptionsPaperCanvasSizeOptionsPaperMarginOutputReference | QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationPaginatedLayoutConfigurationSectionBasedCanvasSizeOptionsPaperCanvasSizeOptionsPaperMargin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bottom: cdktf.stringToTerraform(struct!.bottom),
    left: cdktf.stringToTerraform(struct!.left),
    right: cdktf.stringToTerraform(struct!.right),
    top: cdktf.stringToTerraform(struct!.top),
  }
}

export class QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationPaginatedLayoutConfigurationSectionBasedCanvasSizeOptionsPaperCanvasSizeOptionsPaperMarginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationPaginatedLayoutConfigurationSectionBasedCanvasSizeOptionsPaperCanvasSizeOptionsPaperMargin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bottom !== undefined) {
      hasAnyValues = true;
      internalValueResult.bottom = this._bottom;
    }
    if (this._left !== undefined) {
      hasAnyValues = true;
      internalValueResult.left = this._left;
    }
    if (this._right !== undefined) {
      hasAnyValues = true;
      internalValueResult.right = this._right;
    }
    if (this._top !== undefined) {
      hasAnyValues = true;
      internalValueResult.top = this._top;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationPaginatedLayoutConfigurationSectionBasedCanvasSizeOptionsPaperCanvasSizeOptionsPaperMargin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bottom = undefined;
      this._left = undefined;
      this._right = undefined;
      this._top = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bottom = value.bottom;
      this._left = value.left;
      this._right = value.right;
      this._top = value.top;
    }
  }

  // bottom - computed: false, optional: true, required: false
  private _bottom?: string; 
  public get bottom() {
    return this.getStringAttribute('bottom');
  }
  public set bottom(value: string) {
    this._bottom = value;
  }
  public resetBottom() {
    this._bottom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bottomInput() {
    return this._bottom;
  }

  // left - computed: false, optional: true, required: false
  private _left?: string; 
  public get left() {
    return this.getStringAttribute('left');
  }
  public set left(value: string) {
    this._left = value;
  }
  public resetLeft() {
    this._left = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leftInput() {
    return this._left;
  }

  // right - computed: false, optional: true, required: false
  private _right?: string; 
  public get right() {
    return this.getStringAttribute('right');
  }
  public set right(value: string) {
    this._right = value;
  }
  public resetRight() {
    this._right = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rightInput() {
    return this._right;
  }

  // top - computed: false, optional: true, required: false
  private _top?: string; 
  public get top() {
    return this.getStringAttribute('top');
  }
  public set top(value: string) {
    this._top = value;
  }
  public resetTop() {
    this._top = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topInput() {
    return this._top;
  }
}
export interface QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationPaginatedLayoutConfigurationSectionBasedCanvasSizeOptionsPaperCanvasSizeOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#paper_orientation QuicksightTemplate#paper_orientation}
  */
  readonly paperOrientation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#paper_size QuicksightTemplate#paper_size}
  */
  readonly paperSize?: string;
  /**
  * paper_margin block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#paper_margin QuicksightTemplate#paper_margin}
  */
  readonly paperMargin?: QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationPaginatedLayoutConfigurationSectionBasedCanvasSizeOptionsPaperCanvasSizeOptionsPaperMargin;
}

export function quicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationPaginatedLayoutConfigurationSectionBasedCanvasSizeOptionsPaperCanvasSizeOptionsToTerraform(struct?: QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationPaginatedLayoutConfigurationSectionBasedCanvasSizeOptionsPaperCanvasSizeOptionsOutputReference | QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationPaginatedLayoutConfigurationSectionBasedCanvasSizeOptionsPaperCanvasSizeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    paper_orientation: cdktf.stringToTerraform(struct!.paperOrientation),
    paper_size: cdktf.stringToTerraform(struct!.paperSize),
    paper_margin: quicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationPaginatedLayoutConfigurationSectionBasedCanvasSizeOptionsPaperCanvasSizeOptionsPaperMarginToTerraform(struct!.paperMargin),
  }
}

export class QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationPaginatedLayoutConfigurationSectionBasedCanvasSizeOptionsPaperCanvasSizeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationPaginatedLayoutConfigurationSectionBasedCanvasSizeOptionsPaperCanvasSizeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._paperOrientation !== undefined) {
      hasAnyValues = true;
      internalValueResult.paperOrientation = this._paperOrientation;
    }
    if (this._paperSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.paperSize = this._paperSize;
    }
    if (this._paperMargin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.paperMargin = this._paperMargin?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationPaginatedLayoutConfigurationSectionBasedCanvasSizeOptionsPaperCanvasSizeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._paperOrientation = undefined;
      this._paperSize = undefined;
      this._paperMargin.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._paperOrientation = value.paperOrientation;
      this._paperSize = value.paperSize;
      this._paperMargin.internalValue = value.paperMargin;
    }
  }

  // paper_orientation - computed: false, optional: true, required: false
  private _paperOrientation?: string; 
  public get paperOrientation() {
    return this.getStringAttribute('paper_orientation');
  }
  public set paperOrientation(value: string) {
    this._paperOrientation = value;
  }
  public resetPaperOrientation() {
    this._paperOrientation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paperOrientationInput() {
    return this._paperOrientation;
  }

  // paper_size - computed: false, optional: true, required: false
  private _paperSize?: string; 
  public get paperSize() {
    return this.getStringAttribute('paper_size');
  }
  public set paperSize(value: string) {
    this._paperSize = value;
  }
  public resetPaperSize() {
    this._paperSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paperSizeInput() {
    return this._paperSize;
  }

  // paper_margin - computed: false, optional: true, required: false
  private _paperMargin = new QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationPaginatedLayoutConfigurationSectionBasedCanvasSizeOptionsPaperCanvasSizeOptionsPaperMarginOutputReference(this, "paper_margin");
  public get paperMargin() {
    return this._paperMargin;
  }
  public putPaperMargin(value: QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationPaginatedLayoutConfigurationSectionBasedCanvasSizeOptionsPaperCanvasSizeOptionsPaperMargin) {
    this._paperMargin.internalValue = value;
  }
  public resetPaperMargin() {
    this._paperMargin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paperMarginInput() {
    return this._paperMargin.internalValue;
  }
}
export interface QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationPaginatedLayoutConfigurationSectionBasedCanvasSizeOptions {
  /**
  * paper_canvas_size_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#paper_canvas_size_options QuicksightTemplate#paper_canvas_size_options}
  */
  readonly paperCanvasSizeOptions?: QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationPaginatedLayoutConfigurationSectionBasedCanvasSizeOptionsPaperCanvasSizeOptions;
}

export function quicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationPaginatedLayoutConfigurationSectionBasedCanvasSizeOptionsToTerraform(struct?: QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationPaginatedLayoutConfigurationSectionBasedCanvasSizeOptionsOutputReference | QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationPaginatedLayoutConfigurationSectionBasedCanvasSizeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    paper_canvas_size_options: quicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationPaginatedLayoutConfigurationSectionBasedCanvasSizeOptionsPaperCanvasSizeOptionsToTerraform(struct!.paperCanvasSizeOptions),
  }
}

export class QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationPaginatedLayoutConfigurationSectionBasedCanvasSizeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationPaginatedLayoutConfigurationSectionBasedCanvasSizeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._paperCanvasSizeOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.paperCanvasSizeOptions = this._paperCanvasSizeOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationPaginatedLayoutConfigurationSectionBasedCanvasSizeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._paperCanvasSizeOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._paperCanvasSizeOptions.internalValue = value.paperCanvasSizeOptions;
    }
  }

  // paper_canvas_size_options - computed: false, optional: true, required: false
  private _paperCanvasSizeOptions = new QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationPaginatedLayoutConfigurationSectionBasedCanvasSizeOptionsPaperCanvasSizeOptionsOutputReference(this, "paper_canvas_size_options");
  public get paperCanvasSizeOptions() {
    return this._paperCanvasSizeOptions;
  }
  public putPaperCanvasSizeOptions(value: QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationPaginatedLayoutConfigurationSectionBasedCanvasSizeOptionsPaperCanvasSizeOptions) {
    this._paperCanvasSizeOptions.internalValue = value;
  }
  public resetPaperCanvasSizeOptions() {
    this._paperCanvasSizeOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paperCanvasSizeOptionsInput() {
    return this._paperCanvasSizeOptions.internalValue;
  }
}
export interface QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationPaginatedLayoutConfigurationSectionBased {
  /**
  * canvas_size_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#canvas_size_options QuicksightTemplate#canvas_size_options}
  */
  readonly canvasSizeOptions: QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationPaginatedLayoutConfigurationSectionBasedCanvasSizeOptions;
}

export function quicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationPaginatedLayoutConfigurationSectionBasedToTerraform(struct?: QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationPaginatedLayoutConfigurationSectionBasedOutputReference | QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationPaginatedLayoutConfigurationSectionBased): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    canvas_size_options: quicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationPaginatedLayoutConfigurationSectionBasedCanvasSizeOptionsToTerraform(struct!.canvasSizeOptions),
  }
}

export class QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationPaginatedLayoutConfigurationSectionBasedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationPaginatedLayoutConfigurationSectionBased | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._canvasSizeOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.canvasSizeOptions = this._canvasSizeOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationPaginatedLayoutConfigurationSectionBased | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._canvasSizeOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._canvasSizeOptions.internalValue = value.canvasSizeOptions;
    }
  }

  // canvas_size_options - computed: false, optional: false, required: true
  private _canvasSizeOptions = new QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationPaginatedLayoutConfigurationSectionBasedCanvasSizeOptionsOutputReference(this, "canvas_size_options");
  public get canvasSizeOptions() {
    return this._canvasSizeOptions;
  }
  public putCanvasSizeOptions(value: QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationPaginatedLayoutConfigurationSectionBasedCanvasSizeOptions) {
    this._canvasSizeOptions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get canvasSizeOptionsInput() {
    return this._canvasSizeOptions.internalValue;
  }
}
export interface QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationPaginatedLayoutConfiguration {
  /**
  * section_based block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#section_based QuicksightTemplate#section_based}
  */
  readonly sectionBased?: QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationPaginatedLayoutConfigurationSectionBased;
}

export function quicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationPaginatedLayoutConfigurationToTerraform(struct?: QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationPaginatedLayoutConfigurationOutputReference | QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationPaginatedLayoutConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    section_based: quicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationPaginatedLayoutConfigurationSectionBasedToTerraform(struct!.sectionBased),
  }
}

export class QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationPaginatedLayoutConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationPaginatedLayoutConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sectionBased?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sectionBased = this._sectionBased?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationPaginatedLayoutConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sectionBased.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sectionBased.internalValue = value.sectionBased;
    }
  }

  // section_based - computed: false, optional: true, required: false
  private _sectionBased = new QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationPaginatedLayoutConfigurationSectionBasedOutputReference(this, "section_based");
  public get sectionBased() {
    return this._sectionBased;
  }
  public putSectionBased(value: QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationPaginatedLayoutConfigurationSectionBased) {
    this._sectionBased.internalValue = value;
  }
  public resetSectionBased() {
    this._sectionBased.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sectionBasedInput() {
    return this._sectionBased.internalValue;
  }
}
export interface QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#sheet_content_type QuicksightTemplate#sheet_content_type}
  */
  readonly sheetContentType?: string;
  /**
  * interactive_layout_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#interactive_layout_configuration QuicksightTemplate#interactive_layout_configuration}
  */
  readonly interactiveLayoutConfiguration?: QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfiguration;
  /**
  * paginated_layout_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#paginated_layout_configuration QuicksightTemplate#paginated_layout_configuration}
  */
  readonly paginatedLayoutConfiguration?: QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationPaginatedLayoutConfiguration;
}

export function quicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationToTerraform(struct?: QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationOutputReference | QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sheet_content_type: cdktf.stringToTerraform(struct!.sheetContentType),
    interactive_layout_configuration: quicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfigurationToTerraform(struct!.interactiveLayoutConfiguration),
    paginated_layout_configuration: quicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationPaginatedLayoutConfigurationToTerraform(struct!.paginatedLayoutConfiguration),
  }
}

export class QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sheetContentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sheetContentType = this._sheetContentType;
    }
    if (this._interactiveLayoutConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interactiveLayoutConfiguration = this._interactiveLayoutConfiguration?.internalValue;
    }
    if (this._paginatedLayoutConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.paginatedLayoutConfiguration = this._paginatedLayoutConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sheetContentType = undefined;
      this._interactiveLayoutConfiguration.internalValue = undefined;
      this._paginatedLayoutConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sheetContentType = value.sheetContentType;
      this._interactiveLayoutConfiguration.internalValue = value.interactiveLayoutConfiguration;
      this._paginatedLayoutConfiguration.internalValue = value.paginatedLayoutConfiguration;
    }
  }

  // sheet_content_type - computed: false, optional: true, required: false
  private _sheetContentType?: string; 
  public get sheetContentType() {
    return this.getStringAttribute('sheet_content_type');
  }
  public set sheetContentType(value: string) {
    this._sheetContentType = value;
  }
  public resetSheetContentType() {
    this._sheetContentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sheetContentTypeInput() {
    return this._sheetContentType;
  }

  // interactive_layout_configuration - computed: false, optional: true, required: false
  private _interactiveLayoutConfiguration = new QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfigurationOutputReference(this, "interactive_layout_configuration");
  public get interactiveLayoutConfiguration() {
    return this._interactiveLayoutConfiguration;
  }
  public putInteractiveLayoutConfiguration(value: QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationInteractiveLayoutConfiguration) {
    this._interactiveLayoutConfiguration.internalValue = value;
  }
  public resetInteractiveLayoutConfiguration() {
    this._interactiveLayoutConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interactiveLayoutConfigurationInput() {
    return this._interactiveLayoutConfiguration.internalValue;
  }

  // paginated_layout_configuration - computed: false, optional: true, required: false
  private _paginatedLayoutConfiguration = new QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationPaginatedLayoutConfigurationOutputReference(this, "paginated_layout_configuration");
  public get paginatedLayoutConfiguration() {
    return this._paginatedLayoutConfiguration;
  }
  public putPaginatedLayoutConfiguration(value: QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationPaginatedLayoutConfiguration) {
    this._paginatedLayoutConfiguration.internalValue = value;
  }
  public resetPaginatedLayoutConfiguration() {
    this._paginatedLayoutConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paginatedLayoutConfigurationInput() {
    return this._paginatedLayoutConfiguration.internalValue;
  }
}
export interface QuicksightTemplateDefinitionAnalysisDefaults {
  /**
  * default_new_sheet_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#default_new_sheet_configuration QuicksightTemplate#default_new_sheet_configuration}
  */
  readonly defaultNewSheetConfiguration: QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfiguration;
}

export function quicksightTemplateDefinitionAnalysisDefaultsToTerraform(struct?: QuicksightTemplateDefinitionAnalysisDefaultsOutputReference | QuicksightTemplateDefinitionAnalysisDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_new_sheet_configuration: quicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationToTerraform(struct!.defaultNewSheetConfiguration),
  }
}

export class QuicksightTemplateDefinitionAnalysisDefaultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionAnalysisDefaults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultNewSheetConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultNewSheetConfiguration = this._defaultNewSheetConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionAnalysisDefaults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultNewSheetConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultNewSheetConfiguration.internalValue = value.defaultNewSheetConfiguration;
    }
  }

  // default_new_sheet_configuration - computed: false, optional: false, required: true
  private _defaultNewSheetConfiguration = new QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfigurationOutputReference(this, "default_new_sheet_configuration");
  public get defaultNewSheetConfiguration() {
    return this._defaultNewSheetConfiguration;
  }
  public putDefaultNewSheetConfiguration(value: QuicksightTemplateDefinitionAnalysisDefaultsDefaultNewSheetConfiguration) {
    this._defaultNewSheetConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultNewSheetConfigurationInput() {
    return this._defaultNewSheetConfiguration.internalValue;
  }
}
export interface QuicksightTemplateDefinitionCalculatedFields {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#expression QuicksightTemplate#expression}
  */
  readonly expression: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#name QuicksightTemplate#name}
  */
  readonly name: string;
}

export function quicksightTemplateDefinitionCalculatedFieldsToTerraform(struct?: QuicksightTemplateDefinitionCalculatedFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
    expression: cdktf.stringToTerraform(struct!.expression),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class QuicksightTemplateDefinitionCalculatedFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionCalculatedFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSetIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSetIdentifier = this._dataSetIdentifier;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionCalculatedFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataSetIdentifier = undefined;
      this._expression = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataSetIdentifier = value.dataSetIdentifier;
      this._expression = value.expression;
      this._name = value.name;
    }
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
}

export class QuicksightTemplateDefinitionCalculatedFieldsList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionCalculatedFields[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionCalculatedFieldsOutputReference {
    return new QuicksightTemplateDefinitionCalculatedFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionColumnConfigurationsColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionColumnConfigurationsColumnToTerraform(struct?: QuicksightTemplateDefinitionColumnConfigurationsColumnOutputReference | QuicksightTemplateDefinitionColumnConfigurationsColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionColumnConfigurationsColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionColumnConfigurationsColumn | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionColumnConfigurationsColumn | undefined) {
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
export interface QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNullValueFormatConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_string QuicksightTemplate#null_string}
  */
  readonly nullString: string;
}

export function quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNullValueFormatConfigurationOutputReference | QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_string: cdktf.stringToTerraform(struct!.nullString),
  }
}

export class QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullString !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullString = this._nullString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNullValueFormatConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_places QuicksightTemplate#decimal_places}
  */
  readonly decimalPlaces: number;
}

export function quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference | QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_places: cdktf.numberToTerraform(struct!.decimalPlaces),
  }
}

export class QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decimalPlaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.decimalPlaces = this._decimalPlaces;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#display_mode QuicksightTemplate#display_mode}
  */
  readonly displayMode: string;
}

export function quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference | QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_mode: cdktf.stringToTerraform(struct!.displayMode),
  }
}

export class QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayMode = this._displayMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_string QuicksightTemplate#null_string}
  */
  readonly nullString: string;
}

export function quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference | QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_string: cdktf.stringToTerraform(struct!.nullString),
  }
}

export class QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullString !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullString = this._nullString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#symbol QuicksightTemplate#symbol}
  */
  readonly symbol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference | QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    symbol: cdktf.stringToTerraform(struct!.symbol),
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
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
export interface QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_separator QuicksightTemplate#decimal_separator}
  */
  readonly decimalSeparator?: string;
  /**
  * thousands_separator block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#thousands_separator QuicksightTemplate#thousands_separator}
  */
  readonly thousandsSeparator?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator;
}

export function quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference | QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_separator: cdktf.stringToTerraform(struct!.decimalSeparator),
    thousands_separator: quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct!.thousandsSeparator),
  }
}

export class QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration | undefined) {
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
  private _thousandsSeparator = new QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this, "thousands_separator");
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
  public putThousandsSeparator(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator) {
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
export interface QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration {
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
  readonly decimalPlacesConfiguration?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration;
  /**
  * negative_value_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#negative_value_configuration QuicksightTemplate#negative_value_configuration}
  */
  readonly negativeValueConfiguration?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration;
  /**
  * null_value_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_value_format_configuration QuicksightTemplate#null_value_format_configuration}
  */
  readonly nullValueFormatConfiguration?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration;
  /**
  * separator_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#separator_configuration QuicksightTemplate#separator_configuration}
  */
  readonly separatorConfiguration?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration;
}

export function quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference | QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number_scale: cdktf.stringToTerraform(struct!.numberScale),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    suffix: cdktf.stringToTerraform(struct!.suffix),
    symbol: cdktf.stringToTerraform(struct!.symbol),
    decimal_places_configuration: quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct!.decimalPlacesConfiguration),
    negative_value_configuration: quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct!.negativeValueConfiguration),
    null_value_format_configuration: quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct!.nullValueFormatConfiguration),
    separator_configuration: quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct!.separatorConfiguration),
  }
}

export class QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration | undefined) {
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
  private _decimalPlacesConfiguration = new QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this, "decimal_places_configuration");
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }
  public putDecimalPlacesConfiguration(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration) {
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
  private _negativeValueConfiguration = new QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this, "negative_value_configuration");
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }
  public putNegativeValueConfiguration(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration) {
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
  private _nullValueFormatConfiguration = new QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this, "null_value_format_configuration");
  public get nullValueFormatConfiguration() {
    return this._nullValueFormatConfiguration;
  }
  public putNullValueFormatConfiguration(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration) {
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
  private _separatorConfiguration = new QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference(this, "separator_configuration");
  public get separatorConfiguration() {
    return this._separatorConfiguration;
  }
  public putSeparatorConfiguration(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration) {
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
export interface QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_places QuicksightTemplate#decimal_places}
  */
  readonly decimalPlaces: number;
}

export function quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference | QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_places: cdktf.numberToTerraform(struct!.decimalPlaces),
  }
}

export class QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decimalPlaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.decimalPlaces = this._decimalPlaces;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#display_mode QuicksightTemplate#display_mode}
  */
  readonly displayMode: string;
}

export function quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference | QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_mode: cdktf.stringToTerraform(struct!.displayMode),
  }
}

export class QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayMode = this._displayMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_string QuicksightTemplate#null_string}
  */
  readonly nullString: string;
}

export function quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference | QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_string: cdktf.stringToTerraform(struct!.nullString),
  }
}

export class QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullString !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullString = this._nullString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#symbol QuicksightTemplate#symbol}
  */
  readonly symbol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference | QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    symbol: cdktf.stringToTerraform(struct!.symbol),
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
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
export interface QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_separator QuicksightTemplate#decimal_separator}
  */
  readonly decimalSeparator?: string;
  /**
  * thousands_separator block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#thousands_separator QuicksightTemplate#thousands_separator}
  */
  readonly thousandsSeparator?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator;
}

export function quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference | QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_separator: cdktf.stringToTerraform(struct!.decimalSeparator),
    thousands_separator: quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct!.thousandsSeparator),
  }
}

export class QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration | undefined) {
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
  private _thousandsSeparator = new QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this, "thousands_separator");
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
  public putThousandsSeparator(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator) {
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
export interface QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration {
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
  readonly decimalPlacesConfiguration?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration;
  /**
  * negative_value_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#negative_value_configuration QuicksightTemplate#negative_value_configuration}
  */
  readonly negativeValueConfiguration?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration;
  /**
  * null_value_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_value_format_configuration QuicksightTemplate#null_value_format_configuration}
  */
  readonly nullValueFormatConfiguration?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration;
  /**
  * separator_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#separator_configuration QuicksightTemplate#separator_configuration}
  */
  readonly separatorConfiguration?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration;
}

export function quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationOutputReference | QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number_scale: cdktf.stringToTerraform(struct!.numberScale),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    suffix: cdktf.stringToTerraform(struct!.suffix),
    decimal_places_configuration: quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct!.decimalPlacesConfiguration),
    negative_value_configuration: quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct!.negativeValueConfiguration),
    null_value_format_configuration: quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct!.nullValueFormatConfiguration),
    separator_configuration: quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct!.separatorConfiguration),
  }
}

export class QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration | undefined) {
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
  private _decimalPlacesConfiguration = new QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this, "decimal_places_configuration");
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }
  public putDecimalPlacesConfiguration(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration) {
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
  private _negativeValueConfiguration = new QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this, "negative_value_configuration");
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }
  public putNegativeValueConfiguration(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration) {
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
  private _nullValueFormatConfiguration = new QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this, "null_value_format_configuration");
  public get nullValueFormatConfiguration() {
    return this._nullValueFormatConfiguration;
  }
  public putNullValueFormatConfiguration(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration) {
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
  private _separatorConfiguration = new QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference(this, "separator_configuration");
  public get separatorConfiguration() {
    return this._separatorConfiguration;
  }
  public putSeparatorConfiguration(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration) {
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
export interface QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_places QuicksightTemplate#decimal_places}
  */
  readonly decimalPlaces: number;
}

export function quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference | QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_places: cdktf.numberToTerraform(struct!.decimalPlaces),
  }
}

export class QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decimalPlaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.decimalPlaces = this._decimalPlaces;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#display_mode QuicksightTemplate#display_mode}
  */
  readonly displayMode: string;
}

export function quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference | QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_mode: cdktf.stringToTerraform(struct!.displayMode),
  }
}

export class QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayMode = this._displayMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_string QuicksightTemplate#null_string}
  */
  readonly nullString: string;
}

export function quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference | QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_string: cdktf.stringToTerraform(struct!.nullString),
  }
}

export class QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullString !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullString = this._nullString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#symbol QuicksightTemplate#symbol}
  */
  readonly symbol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference | QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    symbol: cdktf.stringToTerraform(struct!.symbol),
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
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
export interface QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_separator QuicksightTemplate#decimal_separator}
  */
  readonly decimalSeparator?: string;
  /**
  * thousands_separator block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#thousands_separator QuicksightTemplate#thousands_separator}
  */
  readonly thousandsSeparator?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator;
}

export function quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference | QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_separator: cdktf.stringToTerraform(struct!.decimalSeparator),
    thousands_separator: quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct!.thousandsSeparator),
  }
}

export class QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration | undefined) {
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
  private _thousandsSeparator = new QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this, "thousands_separator");
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
  public putThousandsSeparator(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator) {
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
export interface QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration {
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
  readonly decimalPlacesConfiguration?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration;
  /**
  * negative_value_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#negative_value_configuration QuicksightTemplate#negative_value_configuration}
  */
  readonly negativeValueConfiguration?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration;
  /**
  * null_value_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_value_format_configuration QuicksightTemplate#null_value_format_configuration}
  */
  readonly nullValueFormatConfiguration?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration;
  /**
  * separator_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#separator_configuration QuicksightTemplate#separator_configuration}
  */
  readonly separatorConfiguration?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration;
}

export function quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationOutputReference | QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
    suffix: cdktf.stringToTerraform(struct!.suffix),
    decimal_places_configuration: quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct!.decimalPlacesConfiguration),
    negative_value_configuration: quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct!.negativeValueConfiguration),
    null_value_format_configuration: quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct!.nullValueFormatConfiguration),
    separator_configuration: quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct!.separatorConfiguration),
  }
}

export class QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration | undefined) {
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
  private _decimalPlacesConfiguration = new QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this, "decimal_places_configuration");
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }
  public putDecimalPlacesConfiguration(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration) {
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
  private _negativeValueConfiguration = new QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this, "negative_value_configuration");
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }
  public putNegativeValueConfiguration(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration) {
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
  private _nullValueFormatConfiguration = new QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this, "null_value_format_configuration");
  public get nullValueFormatConfiguration() {
    return this._nullValueFormatConfiguration;
  }
  public putNullValueFormatConfiguration(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration) {
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
  private _separatorConfiguration = new QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference(this, "separator_configuration");
  public get separatorConfiguration() {
    return this._separatorConfiguration;
  }
  public putSeparatorConfiguration(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration) {
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
export interface QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfiguration {
  /**
  * currency_display_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#currency_display_format_configuration QuicksightTemplate#currency_display_format_configuration}
  */
  readonly currencyDisplayFormatConfiguration?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration;
  /**
  * number_display_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#number_display_format_configuration QuicksightTemplate#number_display_format_configuration}
  */
  readonly numberDisplayFormatConfiguration?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration;
  /**
  * percentage_display_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#percentage_display_format_configuration QuicksightTemplate#percentage_display_format_configuration}
  */
  readonly percentageDisplayFormatConfiguration?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration;
}

export function quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationOutputReference | QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    currency_display_format_configuration: quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationToTerraform(struct!.currencyDisplayFormatConfiguration),
    number_display_format_configuration: quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationToTerraform(struct!.numberDisplayFormatConfiguration),
    percentage_display_format_configuration: quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationToTerraform(struct!.percentageDisplayFormatConfiguration),
  }
}

export class QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfiguration | undefined) {
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
  private _currencyDisplayFormatConfiguration = new QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference(this, "currency_display_format_configuration");
  public get currencyDisplayFormatConfiguration() {
    return this._currencyDisplayFormatConfiguration;
  }
  public putCurrencyDisplayFormatConfiguration(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration) {
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
  private _numberDisplayFormatConfiguration = new QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationOutputReference(this, "number_display_format_configuration");
  public get numberDisplayFormatConfiguration() {
    return this._numberDisplayFormatConfiguration;
  }
  public putNumberDisplayFormatConfiguration(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration) {
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
  private _percentageDisplayFormatConfiguration = new QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationOutputReference(this, "percentage_display_format_configuration");
  public get percentageDisplayFormatConfiguration() {
    return this._percentageDisplayFormatConfiguration;
  }
  public putPercentageDisplayFormatConfiguration(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration) {
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
export interface QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#date_time_format QuicksightTemplate#date_time_format}
  */
  readonly dateTimeFormat?: string;
  /**
  * null_value_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_value_format_configuration QuicksightTemplate#null_value_format_configuration}
  */
  readonly nullValueFormatConfiguration?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNullValueFormatConfiguration;
  /**
  * numeric_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#numeric_format_configuration QuicksightTemplate#numeric_format_configuration}
  */
  readonly numericFormatConfiguration?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfiguration;
}

export function quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationOutputReference | QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    date_time_format: cdktf.stringToTerraform(struct!.dateTimeFormat),
    null_value_format_configuration: quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNullValueFormatConfigurationToTerraform(struct!.nullValueFormatConfiguration),
    numeric_format_configuration: quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationToTerraform(struct!.numericFormatConfiguration),
  }
}

export class QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfiguration | undefined) {
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
  private _nullValueFormatConfiguration = new QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNullValueFormatConfigurationOutputReference(this, "null_value_format_configuration");
  public get nullValueFormatConfiguration() {
    return this._nullValueFormatConfiguration;
  }
  public putNullValueFormatConfiguration(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNullValueFormatConfiguration) {
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
  private _numericFormatConfiguration = new QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfigurationOutputReference(this, "numeric_format_configuration");
  public get numericFormatConfiguration() {
    return this._numericFormatConfiguration;
  }
  public putNumericFormatConfiguration(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationNumericFormatConfiguration) {
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
export interface QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_places QuicksightTemplate#decimal_places}
  */
  readonly decimalPlaces: number;
}

export function quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference | QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_places: cdktf.numberToTerraform(struct!.decimalPlaces),
  }
}

export class QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decimalPlaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.decimalPlaces = this._decimalPlaces;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#display_mode QuicksightTemplate#display_mode}
  */
  readonly displayMode: string;
}

export function quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference | QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_mode: cdktf.stringToTerraform(struct!.displayMode),
  }
}

export class QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayMode = this._displayMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_string QuicksightTemplate#null_string}
  */
  readonly nullString: string;
}

export function quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference | QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_string: cdktf.stringToTerraform(struct!.nullString),
  }
}

export class QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullString !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullString = this._nullString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#symbol QuicksightTemplate#symbol}
  */
  readonly symbol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference | QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    symbol: cdktf.stringToTerraform(struct!.symbol),
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
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
export interface QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_separator QuicksightTemplate#decimal_separator}
  */
  readonly decimalSeparator?: string;
  /**
  * thousands_separator block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#thousands_separator QuicksightTemplate#thousands_separator}
  */
  readonly thousandsSeparator?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator;
}

export function quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference | QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_separator: cdktf.stringToTerraform(struct!.decimalSeparator),
    thousands_separator: quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct!.thousandsSeparator),
  }
}

export class QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration | undefined) {
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
  private _thousandsSeparator = new QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this, "thousands_separator");
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
  public putThousandsSeparator(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator) {
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
export interface QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration {
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
  readonly decimalPlacesConfiguration?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration;
  /**
  * negative_value_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#negative_value_configuration QuicksightTemplate#negative_value_configuration}
  */
  readonly negativeValueConfiguration?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration;
  /**
  * null_value_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_value_format_configuration QuicksightTemplate#null_value_format_configuration}
  */
  readonly nullValueFormatConfiguration?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration;
  /**
  * separator_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#separator_configuration QuicksightTemplate#separator_configuration}
  */
  readonly separatorConfiguration?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration;
}

export function quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference | QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number_scale: cdktf.stringToTerraform(struct!.numberScale),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    suffix: cdktf.stringToTerraform(struct!.suffix),
    symbol: cdktf.stringToTerraform(struct!.symbol),
    decimal_places_configuration: quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct!.decimalPlacesConfiguration),
    negative_value_configuration: quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct!.negativeValueConfiguration),
    null_value_format_configuration: quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct!.nullValueFormatConfiguration),
    separator_configuration: quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct!.separatorConfiguration),
  }
}

export class QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration | undefined) {
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
  private _decimalPlacesConfiguration = new QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this, "decimal_places_configuration");
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }
  public putDecimalPlacesConfiguration(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration) {
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
  private _negativeValueConfiguration = new QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this, "negative_value_configuration");
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }
  public putNegativeValueConfiguration(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration) {
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
  private _nullValueFormatConfiguration = new QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this, "null_value_format_configuration");
  public get nullValueFormatConfiguration() {
    return this._nullValueFormatConfiguration;
  }
  public putNullValueFormatConfiguration(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration) {
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
  private _separatorConfiguration = new QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference(this, "separator_configuration");
  public get separatorConfiguration() {
    return this._separatorConfiguration;
  }
  public putSeparatorConfiguration(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration) {
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
export interface QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_places QuicksightTemplate#decimal_places}
  */
  readonly decimalPlaces: number;
}

export function quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference | QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_places: cdktf.numberToTerraform(struct!.decimalPlaces),
  }
}

export class QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decimalPlaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.decimalPlaces = this._decimalPlaces;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#display_mode QuicksightTemplate#display_mode}
  */
  readonly displayMode: string;
}

export function quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference | QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_mode: cdktf.stringToTerraform(struct!.displayMode),
  }
}

export class QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayMode = this._displayMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_string QuicksightTemplate#null_string}
  */
  readonly nullString: string;
}

export function quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference | QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_string: cdktf.stringToTerraform(struct!.nullString),
  }
}

export class QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullString !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullString = this._nullString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#symbol QuicksightTemplate#symbol}
  */
  readonly symbol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference | QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    symbol: cdktf.stringToTerraform(struct!.symbol),
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
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
export interface QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_separator QuicksightTemplate#decimal_separator}
  */
  readonly decimalSeparator?: string;
  /**
  * thousands_separator block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#thousands_separator QuicksightTemplate#thousands_separator}
  */
  readonly thousandsSeparator?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator;
}

export function quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference | QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_separator: cdktf.stringToTerraform(struct!.decimalSeparator),
    thousands_separator: quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct!.thousandsSeparator),
  }
}

export class QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration | undefined) {
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
  private _thousandsSeparator = new QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this, "thousands_separator");
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
  public putThousandsSeparator(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator) {
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
export interface QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration {
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
  readonly decimalPlacesConfiguration?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration;
  /**
  * negative_value_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#negative_value_configuration QuicksightTemplate#negative_value_configuration}
  */
  readonly negativeValueConfiguration?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration;
  /**
  * null_value_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_value_format_configuration QuicksightTemplate#null_value_format_configuration}
  */
  readonly nullValueFormatConfiguration?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration;
  /**
  * separator_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#separator_configuration QuicksightTemplate#separator_configuration}
  */
  readonly separatorConfiguration?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration;
}

export function quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationOutputReference | QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number_scale: cdktf.stringToTerraform(struct!.numberScale),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    suffix: cdktf.stringToTerraform(struct!.suffix),
    decimal_places_configuration: quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct!.decimalPlacesConfiguration),
    negative_value_configuration: quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct!.negativeValueConfiguration),
    null_value_format_configuration: quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct!.nullValueFormatConfiguration),
    separator_configuration: quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct!.separatorConfiguration),
  }
}

export class QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration | undefined) {
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
  private _decimalPlacesConfiguration = new QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this, "decimal_places_configuration");
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }
  public putDecimalPlacesConfiguration(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration) {
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
  private _negativeValueConfiguration = new QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this, "negative_value_configuration");
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }
  public putNegativeValueConfiguration(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration) {
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
  private _nullValueFormatConfiguration = new QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this, "null_value_format_configuration");
  public get nullValueFormatConfiguration() {
    return this._nullValueFormatConfiguration;
  }
  public putNullValueFormatConfiguration(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration) {
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
  private _separatorConfiguration = new QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference(this, "separator_configuration");
  public get separatorConfiguration() {
    return this._separatorConfiguration;
  }
  public putSeparatorConfiguration(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration) {
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
export interface QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_places QuicksightTemplate#decimal_places}
  */
  readonly decimalPlaces: number;
}

export function quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference | QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_places: cdktf.numberToTerraform(struct!.decimalPlaces),
  }
}

export class QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decimalPlaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.decimalPlaces = this._decimalPlaces;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#display_mode QuicksightTemplate#display_mode}
  */
  readonly displayMode: string;
}

export function quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference | QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_mode: cdktf.stringToTerraform(struct!.displayMode),
  }
}

export class QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayMode = this._displayMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_string QuicksightTemplate#null_string}
  */
  readonly nullString: string;
}

export function quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference | QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_string: cdktf.stringToTerraform(struct!.nullString),
  }
}

export class QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullString !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullString = this._nullString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#symbol QuicksightTemplate#symbol}
  */
  readonly symbol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference | QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    symbol: cdktf.stringToTerraform(struct!.symbol),
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
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
export interface QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_separator QuicksightTemplate#decimal_separator}
  */
  readonly decimalSeparator?: string;
  /**
  * thousands_separator block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#thousands_separator QuicksightTemplate#thousands_separator}
  */
  readonly thousandsSeparator?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator;
}

export function quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference | QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_separator: cdktf.stringToTerraform(struct!.decimalSeparator),
    thousands_separator: quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct!.thousandsSeparator),
  }
}

export class QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration | undefined) {
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
  private _thousandsSeparator = new QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this, "thousands_separator");
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
  public putThousandsSeparator(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator) {
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
export interface QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration {
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
  readonly decimalPlacesConfiguration?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration;
  /**
  * negative_value_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#negative_value_configuration QuicksightTemplate#negative_value_configuration}
  */
  readonly negativeValueConfiguration?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration;
  /**
  * null_value_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_value_format_configuration QuicksightTemplate#null_value_format_configuration}
  */
  readonly nullValueFormatConfiguration?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration;
  /**
  * separator_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#separator_configuration QuicksightTemplate#separator_configuration}
  */
  readonly separatorConfiguration?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration;
}

export function quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationOutputReference | QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
    suffix: cdktf.stringToTerraform(struct!.suffix),
    decimal_places_configuration: quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct!.decimalPlacesConfiguration),
    negative_value_configuration: quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct!.negativeValueConfiguration),
    null_value_format_configuration: quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct!.nullValueFormatConfiguration),
    separator_configuration: quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct!.separatorConfiguration),
  }
}

export class QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration | undefined) {
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
  private _decimalPlacesConfiguration = new QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this, "decimal_places_configuration");
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }
  public putDecimalPlacesConfiguration(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration) {
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
  private _negativeValueConfiguration = new QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this, "negative_value_configuration");
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }
  public putNegativeValueConfiguration(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration) {
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
  private _nullValueFormatConfiguration = new QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this, "null_value_format_configuration");
  public get nullValueFormatConfiguration() {
    return this._nullValueFormatConfiguration;
  }
  public putNullValueFormatConfiguration(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration) {
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
  private _separatorConfiguration = new QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference(this, "separator_configuration");
  public get separatorConfiguration() {
    return this._separatorConfiguration;
  }
  public putSeparatorConfiguration(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration) {
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
export interface QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfiguration {
  /**
  * currency_display_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#currency_display_format_configuration QuicksightTemplate#currency_display_format_configuration}
  */
  readonly currencyDisplayFormatConfiguration?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration;
  /**
  * number_display_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#number_display_format_configuration QuicksightTemplate#number_display_format_configuration}
  */
  readonly numberDisplayFormatConfiguration?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration;
  /**
  * percentage_display_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#percentage_display_format_configuration QuicksightTemplate#percentage_display_format_configuration}
  */
  readonly percentageDisplayFormatConfiguration?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration;
}

export function quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationOutputReference | QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    currency_display_format_configuration: quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationToTerraform(struct!.currencyDisplayFormatConfiguration),
    number_display_format_configuration: quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationToTerraform(struct!.numberDisplayFormatConfiguration),
    percentage_display_format_configuration: quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationToTerraform(struct!.percentageDisplayFormatConfiguration),
  }
}

export class QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfiguration | undefined) {
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
  private _currencyDisplayFormatConfiguration = new QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference(this, "currency_display_format_configuration");
  public get currencyDisplayFormatConfiguration() {
    return this._currencyDisplayFormatConfiguration;
  }
  public putCurrencyDisplayFormatConfiguration(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration) {
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
  private _numberDisplayFormatConfiguration = new QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationOutputReference(this, "number_display_format_configuration");
  public get numberDisplayFormatConfiguration() {
    return this._numberDisplayFormatConfiguration;
  }
  public putNumberDisplayFormatConfiguration(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration) {
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
  private _percentageDisplayFormatConfiguration = new QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationOutputReference(this, "percentage_display_format_configuration");
  public get percentageDisplayFormatConfiguration() {
    return this._percentageDisplayFormatConfiguration;
  }
  public putPercentageDisplayFormatConfiguration(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration) {
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
export interface QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfiguration {
  /**
  * numeric_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#numeric_format_configuration QuicksightTemplate#numeric_format_configuration}
  */
  readonly numericFormatConfiguration?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfiguration;
}

export function quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationOutputReference | QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    numeric_format_configuration: quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationToTerraform(struct!.numericFormatConfiguration),
  }
}

export class QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numericFormatConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numericFormatConfiguration = this._numericFormatConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfiguration | undefined) {
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
  private _numericFormatConfiguration = new QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfigurationOutputReference(this, "numeric_format_configuration");
  public get numericFormatConfiguration() {
    return this._numericFormatConfiguration;
  }
  public putNumericFormatConfiguration(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationNumericFormatConfiguration) {
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
export interface QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNullValueFormatConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_string QuicksightTemplate#null_string}
  */
  readonly nullString: string;
}

export function quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNullValueFormatConfigurationOutputReference | QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_string: cdktf.stringToTerraform(struct!.nullString),
  }
}

export class QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullString !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullString = this._nullString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNullValueFormatConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_places QuicksightTemplate#decimal_places}
  */
  readonly decimalPlaces: number;
}

export function quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference | QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_places: cdktf.numberToTerraform(struct!.decimalPlaces),
  }
}

export class QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decimalPlaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.decimalPlaces = this._decimalPlaces;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#display_mode QuicksightTemplate#display_mode}
  */
  readonly displayMode: string;
}

export function quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference | QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_mode: cdktf.stringToTerraform(struct!.displayMode),
  }
}

export class QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayMode = this._displayMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_string QuicksightTemplate#null_string}
  */
  readonly nullString: string;
}

export function quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference | QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_string: cdktf.stringToTerraform(struct!.nullString),
  }
}

export class QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullString !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullString = this._nullString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#symbol QuicksightTemplate#symbol}
  */
  readonly symbol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference | QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    symbol: cdktf.stringToTerraform(struct!.symbol),
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
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
export interface QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_separator QuicksightTemplate#decimal_separator}
  */
  readonly decimalSeparator?: string;
  /**
  * thousands_separator block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#thousands_separator QuicksightTemplate#thousands_separator}
  */
  readonly thousandsSeparator?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator;
}

export function quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference | QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_separator: cdktf.stringToTerraform(struct!.decimalSeparator),
    thousands_separator: quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct!.thousandsSeparator),
  }
}

export class QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration | undefined) {
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
  private _thousandsSeparator = new QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this, "thousands_separator");
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
  public putThousandsSeparator(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator) {
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
export interface QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration {
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
  readonly decimalPlacesConfiguration?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration;
  /**
  * negative_value_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#negative_value_configuration QuicksightTemplate#negative_value_configuration}
  */
  readonly negativeValueConfiguration?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration;
  /**
  * null_value_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_value_format_configuration QuicksightTemplate#null_value_format_configuration}
  */
  readonly nullValueFormatConfiguration?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration;
  /**
  * separator_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#separator_configuration QuicksightTemplate#separator_configuration}
  */
  readonly separatorConfiguration?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration;
}

export function quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference | QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number_scale: cdktf.stringToTerraform(struct!.numberScale),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    suffix: cdktf.stringToTerraform(struct!.suffix),
    symbol: cdktf.stringToTerraform(struct!.symbol),
    decimal_places_configuration: quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct!.decimalPlacesConfiguration),
    negative_value_configuration: quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct!.negativeValueConfiguration),
    null_value_format_configuration: quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct!.nullValueFormatConfiguration),
    separator_configuration: quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct!.separatorConfiguration),
  }
}

export class QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration | undefined) {
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
  private _decimalPlacesConfiguration = new QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this, "decimal_places_configuration");
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }
  public putDecimalPlacesConfiguration(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationDecimalPlacesConfiguration) {
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
  private _negativeValueConfiguration = new QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this, "negative_value_configuration");
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }
  public putNegativeValueConfiguration(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNegativeValueConfiguration) {
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
  private _nullValueFormatConfiguration = new QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this, "null_value_format_configuration");
  public get nullValueFormatConfiguration() {
    return this._nullValueFormatConfiguration;
  }
  public putNullValueFormatConfiguration(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationNullValueFormatConfiguration) {
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
  private _separatorConfiguration = new QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfigurationOutputReference(this, "separator_configuration");
  public get separatorConfiguration() {
    return this._separatorConfiguration;
  }
  public putSeparatorConfiguration(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationSeparatorConfiguration) {
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
export interface QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_places QuicksightTemplate#decimal_places}
  */
  readonly decimalPlaces: number;
}

export function quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference | QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_places: cdktf.numberToTerraform(struct!.decimalPlaces),
  }
}

export class QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decimalPlaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.decimalPlaces = this._decimalPlaces;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#display_mode QuicksightTemplate#display_mode}
  */
  readonly displayMode: string;
}

export function quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference | QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_mode: cdktf.stringToTerraform(struct!.displayMode),
  }
}

export class QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayMode = this._displayMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_string QuicksightTemplate#null_string}
  */
  readonly nullString: string;
}

export function quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference | QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_string: cdktf.stringToTerraform(struct!.nullString),
  }
}

export class QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullString !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullString = this._nullString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#symbol QuicksightTemplate#symbol}
  */
  readonly symbol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference | QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    symbol: cdktf.stringToTerraform(struct!.symbol),
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
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
export interface QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_separator QuicksightTemplate#decimal_separator}
  */
  readonly decimalSeparator?: string;
  /**
  * thousands_separator block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#thousands_separator QuicksightTemplate#thousands_separator}
  */
  readonly thousandsSeparator?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator;
}

export function quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference | QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_separator: cdktf.stringToTerraform(struct!.decimalSeparator),
    thousands_separator: quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct!.thousandsSeparator),
  }
}

export class QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration | undefined) {
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
  private _thousandsSeparator = new QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this, "thousands_separator");
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
  public putThousandsSeparator(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator) {
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
export interface QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration {
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
  readonly decimalPlacesConfiguration?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration;
  /**
  * negative_value_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#negative_value_configuration QuicksightTemplate#negative_value_configuration}
  */
  readonly negativeValueConfiguration?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration;
  /**
  * null_value_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_value_format_configuration QuicksightTemplate#null_value_format_configuration}
  */
  readonly nullValueFormatConfiguration?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration;
  /**
  * separator_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#separator_configuration QuicksightTemplate#separator_configuration}
  */
  readonly separatorConfiguration?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration;
}

export function quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationOutputReference | QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number_scale: cdktf.stringToTerraform(struct!.numberScale),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    suffix: cdktf.stringToTerraform(struct!.suffix),
    decimal_places_configuration: quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct!.decimalPlacesConfiguration),
    negative_value_configuration: quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct!.negativeValueConfiguration),
    null_value_format_configuration: quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct!.nullValueFormatConfiguration),
    separator_configuration: quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct!.separatorConfiguration),
  }
}

export class QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration | undefined) {
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
  private _decimalPlacesConfiguration = new QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this, "decimal_places_configuration");
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }
  public putDecimalPlacesConfiguration(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationDecimalPlacesConfiguration) {
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
  private _negativeValueConfiguration = new QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this, "negative_value_configuration");
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }
  public putNegativeValueConfiguration(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNegativeValueConfiguration) {
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
  private _nullValueFormatConfiguration = new QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this, "null_value_format_configuration");
  public get nullValueFormatConfiguration() {
    return this._nullValueFormatConfiguration;
  }
  public putNullValueFormatConfiguration(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationNullValueFormatConfiguration) {
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
  private _separatorConfiguration = new QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfigurationOutputReference(this, "separator_configuration");
  public get separatorConfiguration() {
    return this._separatorConfiguration;
  }
  public putSeparatorConfiguration(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationSeparatorConfiguration) {
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
export interface QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_places QuicksightTemplate#decimal_places}
  */
  readonly decimalPlaces: number;
}

export function quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference | QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_places: cdktf.numberToTerraform(struct!.decimalPlaces),
  }
}

export class QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decimalPlaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.decimalPlaces = this._decimalPlaces;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#display_mode QuicksightTemplate#display_mode}
  */
  readonly displayMode: string;
}

export function quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference | QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_mode: cdktf.stringToTerraform(struct!.displayMode),
  }
}

export class QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayMode = this._displayMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_string QuicksightTemplate#null_string}
  */
  readonly nullString: string;
}

export function quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference | QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_string: cdktf.stringToTerraform(struct!.nullString),
  }
}

export class QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nullString !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullString = this._nullString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#symbol QuicksightTemplate#symbol}
  */
  readonly symbol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference | QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    symbol: cdktf.stringToTerraform(struct!.symbol),
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator | undefined) {
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
export interface QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#decimal_separator QuicksightTemplate#decimal_separator}
  */
  readonly decimalSeparator?: string;
  /**
  * thousands_separator block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#thousands_separator QuicksightTemplate#thousands_separator}
  */
  readonly thousandsSeparator?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator;
}

export function quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference | QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_separator: cdktf.stringToTerraform(struct!.decimalSeparator),
    thousands_separator: quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorToTerraform(struct!.thousandsSeparator),
  }
}

export class QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration | undefined) {
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
  private _thousandsSeparator = new QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparatorOutputReference(this, "thousands_separator");
  public get thousandsSeparator() {
    return this._thousandsSeparator;
  }
  public putThousandsSeparator(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationThousandsSeparator) {
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
export interface QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration {
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
  readonly decimalPlacesConfiguration?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration;
  /**
  * negative_value_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#negative_value_configuration QuicksightTemplate#negative_value_configuration}
  */
  readonly negativeValueConfiguration?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration;
  /**
  * null_value_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_value_format_configuration QuicksightTemplate#null_value_format_configuration}
  */
  readonly nullValueFormatConfiguration?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration;
  /**
  * separator_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#separator_configuration QuicksightTemplate#separator_configuration}
  */
  readonly separatorConfiguration?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration;
}

export function quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationOutputReference | QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
    suffix: cdktf.stringToTerraform(struct!.suffix),
    decimal_places_configuration: quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationToTerraform(struct!.decimalPlacesConfiguration),
    negative_value_configuration: quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationToTerraform(struct!.negativeValueConfiguration),
    null_value_format_configuration: quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationToTerraform(struct!.nullValueFormatConfiguration),
    separator_configuration: quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationToTerraform(struct!.separatorConfiguration),
  }
}

export class QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration | undefined) {
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
  private _decimalPlacesConfiguration = new QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfigurationOutputReference(this, "decimal_places_configuration");
  public get decimalPlacesConfiguration() {
    return this._decimalPlacesConfiguration;
  }
  public putDecimalPlacesConfiguration(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationDecimalPlacesConfiguration) {
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
  private _negativeValueConfiguration = new QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfigurationOutputReference(this, "negative_value_configuration");
  public get negativeValueConfiguration() {
    return this._negativeValueConfiguration;
  }
  public putNegativeValueConfiguration(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNegativeValueConfiguration) {
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
  private _nullValueFormatConfiguration = new QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfigurationOutputReference(this, "null_value_format_configuration");
  public get nullValueFormatConfiguration() {
    return this._nullValueFormatConfiguration;
  }
  public putNullValueFormatConfiguration(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationNullValueFormatConfiguration) {
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
  private _separatorConfiguration = new QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfigurationOutputReference(this, "separator_configuration");
  public get separatorConfiguration() {
    return this._separatorConfiguration;
  }
  public putSeparatorConfiguration(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationSeparatorConfiguration) {
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
export interface QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfiguration {
  /**
  * currency_display_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#currency_display_format_configuration QuicksightTemplate#currency_display_format_configuration}
  */
  readonly currencyDisplayFormatConfiguration?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration;
  /**
  * number_display_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#number_display_format_configuration QuicksightTemplate#number_display_format_configuration}
  */
  readonly numberDisplayFormatConfiguration?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration;
  /**
  * percentage_display_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#percentage_display_format_configuration QuicksightTemplate#percentage_display_format_configuration}
  */
  readonly percentageDisplayFormatConfiguration?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration;
}

export function quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationOutputReference | QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    currency_display_format_configuration: quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationToTerraform(struct!.currencyDisplayFormatConfiguration),
    number_display_format_configuration: quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationToTerraform(struct!.numberDisplayFormatConfiguration),
    percentage_display_format_configuration: quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationToTerraform(struct!.percentageDisplayFormatConfiguration),
  }
}

export class QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfiguration | undefined) {
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
  private _currencyDisplayFormatConfiguration = new QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfigurationOutputReference(this, "currency_display_format_configuration");
  public get currencyDisplayFormatConfiguration() {
    return this._currencyDisplayFormatConfiguration;
  }
  public putCurrencyDisplayFormatConfiguration(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationCurrencyDisplayFormatConfiguration) {
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
  private _numberDisplayFormatConfiguration = new QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfigurationOutputReference(this, "number_display_format_configuration");
  public get numberDisplayFormatConfiguration() {
    return this._numberDisplayFormatConfiguration;
  }
  public putNumberDisplayFormatConfiguration(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationNumberDisplayFormatConfiguration) {
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
  private _percentageDisplayFormatConfiguration = new QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfigurationOutputReference(this, "percentage_display_format_configuration");
  public get percentageDisplayFormatConfiguration() {
    return this._percentageDisplayFormatConfiguration;
  }
  public putPercentageDisplayFormatConfiguration(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationPercentageDisplayFormatConfiguration) {
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
export interface QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfiguration {
  /**
  * null_value_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_value_format_configuration QuicksightTemplate#null_value_format_configuration}
  */
  readonly nullValueFormatConfiguration?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNullValueFormatConfiguration;
  /**
  * numeric_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#numeric_format_configuration QuicksightTemplate#numeric_format_configuration}
  */
  readonly numericFormatConfiguration?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfiguration;
}

export function quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationOutputReference | QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    null_value_format_configuration: quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNullValueFormatConfigurationToTerraform(struct!.nullValueFormatConfiguration),
    numeric_format_configuration: quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationToTerraform(struct!.numericFormatConfiguration),
  }
}

export class QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfiguration | undefined) {
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
  private _nullValueFormatConfiguration = new QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNullValueFormatConfigurationOutputReference(this, "null_value_format_configuration");
  public get nullValueFormatConfiguration() {
    return this._nullValueFormatConfiguration;
  }
  public putNullValueFormatConfiguration(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNullValueFormatConfiguration) {
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
  private _numericFormatConfiguration = new QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfigurationOutputReference(this, "numeric_format_configuration");
  public get numericFormatConfiguration() {
    return this._numericFormatConfiguration;
  }
  public putNumericFormatConfiguration(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationNumericFormatConfiguration) {
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
export interface QuicksightTemplateDefinitionColumnConfigurationsFormatConfiguration {
  /**
  * date_time_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#date_time_format_configuration QuicksightTemplate#date_time_format_configuration}
  */
  readonly dateTimeFormatConfiguration?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfiguration;
  /**
  * number_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#number_format_configuration QuicksightTemplate#number_format_configuration}
  */
  readonly numberFormatConfiguration?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfiguration;
  /**
  * string_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#string_format_configuration QuicksightTemplate#string_format_configuration}
  */
  readonly stringFormatConfiguration?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfiguration;
}

export function quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationToTerraform(struct?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationOutputReference | QuicksightTemplateDefinitionColumnConfigurationsFormatConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    date_time_format_configuration: quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationToTerraform(struct!.dateTimeFormatConfiguration),
    number_format_configuration: quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationToTerraform(struct!.numberFormatConfiguration),
    string_format_configuration: quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationToTerraform(struct!.stringFormatConfiguration),
  }
}

export class QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionColumnConfigurationsFormatConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dateTimeFormatConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateTimeFormatConfiguration = this._dateTimeFormatConfiguration?.internalValue;
    }
    if (this._numberFormatConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberFormatConfiguration = this._numberFormatConfiguration?.internalValue;
    }
    if (this._stringFormatConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringFormatConfiguration = this._stringFormatConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dateTimeFormatConfiguration.internalValue = undefined;
      this._numberFormatConfiguration.internalValue = undefined;
      this._stringFormatConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dateTimeFormatConfiguration.internalValue = value.dateTimeFormatConfiguration;
      this._numberFormatConfiguration.internalValue = value.numberFormatConfiguration;
      this._stringFormatConfiguration.internalValue = value.stringFormatConfiguration;
    }
  }

  // date_time_format_configuration - computed: false, optional: true, required: false
  private _dateTimeFormatConfiguration = new QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfigurationOutputReference(this, "date_time_format_configuration");
  public get dateTimeFormatConfiguration() {
    return this._dateTimeFormatConfiguration;
  }
  public putDateTimeFormatConfiguration(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationDateTimeFormatConfiguration) {
    this._dateTimeFormatConfiguration.internalValue = value;
  }
  public resetDateTimeFormatConfiguration() {
    this._dateTimeFormatConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateTimeFormatConfigurationInput() {
    return this._dateTimeFormatConfiguration.internalValue;
  }

  // number_format_configuration - computed: false, optional: true, required: false
  private _numberFormatConfiguration = new QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfigurationOutputReference(this, "number_format_configuration");
  public get numberFormatConfiguration() {
    return this._numberFormatConfiguration;
  }
  public putNumberFormatConfiguration(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationNumberFormatConfiguration) {
    this._numberFormatConfiguration.internalValue = value;
  }
  public resetNumberFormatConfiguration() {
    this._numberFormatConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberFormatConfigurationInput() {
    return this._numberFormatConfiguration.internalValue;
  }

  // string_format_configuration - computed: false, optional: true, required: false
  private _stringFormatConfiguration = new QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfigurationOutputReference(this, "string_format_configuration");
  public get stringFormatConfiguration() {
    return this._stringFormatConfiguration;
  }
  public putStringFormatConfiguration(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationStringFormatConfiguration) {
    this._stringFormatConfiguration.internalValue = value;
  }
  public resetStringFormatConfiguration() {
    this._stringFormatConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringFormatConfigurationInput() {
    return this._stringFormatConfiguration.internalValue;
  }
}
export interface QuicksightTemplateDefinitionColumnConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#role QuicksightTemplate#role}
  */
  readonly role?: string;
  /**
  * column block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column QuicksightTemplate#column}
  */
  readonly column: QuicksightTemplateDefinitionColumnConfigurationsColumn;
  /**
  * format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#format_configuration QuicksightTemplate#format_configuration}
  */
  readonly formatConfiguration?: QuicksightTemplateDefinitionColumnConfigurationsFormatConfiguration;
}

export function quicksightTemplateDefinitionColumnConfigurationsToTerraform(struct?: QuicksightTemplateDefinitionColumnConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role: cdktf.stringToTerraform(struct!.role),
    column: quicksightTemplateDefinitionColumnConfigurationsColumnToTerraform(struct!.column),
    format_configuration: quicksightTemplateDefinitionColumnConfigurationsFormatConfigurationToTerraform(struct!.formatConfiguration),
  }
}

export class QuicksightTemplateDefinitionColumnConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionColumnConfigurations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
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

  public set internalValue(value: QuicksightTemplateDefinitionColumnConfigurations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._role = undefined;
      this._column.internalValue = undefined;
      this._formatConfiguration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._role = value.role;
      this._column.internalValue = value.column;
      this._formatConfiguration.internalValue = value.formatConfiguration;
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

  // column - computed: false, optional: false, required: true
  private _column = new QuicksightTemplateDefinitionColumnConfigurationsColumnOutputReference(this, "column");
  public get column() {
    return this._column;
  }
  public putColumn(value: QuicksightTemplateDefinitionColumnConfigurationsColumn) {
    this._column.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }

  // format_configuration - computed: false, optional: true, required: false
  private _formatConfiguration = new QuicksightTemplateDefinitionColumnConfigurationsFormatConfigurationOutputReference(this, "format_configuration");
  public get formatConfiguration() {
    return this._formatConfiguration;
  }
  public putFormatConfiguration(value: QuicksightTemplateDefinitionColumnConfigurationsFormatConfiguration) {
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

export class QuicksightTemplateDefinitionColumnConfigurationsList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionColumnConfigurations[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionColumnConfigurationsOutputReference {
    return new QuicksightTemplateDefinitionColumnConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionDataSetConfigurationColumnGroupSchemaListColumnGroupColumnSchemaListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#name QuicksightTemplate#name}
  */
  readonly name?: string;
}

export function quicksightTemplateDefinitionDataSetConfigurationColumnGroupSchemaListColumnGroupColumnSchemaListStructToTerraform(struct?: QuicksightTemplateDefinitionDataSetConfigurationColumnGroupSchemaListColumnGroupColumnSchemaListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class QuicksightTemplateDefinitionDataSetConfigurationColumnGroupSchemaListColumnGroupColumnSchemaListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionDataSetConfigurationColumnGroupSchemaListColumnGroupColumnSchemaListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionDataSetConfigurationColumnGroupSchemaListColumnGroupColumnSchemaListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class QuicksightTemplateDefinitionDataSetConfigurationColumnGroupSchemaListColumnGroupColumnSchemaListStructList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionDataSetConfigurationColumnGroupSchemaListColumnGroupColumnSchemaListStruct[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionDataSetConfigurationColumnGroupSchemaListColumnGroupColumnSchemaListStructOutputReference {
    return new QuicksightTemplateDefinitionDataSetConfigurationColumnGroupSchemaListColumnGroupColumnSchemaListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionDataSetConfigurationColumnGroupSchemaListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#name QuicksightTemplate#name}
  */
  readonly name?: string;
  /**
  * column_group_column_schema_list block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_group_column_schema_list QuicksightTemplate#column_group_column_schema_list}
  */
  readonly columnGroupColumnSchemaList?: QuicksightTemplateDefinitionDataSetConfigurationColumnGroupSchemaListColumnGroupColumnSchemaListStruct[] | cdktf.IResolvable;
}

export function quicksightTemplateDefinitionDataSetConfigurationColumnGroupSchemaListStructToTerraform(struct?: QuicksightTemplateDefinitionDataSetConfigurationColumnGroupSchemaListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    column_group_column_schema_list: cdktf.listMapper(quicksightTemplateDefinitionDataSetConfigurationColumnGroupSchemaListColumnGroupColumnSchemaListStructToTerraform, true)(struct!.columnGroupColumnSchemaList),
  }
}

export class QuicksightTemplateDefinitionDataSetConfigurationColumnGroupSchemaListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionDataSetConfigurationColumnGroupSchemaListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._columnGroupColumnSchemaList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnGroupColumnSchemaList = this._columnGroupColumnSchemaList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionDataSetConfigurationColumnGroupSchemaListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._columnGroupColumnSchemaList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._columnGroupColumnSchemaList.internalValue = value.columnGroupColumnSchemaList;
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

  // column_group_column_schema_list - computed: false, optional: true, required: false
  private _columnGroupColumnSchemaList = new QuicksightTemplateDefinitionDataSetConfigurationColumnGroupSchemaListColumnGroupColumnSchemaListStructList(this, "column_group_column_schema_list", false);
  public get columnGroupColumnSchemaList() {
    return this._columnGroupColumnSchemaList;
  }
  public putColumnGroupColumnSchemaList(value: QuicksightTemplateDefinitionDataSetConfigurationColumnGroupSchemaListColumnGroupColumnSchemaListStruct[] | cdktf.IResolvable) {
    this._columnGroupColumnSchemaList.internalValue = value;
  }
  public resetColumnGroupColumnSchemaList() {
    this._columnGroupColumnSchemaList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnGroupColumnSchemaListInput() {
    return this._columnGroupColumnSchemaList.internalValue;
  }
}

export class QuicksightTemplateDefinitionDataSetConfigurationColumnGroupSchemaListStructList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionDataSetConfigurationColumnGroupSchemaListStruct[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionDataSetConfigurationColumnGroupSchemaListStructOutputReference {
    return new QuicksightTemplateDefinitionDataSetConfigurationColumnGroupSchemaListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionDataSetConfigurationDataSetSchemaColumnSchemaListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_type QuicksightTemplate#data_type}
  */
  readonly dataType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#geographic_role QuicksightTemplate#geographic_role}
  */
  readonly geographicRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#name QuicksightTemplate#name}
  */
  readonly name?: string;
}

export function quicksightTemplateDefinitionDataSetConfigurationDataSetSchemaColumnSchemaListStructToTerraform(struct?: QuicksightTemplateDefinitionDataSetConfigurationDataSetSchemaColumnSchemaListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_type: cdktf.stringToTerraform(struct!.dataType),
    geographic_role: cdktf.stringToTerraform(struct!.geographicRole),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class QuicksightTemplateDefinitionDataSetConfigurationDataSetSchemaColumnSchemaListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionDataSetConfigurationDataSetSchemaColumnSchemaListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataType = this._dataType;
    }
    if (this._geographicRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.geographicRole = this._geographicRole;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionDataSetConfigurationDataSetSchemaColumnSchemaListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataType = undefined;
      this._geographicRole = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataType = value.dataType;
      this._geographicRole = value.geographicRole;
      this._name = value.name;
    }
  }

  // data_type - computed: false, optional: true, required: false
  private _dataType?: string; 
  public get dataType() {
    return this.getStringAttribute('data_type');
  }
  public set dataType(value: string) {
    this._dataType = value;
  }
  public resetDataType() {
    this._dataType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeInput() {
    return this._dataType;
  }

  // geographic_role - computed: false, optional: true, required: false
  private _geographicRole?: string; 
  public get geographicRole() {
    return this.getStringAttribute('geographic_role');
  }
  public set geographicRole(value: string) {
    this._geographicRole = value;
  }
  public resetGeographicRole() {
    this._geographicRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geographicRoleInput() {
    return this._geographicRole;
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

export class QuicksightTemplateDefinitionDataSetConfigurationDataSetSchemaColumnSchemaListStructList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionDataSetConfigurationDataSetSchemaColumnSchemaListStruct[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionDataSetConfigurationDataSetSchemaColumnSchemaListStructOutputReference {
    return new QuicksightTemplateDefinitionDataSetConfigurationDataSetSchemaColumnSchemaListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionDataSetConfigurationDataSetSchema {
  /**
  * column_schema_list block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_schema_list QuicksightTemplate#column_schema_list}
  */
  readonly columnSchemaList?: QuicksightTemplateDefinitionDataSetConfigurationDataSetSchemaColumnSchemaListStruct[] | cdktf.IResolvable;
}

export function quicksightTemplateDefinitionDataSetConfigurationDataSetSchemaToTerraform(struct?: QuicksightTemplateDefinitionDataSetConfigurationDataSetSchemaOutputReference | QuicksightTemplateDefinitionDataSetConfigurationDataSetSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_schema_list: cdktf.listMapper(quicksightTemplateDefinitionDataSetConfigurationDataSetSchemaColumnSchemaListStructToTerraform, true)(struct!.columnSchemaList),
  }
}

export class QuicksightTemplateDefinitionDataSetConfigurationDataSetSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionDataSetConfigurationDataSetSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnSchemaList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnSchemaList = this._columnSchemaList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionDataSetConfigurationDataSetSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._columnSchemaList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._columnSchemaList.internalValue = value.columnSchemaList;
    }
  }

  // column_schema_list - computed: false, optional: true, required: false
  private _columnSchemaList = new QuicksightTemplateDefinitionDataSetConfigurationDataSetSchemaColumnSchemaListStructList(this, "column_schema_list", false);
  public get columnSchemaList() {
    return this._columnSchemaList;
  }
  public putColumnSchemaList(value: QuicksightTemplateDefinitionDataSetConfigurationDataSetSchemaColumnSchemaListStruct[] | cdktf.IResolvable) {
    this._columnSchemaList.internalValue = value;
  }
  public resetColumnSchemaList() {
    this._columnSchemaList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnSchemaListInput() {
    return this._columnSchemaList.internalValue;
  }
}
export interface QuicksightTemplateDefinitionDataSetConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#placeholder QuicksightTemplate#placeholder}
  */
  readonly placeholder?: string;
  /**
  * column_group_schema_list block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_group_schema_list QuicksightTemplate#column_group_schema_list}
  */
  readonly columnGroupSchemaList?: QuicksightTemplateDefinitionDataSetConfigurationColumnGroupSchemaListStruct[] | cdktf.IResolvable;
  /**
  * data_set_schema block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_schema QuicksightTemplate#data_set_schema}
  */
  readonly dataSetSchema?: QuicksightTemplateDefinitionDataSetConfigurationDataSetSchema;
}

export function quicksightTemplateDefinitionDataSetConfigurationToTerraform(struct?: QuicksightTemplateDefinitionDataSetConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    placeholder: cdktf.stringToTerraform(struct!.placeholder),
    column_group_schema_list: cdktf.listMapper(quicksightTemplateDefinitionDataSetConfigurationColumnGroupSchemaListStructToTerraform, true)(struct!.columnGroupSchemaList),
    data_set_schema: quicksightTemplateDefinitionDataSetConfigurationDataSetSchemaToTerraform(struct!.dataSetSchema),
  }
}

export class QuicksightTemplateDefinitionDataSetConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionDataSetConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._placeholder !== undefined) {
      hasAnyValues = true;
      internalValueResult.placeholder = this._placeholder;
    }
    if (this._columnGroupSchemaList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnGroupSchemaList = this._columnGroupSchemaList?.internalValue;
    }
    if (this._dataSetSchema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSetSchema = this._dataSetSchema?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionDataSetConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._placeholder = undefined;
      this._columnGroupSchemaList.internalValue = undefined;
      this._dataSetSchema.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._placeholder = value.placeholder;
      this._columnGroupSchemaList.internalValue = value.columnGroupSchemaList;
      this._dataSetSchema.internalValue = value.dataSetSchema;
    }
  }

  // placeholder - computed: false, optional: true, required: false
  private _placeholder?: string; 
  public get placeholder() {
    return this.getStringAttribute('placeholder');
  }
  public set placeholder(value: string) {
    this._placeholder = value;
  }
  public resetPlaceholder() {
    this._placeholder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placeholderInput() {
    return this._placeholder;
  }

  // column_group_schema_list - computed: false, optional: true, required: false
  private _columnGroupSchemaList = new QuicksightTemplateDefinitionDataSetConfigurationColumnGroupSchemaListStructList(this, "column_group_schema_list", false);
  public get columnGroupSchemaList() {
    return this._columnGroupSchemaList;
  }
  public putColumnGroupSchemaList(value: QuicksightTemplateDefinitionDataSetConfigurationColumnGroupSchemaListStruct[] | cdktf.IResolvable) {
    this._columnGroupSchemaList.internalValue = value;
  }
  public resetColumnGroupSchemaList() {
    this._columnGroupSchemaList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnGroupSchemaListInput() {
    return this._columnGroupSchemaList.internalValue;
  }

  // data_set_schema - computed: false, optional: true, required: false
  private _dataSetSchema = new QuicksightTemplateDefinitionDataSetConfigurationDataSetSchemaOutputReference(this, "data_set_schema");
  public get dataSetSchema() {
    return this._dataSetSchema;
  }
  public putDataSetSchema(value: QuicksightTemplateDefinitionDataSetConfigurationDataSetSchema) {
    this._dataSetSchema.internalValue = value;
  }
  public resetDataSetSchema() {
    this._dataSetSchema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSetSchemaInput() {
    return this._dataSetSchema.internalValue;
  }
}

export class QuicksightTemplateDefinitionDataSetConfigurationList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionDataSetConfiguration[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionDataSetConfigurationOutputReference {
    return new QuicksightTemplateDefinitionDataSetConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionFilterGroupsFiltersCategoryFilterColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionFilterGroupsFiltersCategoryFilterColumnToTerraform(struct?: QuicksightTemplateDefinitionFilterGroupsFiltersCategoryFilterColumnOutputReference | QuicksightTemplateDefinitionFilterGroupsFiltersCategoryFilterColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionFilterGroupsFiltersCategoryFilterColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionFilterGroupsFiltersCategoryFilterColumn | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionFilterGroupsFiltersCategoryFilterColumn | undefined) {
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
export interface QuicksightTemplateDefinitionFilterGroupsFiltersCategoryFilterConfigurationCustomFilterConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#category_value QuicksightTemplate#category_value}
  */
  readonly categoryValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#match_operator QuicksightTemplate#match_operator}
  */
  readonly matchOperator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_option QuicksightTemplate#null_option}
  */
  readonly nullOption: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#parameter_name QuicksightTemplate#parameter_name}
  */
  readonly parameterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#select_all_options QuicksightTemplate#select_all_options}
  */
  readonly selectAllOptions?: string;
}

export function quicksightTemplateDefinitionFilterGroupsFiltersCategoryFilterConfigurationCustomFilterConfigurationToTerraform(struct?: QuicksightTemplateDefinitionFilterGroupsFiltersCategoryFilterConfigurationCustomFilterConfigurationOutputReference | QuicksightTemplateDefinitionFilterGroupsFiltersCategoryFilterConfigurationCustomFilterConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category_value: cdktf.stringToTerraform(struct!.categoryValue),
    match_operator: cdktf.stringToTerraform(struct!.matchOperator),
    null_option: cdktf.stringToTerraform(struct!.nullOption),
    parameter_name: cdktf.stringToTerraform(struct!.parameterName),
    select_all_options: cdktf.stringToTerraform(struct!.selectAllOptions),
  }
}

export class QuicksightTemplateDefinitionFilterGroupsFiltersCategoryFilterConfigurationCustomFilterConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionFilterGroupsFiltersCategoryFilterConfigurationCustomFilterConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._categoryValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.categoryValue = this._categoryValue;
    }
    if (this._matchOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOperator = this._matchOperator;
    }
    if (this._nullOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullOption = this._nullOption;
    }
    if (this._parameterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterName = this._parameterName;
    }
    if (this._selectAllOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectAllOptions = this._selectAllOptions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionFilterGroupsFiltersCategoryFilterConfigurationCustomFilterConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._categoryValue = undefined;
      this._matchOperator = undefined;
      this._nullOption = undefined;
      this._parameterName = undefined;
      this._selectAllOptions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._categoryValue = value.categoryValue;
      this._matchOperator = value.matchOperator;
      this._nullOption = value.nullOption;
      this._parameterName = value.parameterName;
      this._selectAllOptions = value.selectAllOptions;
    }
  }

  // category_value - computed: false, optional: true, required: false
  private _categoryValue?: string; 
  public get categoryValue() {
    return this.getStringAttribute('category_value');
  }
  public set categoryValue(value: string) {
    this._categoryValue = value;
  }
  public resetCategoryValue() {
    this._categoryValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryValueInput() {
    return this._categoryValue;
  }

  // match_operator - computed: false, optional: false, required: true
  private _matchOperator?: string; 
  public get matchOperator() {
    return this.getStringAttribute('match_operator');
  }
  public set matchOperator(value: string) {
    this._matchOperator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOperatorInput() {
    return this._matchOperator;
  }

  // null_option - computed: false, optional: false, required: true
  private _nullOption?: string; 
  public get nullOption() {
    return this.getStringAttribute('null_option');
  }
  public set nullOption(value: string) {
    this._nullOption = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nullOptionInput() {
    return this._nullOption;
  }

  // parameter_name - computed: false, optional: true, required: false
  private _parameterName?: string; 
  public get parameterName() {
    return this.getStringAttribute('parameter_name');
  }
  public set parameterName(value: string) {
    this._parameterName = value;
  }
  public resetParameterName() {
    this._parameterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterNameInput() {
    return this._parameterName;
  }

  // select_all_options - computed: false, optional: true, required: false
  private _selectAllOptions?: string; 
  public get selectAllOptions() {
    return this.getStringAttribute('select_all_options');
  }
  public set selectAllOptions(value: string) {
    this._selectAllOptions = value;
  }
  public resetSelectAllOptions() {
    this._selectAllOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectAllOptionsInput() {
    return this._selectAllOptions;
  }
}
export interface QuicksightTemplateDefinitionFilterGroupsFiltersCategoryFilterConfigurationCustomFilterListConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#category_values QuicksightTemplate#category_values}
  */
  readonly categoryValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#match_operator QuicksightTemplate#match_operator}
  */
  readonly matchOperator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_option QuicksightTemplate#null_option}
  */
  readonly nullOption: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#select_all_options QuicksightTemplate#select_all_options}
  */
  readonly selectAllOptions?: string;
}

export function quicksightTemplateDefinitionFilterGroupsFiltersCategoryFilterConfigurationCustomFilterListConfigurationToTerraform(struct?: QuicksightTemplateDefinitionFilterGroupsFiltersCategoryFilterConfigurationCustomFilterListConfigurationOutputReference | QuicksightTemplateDefinitionFilterGroupsFiltersCategoryFilterConfigurationCustomFilterListConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.categoryValues),
    match_operator: cdktf.stringToTerraform(struct!.matchOperator),
    null_option: cdktf.stringToTerraform(struct!.nullOption),
    select_all_options: cdktf.stringToTerraform(struct!.selectAllOptions),
  }
}

export class QuicksightTemplateDefinitionFilterGroupsFiltersCategoryFilterConfigurationCustomFilterListConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionFilterGroupsFiltersCategoryFilterConfigurationCustomFilterListConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._categoryValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.categoryValues = this._categoryValues;
    }
    if (this._matchOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOperator = this._matchOperator;
    }
    if (this._nullOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullOption = this._nullOption;
    }
    if (this._selectAllOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectAllOptions = this._selectAllOptions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionFilterGroupsFiltersCategoryFilterConfigurationCustomFilterListConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._categoryValues = undefined;
      this._matchOperator = undefined;
      this._nullOption = undefined;
      this._selectAllOptions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._categoryValues = value.categoryValues;
      this._matchOperator = value.matchOperator;
      this._nullOption = value.nullOption;
      this._selectAllOptions = value.selectAllOptions;
    }
  }

  // category_values - computed: false, optional: true, required: false
  private _categoryValues?: string[]; 
  public get categoryValues() {
    return this.getListAttribute('category_values');
  }
  public set categoryValues(value: string[]) {
    this._categoryValues = value;
  }
  public resetCategoryValues() {
    this._categoryValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryValuesInput() {
    return this._categoryValues;
  }

  // match_operator - computed: false, optional: false, required: true
  private _matchOperator?: string; 
  public get matchOperator() {
    return this.getStringAttribute('match_operator');
  }
  public set matchOperator(value: string) {
    this._matchOperator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOperatorInput() {
    return this._matchOperator;
  }

  // null_option - computed: false, optional: false, required: true
  private _nullOption?: string; 
  public get nullOption() {
    return this.getStringAttribute('null_option');
  }
  public set nullOption(value: string) {
    this._nullOption = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nullOptionInput() {
    return this._nullOption;
  }

  // select_all_options - computed: false, optional: true, required: false
  private _selectAllOptions?: string; 
  public get selectAllOptions() {
    return this.getStringAttribute('select_all_options');
  }
  public set selectAllOptions(value: string) {
    this._selectAllOptions = value;
  }
  public resetSelectAllOptions() {
    this._selectAllOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectAllOptionsInput() {
    return this._selectAllOptions;
  }
}
export interface QuicksightTemplateDefinitionFilterGroupsFiltersCategoryFilterConfigurationFilterListConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#category_values QuicksightTemplate#category_values}
  */
  readonly categoryValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#match_operator QuicksightTemplate#match_operator}
  */
  readonly matchOperator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#select_all_options QuicksightTemplate#select_all_options}
  */
  readonly selectAllOptions?: string;
}

export function quicksightTemplateDefinitionFilterGroupsFiltersCategoryFilterConfigurationFilterListConfigurationToTerraform(struct?: QuicksightTemplateDefinitionFilterGroupsFiltersCategoryFilterConfigurationFilterListConfigurationOutputReference | QuicksightTemplateDefinitionFilterGroupsFiltersCategoryFilterConfigurationFilterListConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.categoryValues),
    match_operator: cdktf.stringToTerraform(struct!.matchOperator),
    select_all_options: cdktf.stringToTerraform(struct!.selectAllOptions),
  }
}

export class QuicksightTemplateDefinitionFilterGroupsFiltersCategoryFilterConfigurationFilterListConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionFilterGroupsFiltersCategoryFilterConfigurationFilterListConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._categoryValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.categoryValues = this._categoryValues;
    }
    if (this._matchOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOperator = this._matchOperator;
    }
    if (this._selectAllOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectAllOptions = this._selectAllOptions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionFilterGroupsFiltersCategoryFilterConfigurationFilterListConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._categoryValues = undefined;
      this._matchOperator = undefined;
      this._selectAllOptions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._categoryValues = value.categoryValues;
      this._matchOperator = value.matchOperator;
      this._selectAllOptions = value.selectAllOptions;
    }
  }

  // category_values - computed: false, optional: true, required: false
  private _categoryValues?: string[]; 
  public get categoryValues() {
    return this.getListAttribute('category_values');
  }
  public set categoryValues(value: string[]) {
    this._categoryValues = value;
  }
  public resetCategoryValues() {
    this._categoryValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryValuesInput() {
    return this._categoryValues;
  }

  // match_operator - computed: false, optional: false, required: true
  private _matchOperator?: string; 
  public get matchOperator() {
    return this.getStringAttribute('match_operator');
  }
  public set matchOperator(value: string) {
    this._matchOperator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOperatorInput() {
    return this._matchOperator;
  }

  // select_all_options - computed: false, optional: true, required: false
  private _selectAllOptions?: string; 
  public get selectAllOptions() {
    return this.getStringAttribute('select_all_options');
  }
  public set selectAllOptions(value: string) {
    this._selectAllOptions = value;
  }
  public resetSelectAllOptions() {
    this._selectAllOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectAllOptionsInput() {
    return this._selectAllOptions;
  }
}
export interface QuicksightTemplateDefinitionFilterGroupsFiltersCategoryFilterConfiguration {
  /**
  * custom_filter_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#custom_filter_configuration QuicksightTemplate#custom_filter_configuration}
  */
  readonly customFilterConfiguration?: QuicksightTemplateDefinitionFilterGroupsFiltersCategoryFilterConfigurationCustomFilterConfiguration;
  /**
  * custom_filter_list_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#custom_filter_list_configuration QuicksightTemplate#custom_filter_list_configuration}
  */
  readonly customFilterListConfiguration?: QuicksightTemplateDefinitionFilterGroupsFiltersCategoryFilterConfigurationCustomFilterListConfiguration;
  /**
  * filter_list_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#filter_list_configuration QuicksightTemplate#filter_list_configuration}
  */
  readonly filterListConfiguration?: QuicksightTemplateDefinitionFilterGroupsFiltersCategoryFilterConfigurationFilterListConfiguration;
}

export function quicksightTemplateDefinitionFilterGroupsFiltersCategoryFilterConfigurationToTerraform(struct?: QuicksightTemplateDefinitionFilterGroupsFiltersCategoryFilterConfigurationOutputReference | QuicksightTemplateDefinitionFilterGroupsFiltersCategoryFilterConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_filter_configuration: quicksightTemplateDefinitionFilterGroupsFiltersCategoryFilterConfigurationCustomFilterConfigurationToTerraform(struct!.customFilterConfiguration),
    custom_filter_list_configuration: quicksightTemplateDefinitionFilterGroupsFiltersCategoryFilterConfigurationCustomFilterListConfigurationToTerraform(struct!.customFilterListConfiguration),
    filter_list_configuration: quicksightTemplateDefinitionFilterGroupsFiltersCategoryFilterConfigurationFilterListConfigurationToTerraform(struct!.filterListConfiguration),
  }
}

export class QuicksightTemplateDefinitionFilterGroupsFiltersCategoryFilterConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionFilterGroupsFiltersCategoryFilterConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customFilterConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customFilterConfiguration = this._customFilterConfiguration?.internalValue;
    }
    if (this._customFilterListConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customFilterListConfiguration = this._customFilterListConfiguration?.internalValue;
    }
    if (this._filterListConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterListConfiguration = this._filterListConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionFilterGroupsFiltersCategoryFilterConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customFilterConfiguration.internalValue = undefined;
      this._customFilterListConfiguration.internalValue = undefined;
      this._filterListConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customFilterConfiguration.internalValue = value.customFilterConfiguration;
      this._customFilterListConfiguration.internalValue = value.customFilterListConfiguration;
      this._filterListConfiguration.internalValue = value.filterListConfiguration;
    }
  }

  // custom_filter_configuration - computed: false, optional: true, required: false
  private _customFilterConfiguration = new QuicksightTemplateDefinitionFilterGroupsFiltersCategoryFilterConfigurationCustomFilterConfigurationOutputReference(this, "custom_filter_configuration");
  public get customFilterConfiguration() {
    return this._customFilterConfiguration;
  }
  public putCustomFilterConfiguration(value: QuicksightTemplateDefinitionFilterGroupsFiltersCategoryFilterConfigurationCustomFilterConfiguration) {
    this._customFilterConfiguration.internalValue = value;
  }
  public resetCustomFilterConfiguration() {
    this._customFilterConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFilterConfigurationInput() {
    return this._customFilterConfiguration.internalValue;
  }

  // custom_filter_list_configuration - computed: false, optional: true, required: false
  private _customFilterListConfiguration = new QuicksightTemplateDefinitionFilterGroupsFiltersCategoryFilterConfigurationCustomFilterListConfigurationOutputReference(this, "custom_filter_list_configuration");
  public get customFilterListConfiguration() {
    return this._customFilterListConfiguration;
  }
  public putCustomFilterListConfiguration(value: QuicksightTemplateDefinitionFilterGroupsFiltersCategoryFilterConfigurationCustomFilterListConfiguration) {
    this._customFilterListConfiguration.internalValue = value;
  }
  public resetCustomFilterListConfiguration() {
    this._customFilterListConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFilterListConfigurationInput() {
    return this._customFilterListConfiguration.internalValue;
  }

  // filter_list_configuration - computed: false, optional: true, required: false
  private _filterListConfiguration = new QuicksightTemplateDefinitionFilterGroupsFiltersCategoryFilterConfigurationFilterListConfigurationOutputReference(this, "filter_list_configuration");
  public get filterListConfiguration() {
    return this._filterListConfiguration;
  }
  public putFilterListConfiguration(value: QuicksightTemplateDefinitionFilterGroupsFiltersCategoryFilterConfigurationFilterListConfiguration) {
    this._filterListConfiguration.internalValue = value;
  }
  public resetFilterListConfiguration() {
    this._filterListConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterListConfigurationInput() {
    return this._filterListConfiguration.internalValue;
  }
}
export interface QuicksightTemplateDefinitionFilterGroupsFiltersCategoryFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#filter_id QuicksightTemplate#filter_id}
  */
  readonly filterId: string;
  /**
  * column block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column QuicksightTemplate#column}
  */
  readonly column: QuicksightTemplateDefinitionFilterGroupsFiltersCategoryFilterColumn;
  /**
  * configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#configuration QuicksightTemplate#configuration}
  */
  readonly configuration: QuicksightTemplateDefinitionFilterGroupsFiltersCategoryFilterConfiguration;
}

export function quicksightTemplateDefinitionFilterGroupsFiltersCategoryFilterToTerraform(struct?: QuicksightTemplateDefinitionFilterGroupsFiltersCategoryFilterOutputReference | QuicksightTemplateDefinitionFilterGroupsFiltersCategoryFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_id: cdktf.stringToTerraform(struct!.filterId),
    column: quicksightTemplateDefinitionFilterGroupsFiltersCategoryFilterColumnToTerraform(struct!.column),
    configuration: quicksightTemplateDefinitionFilterGroupsFiltersCategoryFilterConfigurationToTerraform(struct!.configuration),
  }
}

export class QuicksightTemplateDefinitionFilterGroupsFiltersCategoryFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionFilterGroupsFiltersCategoryFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterId = this._filterId;
    }
    if (this._column?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column?.internalValue;
    }
    if (this._configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionFilterGroupsFiltersCategoryFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filterId = undefined;
      this._column.internalValue = undefined;
      this._configuration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filterId = value.filterId;
      this._column.internalValue = value.column;
      this._configuration.internalValue = value.configuration;
    }
  }

  // filter_id - computed: false, optional: false, required: true
  private _filterId?: string; 
  public get filterId() {
    return this.getStringAttribute('filter_id');
  }
  public set filterId(value: string) {
    this._filterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterIdInput() {
    return this._filterId;
  }

  // column - computed: false, optional: false, required: true
  private _column = new QuicksightTemplateDefinitionFilterGroupsFiltersCategoryFilterColumnOutputReference(this, "column");
  public get column() {
    return this._column;
  }
  public putColumn(value: QuicksightTemplateDefinitionFilterGroupsFiltersCategoryFilterColumn) {
    this._column.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }

  // configuration - computed: false, optional: false, required: true
  private _configuration = new QuicksightTemplateDefinitionFilterGroupsFiltersCategoryFilterConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: QuicksightTemplateDefinitionFilterGroupsFiltersCategoryFilterConfiguration) {
    this._configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }
}
export interface QuicksightTemplateDefinitionFilterGroupsFiltersNumericEqualityFilterAggregationFunctionNumericalAggregationFunctionPercentileAggregation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#percentile_value QuicksightTemplate#percentile_value}
  */
  readonly percentileValue?: number;
}

export function quicksightTemplateDefinitionFilterGroupsFiltersNumericEqualityFilterAggregationFunctionNumericalAggregationFunctionPercentileAggregationToTerraform(struct?: QuicksightTemplateDefinitionFilterGroupsFiltersNumericEqualityFilterAggregationFunctionNumericalAggregationFunctionPercentileAggregationOutputReference | QuicksightTemplateDefinitionFilterGroupsFiltersNumericEqualityFilterAggregationFunctionNumericalAggregationFunctionPercentileAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    percentile_value: cdktf.numberToTerraform(struct!.percentileValue),
  }
}

export class QuicksightTemplateDefinitionFilterGroupsFiltersNumericEqualityFilterAggregationFunctionNumericalAggregationFunctionPercentileAggregationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionFilterGroupsFiltersNumericEqualityFilterAggregationFunctionNumericalAggregationFunctionPercentileAggregation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._percentileValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentileValue = this._percentileValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionFilterGroupsFiltersNumericEqualityFilterAggregationFunctionNumericalAggregationFunctionPercentileAggregation | undefined) {
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
export interface QuicksightTemplateDefinitionFilterGroupsFiltersNumericEqualityFilterAggregationFunctionNumericalAggregationFunction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#simple_numerical_aggregation QuicksightTemplate#simple_numerical_aggregation}
  */
  readonly simpleNumericalAggregation?: string;
  /**
  * percentile_aggregation block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#percentile_aggregation QuicksightTemplate#percentile_aggregation}
  */
  readonly percentileAggregation?: QuicksightTemplateDefinitionFilterGroupsFiltersNumericEqualityFilterAggregationFunctionNumericalAggregationFunctionPercentileAggregation;
}

export function quicksightTemplateDefinitionFilterGroupsFiltersNumericEqualityFilterAggregationFunctionNumericalAggregationFunctionToTerraform(struct?: QuicksightTemplateDefinitionFilterGroupsFiltersNumericEqualityFilterAggregationFunctionNumericalAggregationFunctionOutputReference | QuicksightTemplateDefinitionFilterGroupsFiltersNumericEqualityFilterAggregationFunctionNumericalAggregationFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    simple_numerical_aggregation: cdktf.stringToTerraform(struct!.simpleNumericalAggregation),
    percentile_aggregation: quicksightTemplateDefinitionFilterGroupsFiltersNumericEqualityFilterAggregationFunctionNumericalAggregationFunctionPercentileAggregationToTerraform(struct!.percentileAggregation),
  }
}

export class QuicksightTemplateDefinitionFilterGroupsFiltersNumericEqualityFilterAggregationFunctionNumericalAggregationFunctionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionFilterGroupsFiltersNumericEqualityFilterAggregationFunctionNumericalAggregationFunction | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionFilterGroupsFiltersNumericEqualityFilterAggregationFunctionNumericalAggregationFunction | undefined) {
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
  private _percentileAggregation = new QuicksightTemplateDefinitionFilterGroupsFiltersNumericEqualityFilterAggregationFunctionNumericalAggregationFunctionPercentileAggregationOutputReference(this, "percentile_aggregation");
  public get percentileAggregation() {
    return this._percentileAggregation;
  }
  public putPercentileAggregation(value: QuicksightTemplateDefinitionFilterGroupsFiltersNumericEqualityFilterAggregationFunctionNumericalAggregationFunctionPercentileAggregation) {
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
export interface QuicksightTemplateDefinitionFilterGroupsFiltersNumericEqualityFilterAggregationFunction {
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
  readonly numericalAggregationFunction?: QuicksightTemplateDefinitionFilterGroupsFiltersNumericEqualityFilterAggregationFunctionNumericalAggregationFunction;
}

export function quicksightTemplateDefinitionFilterGroupsFiltersNumericEqualityFilterAggregationFunctionToTerraform(struct?: QuicksightTemplateDefinitionFilterGroupsFiltersNumericEqualityFilterAggregationFunctionOutputReference | QuicksightTemplateDefinitionFilterGroupsFiltersNumericEqualityFilterAggregationFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    categorical_aggregation_function: cdktf.stringToTerraform(struct!.categoricalAggregationFunction),
    date_aggregation_function: cdktf.stringToTerraform(struct!.dateAggregationFunction),
    numerical_aggregation_function: quicksightTemplateDefinitionFilterGroupsFiltersNumericEqualityFilterAggregationFunctionNumericalAggregationFunctionToTerraform(struct!.numericalAggregationFunction),
  }
}

export class QuicksightTemplateDefinitionFilterGroupsFiltersNumericEqualityFilterAggregationFunctionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionFilterGroupsFiltersNumericEqualityFilterAggregationFunction | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionFilterGroupsFiltersNumericEqualityFilterAggregationFunction | undefined) {
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
  private _numericalAggregationFunction = new QuicksightTemplateDefinitionFilterGroupsFiltersNumericEqualityFilterAggregationFunctionNumericalAggregationFunctionOutputReference(this, "numerical_aggregation_function");
  public get numericalAggregationFunction() {
    return this._numericalAggregationFunction;
  }
  public putNumericalAggregationFunction(value: QuicksightTemplateDefinitionFilterGroupsFiltersNumericEqualityFilterAggregationFunctionNumericalAggregationFunction) {
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
export interface QuicksightTemplateDefinitionFilterGroupsFiltersNumericEqualityFilterColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionFilterGroupsFiltersNumericEqualityFilterColumnToTerraform(struct?: QuicksightTemplateDefinitionFilterGroupsFiltersNumericEqualityFilterColumnOutputReference | QuicksightTemplateDefinitionFilterGroupsFiltersNumericEqualityFilterColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionFilterGroupsFiltersNumericEqualityFilterColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionFilterGroupsFiltersNumericEqualityFilterColumn | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionFilterGroupsFiltersNumericEqualityFilterColumn | undefined) {
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
export interface QuicksightTemplateDefinitionFilterGroupsFiltersNumericEqualityFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#filter_id QuicksightTemplate#filter_id}
  */
  readonly filterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#match_operator QuicksightTemplate#match_operator}
  */
  readonly matchOperator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_option QuicksightTemplate#null_option}
  */
  readonly nullOption: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#parameter_name QuicksightTemplate#parameter_name}
  */
  readonly parameterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#select_all_options QuicksightTemplate#select_all_options}
  */
  readonly selectAllOptions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#value QuicksightTemplate#value}
  */
  readonly value?: number;
  /**
  * aggregation_function block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#aggregation_function QuicksightTemplate#aggregation_function}
  */
  readonly aggregationFunction?: QuicksightTemplateDefinitionFilterGroupsFiltersNumericEqualityFilterAggregationFunction;
  /**
  * column block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column QuicksightTemplate#column}
  */
  readonly column: QuicksightTemplateDefinitionFilterGroupsFiltersNumericEqualityFilterColumn;
}

export function quicksightTemplateDefinitionFilterGroupsFiltersNumericEqualityFilterToTerraform(struct?: QuicksightTemplateDefinitionFilterGroupsFiltersNumericEqualityFilterOutputReference | QuicksightTemplateDefinitionFilterGroupsFiltersNumericEqualityFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_id: cdktf.stringToTerraform(struct!.filterId),
    match_operator: cdktf.stringToTerraform(struct!.matchOperator),
    null_option: cdktf.stringToTerraform(struct!.nullOption),
    parameter_name: cdktf.stringToTerraform(struct!.parameterName),
    select_all_options: cdktf.stringToTerraform(struct!.selectAllOptions),
    value: cdktf.numberToTerraform(struct!.value),
    aggregation_function: quicksightTemplateDefinitionFilterGroupsFiltersNumericEqualityFilterAggregationFunctionToTerraform(struct!.aggregationFunction),
    column: quicksightTemplateDefinitionFilterGroupsFiltersNumericEqualityFilterColumnToTerraform(struct!.column),
  }
}

export class QuicksightTemplateDefinitionFilterGroupsFiltersNumericEqualityFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionFilterGroupsFiltersNumericEqualityFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterId = this._filterId;
    }
    if (this._matchOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOperator = this._matchOperator;
    }
    if (this._nullOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullOption = this._nullOption;
    }
    if (this._parameterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterName = this._parameterName;
    }
    if (this._selectAllOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectAllOptions = this._selectAllOptions;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._aggregationFunction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregationFunction = this._aggregationFunction?.internalValue;
    }
    if (this._column?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionFilterGroupsFiltersNumericEqualityFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filterId = undefined;
      this._matchOperator = undefined;
      this._nullOption = undefined;
      this._parameterName = undefined;
      this._selectAllOptions = undefined;
      this._value = undefined;
      this._aggregationFunction.internalValue = undefined;
      this._column.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filterId = value.filterId;
      this._matchOperator = value.matchOperator;
      this._nullOption = value.nullOption;
      this._parameterName = value.parameterName;
      this._selectAllOptions = value.selectAllOptions;
      this._value = value.value;
      this._aggregationFunction.internalValue = value.aggregationFunction;
      this._column.internalValue = value.column;
    }
  }

  // filter_id - computed: false, optional: false, required: true
  private _filterId?: string; 
  public get filterId() {
    return this.getStringAttribute('filter_id');
  }
  public set filterId(value: string) {
    this._filterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterIdInput() {
    return this._filterId;
  }

  // match_operator - computed: false, optional: false, required: true
  private _matchOperator?: string; 
  public get matchOperator() {
    return this.getStringAttribute('match_operator');
  }
  public set matchOperator(value: string) {
    this._matchOperator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOperatorInput() {
    return this._matchOperator;
  }

  // null_option - computed: false, optional: false, required: true
  private _nullOption?: string; 
  public get nullOption() {
    return this.getStringAttribute('null_option');
  }
  public set nullOption(value: string) {
    this._nullOption = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nullOptionInput() {
    return this._nullOption;
  }

  // parameter_name - computed: false, optional: true, required: false
  private _parameterName?: string; 
  public get parameterName() {
    return this.getStringAttribute('parameter_name');
  }
  public set parameterName(value: string) {
    this._parameterName = value;
  }
  public resetParameterName() {
    this._parameterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterNameInput() {
    return this._parameterName;
  }

  // select_all_options - computed: false, optional: true, required: false
  private _selectAllOptions?: string; 
  public get selectAllOptions() {
    return this.getStringAttribute('select_all_options');
  }
  public set selectAllOptions(value: string) {
    this._selectAllOptions = value;
  }
  public resetSelectAllOptions() {
    this._selectAllOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectAllOptionsInput() {
    return this._selectAllOptions;
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // aggregation_function - computed: false, optional: true, required: false
  private _aggregationFunction = new QuicksightTemplateDefinitionFilterGroupsFiltersNumericEqualityFilterAggregationFunctionOutputReference(this, "aggregation_function");
  public get aggregationFunction() {
    return this._aggregationFunction;
  }
  public putAggregationFunction(value: QuicksightTemplateDefinitionFilterGroupsFiltersNumericEqualityFilterAggregationFunction) {
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
  private _column = new QuicksightTemplateDefinitionFilterGroupsFiltersNumericEqualityFilterColumnOutputReference(this, "column");
  public get column() {
    return this._column;
  }
  public putColumn(value: QuicksightTemplateDefinitionFilterGroupsFiltersNumericEqualityFilterColumn) {
    this._column.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }
}
export interface QuicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilterAggregationFunctionNumericalAggregationFunctionPercentileAggregation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#percentile_value QuicksightTemplate#percentile_value}
  */
  readonly percentileValue?: number;
}

export function quicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilterAggregationFunctionNumericalAggregationFunctionPercentileAggregationToTerraform(struct?: QuicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilterAggregationFunctionNumericalAggregationFunctionPercentileAggregationOutputReference | QuicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilterAggregationFunctionNumericalAggregationFunctionPercentileAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    percentile_value: cdktf.numberToTerraform(struct!.percentileValue),
  }
}

export class QuicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilterAggregationFunctionNumericalAggregationFunctionPercentileAggregationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilterAggregationFunctionNumericalAggregationFunctionPercentileAggregation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._percentileValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentileValue = this._percentileValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilterAggregationFunctionNumericalAggregationFunctionPercentileAggregation | undefined) {
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
export interface QuicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilterAggregationFunctionNumericalAggregationFunction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#simple_numerical_aggregation QuicksightTemplate#simple_numerical_aggregation}
  */
  readonly simpleNumericalAggregation?: string;
  /**
  * percentile_aggregation block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#percentile_aggregation QuicksightTemplate#percentile_aggregation}
  */
  readonly percentileAggregation?: QuicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilterAggregationFunctionNumericalAggregationFunctionPercentileAggregation;
}

export function quicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilterAggregationFunctionNumericalAggregationFunctionToTerraform(struct?: QuicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilterAggregationFunctionNumericalAggregationFunctionOutputReference | QuicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilterAggregationFunctionNumericalAggregationFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    simple_numerical_aggregation: cdktf.stringToTerraform(struct!.simpleNumericalAggregation),
    percentile_aggregation: quicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilterAggregationFunctionNumericalAggregationFunctionPercentileAggregationToTerraform(struct!.percentileAggregation),
  }
}

export class QuicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilterAggregationFunctionNumericalAggregationFunctionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilterAggregationFunctionNumericalAggregationFunction | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilterAggregationFunctionNumericalAggregationFunction | undefined) {
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
  private _percentileAggregation = new QuicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilterAggregationFunctionNumericalAggregationFunctionPercentileAggregationOutputReference(this, "percentile_aggregation");
  public get percentileAggregation() {
    return this._percentileAggregation;
  }
  public putPercentileAggregation(value: QuicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilterAggregationFunctionNumericalAggregationFunctionPercentileAggregation) {
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
export interface QuicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilterAggregationFunction {
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
  readonly numericalAggregationFunction?: QuicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilterAggregationFunctionNumericalAggregationFunction;
}

export function quicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilterAggregationFunctionToTerraform(struct?: QuicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilterAggregationFunctionOutputReference | QuicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilterAggregationFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    categorical_aggregation_function: cdktf.stringToTerraform(struct!.categoricalAggregationFunction),
    date_aggregation_function: cdktf.stringToTerraform(struct!.dateAggregationFunction),
    numerical_aggregation_function: quicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilterAggregationFunctionNumericalAggregationFunctionToTerraform(struct!.numericalAggregationFunction),
  }
}

export class QuicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilterAggregationFunctionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilterAggregationFunction | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilterAggregationFunction | undefined) {
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
  private _numericalAggregationFunction = new QuicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilterAggregationFunctionNumericalAggregationFunctionOutputReference(this, "numerical_aggregation_function");
  public get numericalAggregationFunction() {
    return this._numericalAggregationFunction;
  }
  public putNumericalAggregationFunction(value: QuicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilterAggregationFunctionNumericalAggregationFunction) {
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
export interface QuicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilterColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilterColumnToTerraform(struct?: QuicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilterColumnOutputReference | QuicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilterColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilterColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilterColumn | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilterColumn | undefined) {
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
export interface QuicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilterRangeMaximum {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#parameter QuicksightTemplate#parameter}
  */
  readonly parameter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#static_value QuicksightTemplate#static_value}
  */
  readonly staticValue?: number;
}

export function quicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilterRangeMaximumToTerraform(struct?: QuicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilterRangeMaximumOutputReference | QuicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilterRangeMaximum): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameter: cdktf.stringToTerraform(struct!.parameter),
    static_value: cdktf.numberToTerraform(struct!.staticValue),
  }
}

export class QuicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilterRangeMaximumOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilterRangeMaximum | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameter !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameter = this._parameter;
    }
    if (this._staticValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticValue = this._staticValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilterRangeMaximum | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._parameter = undefined;
      this._staticValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._parameter = value.parameter;
      this._staticValue = value.staticValue;
    }
  }

  // parameter - computed: false, optional: true, required: false
  private _parameter?: string; 
  public get parameter() {
    return this.getStringAttribute('parameter');
  }
  public set parameter(value: string) {
    this._parameter = value;
  }
  public resetParameter() {
    this._parameter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterInput() {
    return this._parameter;
  }

  // static_value - computed: false, optional: true, required: false
  private _staticValue?: number; 
  public get staticValue() {
    return this.getNumberAttribute('static_value');
  }
  public set staticValue(value: number) {
    this._staticValue = value;
  }
  public resetStaticValue() {
    this._staticValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticValueInput() {
    return this._staticValue;
  }
}
export interface QuicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilterRangeMinimum {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#parameter QuicksightTemplate#parameter}
  */
  readonly parameter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#static_value QuicksightTemplate#static_value}
  */
  readonly staticValue?: number;
}

export function quicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilterRangeMinimumToTerraform(struct?: QuicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilterRangeMinimumOutputReference | QuicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilterRangeMinimum): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameter: cdktf.stringToTerraform(struct!.parameter),
    static_value: cdktf.numberToTerraform(struct!.staticValue),
  }
}

export class QuicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilterRangeMinimumOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilterRangeMinimum | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameter !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameter = this._parameter;
    }
    if (this._staticValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticValue = this._staticValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilterRangeMinimum | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._parameter = undefined;
      this._staticValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._parameter = value.parameter;
      this._staticValue = value.staticValue;
    }
  }

  // parameter - computed: false, optional: true, required: false
  private _parameter?: string; 
  public get parameter() {
    return this.getStringAttribute('parameter');
  }
  public set parameter(value: string) {
    this._parameter = value;
  }
  public resetParameter() {
    this._parameter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterInput() {
    return this._parameter;
  }

  // static_value - computed: false, optional: true, required: false
  private _staticValue?: number; 
  public get staticValue() {
    return this.getNumberAttribute('static_value');
  }
  public set staticValue(value: number) {
    this._staticValue = value;
  }
  public resetStaticValue() {
    this._staticValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticValueInput() {
    return this._staticValue;
  }
}
export interface QuicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#filter_id QuicksightTemplate#filter_id}
  */
  readonly filterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#include_maximum QuicksightTemplate#include_maximum}
  */
  readonly includeMaximum?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#include_minimum QuicksightTemplate#include_minimum}
  */
  readonly includeMinimum?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_option QuicksightTemplate#null_option}
  */
  readonly nullOption: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#select_all_options QuicksightTemplate#select_all_options}
  */
  readonly selectAllOptions?: string;
  /**
  * aggregation_function block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#aggregation_function QuicksightTemplate#aggregation_function}
  */
  readonly aggregationFunction?: QuicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilterAggregationFunction;
  /**
  * column block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column QuicksightTemplate#column}
  */
  readonly column: QuicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilterColumn;
  /**
  * range_maximum block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#range_maximum QuicksightTemplate#range_maximum}
  */
  readonly rangeMaximum?: QuicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilterRangeMaximum;
  /**
  * range_minimum block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#range_minimum QuicksightTemplate#range_minimum}
  */
  readonly rangeMinimum?: QuicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilterRangeMinimum;
}

export function quicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilterToTerraform(struct?: QuicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilterOutputReference | QuicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_id: cdktf.stringToTerraform(struct!.filterId),
    include_maximum: cdktf.booleanToTerraform(struct!.includeMaximum),
    include_minimum: cdktf.booleanToTerraform(struct!.includeMinimum),
    null_option: cdktf.stringToTerraform(struct!.nullOption),
    select_all_options: cdktf.stringToTerraform(struct!.selectAllOptions),
    aggregation_function: quicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilterAggregationFunctionToTerraform(struct!.aggregationFunction),
    column: quicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilterColumnToTerraform(struct!.column),
    range_maximum: quicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilterRangeMaximumToTerraform(struct!.rangeMaximum),
    range_minimum: quicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilterRangeMinimumToTerraform(struct!.rangeMinimum),
  }
}

export class QuicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterId = this._filterId;
    }
    if (this._includeMaximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeMaximum = this._includeMaximum;
    }
    if (this._includeMinimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeMinimum = this._includeMinimum;
    }
    if (this._nullOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullOption = this._nullOption;
    }
    if (this._selectAllOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectAllOptions = this._selectAllOptions;
    }
    if (this._aggregationFunction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregationFunction = this._aggregationFunction?.internalValue;
    }
    if (this._column?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column?.internalValue;
    }
    if (this._rangeMaximum?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeMaximum = this._rangeMaximum?.internalValue;
    }
    if (this._rangeMinimum?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeMinimum = this._rangeMinimum?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filterId = undefined;
      this._includeMaximum = undefined;
      this._includeMinimum = undefined;
      this._nullOption = undefined;
      this._selectAllOptions = undefined;
      this._aggregationFunction.internalValue = undefined;
      this._column.internalValue = undefined;
      this._rangeMaximum.internalValue = undefined;
      this._rangeMinimum.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filterId = value.filterId;
      this._includeMaximum = value.includeMaximum;
      this._includeMinimum = value.includeMinimum;
      this._nullOption = value.nullOption;
      this._selectAllOptions = value.selectAllOptions;
      this._aggregationFunction.internalValue = value.aggregationFunction;
      this._column.internalValue = value.column;
      this._rangeMaximum.internalValue = value.rangeMaximum;
      this._rangeMinimum.internalValue = value.rangeMinimum;
    }
  }

  // filter_id - computed: false, optional: false, required: true
  private _filterId?: string; 
  public get filterId() {
    return this.getStringAttribute('filter_id');
  }
  public set filterId(value: string) {
    this._filterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterIdInput() {
    return this._filterId;
  }

  // include_maximum - computed: false, optional: true, required: false
  private _includeMaximum?: boolean | cdktf.IResolvable; 
  public get includeMaximum() {
    return this.getBooleanAttribute('include_maximum');
  }
  public set includeMaximum(value: boolean | cdktf.IResolvable) {
    this._includeMaximum = value;
  }
  public resetIncludeMaximum() {
    this._includeMaximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeMaximumInput() {
    return this._includeMaximum;
  }

  // include_minimum - computed: false, optional: true, required: false
  private _includeMinimum?: boolean | cdktf.IResolvable; 
  public get includeMinimum() {
    return this.getBooleanAttribute('include_minimum');
  }
  public set includeMinimum(value: boolean | cdktf.IResolvable) {
    this._includeMinimum = value;
  }
  public resetIncludeMinimum() {
    this._includeMinimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeMinimumInput() {
    return this._includeMinimum;
  }

  // null_option - computed: false, optional: false, required: true
  private _nullOption?: string; 
  public get nullOption() {
    return this.getStringAttribute('null_option');
  }
  public set nullOption(value: string) {
    this._nullOption = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nullOptionInput() {
    return this._nullOption;
  }

  // select_all_options - computed: false, optional: true, required: false
  private _selectAllOptions?: string; 
  public get selectAllOptions() {
    return this.getStringAttribute('select_all_options');
  }
  public set selectAllOptions(value: string) {
    this._selectAllOptions = value;
  }
  public resetSelectAllOptions() {
    this._selectAllOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectAllOptionsInput() {
    return this._selectAllOptions;
  }

  // aggregation_function - computed: false, optional: true, required: false
  private _aggregationFunction = new QuicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilterAggregationFunctionOutputReference(this, "aggregation_function");
  public get aggregationFunction() {
    return this._aggregationFunction;
  }
  public putAggregationFunction(value: QuicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilterAggregationFunction) {
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
  private _column = new QuicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilterColumnOutputReference(this, "column");
  public get column() {
    return this._column;
  }
  public putColumn(value: QuicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilterColumn) {
    this._column.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }

  // range_maximum - computed: false, optional: true, required: false
  private _rangeMaximum = new QuicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilterRangeMaximumOutputReference(this, "range_maximum");
  public get rangeMaximum() {
    return this._rangeMaximum;
  }
  public putRangeMaximum(value: QuicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilterRangeMaximum) {
    this._rangeMaximum.internalValue = value;
  }
  public resetRangeMaximum() {
    this._rangeMaximum.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeMaximumInput() {
    return this._rangeMaximum.internalValue;
  }

  // range_minimum - computed: false, optional: true, required: false
  private _rangeMinimum = new QuicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilterRangeMinimumOutputReference(this, "range_minimum");
  public get rangeMinimum() {
    return this._rangeMinimum;
  }
  public putRangeMinimum(value: QuicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilterRangeMinimum) {
    this._rangeMinimum.internalValue = value;
  }
  public resetRangeMinimum() {
    this._rangeMinimum.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeMinimumInput() {
    return this._rangeMinimum.internalValue;
  }
}
export interface QuicksightTemplateDefinitionFilterGroupsFiltersRelativeDatesFilterAnchorDateConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#anchor_option QuicksightTemplate#anchor_option}
  */
  readonly anchorOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#parameter_name QuicksightTemplate#parameter_name}
  */
  readonly parameterName?: string;
}

export function quicksightTemplateDefinitionFilterGroupsFiltersRelativeDatesFilterAnchorDateConfigurationToTerraform(struct?: QuicksightTemplateDefinitionFilterGroupsFiltersRelativeDatesFilterAnchorDateConfigurationOutputReference | QuicksightTemplateDefinitionFilterGroupsFiltersRelativeDatesFilterAnchorDateConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    anchor_option: cdktf.stringToTerraform(struct!.anchorOption),
    parameter_name: cdktf.stringToTerraform(struct!.parameterName),
  }
}

export class QuicksightTemplateDefinitionFilterGroupsFiltersRelativeDatesFilterAnchorDateConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionFilterGroupsFiltersRelativeDatesFilterAnchorDateConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anchorOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.anchorOption = this._anchorOption;
    }
    if (this._parameterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterName = this._parameterName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionFilterGroupsFiltersRelativeDatesFilterAnchorDateConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._anchorOption = undefined;
      this._parameterName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._anchorOption = value.anchorOption;
      this._parameterName = value.parameterName;
    }
  }

  // anchor_option - computed: false, optional: true, required: false
  private _anchorOption?: string; 
  public get anchorOption() {
    return this.getStringAttribute('anchor_option');
  }
  public set anchorOption(value: string) {
    this._anchorOption = value;
  }
  public resetAnchorOption() {
    this._anchorOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anchorOptionInput() {
    return this._anchorOption;
  }

  // parameter_name - computed: false, optional: true, required: false
  private _parameterName?: string; 
  public get parameterName() {
    return this.getStringAttribute('parameter_name');
  }
  public set parameterName(value: string) {
    this._parameterName = value;
  }
  public resetParameterName() {
    this._parameterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterNameInput() {
    return this._parameterName;
  }
}
export interface QuicksightTemplateDefinitionFilterGroupsFiltersRelativeDatesFilterColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionFilterGroupsFiltersRelativeDatesFilterColumnToTerraform(struct?: QuicksightTemplateDefinitionFilterGroupsFiltersRelativeDatesFilterColumnOutputReference | QuicksightTemplateDefinitionFilterGroupsFiltersRelativeDatesFilterColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionFilterGroupsFiltersRelativeDatesFilterColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionFilterGroupsFiltersRelativeDatesFilterColumn | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionFilterGroupsFiltersRelativeDatesFilterColumn | undefined) {
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
export interface QuicksightTemplateDefinitionFilterGroupsFiltersRelativeDatesFilterExcludePeriodConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#amount QuicksightTemplate#amount}
  */
  readonly amount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#granularity QuicksightTemplate#granularity}
  */
  readonly granularity: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#status QuicksightTemplate#status}
  */
  readonly status?: string;
}

export function quicksightTemplateDefinitionFilterGroupsFiltersRelativeDatesFilterExcludePeriodConfigurationToTerraform(struct?: QuicksightTemplateDefinitionFilterGroupsFiltersRelativeDatesFilterExcludePeriodConfigurationOutputReference | QuicksightTemplateDefinitionFilterGroupsFiltersRelativeDatesFilterExcludePeriodConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    amount: cdktf.numberToTerraform(struct!.amount),
    granularity: cdktf.stringToTerraform(struct!.granularity),
    status: cdktf.stringToTerraform(struct!.status),
  }
}

export class QuicksightTemplateDefinitionFilterGroupsFiltersRelativeDatesFilterExcludePeriodConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionFilterGroupsFiltersRelativeDatesFilterExcludePeriodConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amount !== undefined) {
      hasAnyValues = true;
      internalValueResult.amount = this._amount;
    }
    if (this._granularity !== undefined) {
      hasAnyValues = true;
      internalValueResult.granularity = this._granularity;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionFilterGroupsFiltersRelativeDatesFilterExcludePeriodConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._amount = undefined;
      this._granularity = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._amount = value.amount;
      this._granularity = value.granularity;
      this._status = value.status;
    }
  }

  // amount - computed: false, optional: false, required: true
  private _amount?: number; 
  public get amount() {
    return this.getNumberAttribute('amount');
  }
  public set amount(value: number) {
    this._amount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get amountInput() {
    return this._amount;
  }

  // granularity - computed: false, optional: false, required: true
  private _granularity?: string; 
  public get granularity() {
    return this.getStringAttribute('granularity');
  }
  public set granularity(value: string) {
    this._granularity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get granularityInput() {
    return this._granularity;
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
export interface QuicksightTemplateDefinitionFilterGroupsFiltersRelativeDatesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#filter_id QuicksightTemplate#filter_id}
  */
  readonly filterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#minimum_granularity QuicksightTemplate#minimum_granularity}
  */
  readonly minimumGranularity: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_option QuicksightTemplate#null_option}
  */
  readonly nullOption: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#parameter_name QuicksightTemplate#parameter_name}
  */
  readonly parameterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#relative_date_type QuicksightTemplate#relative_date_type}
  */
  readonly relativeDateType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#relative_date_value QuicksightTemplate#relative_date_value}
  */
  readonly relativeDateValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#time_granularity QuicksightTemplate#time_granularity}
  */
  readonly timeGranularity: string;
  /**
  * anchor_date_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#anchor_date_configuration QuicksightTemplate#anchor_date_configuration}
  */
  readonly anchorDateConfiguration: QuicksightTemplateDefinitionFilterGroupsFiltersRelativeDatesFilterAnchorDateConfiguration;
  /**
  * column block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column QuicksightTemplate#column}
  */
  readonly column: QuicksightTemplateDefinitionFilterGroupsFiltersRelativeDatesFilterColumn;
  /**
  * exclude_period_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#exclude_period_configuration QuicksightTemplate#exclude_period_configuration}
  */
  readonly excludePeriodConfiguration?: QuicksightTemplateDefinitionFilterGroupsFiltersRelativeDatesFilterExcludePeriodConfiguration;
}

export function quicksightTemplateDefinitionFilterGroupsFiltersRelativeDatesFilterToTerraform(struct?: QuicksightTemplateDefinitionFilterGroupsFiltersRelativeDatesFilterOutputReference | QuicksightTemplateDefinitionFilterGroupsFiltersRelativeDatesFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_id: cdktf.stringToTerraform(struct!.filterId),
    minimum_granularity: cdktf.stringToTerraform(struct!.minimumGranularity),
    null_option: cdktf.stringToTerraform(struct!.nullOption),
    parameter_name: cdktf.stringToTerraform(struct!.parameterName),
    relative_date_type: cdktf.stringToTerraform(struct!.relativeDateType),
    relative_date_value: cdktf.numberToTerraform(struct!.relativeDateValue),
    time_granularity: cdktf.stringToTerraform(struct!.timeGranularity),
    anchor_date_configuration: quicksightTemplateDefinitionFilterGroupsFiltersRelativeDatesFilterAnchorDateConfigurationToTerraform(struct!.anchorDateConfiguration),
    column: quicksightTemplateDefinitionFilterGroupsFiltersRelativeDatesFilterColumnToTerraform(struct!.column),
    exclude_period_configuration: quicksightTemplateDefinitionFilterGroupsFiltersRelativeDatesFilterExcludePeriodConfigurationToTerraform(struct!.excludePeriodConfiguration),
  }
}

export class QuicksightTemplateDefinitionFilterGroupsFiltersRelativeDatesFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionFilterGroupsFiltersRelativeDatesFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterId = this._filterId;
    }
    if (this._minimumGranularity !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumGranularity = this._minimumGranularity;
    }
    if (this._nullOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullOption = this._nullOption;
    }
    if (this._parameterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterName = this._parameterName;
    }
    if (this._relativeDateType !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativeDateType = this._relativeDateType;
    }
    if (this._relativeDateValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativeDateValue = this._relativeDateValue;
    }
    if (this._timeGranularity !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeGranularity = this._timeGranularity;
    }
    if (this._anchorDateConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.anchorDateConfiguration = this._anchorDateConfiguration?.internalValue;
    }
    if (this._column?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column?.internalValue;
    }
    if (this._excludePeriodConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludePeriodConfiguration = this._excludePeriodConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionFilterGroupsFiltersRelativeDatesFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filterId = undefined;
      this._minimumGranularity = undefined;
      this._nullOption = undefined;
      this._parameterName = undefined;
      this._relativeDateType = undefined;
      this._relativeDateValue = undefined;
      this._timeGranularity = undefined;
      this._anchorDateConfiguration.internalValue = undefined;
      this._column.internalValue = undefined;
      this._excludePeriodConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filterId = value.filterId;
      this._minimumGranularity = value.minimumGranularity;
      this._nullOption = value.nullOption;
      this._parameterName = value.parameterName;
      this._relativeDateType = value.relativeDateType;
      this._relativeDateValue = value.relativeDateValue;
      this._timeGranularity = value.timeGranularity;
      this._anchorDateConfiguration.internalValue = value.anchorDateConfiguration;
      this._column.internalValue = value.column;
      this._excludePeriodConfiguration.internalValue = value.excludePeriodConfiguration;
    }
  }

  // filter_id - computed: false, optional: false, required: true
  private _filterId?: string; 
  public get filterId() {
    return this.getStringAttribute('filter_id');
  }
  public set filterId(value: string) {
    this._filterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterIdInput() {
    return this._filterId;
  }

  // minimum_granularity - computed: false, optional: false, required: true
  private _minimumGranularity?: string; 
  public get minimumGranularity() {
    return this.getStringAttribute('minimum_granularity');
  }
  public set minimumGranularity(value: string) {
    this._minimumGranularity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumGranularityInput() {
    return this._minimumGranularity;
  }

  // null_option - computed: false, optional: false, required: true
  private _nullOption?: string; 
  public get nullOption() {
    return this.getStringAttribute('null_option');
  }
  public set nullOption(value: string) {
    this._nullOption = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nullOptionInput() {
    return this._nullOption;
  }

  // parameter_name - computed: false, optional: true, required: false
  private _parameterName?: string; 
  public get parameterName() {
    return this.getStringAttribute('parameter_name');
  }
  public set parameterName(value: string) {
    this._parameterName = value;
  }
  public resetParameterName() {
    this._parameterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterNameInput() {
    return this._parameterName;
  }

  // relative_date_type - computed: false, optional: false, required: true
  private _relativeDateType?: string; 
  public get relativeDateType() {
    return this.getStringAttribute('relative_date_type');
  }
  public set relativeDateType(value: string) {
    this._relativeDateType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeDateTypeInput() {
    return this._relativeDateType;
  }

  // relative_date_value - computed: false, optional: true, required: false
  private _relativeDateValue?: number; 
  public get relativeDateValue() {
    return this.getNumberAttribute('relative_date_value');
  }
  public set relativeDateValue(value: number) {
    this._relativeDateValue = value;
  }
  public resetRelativeDateValue() {
    this._relativeDateValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeDateValueInput() {
    return this._relativeDateValue;
  }

  // time_granularity - computed: false, optional: false, required: true
  private _timeGranularity?: string; 
  public get timeGranularity() {
    return this.getStringAttribute('time_granularity');
  }
  public set timeGranularity(value: string) {
    this._timeGranularity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeGranularityInput() {
    return this._timeGranularity;
  }

  // anchor_date_configuration - computed: false, optional: false, required: true
  private _anchorDateConfiguration = new QuicksightTemplateDefinitionFilterGroupsFiltersRelativeDatesFilterAnchorDateConfigurationOutputReference(this, "anchor_date_configuration");
  public get anchorDateConfiguration() {
    return this._anchorDateConfiguration;
  }
  public putAnchorDateConfiguration(value: QuicksightTemplateDefinitionFilterGroupsFiltersRelativeDatesFilterAnchorDateConfiguration) {
    this._anchorDateConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get anchorDateConfigurationInput() {
    return this._anchorDateConfiguration.internalValue;
  }

  // column - computed: false, optional: false, required: true
  private _column = new QuicksightTemplateDefinitionFilterGroupsFiltersRelativeDatesFilterColumnOutputReference(this, "column");
  public get column() {
    return this._column;
  }
  public putColumn(value: QuicksightTemplateDefinitionFilterGroupsFiltersRelativeDatesFilterColumn) {
    this._column.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }

  // exclude_period_configuration - computed: false, optional: true, required: false
  private _excludePeriodConfiguration = new QuicksightTemplateDefinitionFilterGroupsFiltersRelativeDatesFilterExcludePeriodConfigurationOutputReference(this, "exclude_period_configuration");
  public get excludePeriodConfiguration() {
    return this._excludePeriodConfiguration;
  }
  public putExcludePeriodConfiguration(value: QuicksightTemplateDefinitionFilterGroupsFiltersRelativeDatesFilterExcludePeriodConfiguration) {
    this._excludePeriodConfiguration.internalValue = value;
  }
  public resetExcludePeriodConfiguration() {
    this._excludePeriodConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludePeriodConfigurationInput() {
    return this._excludePeriodConfiguration.internalValue;
  }
}
export interface QuicksightTemplateDefinitionFilterGroupsFiltersTimeEqualityFilterColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionFilterGroupsFiltersTimeEqualityFilterColumnToTerraform(struct?: QuicksightTemplateDefinitionFilterGroupsFiltersTimeEqualityFilterColumnOutputReference | QuicksightTemplateDefinitionFilterGroupsFiltersTimeEqualityFilterColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionFilterGroupsFiltersTimeEqualityFilterColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionFilterGroupsFiltersTimeEqualityFilterColumn | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionFilterGroupsFiltersTimeEqualityFilterColumn | undefined) {
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
export interface QuicksightTemplateDefinitionFilterGroupsFiltersTimeEqualityFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#filter_id QuicksightTemplate#filter_id}
  */
  readonly filterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#parameter_name QuicksightTemplate#parameter_name}
  */
  readonly parameterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#time_granularity QuicksightTemplate#time_granularity}
  */
  readonly timeGranularity: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#value QuicksightTemplate#value}
  */
  readonly value?: string;
  /**
  * column block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column QuicksightTemplate#column}
  */
  readonly column: QuicksightTemplateDefinitionFilterGroupsFiltersTimeEqualityFilterColumn;
}

export function quicksightTemplateDefinitionFilterGroupsFiltersTimeEqualityFilterToTerraform(struct?: QuicksightTemplateDefinitionFilterGroupsFiltersTimeEqualityFilterOutputReference | QuicksightTemplateDefinitionFilterGroupsFiltersTimeEqualityFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_id: cdktf.stringToTerraform(struct!.filterId),
    parameter_name: cdktf.stringToTerraform(struct!.parameterName),
    time_granularity: cdktf.stringToTerraform(struct!.timeGranularity),
    value: cdktf.stringToTerraform(struct!.value),
    column: quicksightTemplateDefinitionFilterGroupsFiltersTimeEqualityFilterColumnToTerraform(struct!.column),
  }
}

export class QuicksightTemplateDefinitionFilterGroupsFiltersTimeEqualityFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionFilterGroupsFiltersTimeEqualityFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterId = this._filterId;
    }
    if (this._parameterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterName = this._parameterName;
    }
    if (this._timeGranularity !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeGranularity = this._timeGranularity;
    }
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

  public set internalValue(value: QuicksightTemplateDefinitionFilterGroupsFiltersTimeEqualityFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filterId = undefined;
      this._parameterName = undefined;
      this._timeGranularity = undefined;
      this._value = undefined;
      this._column.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filterId = value.filterId;
      this._parameterName = value.parameterName;
      this._timeGranularity = value.timeGranularity;
      this._value = value.value;
      this._column.internalValue = value.column;
    }
  }

  // filter_id - computed: false, optional: false, required: true
  private _filterId?: string; 
  public get filterId() {
    return this.getStringAttribute('filter_id');
  }
  public set filterId(value: string) {
    this._filterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterIdInput() {
    return this._filterId;
  }

  // parameter_name - computed: false, optional: true, required: false
  private _parameterName?: string; 
  public get parameterName() {
    return this.getStringAttribute('parameter_name');
  }
  public set parameterName(value: string) {
    this._parameterName = value;
  }
  public resetParameterName() {
    this._parameterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterNameInput() {
    return this._parameterName;
  }

  // time_granularity - computed: false, optional: false, required: true
  private _timeGranularity?: string; 
  public get timeGranularity() {
    return this.getStringAttribute('time_granularity');
  }
  public set timeGranularity(value: string) {
    this._timeGranularity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeGranularityInput() {
    return this._timeGranularity;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // column - computed: false, optional: false, required: true
  private _column = new QuicksightTemplateDefinitionFilterGroupsFiltersTimeEqualityFilterColumnOutputReference(this, "column");
  public get column() {
    return this._column;
  }
  public putColumn(value: QuicksightTemplateDefinitionFilterGroupsFiltersTimeEqualityFilterColumn) {
    this._column.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }
}
export interface QuicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilterColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilterColumnToTerraform(struct?: QuicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilterColumnOutputReference | QuicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilterColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilterColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilterColumn | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilterColumn | undefined) {
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
export interface QuicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilterExcludePeriodConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#amount QuicksightTemplate#amount}
  */
  readonly amount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#granularity QuicksightTemplate#granularity}
  */
  readonly granularity: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#status QuicksightTemplate#status}
  */
  readonly status?: string;
}

export function quicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilterExcludePeriodConfigurationToTerraform(struct?: QuicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilterExcludePeriodConfigurationOutputReference | QuicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilterExcludePeriodConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    amount: cdktf.numberToTerraform(struct!.amount),
    granularity: cdktf.stringToTerraform(struct!.granularity),
    status: cdktf.stringToTerraform(struct!.status),
  }
}

export class QuicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilterExcludePeriodConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilterExcludePeriodConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amount !== undefined) {
      hasAnyValues = true;
      internalValueResult.amount = this._amount;
    }
    if (this._granularity !== undefined) {
      hasAnyValues = true;
      internalValueResult.granularity = this._granularity;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilterExcludePeriodConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._amount = undefined;
      this._granularity = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._amount = value.amount;
      this._granularity = value.granularity;
      this._status = value.status;
    }
  }

  // amount - computed: false, optional: false, required: true
  private _amount?: number; 
  public get amount() {
    return this.getNumberAttribute('amount');
  }
  public set amount(value: number) {
    this._amount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get amountInput() {
    return this._amount;
  }

  // granularity - computed: false, optional: false, required: true
  private _granularity?: string; 
  public get granularity() {
    return this.getStringAttribute('granularity');
  }
  public set granularity(value: string) {
    this._granularity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get granularityInput() {
    return this._granularity;
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
export interface QuicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilterRangeMaximumValueRollingDate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#expression QuicksightTemplate#expression}
  */
  readonly expression: string;
}

export function quicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilterRangeMaximumValueRollingDateToTerraform(struct?: QuicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilterRangeMaximumValueRollingDateOutputReference | QuicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilterRangeMaximumValueRollingDate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
    expression: cdktf.stringToTerraform(struct!.expression),
  }
}

export class QuicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilterRangeMaximumValueRollingDateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilterRangeMaximumValueRollingDate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSetIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSetIdentifier = this._dataSetIdentifier;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilterRangeMaximumValueRollingDate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataSetIdentifier = undefined;
      this._expression = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataSetIdentifier = value.dataSetIdentifier;
      this._expression = value.expression;
    }
  }

  // data_set_identifier - computed: false, optional: true, required: false
  private _dataSetIdentifier?: string; 
  public get dataSetIdentifier() {
    return this.getStringAttribute('data_set_identifier');
  }
  public set dataSetIdentifier(value: string) {
    this._dataSetIdentifier = value;
  }
  public resetDataSetIdentifier() {
    this._dataSetIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSetIdentifierInput() {
    return this._dataSetIdentifier;
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
export interface QuicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilterRangeMaximumValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#parameter QuicksightTemplate#parameter}
  */
  readonly parameter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#static_value QuicksightTemplate#static_value}
  */
  readonly staticValue?: string;
  /**
  * rolling_date block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#rolling_date QuicksightTemplate#rolling_date}
  */
  readonly rollingDate?: QuicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilterRangeMaximumValueRollingDate;
}

export function quicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilterRangeMaximumValueToTerraform(struct?: QuicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilterRangeMaximumValueOutputReference | QuicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilterRangeMaximumValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameter: cdktf.stringToTerraform(struct!.parameter),
    static_value: cdktf.stringToTerraform(struct!.staticValue),
    rolling_date: quicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilterRangeMaximumValueRollingDateToTerraform(struct!.rollingDate),
  }
}

export class QuicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilterRangeMaximumValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilterRangeMaximumValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameter !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameter = this._parameter;
    }
    if (this._staticValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticValue = this._staticValue;
    }
    if (this._rollingDate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollingDate = this._rollingDate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilterRangeMaximumValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._parameter = undefined;
      this._staticValue = undefined;
      this._rollingDate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._parameter = value.parameter;
      this._staticValue = value.staticValue;
      this._rollingDate.internalValue = value.rollingDate;
    }
  }

  // parameter - computed: false, optional: true, required: false
  private _parameter?: string; 
  public get parameter() {
    return this.getStringAttribute('parameter');
  }
  public set parameter(value: string) {
    this._parameter = value;
  }
  public resetParameter() {
    this._parameter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterInput() {
    return this._parameter;
  }

  // static_value - computed: false, optional: true, required: false
  private _staticValue?: string; 
  public get staticValue() {
    return this.getStringAttribute('static_value');
  }
  public set staticValue(value: string) {
    this._staticValue = value;
  }
  public resetStaticValue() {
    this._staticValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticValueInput() {
    return this._staticValue;
  }

  // rolling_date - computed: false, optional: true, required: false
  private _rollingDate = new QuicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilterRangeMaximumValueRollingDateOutputReference(this, "rolling_date");
  public get rollingDate() {
    return this._rollingDate;
  }
  public putRollingDate(value: QuicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilterRangeMaximumValueRollingDate) {
    this._rollingDate.internalValue = value;
  }
  public resetRollingDate() {
    this._rollingDate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollingDateInput() {
    return this._rollingDate.internalValue;
  }
}
export interface QuicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilterRangeMinimumValueRollingDate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#expression QuicksightTemplate#expression}
  */
  readonly expression: string;
}

export function quicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilterRangeMinimumValueRollingDateToTerraform(struct?: QuicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilterRangeMinimumValueRollingDateOutputReference | QuicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilterRangeMinimumValueRollingDate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
    expression: cdktf.stringToTerraform(struct!.expression),
  }
}

export class QuicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilterRangeMinimumValueRollingDateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilterRangeMinimumValueRollingDate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSetIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSetIdentifier = this._dataSetIdentifier;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilterRangeMinimumValueRollingDate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataSetIdentifier = undefined;
      this._expression = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataSetIdentifier = value.dataSetIdentifier;
      this._expression = value.expression;
    }
  }

  // data_set_identifier - computed: false, optional: true, required: false
  private _dataSetIdentifier?: string; 
  public get dataSetIdentifier() {
    return this.getStringAttribute('data_set_identifier');
  }
  public set dataSetIdentifier(value: string) {
    this._dataSetIdentifier = value;
  }
  public resetDataSetIdentifier() {
    this._dataSetIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSetIdentifierInput() {
    return this._dataSetIdentifier;
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
export interface QuicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilterRangeMinimumValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#parameter QuicksightTemplate#parameter}
  */
  readonly parameter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#static_value QuicksightTemplate#static_value}
  */
  readonly staticValue?: string;
  /**
  * rolling_date block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#rolling_date QuicksightTemplate#rolling_date}
  */
  readonly rollingDate?: QuicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilterRangeMinimumValueRollingDate;
}

export function quicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilterRangeMinimumValueToTerraform(struct?: QuicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilterRangeMinimumValueOutputReference | QuicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilterRangeMinimumValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameter: cdktf.stringToTerraform(struct!.parameter),
    static_value: cdktf.stringToTerraform(struct!.staticValue),
    rolling_date: quicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilterRangeMinimumValueRollingDateToTerraform(struct!.rollingDate),
  }
}

export class QuicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilterRangeMinimumValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilterRangeMinimumValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameter !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameter = this._parameter;
    }
    if (this._staticValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticValue = this._staticValue;
    }
    if (this._rollingDate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollingDate = this._rollingDate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilterRangeMinimumValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._parameter = undefined;
      this._staticValue = undefined;
      this._rollingDate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._parameter = value.parameter;
      this._staticValue = value.staticValue;
      this._rollingDate.internalValue = value.rollingDate;
    }
  }

  // parameter - computed: false, optional: true, required: false
  private _parameter?: string; 
  public get parameter() {
    return this.getStringAttribute('parameter');
  }
  public set parameter(value: string) {
    this._parameter = value;
  }
  public resetParameter() {
    this._parameter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterInput() {
    return this._parameter;
  }

  // static_value - computed: false, optional: true, required: false
  private _staticValue?: string; 
  public get staticValue() {
    return this.getStringAttribute('static_value');
  }
  public set staticValue(value: string) {
    this._staticValue = value;
  }
  public resetStaticValue() {
    this._staticValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticValueInput() {
    return this._staticValue;
  }

  // rolling_date - computed: false, optional: true, required: false
  private _rollingDate = new QuicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilterRangeMinimumValueRollingDateOutputReference(this, "rolling_date");
  public get rollingDate() {
    return this._rollingDate;
  }
  public putRollingDate(value: QuicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilterRangeMinimumValueRollingDate) {
    this._rollingDate.internalValue = value;
  }
  public resetRollingDate() {
    this._rollingDate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollingDateInput() {
    return this._rollingDate.internalValue;
  }
}
export interface QuicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#filter_id QuicksightTemplate#filter_id}
  */
  readonly filterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#include_maximum QuicksightTemplate#include_maximum}
  */
  readonly includeMaximum?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#include_minimum QuicksightTemplate#include_minimum}
  */
  readonly includeMinimum?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#null_option QuicksightTemplate#null_option}
  */
  readonly nullOption: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#time_granularity QuicksightTemplate#time_granularity}
  */
  readonly timeGranularity: string;
  /**
  * column block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column QuicksightTemplate#column}
  */
  readonly column: QuicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilterColumn;
  /**
  * exclude_period_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#exclude_period_configuration QuicksightTemplate#exclude_period_configuration}
  */
  readonly excludePeriodConfiguration?: QuicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilterExcludePeriodConfiguration;
  /**
  * range_maximum_value block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#range_maximum_value QuicksightTemplate#range_maximum_value}
  */
  readonly rangeMaximumValue?: QuicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilterRangeMaximumValue;
  /**
  * range_minimum_value block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#range_minimum_value QuicksightTemplate#range_minimum_value}
  */
  readonly rangeMinimumValue?: QuicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilterRangeMinimumValue;
}

export function quicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilterToTerraform(struct?: QuicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilterOutputReference | QuicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_id: cdktf.stringToTerraform(struct!.filterId),
    include_maximum: cdktf.booleanToTerraform(struct!.includeMaximum),
    include_minimum: cdktf.booleanToTerraform(struct!.includeMinimum),
    null_option: cdktf.stringToTerraform(struct!.nullOption),
    time_granularity: cdktf.stringToTerraform(struct!.timeGranularity),
    column: quicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilterColumnToTerraform(struct!.column),
    exclude_period_configuration: quicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilterExcludePeriodConfigurationToTerraform(struct!.excludePeriodConfiguration),
    range_maximum_value: quicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilterRangeMaximumValueToTerraform(struct!.rangeMaximumValue),
    range_minimum_value: quicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilterRangeMinimumValueToTerraform(struct!.rangeMinimumValue),
  }
}

export class QuicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterId = this._filterId;
    }
    if (this._includeMaximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeMaximum = this._includeMaximum;
    }
    if (this._includeMinimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeMinimum = this._includeMinimum;
    }
    if (this._nullOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullOption = this._nullOption;
    }
    if (this._timeGranularity !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeGranularity = this._timeGranularity;
    }
    if (this._column?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column?.internalValue;
    }
    if (this._excludePeriodConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludePeriodConfiguration = this._excludePeriodConfiguration?.internalValue;
    }
    if (this._rangeMaximumValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeMaximumValue = this._rangeMaximumValue?.internalValue;
    }
    if (this._rangeMinimumValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeMinimumValue = this._rangeMinimumValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filterId = undefined;
      this._includeMaximum = undefined;
      this._includeMinimum = undefined;
      this._nullOption = undefined;
      this._timeGranularity = undefined;
      this._column.internalValue = undefined;
      this._excludePeriodConfiguration.internalValue = undefined;
      this._rangeMaximumValue.internalValue = undefined;
      this._rangeMinimumValue.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filterId = value.filterId;
      this._includeMaximum = value.includeMaximum;
      this._includeMinimum = value.includeMinimum;
      this._nullOption = value.nullOption;
      this._timeGranularity = value.timeGranularity;
      this._column.internalValue = value.column;
      this._excludePeriodConfiguration.internalValue = value.excludePeriodConfiguration;
      this._rangeMaximumValue.internalValue = value.rangeMaximumValue;
      this._rangeMinimumValue.internalValue = value.rangeMinimumValue;
    }
  }

  // filter_id - computed: false, optional: false, required: true
  private _filterId?: string; 
  public get filterId() {
    return this.getStringAttribute('filter_id');
  }
  public set filterId(value: string) {
    this._filterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterIdInput() {
    return this._filterId;
  }

  // include_maximum - computed: false, optional: true, required: false
  private _includeMaximum?: boolean | cdktf.IResolvable; 
  public get includeMaximum() {
    return this.getBooleanAttribute('include_maximum');
  }
  public set includeMaximum(value: boolean | cdktf.IResolvable) {
    this._includeMaximum = value;
  }
  public resetIncludeMaximum() {
    this._includeMaximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeMaximumInput() {
    return this._includeMaximum;
  }

  // include_minimum - computed: false, optional: true, required: false
  private _includeMinimum?: boolean | cdktf.IResolvable; 
  public get includeMinimum() {
    return this.getBooleanAttribute('include_minimum');
  }
  public set includeMinimum(value: boolean | cdktf.IResolvable) {
    this._includeMinimum = value;
  }
  public resetIncludeMinimum() {
    this._includeMinimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeMinimumInput() {
    return this._includeMinimum;
  }

  // null_option - computed: false, optional: false, required: true
  private _nullOption?: string; 
  public get nullOption() {
    return this.getStringAttribute('null_option');
  }
  public set nullOption(value: string) {
    this._nullOption = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nullOptionInput() {
    return this._nullOption;
  }

  // time_granularity - computed: false, optional: false, required: true
  private _timeGranularity?: string; 
  public get timeGranularity() {
    return this.getStringAttribute('time_granularity');
  }
  public set timeGranularity(value: string) {
    this._timeGranularity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeGranularityInput() {
    return this._timeGranularity;
  }

  // column - computed: false, optional: false, required: true
  private _column = new QuicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilterColumnOutputReference(this, "column");
  public get column() {
    return this._column;
  }
  public putColumn(value: QuicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilterColumn) {
    this._column.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }

  // exclude_period_configuration - computed: false, optional: true, required: false
  private _excludePeriodConfiguration = new QuicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilterExcludePeriodConfigurationOutputReference(this, "exclude_period_configuration");
  public get excludePeriodConfiguration() {
    return this._excludePeriodConfiguration;
  }
  public putExcludePeriodConfiguration(value: QuicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilterExcludePeriodConfiguration) {
    this._excludePeriodConfiguration.internalValue = value;
  }
  public resetExcludePeriodConfiguration() {
    this._excludePeriodConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludePeriodConfigurationInput() {
    return this._excludePeriodConfiguration.internalValue;
  }

  // range_maximum_value - computed: false, optional: true, required: false
  private _rangeMaximumValue = new QuicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilterRangeMaximumValueOutputReference(this, "range_maximum_value");
  public get rangeMaximumValue() {
    return this._rangeMaximumValue;
  }
  public putRangeMaximumValue(value: QuicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilterRangeMaximumValue) {
    this._rangeMaximumValue.internalValue = value;
  }
  public resetRangeMaximumValue() {
    this._rangeMaximumValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeMaximumValueInput() {
    return this._rangeMaximumValue.internalValue;
  }

  // range_minimum_value - computed: false, optional: true, required: false
  private _rangeMinimumValue = new QuicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilterRangeMinimumValueOutputReference(this, "range_minimum_value");
  public get rangeMinimumValue() {
    return this._rangeMinimumValue;
  }
  public putRangeMinimumValue(value: QuicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilterRangeMinimumValue) {
    this._rangeMinimumValue.internalValue = value;
  }
  public resetRangeMinimumValue() {
    this._rangeMinimumValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeMinimumValueInput() {
    return this._rangeMinimumValue.internalValue;
  }
}
export interface QuicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilterAggregationSortConfigurationAggregationFunctionNumericalAggregationFunctionPercentileAggregation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#percentile_value QuicksightTemplate#percentile_value}
  */
  readonly percentileValue?: number;
}

export function quicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilterAggregationSortConfigurationAggregationFunctionNumericalAggregationFunctionPercentileAggregationToTerraform(struct?: QuicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilterAggregationSortConfigurationAggregationFunctionNumericalAggregationFunctionPercentileAggregationOutputReference | QuicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilterAggregationSortConfigurationAggregationFunctionNumericalAggregationFunctionPercentileAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    percentile_value: cdktf.numberToTerraform(struct!.percentileValue),
  }
}

export class QuicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilterAggregationSortConfigurationAggregationFunctionNumericalAggregationFunctionPercentileAggregationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilterAggregationSortConfigurationAggregationFunctionNumericalAggregationFunctionPercentileAggregation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._percentileValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentileValue = this._percentileValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilterAggregationSortConfigurationAggregationFunctionNumericalAggregationFunctionPercentileAggregation | undefined) {
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
export interface QuicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilterAggregationSortConfigurationAggregationFunctionNumericalAggregationFunction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#simple_numerical_aggregation QuicksightTemplate#simple_numerical_aggregation}
  */
  readonly simpleNumericalAggregation?: string;
  /**
  * percentile_aggregation block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#percentile_aggregation QuicksightTemplate#percentile_aggregation}
  */
  readonly percentileAggregation?: QuicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilterAggregationSortConfigurationAggregationFunctionNumericalAggregationFunctionPercentileAggregation;
}

export function quicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilterAggregationSortConfigurationAggregationFunctionNumericalAggregationFunctionToTerraform(struct?: QuicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilterAggregationSortConfigurationAggregationFunctionNumericalAggregationFunctionOutputReference | QuicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilterAggregationSortConfigurationAggregationFunctionNumericalAggregationFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    simple_numerical_aggregation: cdktf.stringToTerraform(struct!.simpleNumericalAggregation),
    percentile_aggregation: quicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilterAggregationSortConfigurationAggregationFunctionNumericalAggregationFunctionPercentileAggregationToTerraform(struct!.percentileAggregation),
  }
}

export class QuicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilterAggregationSortConfigurationAggregationFunctionNumericalAggregationFunctionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilterAggregationSortConfigurationAggregationFunctionNumericalAggregationFunction | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilterAggregationSortConfigurationAggregationFunctionNumericalAggregationFunction | undefined) {
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
  private _percentileAggregation = new QuicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilterAggregationSortConfigurationAggregationFunctionNumericalAggregationFunctionPercentileAggregationOutputReference(this, "percentile_aggregation");
  public get percentileAggregation() {
    return this._percentileAggregation;
  }
  public putPercentileAggregation(value: QuicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilterAggregationSortConfigurationAggregationFunctionNumericalAggregationFunctionPercentileAggregation) {
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
export interface QuicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilterAggregationSortConfigurationAggregationFunction {
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
  readonly numericalAggregationFunction?: QuicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilterAggregationSortConfigurationAggregationFunctionNumericalAggregationFunction;
}

export function quicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilterAggregationSortConfigurationAggregationFunctionToTerraform(struct?: QuicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilterAggregationSortConfigurationAggregationFunctionOutputReference | QuicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilterAggregationSortConfigurationAggregationFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    categorical_aggregation_function: cdktf.stringToTerraform(struct!.categoricalAggregationFunction),
    date_aggregation_function: cdktf.stringToTerraform(struct!.dateAggregationFunction),
    numerical_aggregation_function: quicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilterAggregationSortConfigurationAggregationFunctionNumericalAggregationFunctionToTerraform(struct!.numericalAggregationFunction),
  }
}

export class QuicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilterAggregationSortConfigurationAggregationFunctionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilterAggregationSortConfigurationAggregationFunction | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilterAggregationSortConfigurationAggregationFunction | undefined) {
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
  private _numericalAggregationFunction = new QuicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilterAggregationSortConfigurationAggregationFunctionNumericalAggregationFunctionOutputReference(this, "numerical_aggregation_function");
  public get numericalAggregationFunction() {
    return this._numericalAggregationFunction;
  }
  public putNumericalAggregationFunction(value: QuicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilterAggregationSortConfigurationAggregationFunctionNumericalAggregationFunction) {
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
export interface QuicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilterAggregationSortConfigurationColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilterAggregationSortConfigurationColumnToTerraform(struct?: QuicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilterAggregationSortConfigurationColumnOutputReference | QuicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilterAggregationSortConfigurationColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilterAggregationSortConfigurationColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilterAggregationSortConfigurationColumn | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilterAggregationSortConfigurationColumn | undefined) {
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
export interface QuicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilterAggregationSortConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#sort_direction QuicksightTemplate#sort_direction}
  */
  readonly sortDirection: string;
  /**
  * aggregation_function block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#aggregation_function QuicksightTemplate#aggregation_function}
  */
  readonly aggregationFunction: QuicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilterAggregationSortConfigurationAggregationFunction;
  /**
  * column block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column QuicksightTemplate#column}
  */
  readonly column: QuicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilterAggregationSortConfigurationColumn;
}

export function quicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilterAggregationSortConfigurationToTerraform(struct?: QuicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilterAggregationSortConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sort_direction: cdktf.stringToTerraform(struct!.sortDirection),
    aggregation_function: quicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilterAggregationSortConfigurationAggregationFunctionToTerraform(struct!.aggregationFunction),
    column: quicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilterAggregationSortConfigurationColumnToTerraform(struct!.column),
  }
}

export class QuicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilterAggregationSortConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilterAggregationSortConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sortDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortDirection = this._sortDirection;
    }
    if (this._aggregationFunction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregationFunction = this._aggregationFunction?.internalValue;
    }
    if (this._column?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilterAggregationSortConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sortDirection = undefined;
      this._aggregationFunction.internalValue = undefined;
      this._column.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sortDirection = value.sortDirection;
      this._aggregationFunction.internalValue = value.aggregationFunction;
      this._column.internalValue = value.column;
    }
  }

  // sort_direction - computed: false, optional: false, required: true
  private _sortDirection?: string; 
  public get sortDirection() {
    return this.getStringAttribute('sort_direction');
  }
  public set sortDirection(value: string) {
    this._sortDirection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sortDirectionInput() {
    return this._sortDirection;
  }

  // aggregation_function - computed: false, optional: false, required: true
  private _aggregationFunction = new QuicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilterAggregationSortConfigurationAggregationFunctionOutputReference(this, "aggregation_function");
  public get aggregationFunction() {
    return this._aggregationFunction;
  }
  public putAggregationFunction(value: QuicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilterAggregationSortConfigurationAggregationFunction) {
    this._aggregationFunction.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationFunctionInput() {
    return this._aggregationFunction.internalValue;
  }

  // column - computed: false, optional: false, required: true
  private _column = new QuicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilterAggregationSortConfigurationColumnOutputReference(this, "column");
  public get column() {
    return this._column;
  }
  public putColumn(value: QuicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilterAggregationSortConfigurationColumn) {
    this._column.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }
}

export class QuicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilterAggregationSortConfigurationList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilterAggregationSortConfiguration[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilterAggregationSortConfigurationOutputReference {
    return new QuicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilterAggregationSortConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilterColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilterColumnToTerraform(struct?: QuicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilterColumnOutputReference | QuicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilterColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilterColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilterColumn | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilterColumn | undefined) {
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
export interface QuicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#filter_id QuicksightTemplate#filter_id}
  */
  readonly filterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#limit QuicksightTemplate#limit}
  */
  readonly limit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#parameter_name QuicksightTemplate#parameter_name}
  */
  readonly parameterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#time_granularity QuicksightTemplate#time_granularity}
  */
  readonly timeGranularity: string;
  /**
  * aggregation_sort_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#aggregation_sort_configuration QuicksightTemplate#aggregation_sort_configuration}
  */
  readonly aggregationSortConfiguration: QuicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilterAggregationSortConfiguration[] | cdktf.IResolvable;
  /**
  * column block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column QuicksightTemplate#column}
  */
  readonly column: QuicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilterColumn;
}

export function quicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilterToTerraform(struct?: QuicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilterOutputReference | QuicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_id: cdktf.stringToTerraform(struct!.filterId),
    limit: cdktf.numberToTerraform(struct!.limit),
    parameter_name: cdktf.stringToTerraform(struct!.parameterName),
    time_granularity: cdktf.stringToTerraform(struct!.timeGranularity),
    aggregation_sort_configuration: cdktf.listMapper(quicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilterAggregationSortConfigurationToTerraform, true)(struct!.aggregationSortConfiguration),
    column: quicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilterColumnToTerraform(struct!.column),
  }
}

export class QuicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterId = this._filterId;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._parameterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterName = this._parameterName;
    }
    if (this._timeGranularity !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeGranularity = this._timeGranularity;
    }
    if (this._aggregationSortConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregationSortConfiguration = this._aggregationSortConfiguration?.internalValue;
    }
    if (this._column?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filterId = undefined;
      this._limit = undefined;
      this._parameterName = undefined;
      this._timeGranularity = undefined;
      this._aggregationSortConfiguration.internalValue = undefined;
      this._column.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filterId = value.filterId;
      this._limit = value.limit;
      this._parameterName = value.parameterName;
      this._timeGranularity = value.timeGranularity;
      this._aggregationSortConfiguration.internalValue = value.aggregationSortConfiguration;
      this._column.internalValue = value.column;
    }
  }

  // filter_id - computed: false, optional: false, required: true
  private _filterId?: string; 
  public get filterId() {
    return this.getStringAttribute('filter_id');
  }
  public set filterId(value: string) {
    this._filterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterIdInput() {
    return this._filterId;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // parameter_name - computed: false, optional: true, required: false
  private _parameterName?: string; 
  public get parameterName() {
    return this.getStringAttribute('parameter_name');
  }
  public set parameterName(value: string) {
    this._parameterName = value;
  }
  public resetParameterName() {
    this._parameterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterNameInput() {
    return this._parameterName;
  }

  // time_granularity - computed: false, optional: false, required: true
  private _timeGranularity?: string; 
  public get timeGranularity() {
    return this.getStringAttribute('time_granularity');
  }
  public set timeGranularity(value: string) {
    this._timeGranularity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeGranularityInput() {
    return this._timeGranularity;
  }

  // aggregation_sort_configuration - computed: false, optional: false, required: true
  private _aggregationSortConfiguration = new QuicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilterAggregationSortConfigurationList(this, "aggregation_sort_configuration", false);
  public get aggregationSortConfiguration() {
    return this._aggregationSortConfiguration;
  }
  public putAggregationSortConfiguration(value: QuicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilterAggregationSortConfiguration[] | cdktf.IResolvable) {
    this._aggregationSortConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationSortConfigurationInput() {
    return this._aggregationSortConfiguration.internalValue;
  }

  // column - computed: false, optional: false, required: true
  private _column = new QuicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilterColumnOutputReference(this, "column");
  public get column() {
    return this._column;
  }
  public putColumn(value: QuicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilterColumn) {
    this._column.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }
}
export interface QuicksightTemplateDefinitionFilterGroupsFilters {
  /**
  * category_filter block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#category_filter QuicksightTemplate#category_filter}
  */
  readonly categoryFilter?: QuicksightTemplateDefinitionFilterGroupsFiltersCategoryFilter;
  /**
  * numeric_equality_filter block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#numeric_equality_filter QuicksightTemplate#numeric_equality_filter}
  */
  readonly numericEqualityFilter?: QuicksightTemplateDefinitionFilterGroupsFiltersNumericEqualityFilter;
  /**
  * numeric_range_filter block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#numeric_range_filter QuicksightTemplate#numeric_range_filter}
  */
  readonly numericRangeFilter?: QuicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilter;
  /**
  * relative_dates_filter block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#relative_dates_filter QuicksightTemplate#relative_dates_filter}
  */
  readonly relativeDatesFilter?: QuicksightTemplateDefinitionFilterGroupsFiltersRelativeDatesFilter;
  /**
  * time_equality_filter block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#time_equality_filter QuicksightTemplate#time_equality_filter}
  */
  readonly timeEqualityFilter?: QuicksightTemplateDefinitionFilterGroupsFiltersTimeEqualityFilter;
  /**
  * time_range_filter block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#time_range_filter QuicksightTemplate#time_range_filter}
  */
  readonly timeRangeFilter?: QuicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilter;
  /**
  * top_bottom_filter block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#top_bottom_filter QuicksightTemplate#top_bottom_filter}
  */
  readonly topBottomFilter?: QuicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilter;
}

export function quicksightTemplateDefinitionFilterGroupsFiltersToTerraform(struct?: QuicksightTemplateDefinitionFilterGroupsFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category_filter: quicksightTemplateDefinitionFilterGroupsFiltersCategoryFilterToTerraform(struct!.categoryFilter),
    numeric_equality_filter: quicksightTemplateDefinitionFilterGroupsFiltersNumericEqualityFilterToTerraform(struct!.numericEqualityFilter),
    numeric_range_filter: quicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilterToTerraform(struct!.numericRangeFilter),
    relative_dates_filter: quicksightTemplateDefinitionFilterGroupsFiltersRelativeDatesFilterToTerraform(struct!.relativeDatesFilter),
    time_equality_filter: quicksightTemplateDefinitionFilterGroupsFiltersTimeEqualityFilterToTerraform(struct!.timeEqualityFilter),
    time_range_filter: quicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilterToTerraform(struct!.timeRangeFilter),
    top_bottom_filter: quicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilterToTerraform(struct!.topBottomFilter),
  }
}

export class QuicksightTemplateDefinitionFilterGroupsFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionFilterGroupsFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._categoryFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.categoryFilter = this._categoryFilter?.internalValue;
    }
    if (this._numericEqualityFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numericEqualityFilter = this._numericEqualityFilter?.internalValue;
    }
    if (this._numericRangeFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numericRangeFilter = this._numericRangeFilter?.internalValue;
    }
    if (this._relativeDatesFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativeDatesFilter = this._relativeDatesFilter?.internalValue;
    }
    if (this._timeEqualityFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeEqualityFilter = this._timeEqualityFilter?.internalValue;
    }
    if (this._timeRangeFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeRangeFilter = this._timeRangeFilter?.internalValue;
    }
    if (this._topBottomFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topBottomFilter = this._topBottomFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionFilterGroupsFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._categoryFilter.internalValue = undefined;
      this._numericEqualityFilter.internalValue = undefined;
      this._numericRangeFilter.internalValue = undefined;
      this._relativeDatesFilter.internalValue = undefined;
      this._timeEqualityFilter.internalValue = undefined;
      this._timeRangeFilter.internalValue = undefined;
      this._topBottomFilter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._categoryFilter.internalValue = value.categoryFilter;
      this._numericEqualityFilter.internalValue = value.numericEqualityFilter;
      this._numericRangeFilter.internalValue = value.numericRangeFilter;
      this._relativeDatesFilter.internalValue = value.relativeDatesFilter;
      this._timeEqualityFilter.internalValue = value.timeEqualityFilter;
      this._timeRangeFilter.internalValue = value.timeRangeFilter;
      this._topBottomFilter.internalValue = value.topBottomFilter;
    }
  }

  // category_filter - computed: false, optional: true, required: false
  private _categoryFilter = new QuicksightTemplateDefinitionFilterGroupsFiltersCategoryFilterOutputReference(this, "category_filter");
  public get categoryFilter() {
    return this._categoryFilter;
  }
  public putCategoryFilter(value: QuicksightTemplateDefinitionFilterGroupsFiltersCategoryFilter) {
    this._categoryFilter.internalValue = value;
  }
  public resetCategoryFilter() {
    this._categoryFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryFilterInput() {
    return this._categoryFilter.internalValue;
  }

  // numeric_equality_filter - computed: false, optional: true, required: false
  private _numericEqualityFilter = new QuicksightTemplateDefinitionFilterGroupsFiltersNumericEqualityFilterOutputReference(this, "numeric_equality_filter");
  public get numericEqualityFilter() {
    return this._numericEqualityFilter;
  }
  public putNumericEqualityFilter(value: QuicksightTemplateDefinitionFilterGroupsFiltersNumericEqualityFilter) {
    this._numericEqualityFilter.internalValue = value;
  }
  public resetNumericEqualityFilter() {
    this._numericEqualityFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numericEqualityFilterInput() {
    return this._numericEqualityFilter.internalValue;
  }

  // numeric_range_filter - computed: false, optional: true, required: false
  private _numericRangeFilter = new QuicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilterOutputReference(this, "numeric_range_filter");
  public get numericRangeFilter() {
    return this._numericRangeFilter;
  }
  public putNumericRangeFilter(value: QuicksightTemplateDefinitionFilterGroupsFiltersNumericRangeFilter) {
    this._numericRangeFilter.internalValue = value;
  }
  public resetNumericRangeFilter() {
    this._numericRangeFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numericRangeFilterInput() {
    return this._numericRangeFilter.internalValue;
  }

  // relative_dates_filter - computed: false, optional: true, required: false
  private _relativeDatesFilter = new QuicksightTemplateDefinitionFilterGroupsFiltersRelativeDatesFilterOutputReference(this, "relative_dates_filter");
  public get relativeDatesFilter() {
    return this._relativeDatesFilter;
  }
  public putRelativeDatesFilter(value: QuicksightTemplateDefinitionFilterGroupsFiltersRelativeDatesFilter) {
    this._relativeDatesFilter.internalValue = value;
  }
  public resetRelativeDatesFilter() {
    this._relativeDatesFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeDatesFilterInput() {
    return this._relativeDatesFilter.internalValue;
  }

  // time_equality_filter - computed: false, optional: true, required: false
  private _timeEqualityFilter = new QuicksightTemplateDefinitionFilterGroupsFiltersTimeEqualityFilterOutputReference(this, "time_equality_filter");
  public get timeEqualityFilter() {
    return this._timeEqualityFilter;
  }
  public putTimeEqualityFilter(value: QuicksightTemplateDefinitionFilterGroupsFiltersTimeEqualityFilter) {
    this._timeEqualityFilter.internalValue = value;
  }
  public resetTimeEqualityFilter() {
    this._timeEqualityFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeEqualityFilterInput() {
    return this._timeEqualityFilter.internalValue;
  }

  // time_range_filter - computed: false, optional: true, required: false
  private _timeRangeFilter = new QuicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilterOutputReference(this, "time_range_filter");
  public get timeRangeFilter() {
    return this._timeRangeFilter;
  }
  public putTimeRangeFilter(value: QuicksightTemplateDefinitionFilterGroupsFiltersTimeRangeFilter) {
    this._timeRangeFilter.internalValue = value;
  }
  public resetTimeRangeFilter() {
    this._timeRangeFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeRangeFilterInput() {
    return this._timeRangeFilter.internalValue;
  }

  // top_bottom_filter - computed: false, optional: true, required: false
  private _topBottomFilter = new QuicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilterOutputReference(this, "top_bottom_filter");
  public get topBottomFilter() {
    return this._topBottomFilter;
  }
  public putTopBottomFilter(value: QuicksightTemplateDefinitionFilterGroupsFiltersTopBottomFilter) {
    this._topBottomFilter.internalValue = value;
  }
  public resetTopBottomFilter() {
    this._topBottomFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topBottomFilterInput() {
    return this._topBottomFilter.internalValue;
  }
}

export class QuicksightTemplateDefinitionFilterGroupsFiltersList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionFilterGroupsFilters[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionFilterGroupsFiltersOutputReference {
    return new QuicksightTemplateDefinitionFilterGroupsFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionFilterGroupsScopeConfigurationSelectedSheetsSheetVisualScopingConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#scope QuicksightTemplate#scope}
  */
  readonly scope: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#sheet_id QuicksightTemplate#sheet_id}
  */
  readonly sheetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visual_ids QuicksightTemplate#visual_ids}
  */
  readonly visualIds?: string[];
}

export function quicksightTemplateDefinitionFilterGroupsScopeConfigurationSelectedSheetsSheetVisualScopingConfigurationsToTerraform(struct?: QuicksightTemplateDefinitionFilterGroupsScopeConfigurationSelectedSheetsSheetVisualScopingConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    sheet_id: cdktf.stringToTerraform(struct!.sheetId),
    visual_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.visualIds),
  }
}

export class QuicksightTemplateDefinitionFilterGroupsScopeConfigurationSelectedSheetsSheetVisualScopingConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionFilterGroupsScopeConfigurationSelectedSheetsSheetVisualScopingConfigurations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._sheetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sheetId = this._sheetId;
    }
    if (this._visualIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.visualIds = this._visualIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionFilterGroupsScopeConfigurationSelectedSheetsSheetVisualScopingConfigurations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scope = undefined;
      this._sheetId = undefined;
      this._visualIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scope = value.scope;
      this._sheetId = value.sheetId;
      this._visualIds = value.visualIds;
    }
  }

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // sheet_id - computed: false, optional: false, required: true
  private _sheetId?: string; 
  public get sheetId() {
    return this.getStringAttribute('sheet_id');
  }
  public set sheetId(value: string) {
    this._sheetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sheetIdInput() {
    return this._sheetId;
  }

  // visual_ids - computed: false, optional: true, required: false
  private _visualIds?: string[]; 
  public get visualIds() {
    return cdktf.Fn.tolist(this.getListAttribute('visual_ids'));
  }
  public set visualIds(value: string[]) {
    this._visualIds = value;
  }
  public resetVisualIds() {
    this._visualIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visualIdsInput() {
    return this._visualIds;
  }
}

export class QuicksightTemplateDefinitionFilterGroupsScopeConfigurationSelectedSheetsSheetVisualScopingConfigurationsList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionFilterGroupsScopeConfigurationSelectedSheetsSheetVisualScopingConfigurations[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionFilterGroupsScopeConfigurationSelectedSheetsSheetVisualScopingConfigurationsOutputReference {
    return new QuicksightTemplateDefinitionFilterGroupsScopeConfigurationSelectedSheetsSheetVisualScopingConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionFilterGroupsScopeConfigurationSelectedSheets {
  /**
  * sheet_visual_scoping_configurations block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#sheet_visual_scoping_configurations QuicksightTemplate#sheet_visual_scoping_configurations}
  */
  readonly sheetVisualScopingConfigurations?: QuicksightTemplateDefinitionFilterGroupsScopeConfigurationSelectedSheetsSheetVisualScopingConfigurations[] | cdktf.IResolvable;
}

export function quicksightTemplateDefinitionFilterGroupsScopeConfigurationSelectedSheetsToTerraform(struct?: QuicksightTemplateDefinitionFilterGroupsScopeConfigurationSelectedSheetsOutputReference | QuicksightTemplateDefinitionFilterGroupsScopeConfigurationSelectedSheets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sheet_visual_scoping_configurations: cdktf.listMapper(quicksightTemplateDefinitionFilterGroupsScopeConfigurationSelectedSheetsSheetVisualScopingConfigurationsToTerraform, true)(struct!.sheetVisualScopingConfigurations),
  }
}

export class QuicksightTemplateDefinitionFilterGroupsScopeConfigurationSelectedSheetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionFilterGroupsScopeConfigurationSelectedSheets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sheetVisualScopingConfigurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sheetVisualScopingConfigurations = this._sheetVisualScopingConfigurations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionFilterGroupsScopeConfigurationSelectedSheets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sheetVisualScopingConfigurations.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sheetVisualScopingConfigurations.internalValue = value.sheetVisualScopingConfigurations;
    }
  }

  // sheet_visual_scoping_configurations - computed: false, optional: true, required: false
  private _sheetVisualScopingConfigurations = new QuicksightTemplateDefinitionFilterGroupsScopeConfigurationSelectedSheetsSheetVisualScopingConfigurationsList(this, "sheet_visual_scoping_configurations", false);
  public get sheetVisualScopingConfigurations() {
    return this._sheetVisualScopingConfigurations;
  }
  public putSheetVisualScopingConfigurations(value: QuicksightTemplateDefinitionFilterGroupsScopeConfigurationSelectedSheetsSheetVisualScopingConfigurations[] | cdktf.IResolvable) {
    this._sheetVisualScopingConfigurations.internalValue = value;
  }
  public resetSheetVisualScopingConfigurations() {
    this._sheetVisualScopingConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sheetVisualScopingConfigurationsInput() {
    return this._sheetVisualScopingConfigurations.internalValue;
  }
}
export interface QuicksightTemplateDefinitionFilterGroupsScopeConfiguration {
  /**
  * selected_sheets block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#selected_sheets QuicksightTemplate#selected_sheets}
  */
  readonly selectedSheets?: QuicksightTemplateDefinitionFilterGroupsScopeConfigurationSelectedSheets;
}

export function quicksightTemplateDefinitionFilterGroupsScopeConfigurationToTerraform(struct?: QuicksightTemplateDefinitionFilterGroupsScopeConfigurationOutputReference | QuicksightTemplateDefinitionFilterGroupsScopeConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    selected_sheets: quicksightTemplateDefinitionFilterGroupsScopeConfigurationSelectedSheetsToTerraform(struct!.selectedSheets),
  }
}

export class QuicksightTemplateDefinitionFilterGroupsScopeConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionFilterGroupsScopeConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._selectedSheets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectedSheets = this._selectedSheets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionFilterGroupsScopeConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._selectedSheets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._selectedSheets.internalValue = value.selectedSheets;
    }
  }

  // selected_sheets - computed: false, optional: true, required: false
  private _selectedSheets = new QuicksightTemplateDefinitionFilterGroupsScopeConfigurationSelectedSheetsOutputReference(this, "selected_sheets");
  public get selectedSheets() {
    return this._selectedSheets;
  }
  public putSelectedSheets(value: QuicksightTemplateDefinitionFilterGroupsScopeConfigurationSelectedSheets) {
    this._selectedSheets.internalValue = value;
  }
  public resetSelectedSheets() {
    this._selectedSheets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedSheetsInput() {
    return this._selectedSheets.internalValue;
  }
}
export interface QuicksightTemplateDefinitionFilterGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#cross_dataset QuicksightTemplate#cross_dataset}
  */
  readonly crossDataset: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#filter_group_id QuicksightTemplate#filter_group_id}
  */
  readonly filterGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#status QuicksightTemplate#status}
  */
  readonly status?: string;
  /**
  * filters block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#filters QuicksightTemplate#filters}
  */
  readonly filters: QuicksightTemplateDefinitionFilterGroupsFilters[] | cdktf.IResolvable;
  /**
  * scope_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#scope_configuration QuicksightTemplate#scope_configuration}
  */
  readonly scopeConfiguration: QuicksightTemplateDefinitionFilterGroupsScopeConfiguration;
}

export function quicksightTemplateDefinitionFilterGroupsToTerraform(struct?: QuicksightTemplateDefinitionFilterGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cross_dataset: cdktf.stringToTerraform(struct!.crossDataset),
    filter_group_id: cdktf.stringToTerraform(struct!.filterGroupId),
    status: cdktf.stringToTerraform(struct!.status),
    filters: cdktf.listMapper(quicksightTemplateDefinitionFilterGroupsFiltersToTerraform, true)(struct!.filters),
    scope_configuration: quicksightTemplateDefinitionFilterGroupsScopeConfigurationToTerraform(struct!.scopeConfiguration),
  }
}

export class QuicksightTemplateDefinitionFilterGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionFilterGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crossDataset !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossDataset = this._crossDataset;
    }
    if (this._filterGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterGroupId = this._filterGroupId;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._filters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters?.internalValue;
    }
    if (this._scopeConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopeConfiguration = this._scopeConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionFilterGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._crossDataset = undefined;
      this._filterGroupId = undefined;
      this._status = undefined;
      this._filters.internalValue = undefined;
      this._scopeConfiguration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._crossDataset = value.crossDataset;
      this._filterGroupId = value.filterGroupId;
      this._status = value.status;
      this._filters.internalValue = value.filters;
      this._scopeConfiguration.internalValue = value.scopeConfiguration;
    }
  }

  // cross_dataset - computed: false, optional: false, required: true
  private _crossDataset?: string; 
  public get crossDataset() {
    return this.getStringAttribute('cross_dataset');
  }
  public set crossDataset(value: string) {
    this._crossDataset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get crossDatasetInput() {
    return this._crossDataset;
  }

  // filter_group_id - computed: false, optional: false, required: true
  private _filterGroupId?: string; 
  public get filterGroupId() {
    return this.getStringAttribute('filter_group_id');
  }
  public set filterGroupId(value: string) {
    this._filterGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterGroupIdInput() {
    return this._filterGroupId;
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

  // filters - computed: false, optional: false, required: true
  private _filters = new QuicksightTemplateDefinitionFilterGroupsFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: QuicksightTemplateDefinitionFilterGroupsFilters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // scope_configuration - computed: false, optional: false, required: true
  private _scopeConfiguration = new QuicksightTemplateDefinitionFilterGroupsScopeConfigurationOutputReference(this, "scope_configuration");
  public get scopeConfiguration() {
    return this._scopeConfiguration;
  }
  public putScopeConfiguration(value: QuicksightTemplateDefinitionFilterGroupsScopeConfiguration) {
    this._scopeConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeConfigurationInput() {
    return this._scopeConfiguration.internalValue;
  }
}

export class QuicksightTemplateDefinitionFilterGroupsList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionFilterGroups[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionFilterGroupsOutputReference {
    return new QuicksightTemplateDefinitionFilterGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationDefaultValuesDynamicValueDefaultValueColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationDefaultValuesDynamicValueDefaultValueColumnToTerraform(struct?: QuicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationDefaultValuesDynamicValueDefaultValueColumnOutputReference | QuicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationDefaultValuesDynamicValueDefaultValueColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationDefaultValuesDynamicValueDefaultValueColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationDefaultValuesDynamicValueDefaultValueColumn | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationDefaultValuesDynamicValueDefaultValueColumn | undefined) {
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
export interface QuicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationDefaultValuesDynamicValueGroupNameColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationDefaultValuesDynamicValueGroupNameColumnToTerraform(struct?: QuicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationDefaultValuesDynamicValueGroupNameColumnOutputReference | QuicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationDefaultValuesDynamicValueGroupNameColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationDefaultValuesDynamicValueGroupNameColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationDefaultValuesDynamicValueGroupNameColumn | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionParametersDeclarationsDateTimeParameterDeclarationDefaultValuesDynamicValueGroupNameColumn | undefined) {
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
