import * as cdktf from 'cdktf';
import { QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsFontConfigurationFontSize,
quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsFontConfigurationFontSizeToTerraform,
QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsFontConfigurationFontSizeOutputReference,
QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsApplyTo,
quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsApplyToToTerraform,
QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsApplyToOutputReference,
QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWells,
quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsToTerraform,
QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsOutputReference,
QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationForecastConfigurations,
quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationForecastConfigurationsToTerraform,
QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationForecastConfigurationsList,
QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationLegend,
quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationLegendToTerraform,
QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationLegendOutputReference,
QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationPrimaryYAxisDisplayOptions,
quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationPrimaryYAxisDisplayOptionsToTerraform,
QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationPrimaryYAxisDisplayOptionsOutputReference,
QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationPrimaryYAxisLabelOptions,
quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationPrimaryYAxisLabelOptionsToTerraform,
QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationPrimaryYAxisLabelOptionsOutputReference,
QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationReferenceLines,
quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationReferenceLinesToTerraform,
QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationReferenceLinesList,
QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSecondaryYAxisDisplayOptions,
quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSecondaryYAxisDisplayOptionsToTerraform,
QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSecondaryYAxisDisplayOptionsOutputReference } from './structs15600'
import { QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationContributionAnalysisDefaults,
quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationContributionAnalysisDefaultsToTerraform,
QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationContributionAnalysisDefaultsList,
QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationDataLabels,
quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationDataLabelsToTerraform,
QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationDataLabelsOutputReference,
QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationDefaultSeriesSettings,
quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationDefaultSeriesSettingsToTerraform,
QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationDefaultSeriesSettingsOutputReference,
QuicksightTemplateDefinitionSheetsVisualsLineChartVisualActions,
quicksightTemplateDefinitionSheetsVisualsLineChartVisualActionsToTerraform,
QuicksightTemplateDefinitionSheetsVisualsLineChartVisualActionsList } from './structs14800'
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsFontConfigurationFontWeight {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#name QuicksightTemplate#name}
  */
  readonly name?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsFontConfigurationFontWeightToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsFontConfigurationFontWeightOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsFontConfigurationFontWeightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsFontConfigurationFontWeight | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsFontConfiguration {
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
  readonly fontSize?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsFontConfigurationFontSize;
  /**
  * font_weight block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_weight QuicksightTemplate#font_weight}
  */
  readonly fontWeight?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsFontConfigurationFontWeight;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsFontConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsFontConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    font_color: cdktf.stringToTerraform(struct!.fontColor),
    font_decoration: cdktf.stringToTerraform(struct!.fontDecoration),
    font_style: cdktf.stringToTerraform(struct!.fontStyle),
    font_size: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsFontConfigurationFontSizeToTerraform(struct!.fontSize),
    font_weight: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsFontConfigurationFontWeightToTerraform(struct!.fontWeight),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsFontConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsFontConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsFontConfiguration | undefined) {
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
  private _fontSize = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsFontConfigurationFontSizeOutputReference(this, "font_size");
  public get fontSize() {
    return this._fontSize;
  }
  public putFontSize(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsFontConfigurationFontSize) {
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
  private _fontWeight = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsFontConfigurationFontWeightOutputReference(this, "font_weight");
  public get fontWeight() {
    return this._fontWeight;
  }
  public putFontWeight(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsFontConfigurationFontWeight) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#custom_label QuicksightTemplate#custom_label}
  */
  readonly customLabel?: string;
  /**
  * apply_to block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#apply_to QuicksightTemplate#apply_to}
  */
  readonly applyTo?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsApplyTo;
  /**
  * font_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_configuration QuicksightTemplate#font_configuration}
  */
  readonly fontConfiguration?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsFontConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_label: cdktf.stringToTerraform(struct!.customLabel),
    apply_to: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsApplyToToTerraform(struct!.applyTo),
    font_configuration: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsFontConfigurationToTerraform(struct!.fontConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptions | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptions | undefined) {
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
  private _applyTo = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsApplyToOutputReference(this, "apply_to");
  public get applyTo() {
    return this._applyTo;
  }
  public putApplyTo(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsApplyTo) {
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
  private _fontConfiguration = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsFontConfigurationOutputReference(this, "font_configuration");
  public get fontConfiguration() {
    return this._fontConfiguration;
  }
  public putFontConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsFontConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSecondaryYAxisLabelOptions {
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
  readonly axisLabelOptions?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptions;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSecondaryYAxisLabelOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSecondaryYAxisLabelOptionsOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSecondaryYAxisLabelOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sort_icon_visibility: cdktf.stringToTerraform(struct!.sortIconVisibility),
    visibility: cdktf.stringToTerraform(struct!.visibility),
    axis_label_options: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsToTerraform(struct!.axisLabelOptions),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSecondaryYAxisLabelOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSecondaryYAxisLabelOptions | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSecondaryYAxisLabelOptions | undefined) {
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
  private _axisLabelOptions = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptionsOutputReference(this, "axis_label_options");
  public get axisLabelOptions() {
    return this._axisLabelOptions;
  }
  public putAxisLabelOptions(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSecondaryYAxisLabelOptionsAxisLabelOptions) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesDataFieldSeriesItemSettingsLineStyleSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#line_interpolation QuicksightTemplate#line_interpolation}
  */
  readonly lineInterpolation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#line_style QuicksightTemplate#line_style}
  */
  readonly lineStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#line_visibility QuicksightTemplate#line_visibility}
  */
  readonly lineVisibility?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#line_width QuicksightTemplate#line_width}
  */
  readonly lineWidth?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesDataFieldSeriesItemSettingsLineStyleSettingsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesDataFieldSeriesItemSettingsLineStyleSettingsOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesDataFieldSeriesItemSettingsLineStyleSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    line_interpolation: cdktf.stringToTerraform(struct!.lineInterpolation),
    line_style: cdktf.stringToTerraform(struct!.lineStyle),
    line_visibility: cdktf.stringToTerraform(struct!.lineVisibility),
    line_width: cdktf.stringToTerraform(struct!.lineWidth),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesDataFieldSeriesItemSettingsLineStyleSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesDataFieldSeriesItemSettingsLineStyleSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lineInterpolation !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineInterpolation = this._lineInterpolation;
    }
    if (this._lineStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineStyle = this._lineStyle;
    }
    if (this._lineVisibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineVisibility = this._lineVisibility;
    }
    if (this._lineWidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineWidth = this._lineWidth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesDataFieldSeriesItemSettingsLineStyleSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lineInterpolation = undefined;
      this._lineStyle = undefined;
      this._lineVisibility = undefined;
      this._lineWidth = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lineInterpolation = value.lineInterpolation;
      this._lineStyle = value.lineStyle;
      this._lineVisibility = value.lineVisibility;
      this._lineWidth = value.lineWidth;
    }
  }

  // line_interpolation - computed: false, optional: true, required: false
  private _lineInterpolation?: string; 
  public get lineInterpolation() {
    return this.getStringAttribute('line_interpolation');
  }
  public set lineInterpolation(value: string) {
    this._lineInterpolation = value;
  }
  public resetLineInterpolation() {
    this._lineInterpolation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineInterpolationInput() {
    return this._lineInterpolation;
  }

  // line_style - computed: false, optional: true, required: false
  private _lineStyle?: string; 
  public get lineStyle() {
    return this.getStringAttribute('line_style');
  }
  public set lineStyle(value: string) {
    this._lineStyle = value;
  }
  public resetLineStyle() {
    this._lineStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineStyleInput() {
    return this._lineStyle;
  }

  // line_visibility - computed: false, optional: true, required: false
  private _lineVisibility?: string; 
  public get lineVisibility() {
    return this.getStringAttribute('line_visibility');
  }
  public set lineVisibility(value: string) {
    this._lineVisibility = value;
  }
  public resetLineVisibility() {
    this._lineVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineVisibilityInput() {
    return this._lineVisibility;
  }

  // line_width - computed: false, optional: true, required: false
  private _lineWidth?: string; 
  public get lineWidth() {
    return this.getStringAttribute('line_width');
  }
  public set lineWidth(value: string) {
    this._lineWidth = value;
  }
  public resetLineWidth() {
    this._lineWidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineWidthInput() {
    return this._lineWidth;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesDataFieldSeriesItemSettingsMarkerStyleSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#marker_color QuicksightTemplate#marker_color}
  */
  readonly markerColor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#marker_shape QuicksightTemplate#marker_shape}
  */
  readonly markerShape?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#marker_size QuicksightTemplate#marker_size}
  */
  readonly markerSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#marker_visibility QuicksightTemplate#marker_visibility}
  */
  readonly markerVisibility?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesDataFieldSeriesItemSettingsMarkerStyleSettingsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesDataFieldSeriesItemSettingsMarkerStyleSettingsOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesDataFieldSeriesItemSettingsMarkerStyleSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    marker_color: cdktf.stringToTerraform(struct!.markerColor),
    marker_shape: cdktf.stringToTerraform(struct!.markerShape),
    marker_size: cdktf.stringToTerraform(struct!.markerSize),
    marker_visibility: cdktf.stringToTerraform(struct!.markerVisibility),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesDataFieldSeriesItemSettingsMarkerStyleSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesDataFieldSeriesItemSettingsMarkerStyleSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._markerColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.markerColor = this._markerColor;
    }
    if (this._markerShape !== undefined) {
      hasAnyValues = true;
      internalValueResult.markerShape = this._markerShape;
    }
    if (this._markerSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.markerSize = this._markerSize;
    }
    if (this._markerVisibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.markerVisibility = this._markerVisibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesDataFieldSeriesItemSettingsMarkerStyleSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._markerColor = undefined;
      this._markerShape = undefined;
      this._markerSize = undefined;
      this._markerVisibility = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._markerColor = value.markerColor;
      this._markerShape = value.markerShape;
      this._markerSize = value.markerSize;
      this._markerVisibility = value.markerVisibility;
    }
  }

  // marker_color - computed: false, optional: true, required: false
  private _markerColor?: string; 
  public get markerColor() {
    return this.getStringAttribute('marker_color');
  }
  public set markerColor(value: string) {
    this._markerColor = value;
  }
  public resetMarkerColor() {
    this._markerColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markerColorInput() {
    return this._markerColor;
  }

  // marker_shape - computed: false, optional: true, required: false
  private _markerShape?: string; 
  public get markerShape() {
    return this.getStringAttribute('marker_shape');
  }
  public set markerShape(value: string) {
    this._markerShape = value;
  }
  public resetMarkerShape() {
    this._markerShape = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markerShapeInput() {
    return this._markerShape;
  }

  // marker_size - computed: false, optional: true, required: false
  private _markerSize?: string; 
  public get markerSize() {
    return this.getStringAttribute('marker_size');
  }
  public set markerSize(value: string) {
    this._markerSize = value;
  }
  public resetMarkerSize() {
    this._markerSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markerSizeInput() {
    return this._markerSize;
  }

  // marker_visibility - computed: false, optional: true, required: false
  private _markerVisibility?: string; 
  public get markerVisibility() {
    return this.getStringAttribute('marker_visibility');
  }
  public set markerVisibility(value: string) {
    this._markerVisibility = value;
  }
  public resetMarkerVisibility() {
    this._markerVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markerVisibilityInput() {
    return this._markerVisibility;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesDataFieldSeriesItemSettings {
  /**
  * line_style_settings block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#line_style_settings QuicksightTemplate#line_style_settings}
  */
  readonly lineStyleSettings?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesDataFieldSeriesItemSettingsLineStyleSettings;
  /**
  * marker_style_settings block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#marker_style_settings QuicksightTemplate#marker_style_settings}
  */
  readonly markerStyleSettings?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesDataFieldSeriesItemSettingsMarkerStyleSettings;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesDataFieldSeriesItemSettingsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesDataFieldSeriesItemSettingsOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesDataFieldSeriesItemSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    line_style_settings: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesDataFieldSeriesItemSettingsLineStyleSettingsToTerraform(struct!.lineStyleSettings),
    marker_style_settings: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesDataFieldSeriesItemSettingsMarkerStyleSettingsToTerraform(struct!.markerStyleSettings),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesDataFieldSeriesItemSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesDataFieldSeriesItemSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lineStyleSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineStyleSettings = this._lineStyleSettings?.internalValue;
    }
    if (this._markerStyleSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.markerStyleSettings = this._markerStyleSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesDataFieldSeriesItemSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lineStyleSettings.internalValue = undefined;
      this._markerStyleSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lineStyleSettings.internalValue = value.lineStyleSettings;
      this._markerStyleSettings.internalValue = value.markerStyleSettings;
    }
  }

  // line_style_settings - computed: false, optional: true, required: false
  private _lineStyleSettings = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesDataFieldSeriesItemSettingsLineStyleSettingsOutputReference(this, "line_style_settings");
  public get lineStyleSettings() {
    return this._lineStyleSettings;
  }
  public putLineStyleSettings(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesDataFieldSeriesItemSettingsLineStyleSettings) {
    this._lineStyleSettings.internalValue = value;
  }
  public resetLineStyleSettings() {
    this._lineStyleSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineStyleSettingsInput() {
    return this._lineStyleSettings.internalValue;
  }

  // marker_style_settings - computed: false, optional: true, required: false
  private _markerStyleSettings = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesDataFieldSeriesItemSettingsMarkerStyleSettingsOutputReference(this, "marker_style_settings");
  public get markerStyleSettings() {
    return this._markerStyleSettings;
  }
  public putMarkerStyleSettings(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesDataFieldSeriesItemSettingsMarkerStyleSettings) {
    this._markerStyleSettings.internalValue = value;
  }
  public resetMarkerStyleSettings() {
    this._markerStyleSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markerStyleSettingsInput() {
    return this._markerStyleSettings.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesDataFieldSeriesItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#axis_binding QuicksightTemplate#axis_binding}
  */
  readonly axisBinding: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_id QuicksightTemplate#field_id}
  */
  readonly fieldId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_value QuicksightTemplate#field_value}
  */
  readonly fieldValue?: string;
  /**
  * settings block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#settings QuicksightTemplate#settings}
  */
  readonly settings?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesDataFieldSeriesItemSettings;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesDataFieldSeriesItemToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesDataFieldSeriesItemOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesDataFieldSeriesItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    axis_binding: cdktf.stringToTerraform(struct!.axisBinding),
    field_id: cdktf.stringToTerraform(struct!.fieldId),
    field_value: cdktf.stringToTerraform(struct!.fieldValue),
    settings: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesDataFieldSeriesItemSettingsToTerraform(struct!.settings),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesDataFieldSeriesItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesDataFieldSeriesItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._axisBinding !== undefined) {
      hasAnyValues = true;
      internalValueResult.axisBinding = this._axisBinding;
    }
    if (this._fieldId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldId = this._fieldId;
    }
    if (this._fieldValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldValue = this._fieldValue;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesDataFieldSeriesItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._axisBinding = undefined;
      this._fieldId = undefined;
      this._fieldValue = undefined;
      this._settings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._axisBinding = value.axisBinding;
      this._fieldId = value.fieldId;
      this._fieldValue = value.fieldValue;
      this._settings.internalValue = value.settings;
    }
  }

  // axis_binding - computed: false, optional: false, required: true
  private _axisBinding?: string; 
  public get axisBinding() {
    return this.getStringAttribute('axis_binding');
  }
  public set axisBinding(value: string) {
    this._axisBinding = value;
  }
  // Temporarily expose input value. Use with caution.
  public get axisBindingInput() {
    return this._axisBinding;
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

  // settings - computed: false, optional: true, required: false
  private _settings = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesDataFieldSeriesItemSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesDataFieldSeriesItemSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesFieldSeriesItemSettingsLineStyleSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#line_interpolation QuicksightTemplate#line_interpolation}
  */
  readonly lineInterpolation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#line_style QuicksightTemplate#line_style}
  */
  readonly lineStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#line_visibility QuicksightTemplate#line_visibility}
  */
  readonly lineVisibility?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#line_width QuicksightTemplate#line_width}
  */
  readonly lineWidth?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesFieldSeriesItemSettingsLineStyleSettingsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesFieldSeriesItemSettingsLineStyleSettingsOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesFieldSeriesItemSettingsLineStyleSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    line_interpolation: cdktf.stringToTerraform(struct!.lineInterpolation),
    line_style: cdktf.stringToTerraform(struct!.lineStyle),
    line_visibility: cdktf.stringToTerraform(struct!.lineVisibility),
    line_width: cdktf.stringToTerraform(struct!.lineWidth),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesFieldSeriesItemSettingsLineStyleSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesFieldSeriesItemSettingsLineStyleSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lineInterpolation !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineInterpolation = this._lineInterpolation;
    }
    if (this._lineStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineStyle = this._lineStyle;
    }
    if (this._lineVisibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineVisibility = this._lineVisibility;
    }
    if (this._lineWidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineWidth = this._lineWidth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesFieldSeriesItemSettingsLineStyleSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lineInterpolation = undefined;
      this._lineStyle = undefined;
      this._lineVisibility = undefined;
      this._lineWidth = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lineInterpolation = value.lineInterpolation;
      this._lineStyle = value.lineStyle;
      this._lineVisibility = value.lineVisibility;
      this._lineWidth = value.lineWidth;
    }
  }

  // line_interpolation - computed: false, optional: true, required: false
  private _lineInterpolation?: string; 
  public get lineInterpolation() {
    return this.getStringAttribute('line_interpolation');
  }
  public set lineInterpolation(value: string) {
    this._lineInterpolation = value;
  }
  public resetLineInterpolation() {
    this._lineInterpolation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineInterpolationInput() {
    return this._lineInterpolation;
  }

  // line_style - computed: false, optional: true, required: false
  private _lineStyle?: string; 
  public get lineStyle() {
    return this.getStringAttribute('line_style');
  }
  public set lineStyle(value: string) {
    this._lineStyle = value;
  }
  public resetLineStyle() {
    this._lineStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineStyleInput() {
    return this._lineStyle;
  }

  // line_visibility - computed: false, optional: true, required: false
  private _lineVisibility?: string; 
  public get lineVisibility() {
    return this.getStringAttribute('line_visibility');
  }
  public set lineVisibility(value: string) {
    this._lineVisibility = value;
  }
  public resetLineVisibility() {
    this._lineVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineVisibilityInput() {
    return this._lineVisibility;
  }

  // line_width - computed: false, optional: true, required: false
  private _lineWidth?: string; 
  public get lineWidth() {
    return this.getStringAttribute('line_width');
  }
  public set lineWidth(value: string) {
    this._lineWidth = value;
  }
  public resetLineWidth() {
    this._lineWidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineWidthInput() {
    return this._lineWidth;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesFieldSeriesItemSettingsMarkerStyleSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#marker_color QuicksightTemplate#marker_color}
  */
  readonly markerColor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#marker_shape QuicksightTemplate#marker_shape}
  */
  readonly markerShape?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#marker_size QuicksightTemplate#marker_size}
  */
  readonly markerSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#marker_visibility QuicksightTemplate#marker_visibility}
  */
  readonly markerVisibility?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesFieldSeriesItemSettingsMarkerStyleSettingsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesFieldSeriesItemSettingsMarkerStyleSettingsOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesFieldSeriesItemSettingsMarkerStyleSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    marker_color: cdktf.stringToTerraform(struct!.markerColor),
    marker_shape: cdktf.stringToTerraform(struct!.markerShape),
    marker_size: cdktf.stringToTerraform(struct!.markerSize),
    marker_visibility: cdktf.stringToTerraform(struct!.markerVisibility),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesFieldSeriesItemSettingsMarkerStyleSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesFieldSeriesItemSettingsMarkerStyleSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._markerColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.markerColor = this._markerColor;
    }
    if (this._markerShape !== undefined) {
      hasAnyValues = true;
      internalValueResult.markerShape = this._markerShape;
    }
    if (this._markerSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.markerSize = this._markerSize;
    }
    if (this._markerVisibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.markerVisibility = this._markerVisibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesFieldSeriesItemSettingsMarkerStyleSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._markerColor = undefined;
      this._markerShape = undefined;
      this._markerSize = undefined;
      this._markerVisibility = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._markerColor = value.markerColor;
      this._markerShape = value.markerShape;
      this._markerSize = value.markerSize;
      this._markerVisibility = value.markerVisibility;
    }
  }

  // marker_color - computed: false, optional: true, required: false
  private _markerColor?: string; 
  public get markerColor() {
    return this.getStringAttribute('marker_color');
  }
  public set markerColor(value: string) {
    this._markerColor = value;
  }
  public resetMarkerColor() {
    this._markerColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markerColorInput() {
    return this._markerColor;
  }

  // marker_shape - computed: false, optional: true, required: false
  private _markerShape?: string; 
  public get markerShape() {
    return this.getStringAttribute('marker_shape');
  }
  public set markerShape(value: string) {
    this._markerShape = value;
  }
  public resetMarkerShape() {
    this._markerShape = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markerShapeInput() {
    return this._markerShape;
  }

  // marker_size - computed: false, optional: true, required: false
  private _markerSize?: string; 
  public get markerSize() {
    return this.getStringAttribute('marker_size');
  }
  public set markerSize(value: string) {
    this._markerSize = value;
  }
  public resetMarkerSize() {
    this._markerSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markerSizeInput() {
    return this._markerSize;
  }

  // marker_visibility - computed: false, optional: true, required: false
  private _markerVisibility?: string; 
  public get markerVisibility() {
    return this.getStringAttribute('marker_visibility');
  }
  public set markerVisibility(value: string) {
    this._markerVisibility = value;
  }
  public resetMarkerVisibility() {
    this._markerVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markerVisibilityInput() {
    return this._markerVisibility;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesFieldSeriesItemSettings {
  /**
  * line_style_settings block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#line_style_settings QuicksightTemplate#line_style_settings}
  */
  readonly lineStyleSettings?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesFieldSeriesItemSettingsLineStyleSettings;
  /**
  * marker_style_settings block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#marker_style_settings QuicksightTemplate#marker_style_settings}
  */
  readonly markerStyleSettings?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesFieldSeriesItemSettingsMarkerStyleSettings;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesFieldSeriesItemSettingsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesFieldSeriesItemSettingsOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesFieldSeriesItemSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    line_style_settings: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesFieldSeriesItemSettingsLineStyleSettingsToTerraform(struct!.lineStyleSettings),
    marker_style_settings: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesFieldSeriesItemSettingsMarkerStyleSettingsToTerraform(struct!.markerStyleSettings),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesFieldSeriesItemSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesFieldSeriesItemSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lineStyleSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineStyleSettings = this._lineStyleSettings?.internalValue;
    }
    if (this._markerStyleSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.markerStyleSettings = this._markerStyleSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesFieldSeriesItemSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lineStyleSettings.internalValue = undefined;
      this._markerStyleSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lineStyleSettings.internalValue = value.lineStyleSettings;
      this._markerStyleSettings.internalValue = value.markerStyleSettings;
    }
  }

  // line_style_settings - computed: false, optional: true, required: false
  private _lineStyleSettings = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesFieldSeriesItemSettingsLineStyleSettingsOutputReference(this, "line_style_settings");
  public get lineStyleSettings() {
    return this._lineStyleSettings;
  }
  public putLineStyleSettings(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesFieldSeriesItemSettingsLineStyleSettings) {
    this._lineStyleSettings.internalValue = value;
  }
  public resetLineStyleSettings() {
    this._lineStyleSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineStyleSettingsInput() {
    return this._lineStyleSettings.internalValue;
  }

  // marker_style_settings - computed: false, optional: true, required: false
  private _markerStyleSettings = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesFieldSeriesItemSettingsMarkerStyleSettingsOutputReference(this, "marker_style_settings");
  public get markerStyleSettings() {
    return this._markerStyleSettings;
  }
  public putMarkerStyleSettings(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesFieldSeriesItemSettingsMarkerStyleSettings) {
    this._markerStyleSettings.internalValue = value;
  }
  public resetMarkerStyleSettings() {
    this._markerStyleSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markerStyleSettingsInput() {
    return this._markerStyleSettings.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesFieldSeriesItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#axis_binding QuicksightTemplate#axis_binding}
  */
  readonly axisBinding: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_id QuicksightTemplate#field_id}
  */
  readonly fieldId: string;
  /**
  * settings block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#settings QuicksightTemplate#settings}
  */
  readonly settings?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesFieldSeriesItemSettings;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesFieldSeriesItemToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesFieldSeriesItemOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesFieldSeriesItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    axis_binding: cdktf.stringToTerraform(struct!.axisBinding),
    field_id: cdktf.stringToTerraform(struct!.fieldId),
    settings: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesFieldSeriesItemSettingsToTerraform(struct!.settings),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesFieldSeriesItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesFieldSeriesItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._axisBinding !== undefined) {
      hasAnyValues = true;
      internalValueResult.axisBinding = this._axisBinding;
    }
    if (this._fieldId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldId = this._fieldId;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesFieldSeriesItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._axisBinding = undefined;
      this._fieldId = undefined;
      this._settings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._axisBinding = value.axisBinding;
      this._fieldId = value.fieldId;
      this._settings.internalValue = value.settings;
    }
  }

  // axis_binding - computed: false, optional: false, required: true
  private _axisBinding?: string; 
  public get axisBinding() {
    return this.getStringAttribute('axis_binding');
  }
  public set axisBinding(value: string) {
    this._axisBinding = value;
  }
  // Temporarily expose input value. Use with caution.
  public get axisBindingInput() {
    return this._axisBinding;
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

  // settings - computed: false, optional: true, required: false
  private _settings = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesFieldSeriesItemSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesFieldSeriesItemSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeries {
  /**
  * data_field_series_item block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_field_series_item QuicksightTemplate#data_field_series_item}
  */
  readonly dataFieldSeriesItem?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesDataFieldSeriesItem;
  /**
  * field_series_item block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_series_item QuicksightTemplate#field_series_item}
  */
  readonly fieldSeriesItem?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesFieldSeriesItem;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_field_series_item: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesDataFieldSeriesItemToTerraform(struct!.dataFieldSeriesItem),
    field_series_item: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesFieldSeriesItemToTerraform(struct!.fieldSeriesItem),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataFieldSeriesItem?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataFieldSeriesItem = this._dataFieldSeriesItem?.internalValue;
    }
    if (this._fieldSeriesItem?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldSeriesItem = this._fieldSeriesItem?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataFieldSeriesItem.internalValue = undefined;
      this._fieldSeriesItem.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataFieldSeriesItem.internalValue = value.dataFieldSeriesItem;
      this._fieldSeriesItem.internalValue = value.fieldSeriesItem;
    }
  }

  // data_field_series_item - computed: false, optional: true, required: false
  private _dataFieldSeriesItem = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesDataFieldSeriesItemOutputReference(this, "data_field_series_item");
  public get dataFieldSeriesItem() {
    return this._dataFieldSeriesItem;
  }
  public putDataFieldSeriesItem(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesDataFieldSeriesItem) {
    this._dataFieldSeriesItem.internalValue = value;
  }
  public resetDataFieldSeriesItem() {
    this._dataFieldSeriesItem.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFieldSeriesItemInput() {
    return this._dataFieldSeriesItem.internalValue;
  }

  // field_series_item - computed: false, optional: true, required: false
  private _fieldSeriesItem = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesFieldSeriesItemOutputReference(this, "field_series_item");
  public get fieldSeriesItem() {
    return this._fieldSeriesItem;
  }
  public putFieldSeriesItem(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesFieldSeriesItem) {
    this._fieldSeriesItem.internalValue = value;
  }
  public resetFieldSeriesItem() {
    this._fieldSeriesItem.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldSeriesItemInput() {
    return this._fieldSeriesItem.internalValue;
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeries[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesOutputReference {
    return new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationFontSize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#relative QuicksightTemplate#relative}
  */
  readonly relative?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationFontSizeToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationFontSizeOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relative: cdktf.stringToTerraform(struct!.relative),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationFontSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relative !== undefined) {
      hasAnyValues = true;
      internalValueResult.relative = this._relative;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationFontSize | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationFontWeight {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#name QuicksightTemplate#name}
  */
  readonly name?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationFontWeightToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationFontWeightOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationFontWeightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationFontWeight | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfiguration {
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
  readonly fontSize?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationFontSize;
  /**
  * font_weight block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_weight QuicksightTemplate#font_weight}
  */
  readonly fontWeight?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationFontWeight;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    font_color: cdktf.stringToTerraform(struct!.fontColor),
    font_decoration: cdktf.stringToTerraform(struct!.fontDecoration),
    font_style: cdktf.stringToTerraform(struct!.fontStyle),
    font_size: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationFontSizeToTerraform(struct!.fontSize),
    font_weight: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationFontWeightToTerraform(struct!.fontWeight),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfiguration | undefined) {
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
  private _fontSize = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationFontSizeOutputReference(this, "font_size");
  public get fontSize() {
    return this._fontSize;
  }
  public putFontSize(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationFontSize) {
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
  private _fontWeight = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationFontWeightOutputReference(this, "font_weight");
  public get fontWeight() {
    return this._fontWeight;
  }
  public putFontWeight(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationFontWeight) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitle {
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
  readonly fontConfiguration?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    horizontal_text_alignment: cdktf.stringToTerraform(struct!.horizontalTextAlignment),
    visibility: cdktf.stringToTerraform(struct!.visibility),
    font_configuration: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationToTerraform(struct!.fontConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitle | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitle | undefined) {
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
  private _fontConfiguration = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfigurationOutputReference(this, "font_configuration");
  public get fontConfiguration() {
    return this._fontConfiguration;
  }
  public putFontConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleFontConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSmallMultiplesOptionsPanelConfiguration {
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
  readonly title?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitle;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSmallMultiplesOptionsPanelConfiguration): any {
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
    title: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleToTerraform(struct!.title),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSmallMultiplesOptionsPanelConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSmallMultiplesOptionsPanelConfiguration | undefined) {
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
  private _title = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitleOutputReference(this, "title");
  public get title() {
    return this._title;
  }
  public putTitle(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationTitle) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSmallMultiplesOptions {
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
  readonly panelConfiguration?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSmallMultiplesOptionsPanelConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSmallMultiplesOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSmallMultiplesOptionsOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSmallMultiplesOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_visible_columns: cdktf.numberToTerraform(struct!.maxVisibleColumns),
    max_visible_rows: cdktf.numberToTerraform(struct!.maxVisibleRows),
    panel_configuration: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationToTerraform(struct!.panelConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSmallMultiplesOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSmallMultiplesOptions | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSmallMultiplesOptions | undefined) {
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
  private _panelConfiguration = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSmallMultiplesOptionsPanelConfigurationOutputReference(this, "panel_configuration");
  public get panelConfiguration() {
    return this._panelConfiguration;
  }
  public putPanelConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSmallMultiplesOptionsPanelConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategoryItemsLimitConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#items_limit QuicksightTemplate#items_limit}
  */
  readonly itemsLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#other_categories QuicksightTemplate#other_categories}
  */
  readonly otherCategories: string;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategoryItemsLimitConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategoryItemsLimitConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategoryItemsLimitConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items_limit: cdktf.numberToTerraform(struct!.itemsLimit),
    other_categories: cdktf.stringToTerraform(struct!.otherCategories),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategoryItemsLimitConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategoryItemsLimitConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategoryItemsLimitConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#percentile_value QuicksightTemplate#percentile_value}
  */
  readonly percentileValue?: number;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregationOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    percentile_value: cdktf.numberToTerraform(struct!.percentileValue),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._percentileValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentileValue = this._percentileValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregation | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#simple_numerical_aggregation QuicksightTemplate#simple_numerical_aggregation}
  */
  readonly simpleNumericalAggregation?: string;
  /**
  * percentile_aggregation block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#percentile_aggregation QuicksightTemplate#percentile_aggregation}
  */
  readonly percentileAggregation?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregation;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    simple_numerical_aggregation: cdktf.stringToTerraform(struct!.simpleNumericalAggregation),
    percentile_aggregation: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregationToTerraform(struct!.percentileAggregation),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunction | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunction | undefined) {
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
  private _percentileAggregation = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregationOutputReference(this, "percentile_aggregation");
  public get percentileAggregation() {
    return this._percentileAggregation;
  }
  public putPercentileAggregation(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregation) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunction {
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
  readonly numericalAggregationFunction?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunction;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    categorical_aggregation_function: cdktf.stringToTerraform(struct!.categoricalAggregationFunction),
    date_aggregation_function: cdktf.stringToTerraform(struct!.dateAggregationFunction),
    numerical_aggregation_function: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionToTerraform(struct!.numericalAggregationFunction),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunction | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunction | undefined) {
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
  private _numericalAggregationFunction = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunctionOutputReference(this, "numerical_aggregation_function");
  public get numericalAggregationFunction() {
    return this._numericalAggregationFunction;
  }
  public putNumericalAggregationFunction(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionNumericalAggregationFunction) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySortColumnSortSortBy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySortColumnSortSortByToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySortColumnSortSortByOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySortColumnSortSortBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySortColumnSortSortByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySortColumnSortSortBy | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySortColumnSortSortBy | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySortColumnSort {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#direction QuicksightTemplate#direction}
  */
  readonly direction: string;
  /**
  * aggregation_function block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#aggregation_function QuicksightTemplate#aggregation_function}
  */
  readonly aggregationFunction?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunction;
  /**
  * sort_by block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#sort_by QuicksightTemplate#sort_by}
  */
  readonly sortBy: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySortColumnSortSortBy;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySortColumnSortToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySortColumnSortOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySortColumnSort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    aggregation_function: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionToTerraform(struct!.aggregationFunction),
    sort_by: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySortColumnSortSortByToTerraform(struct!.sortBy),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySortColumnSortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySortColumnSort | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySortColumnSort | undefined) {
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
  private _aggregationFunction = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunctionOutputReference(this, "aggregation_function");
  public get aggregationFunction() {
    return this._aggregationFunction;
  }
  public putAggregationFunction(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySortColumnSortAggregationFunction) {
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
  private _sortBy = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySortColumnSortSortByOutputReference(this, "sort_by");
  public get sortBy() {
    return this._sortBy;
  }
  public putSortBy(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySortColumnSortSortBy) {
    this._sortBy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sortByInput() {
    return this._sortBy.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySortFieldSort {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#direction QuicksightTemplate#direction}
  */
  readonly direction: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_id QuicksightTemplate#field_id}
  */
  readonly fieldId: string;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySortFieldSortToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySortFieldSortOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySortFieldSort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    field_id: cdktf.stringToTerraform(struct!.fieldId),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySortFieldSortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySortFieldSort | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySortFieldSort | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySort {
  /**
  * column_sort block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_sort QuicksightTemplate#column_sort}
  */
  readonly columnSort?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySortColumnSort;
  /**
  * field_sort block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_sort QuicksightTemplate#field_sort}
  */
  readonly fieldSort?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySortFieldSort;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySortToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_sort: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySortColumnSortToTerraform(struct!.columnSort),
    field_sort: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySortFieldSortToTerraform(struct!.fieldSort),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySortOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySort | cdktf.IResolvable | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySort | cdktf.IResolvable | undefined) {
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
  private _columnSort = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySortColumnSortOutputReference(this, "column_sort");
  public get columnSort() {
    return this._columnSort;
  }
  public putColumnSort(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySortColumnSort) {
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
  private _fieldSort = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySortFieldSortOutputReference(this, "field_sort");
  public get fieldSort() {
    return this._fieldSort;
  }
  public putFieldSort(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySortFieldSort) {
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

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySortList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySort[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySortOutputReference {
    return new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationColorItemsLimitConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#items_limit QuicksightTemplate#items_limit}
  */
  readonly itemsLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#other_categories QuicksightTemplate#other_categories}
  */
  readonly otherCategories: string;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationColorItemsLimitConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationColorItemsLimitConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationColorItemsLimitConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items_limit: cdktf.numberToTerraform(struct!.itemsLimit),
    other_categories: cdktf.stringToTerraform(struct!.otherCategories),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationColorItemsLimitConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationColorItemsLimitConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationColorItemsLimitConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesLimitConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#items_limit QuicksightTemplate#items_limit}
  */
  readonly itemsLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#other_categories QuicksightTemplate#other_categories}
  */
  readonly otherCategories: string;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesLimitConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesLimitConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesLimitConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items_limit: cdktf.numberToTerraform(struct!.itemsLimit),
    other_categories: cdktf.stringToTerraform(struct!.otherCategories),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesLimitConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesLimitConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesLimitConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#percentile_value QuicksightTemplate#percentile_value}
  */
  readonly percentileValue?: number;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregationOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    percentile_value: cdktf.numberToTerraform(struct!.percentileValue),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._percentileValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentileValue = this._percentileValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregation | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionNumericalAggregationFunction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#simple_numerical_aggregation QuicksightTemplate#simple_numerical_aggregation}
  */
  readonly simpleNumericalAggregation?: string;
  /**
  * percentile_aggregation block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#percentile_aggregation QuicksightTemplate#percentile_aggregation}
  */
  readonly percentileAggregation?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregation;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionNumericalAggregationFunctionToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionNumericalAggregationFunctionOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionNumericalAggregationFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    simple_numerical_aggregation: cdktf.stringToTerraform(struct!.simpleNumericalAggregation),
    percentile_aggregation: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregationToTerraform(struct!.percentileAggregation),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionNumericalAggregationFunctionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionNumericalAggregationFunction | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionNumericalAggregationFunction | undefined) {
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
  private _percentileAggregation = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregationOutputReference(this, "percentile_aggregation");
  public get percentileAggregation() {
    return this._percentileAggregation;
  }
  public putPercentileAggregation(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionNumericalAggregationFunctionPercentileAggregation) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunction {
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
  readonly numericalAggregationFunction?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionNumericalAggregationFunction;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    categorical_aggregation_function: cdktf.stringToTerraform(struct!.categoricalAggregationFunction),
    date_aggregation_function: cdktf.stringToTerraform(struct!.dateAggregationFunction),
    numerical_aggregation_function: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionNumericalAggregationFunctionToTerraform(struct!.numericalAggregationFunction),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunction | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunction | undefined) {
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
  private _numericalAggregationFunction = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionNumericalAggregationFunctionOutputReference(this, "numerical_aggregation_function");
  public get numericalAggregationFunction() {
    return this._numericalAggregationFunction;
  }
  public putNumericalAggregationFunction(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionNumericalAggregationFunction) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortSortBy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortSortByToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortSortByOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortSortBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortSortByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortSortBy | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortSortBy | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSort {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#direction QuicksightTemplate#direction}
  */
  readonly direction: string;
  /**
  * aggregation_function block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#aggregation_function QuicksightTemplate#aggregation_function}
  */
  readonly aggregationFunction?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunction;
  /**
  * sort_by block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#sort_by QuicksightTemplate#sort_by}
  */
  readonly sortBy: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortSortBy;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    aggregation_function: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionToTerraform(struct!.aggregationFunction),
    sort_by: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortSortByToTerraform(struct!.sortBy),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSort | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSort | undefined) {
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
  private _aggregationFunction = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunctionOutputReference(this, "aggregation_function");
  public get aggregationFunction() {
    return this._aggregationFunction;
  }
  public putAggregationFunction(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortAggregationFunction) {
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
  private _sortBy = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortSortByOutputReference(this, "sort_by");
  public get sortBy() {
    return this._sortBy;
  }
  public putSortBy(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortSortBy) {
    this._sortBy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sortByInput() {
    return this._sortBy.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSortFieldSort {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#direction QuicksightTemplate#direction}
  */
  readonly direction: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_id QuicksightTemplate#field_id}
  */
  readonly fieldId: string;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSortFieldSortToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSortFieldSortOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSortFieldSort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    field_id: cdktf.stringToTerraform(struct!.fieldId),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSortFieldSortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSortFieldSort | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSortFieldSort | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSort {
  /**
  * column_sort block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_sort QuicksightTemplate#column_sort}
  */
  readonly columnSort?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSort;
  /**
  * field_sort block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_sort QuicksightTemplate#field_sort}
  */
  readonly fieldSort?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSortFieldSort;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSortToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_sort: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortToTerraform(struct!.columnSort),
    field_sort: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSortFieldSortToTerraform(struct!.fieldSort),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSortOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSort | cdktf.IResolvable | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSort | cdktf.IResolvable | undefined) {
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
  private _columnSort = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSortOutputReference(this, "column_sort");
  public get columnSort() {
    return this._columnSort;
  }
  public putColumnSort(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSortColumnSort) {
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
  private _fieldSort = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSortFieldSortOutputReference(this, "field_sort");
  public get fieldSort() {
    return this._fieldSort;
  }
  public putFieldSort(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSortFieldSort) {
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

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSortList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSort[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSortOutputReference {
    return new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfiguration {
  /**
  * category_items_limit_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#category_items_limit_configuration QuicksightTemplate#category_items_limit_configuration}
  */
  readonly categoryItemsLimitConfiguration?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategoryItemsLimitConfiguration;
  /**
  * category_sort block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#category_sort QuicksightTemplate#category_sort}
  */
  readonly categorySort?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySort[] | cdktf.IResolvable;
  /**
  * color_items_limit_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#color_items_limit_configuration QuicksightTemplate#color_items_limit_configuration}
  */
  readonly colorItemsLimitConfiguration?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationColorItemsLimitConfiguration;
  /**
  * small_multiples_limit_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#small_multiples_limit_configuration QuicksightTemplate#small_multiples_limit_configuration}
  */
  readonly smallMultiplesLimitConfiguration?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesLimitConfiguration;
  /**
  * small_multiples_sort block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#small_multiples_sort QuicksightTemplate#small_multiples_sort}
  */
  readonly smallMultiplesSort?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSort[] | cdktf.IResolvable;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category_items_limit_configuration: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategoryItemsLimitConfigurationToTerraform(struct!.categoryItemsLimitConfiguration),
    category_sort: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySortToTerraform, true)(struct!.categorySort),
    color_items_limit_configuration: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationColorItemsLimitConfigurationToTerraform(struct!.colorItemsLimitConfiguration),
    small_multiples_limit_configuration: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesLimitConfigurationToTerraform(struct!.smallMultiplesLimitConfiguration),
    small_multiples_sort: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSortToTerraform, true)(struct!.smallMultiplesSort),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._categoryItemsLimitConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.categoryItemsLimitConfiguration = this._categoryItemsLimitConfiguration?.internalValue;
    }
    if (this._categorySort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorySort = this._categorySort?.internalValue;
    }
    if (this._colorItemsLimitConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.colorItemsLimitConfiguration = this._colorItemsLimitConfiguration?.internalValue;
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._categoryItemsLimitConfiguration.internalValue = undefined;
      this._categorySort.internalValue = undefined;
      this._colorItemsLimitConfiguration.internalValue = undefined;
      this._smallMultiplesLimitConfiguration.internalValue = undefined;
      this._smallMultiplesSort.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._categoryItemsLimitConfiguration.internalValue = value.categoryItemsLimitConfiguration;
      this._categorySort.internalValue = value.categorySort;
      this._colorItemsLimitConfiguration.internalValue = value.colorItemsLimitConfiguration;
      this._smallMultiplesLimitConfiguration.internalValue = value.smallMultiplesLimitConfiguration;
      this._smallMultiplesSort.internalValue = value.smallMultiplesSort;
    }
  }

  // category_items_limit_configuration - computed: false, optional: true, required: false
  private _categoryItemsLimitConfiguration = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategoryItemsLimitConfigurationOutputReference(this, "category_items_limit_configuration");
  public get categoryItemsLimitConfiguration() {
    return this._categoryItemsLimitConfiguration;
  }
  public putCategoryItemsLimitConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategoryItemsLimitConfiguration) {
    this._categoryItemsLimitConfiguration.internalValue = value;
  }
  public resetCategoryItemsLimitConfiguration() {
    this._categoryItemsLimitConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryItemsLimitConfigurationInput() {
    return this._categoryItemsLimitConfiguration.internalValue;
  }

  // category_sort - computed: false, optional: true, required: false
  private _categorySort = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySortList(this, "category_sort", false);
  public get categorySort() {
    return this._categorySort;
  }
  public putCategorySort(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationCategorySort[] | cdktf.IResolvable) {
    this._categorySort.internalValue = value;
  }
  public resetCategorySort() {
    this._categorySort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorySortInput() {
    return this._categorySort.internalValue;
  }

  // color_items_limit_configuration - computed: false, optional: true, required: false
  private _colorItemsLimitConfiguration = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationColorItemsLimitConfigurationOutputReference(this, "color_items_limit_configuration");
  public get colorItemsLimitConfiguration() {
    return this._colorItemsLimitConfiguration;
  }
  public putColorItemsLimitConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationColorItemsLimitConfiguration) {
    this._colorItemsLimitConfiguration.internalValue = value;
  }
  public resetColorItemsLimitConfiguration() {
    this._colorItemsLimitConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorItemsLimitConfigurationInput() {
    return this._colorItemsLimitConfiguration.internalValue;
  }

  // small_multiples_limit_configuration - computed: false, optional: true, required: false
  private _smallMultiplesLimitConfiguration = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesLimitConfigurationOutputReference(this, "small_multiples_limit_configuration");
  public get smallMultiplesLimitConfiguration() {
    return this._smallMultiplesLimitConfiguration;
  }
  public putSmallMultiplesLimitConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesLimitConfiguration) {
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
  private _smallMultiplesSort = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSortList(this, "small_multiples_sort", false);
  public get smallMultiplesSort() {
    return this._smallMultiplesSort;
  }
  public putSmallMultiplesSort(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationSmallMultiplesSort[] | cdktf.IResolvable) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionPercentileAggregation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#percentile_value QuicksightTemplate#percentile_value}
  */
  readonly percentileValue?: number;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionPercentileAggregationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionPercentileAggregationOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionPercentileAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    percentile_value: cdktf.numberToTerraform(struct!.percentileValue),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionPercentileAggregationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionPercentileAggregation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._percentileValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentileValue = this._percentileValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionPercentileAggregation | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#simple_numerical_aggregation QuicksightTemplate#simple_numerical_aggregation}
  */
  readonly simpleNumericalAggregation?: string;
  /**
  * percentile_aggregation block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#percentile_aggregation QuicksightTemplate#percentile_aggregation}
  */
  readonly percentileAggregation?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionPercentileAggregation;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    simple_numerical_aggregation: cdktf.stringToTerraform(struct!.simpleNumericalAggregation),
    percentile_aggregation: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionPercentileAggregationToTerraform(struct!.percentileAggregation),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunction | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunction | undefined) {
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
  private _percentileAggregation = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionPercentileAggregationOutputReference(this, "percentile_aggregation");
  public get percentileAggregation() {
    return this._percentileAggregation;
  }
  public putPercentileAggregation(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionPercentileAggregation) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregation {
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
  readonly numericalAggregationFunction?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunction;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    categorical_aggregation_function: cdktf.stringToTerraform(struct!.categoricalAggregationFunction),
    date_aggregation_function: cdktf.stringToTerraform(struct!.dateAggregationFunction),
    numerical_aggregation_function: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionToTerraform(struct!.numericalAggregationFunction),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregation | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregation | undefined) {
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
  private _numericalAggregationFunction = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunctionOutputReference(this, "numerical_aggregation_function");
  public get numericalAggregationFunction() {
    return this._numericalAggregationFunction;
  }
  public putNumericalAggregationFunction(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationNumericalAggregationFunction) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemColumnToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemColumnOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemColumn | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemColumn | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItem {
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
  readonly aggregation?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregation;
  /**
  * column block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column QuicksightTemplate#column}
  */
  readonly column: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemColumn;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    visibility: cdktf.stringToTerraform(struct!.visibility),
    aggregation: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationToTerraform(struct!.aggregation),
    column: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemColumnToTerraform(struct!.column),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItem | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItem | undefined) {
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
  private _aggregation = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregationOutputReference(this, "aggregation");
  public get aggregation() {
    return this._aggregation;
  }
  public putAggregation(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemAggregation) {
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
  private _column = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemColumnOutputReference(this, "column");
  public get column() {
    return this._column;
  }
  public putColumn(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemColumn) {
    this._column.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsFieldTooltipItem {
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

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsFieldTooltipItemToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsFieldTooltipItemOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsFieldTooltipItem): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsFieldTooltipItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsFieldTooltipItem | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsFieldTooltipItem | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFields {
  /**
  * column_tooltip_item block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_tooltip_item QuicksightTemplate#column_tooltip_item}
  */
  readonly columnTooltipItem?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItem;
  /**
  * field_tooltip_item block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_tooltip_item QuicksightTemplate#field_tooltip_item}
  */
  readonly fieldTooltipItem?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsFieldTooltipItem;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_tooltip_item: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemToTerraform(struct!.columnTooltipItem),
    field_tooltip_item: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsFieldTooltipItemToTerraform(struct!.fieldTooltipItem),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFields | cdktf.IResolvable | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFields | cdktf.IResolvable | undefined) {
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
  private _columnTooltipItem = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItemOutputReference(this, "column_tooltip_item");
  public get columnTooltipItem() {
    return this._columnTooltipItem;
  }
  public putColumnTooltipItem(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsColumnTooltipItem) {
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
  private _fieldTooltipItem = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsFieldTooltipItemOutputReference(this, "field_tooltip_item");
  public get fieldTooltipItem() {
    return this._fieldTooltipItem;
  }
  public putFieldTooltipItem(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsFieldTooltipItem) {
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

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFields[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsOutputReference {
    return new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltip {
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
  readonly tooltipFields?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFields[] | cdktf.IResolvable;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation_visibility: cdktf.stringToTerraform(struct!.aggregationVisibility),
    tooltip_title_type: cdktf.stringToTerraform(struct!.tooltipTitleType),
    tooltip_fields: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsToTerraform, true)(struct!.tooltipFields),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltip | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltip | undefined) {
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
  private _tooltipFields = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFieldsList(this, "tooltip_fields", false);
  public get tooltipFields() {
    return this._tooltipFields;
  }
  public putTooltipFields(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipTooltipFields[] | cdktf.IResolvable) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltip {
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
  readonly fieldBaseTooltip?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltip;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    selected_tooltip_type: cdktf.stringToTerraform(struct!.selectedTooltipType),
    tooltip_visibility: cdktf.stringToTerraform(struct!.tooltipVisibility),
    field_base_tooltip: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipToTerraform(struct!.fieldBaseTooltip),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltip | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltip | undefined) {
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
  private _fieldBaseTooltip = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltipOutputReference(this, "field_base_tooltip");
  public get fieldBaseTooltip() {
    return this._fieldBaseTooltip;
  }
  public putFieldBaseTooltip(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipFieldBaseTooltip) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationVisualPaletteColorMapElement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_id QuicksightTemplate#field_id}
  */
  readonly fieldId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_value QuicksightTemplate#field_value}
  */
  readonly fieldValue: string;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationVisualPaletteColorMapElementToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationVisualPaletteColorMapElementOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationVisualPaletteColorMapElement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_id: cdktf.stringToTerraform(struct!.fieldId),
    field_value: cdktf.stringToTerraform(struct!.fieldValue),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationVisualPaletteColorMapElementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationVisualPaletteColorMapElement | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationVisualPaletteColorMapElement | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationVisualPaletteColorMap {
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
  readonly element: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationVisualPaletteColorMapElement;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationVisualPaletteColorMapToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationVisualPaletteColorMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    time_granularity: cdktf.stringToTerraform(struct!.timeGranularity),
    element: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationVisualPaletteColorMapElementToTerraform(struct!.element),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationVisualPaletteColorMapOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationVisualPaletteColorMap | cdktf.IResolvable | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationVisualPaletteColorMap | cdktf.IResolvable | undefined) {
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
  private _element = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationVisualPaletteColorMapElementOutputReference(this, "element");
  public get element() {
    return this._element;
  }
  public putElement(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationVisualPaletteColorMapElement) {
    this._element.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get elementInput() {
    return this._element.internalValue;
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationVisualPaletteColorMapList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationVisualPaletteColorMap[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationVisualPaletteColorMapOutputReference {
    return new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationVisualPaletteColorMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationVisualPalette {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#chart_color QuicksightTemplate#chart_color}
  */
  readonly chartColor?: string;
  /**
  * color_map block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#color_map QuicksightTemplate#color_map}
  */
  readonly colorMap?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationVisualPaletteColorMap[] | cdktf.IResolvable;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationVisualPaletteToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationVisualPaletteOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationVisualPalette): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chart_color: cdktf.stringToTerraform(struct!.chartColor),
    color_map: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationVisualPaletteColorMapToTerraform, true)(struct!.colorMap),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationVisualPaletteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationVisualPalette | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationVisualPalette | undefined) {
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
  private _colorMap = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationVisualPaletteColorMapList(this, "color_map", false);
  public get colorMap() {
    return this._colorMap;
  }
  public putColorMap(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationVisualPaletteColorMap[] | cdktf.IResolvable) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsDateAxisOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#missing_date_visibility QuicksightTemplate#missing_date_visibility}
  */
  readonly missingDateVisibility?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsDateAxisOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsDateAxisOptionsOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsDateAxisOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    missing_date_visibility: cdktf.stringToTerraform(struct!.missingDateVisibility),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsDateAxisOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsDateAxisOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._missingDateVisibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.missingDateVisibility = this._missingDateVisibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsDateAxisOptions | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeDataDriven {
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeDataDrivenToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeDataDrivenOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeDataDriven): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeDataDrivenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeDataDriven | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeDataDriven | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeMinMax {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#maximum QuicksightTemplate#maximum}
  */
  readonly maximum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#minimum QuicksightTemplate#minimum}
  */
  readonly minimum?: number;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeMinMaxToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeMinMaxOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeMinMax): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maximum: cdktf.numberToTerraform(struct!.maximum),
    minimum: cdktf.numberToTerraform(struct!.minimum),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeMinMaxOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeMinMax | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeMinMax | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsRange {
  /**
  * data_driven block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_driven QuicksightTemplate#data_driven}
  */
  readonly dataDriven?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeDataDriven;
  /**
  * min_max block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#min_max QuicksightTemplate#min_max}
  */
  readonly minMax?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeMinMax;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_driven: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeDataDrivenToTerraform(struct!.dataDriven),
    min_max: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeMinMaxToTerraform(struct!.minMax),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsRange | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsRange | undefined) {
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
  private _dataDriven = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeDataDrivenOutputReference(this, "data_driven");
  public get dataDriven() {
    return this._dataDriven;
  }
  public putDataDriven(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeDataDriven) {
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
  private _minMax = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeMinMaxOutputReference(this, "min_max");
  public get minMax() {
    return this._minMax;
  }
  public putMinMax(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeMinMax) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLinear {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#step_count QuicksightTemplate#step_count}
  */
  readonly stepCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#step_size QuicksightTemplate#step_size}
  */
  readonly stepSize?: number;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLinearToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLinearOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLinear): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    step_count: cdktf.numberToTerraform(struct!.stepCount),
    step_size: cdktf.numberToTerraform(struct!.stepSize),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLinearOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLinear | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLinear | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLogarithmic {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#base QuicksightTemplate#base}
  */
  readonly base?: number;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLogarithmicToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLogarithmicOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLogarithmic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base: cdktf.numberToTerraform(struct!.base),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLogarithmicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLogarithmic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._base !== undefined) {
      hasAnyValues = true;
      internalValueResult.base = this._base;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLogarithmic | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsScale {
  /**
  * linear block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#linear QuicksightTemplate#linear}
  */
  readonly linear?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLinear;
  /**
  * logarithmic block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#logarithmic QuicksightTemplate#logarithmic}
  */
  readonly logarithmic?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLogarithmic;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsScale): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    linear: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLinearToTerraform(struct!.linear),
    logarithmic: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLogarithmicToTerraform(struct!.logarithmic),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsScale | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsScale | undefined) {
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
  private _linear = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLinearOutputReference(this, "linear");
  public get linear() {
    return this._linear;
  }
  public putLinear(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLinear) {
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
  private _logarithmic = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLogarithmicOutputReference(this, "logarithmic");
  public get logarithmic() {
    return this._logarithmic;
  }
  public putLogarithmic(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleLogarithmic) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptions {
  /**
  * range block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#range QuicksightTemplate#range}
  */
  readonly range?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsRange;
  /**
  * scale block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#scale QuicksightTemplate#scale}
  */
  readonly scale?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsScale;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    range: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeToTerraform(struct!.range),
    scale: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleToTerraform(struct!.scale),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptions | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptions | undefined) {
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
  private _range = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsRangeOutputReference(this, "range");
  public get range() {
    return this._range;
  }
  public putRange(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsRange) {
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
  private _scale = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsScaleOutputReference(this, "scale");
  public get scale() {
    return this._scale;
  }
  public putScale(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsScale) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptions {
  /**
  * date_axis_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#date_axis_options QuicksightTemplate#date_axis_options}
  */
  readonly dateAxisOptions?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsDateAxisOptions;
  /**
  * numeric_axis_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#numeric_axis_options QuicksightTemplate#numeric_axis_options}
  */
  readonly numericAxisOptions?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptions;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    date_axis_options: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsDateAxisOptionsToTerraform(struct!.dateAxisOptions),
    numeric_axis_options: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsToTerraform(struct!.numericAxisOptions),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptions | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptions | undefined) {
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
  private _dateAxisOptions = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsDateAxisOptionsOutputReference(this, "date_axis_options");
  public get dateAxisOptions() {
    return this._dateAxisOptions;
  }
  public putDateAxisOptions(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsDateAxisOptions) {
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
  private _numericAxisOptions = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptionsOutputReference(this, "numeric_axis_options");
  public get numericAxisOptions() {
    return this._numericAxisOptions;
  }
  public putNumericAxisOptions(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsNumericAxisOptions) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsScrollbarOptionsVisibleRangePercentRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#from QuicksightTemplate#from}
  */
  readonly from?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#to QuicksightTemplate#to}
  */
  readonly to?: number;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsScrollbarOptionsVisibleRangePercentRangeToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsScrollbarOptionsVisibleRangePercentRangeOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsScrollbarOptionsVisibleRangePercentRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.numberToTerraform(struct!.from),
    to: cdktf.numberToTerraform(struct!.to),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsScrollbarOptionsVisibleRangePercentRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsScrollbarOptionsVisibleRangePercentRange | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsScrollbarOptionsVisibleRangePercentRange | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsScrollbarOptionsVisibleRange {
  /**
  * percent_range block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#percent_range QuicksightTemplate#percent_range}
  */
  readonly percentRange?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsScrollbarOptionsVisibleRangePercentRange;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsScrollbarOptionsVisibleRangeToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsScrollbarOptionsVisibleRangeOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsScrollbarOptionsVisibleRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    percent_range: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsScrollbarOptionsVisibleRangePercentRangeToTerraform(struct!.percentRange),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsScrollbarOptionsVisibleRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsScrollbarOptionsVisibleRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._percentRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentRange = this._percentRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsScrollbarOptionsVisibleRange | undefined) {
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
  private _percentRange = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsScrollbarOptionsVisibleRangePercentRangeOutputReference(this, "percent_range");
  public get percentRange() {
    return this._percentRange;
  }
  public putPercentRange(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsScrollbarOptionsVisibleRangePercentRange) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsScrollbarOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
  /**
  * visible_range block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visible_range QuicksightTemplate#visible_range}
  */
  readonly visibleRange?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsScrollbarOptionsVisibleRange;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsScrollbarOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsScrollbarOptionsOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsScrollbarOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    visibility: cdktf.stringToTerraform(struct!.visibility),
    visible_range: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsScrollbarOptionsVisibleRangeToTerraform(struct!.visibleRange),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsScrollbarOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsScrollbarOptions | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsScrollbarOptions | undefined) {
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
  private _visibleRange = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsScrollbarOptionsVisibleRangeOutputReference(this, "visible_range");
  public get visibleRange() {
    return this._visibleRange;
  }
  public putVisibleRange(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsScrollbarOptionsVisibleRange) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontSize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#relative QuicksightTemplate#relative}
  */
  readonly relative?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontSizeToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontSizeOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relative: cdktf.stringToTerraform(struct!.relative),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relative !== undefined) {
      hasAnyValues = true;
      internalValueResult.relative = this._relative;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontSize | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontWeight {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#name QuicksightTemplate#name}
  */
  readonly name?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontWeightToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontWeightOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontWeightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontWeight | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfiguration {
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
  readonly fontSize?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontSize;
  /**
  * font_weight block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_weight QuicksightTemplate#font_weight}
  */
  readonly fontWeight?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontWeight;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    font_color: cdktf.stringToTerraform(struct!.fontColor),
    font_decoration: cdktf.stringToTerraform(struct!.fontDecoration),
    font_style: cdktf.stringToTerraform(struct!.fontStyle),
    font_size: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontSizeToTerraform(struct!.fontSize),
    font_weight: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontWeightToTerraform(struct!.fontWeight),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfiguration | undefined) {
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
  private _fontSize = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontSizeOutputReference(this, "font_size");
  public get fontSize() {
    return this._fontSize;
  }
  public putFontSize(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontSize) {
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
  private _fontWeight = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontWeightOutputReference(this, "font_weight");
  public get fontWeight() {
    return this._fontWeight;
  }
  public putFontWeight(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationFontWeight) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptions {
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
  readonly fontConfiguration?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptionsOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_label: cdktf.stringToTerraform(struct!.customLabel),
    visibility: cdktf.stringToTerraform(struct!.visibility),
    font_configuration: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationToTerraform(struct!.fontConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptions | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptions | undefined) {
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
  private _fontConfiguration = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfigurationOutputReference(this, "font_configuration");
  public get fontConfiguration() {
    return this._fontConfiguration;
  }
  public putFontConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptionsFontConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsTickLabelOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#rotation_angle QuicksightTemplate#rotation_angle}
  */
  readonly rotationAngle?: number;
  /**
  * label_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#label_options QuicksightTemplate#label_options}
  */
  readonly labelOptions?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptions;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsTickLabelOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rotation_angle: cdktf.numberToTerraform(struct!.rotationAngle),
    label_options: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptionsToTerraform(struct!.labelOptions),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsTickLabelOptions | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsTickLabelOptions | undefined) {
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
  private _labelOptions = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptionsOutputReference(this, "label_options");
  public get labelOptions() {
    return this._labelOptions;
  }
  public putLabelOptions(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsLabelOptions) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptions {
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
  readonly dataOptions?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptions;
  /**
  * scrollbar_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#scrollbar_options QuicksightTemplate#scrollbar_options}
  */
  readonly scrollbarOptions?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsScrollbarOptions;
  /**
  * tick_label_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#tick_label_options QuicksightTemplate#tick_label_options}
  */
  readonly tickLabelOptions?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsTickLabelOptions;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    axis_line_visibility: cdktf.stringToTerraform(struct!.axisLineVisibility),
    axis_offset: cdktf.stringToTerraform(struct!.axisOffset),
    grid_line_visibility: cdktf.stringToTerraform(struct!.gridLineVisibility),
    data_options: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsToTerraform(struct!.dataOptions),
    scrollbar_options: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsScrollbarOptionsToTerraform(struct!.scrollbarOptions),
    tick_label_options: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsToTerraform(struct!.tickLabelOptions),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptions | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptions | undefined) {
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
  private _dataOptions = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptionsOutputReference(this, "data_options");
  public get dataOptions() {
    return this._dataOptions;
  }
  public putDataOptions(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsDataOptions) {
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
  private _scrollbarOptions = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsScrollbarOptionsOutputReference(this, "scrollbar_options");
  public get scrollbarOptions() {
    return this._scrollbarOptions;
  }
  public putScrollbarOptions(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsScrollbarOptions) {
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
  private _tickLabelOptions = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsTickLabelOptionsOutputReference(this, "tick_label_options");
  public get tickLabelOptions() {
    return this._tickLabelOptions;
  }
  public putTickLabelOptions(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsTickLabelOptions) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsApplyToColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsApplyToColumnToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsApplyToColumnOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsApplyToColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsApplyToColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsApplyToColumn | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsApplyToColumn | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsApplyTo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_id QuicksightTemplate#field_id}
  */
  readonly fieldId: string;
  /**
  * column block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column QuicksightTemplate#column}
  */
  readonly column: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsApplyToColumn;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsApplyToToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsApplyToOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsApplyTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_id: cdktf.stringToTerraform(struct!.fieldId),
    column: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsApplyToColumnToTerraform(struct!.column),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsApplyToOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsApplyTo | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsApplyTo | undefined) {
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
  private _column = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsApplyToColumnOutputReference(this, "column");
  public get column() {
    return this._column;
  }
  public putColumn(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsApplyToColumn) {
    this._column.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsFontConfigurationFontSize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#relative QuicksightTemplate#relative}
  */
  readonly relative?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsFontConfigurationFontSizeToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsFontConfigurationFontSizeOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relative: cdktf.stringToTerraform(struct!.relative),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsFontConfigurationFontSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relative !== undefined) {
      hasAnyValues = true;
      internalValueResult.relative = this._relative;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsFontConfigurationFontSize | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsFontConfigurationFontWeight {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#name QuicksightTemplate#name}
  */
  readonly name?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsFontConfigurationFontWeightToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsFontConfigurationFontWeightOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsFontConfigurationFontWeightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsFontConfigurationFontWeight | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsFontConfiguration {
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
  readonly fontSize?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsFontConfigurationFontSize;
  /**
  * font_weight block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_weight QuicksightTemplate#font_weight}
  */
  readonly fontWeight?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsFontConfigurationFontWeight;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsFontConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsFontConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    font_color: cdktf.stringToTerraform(struct!.fontColor),
    font_decoration: cdktf.stringToTerraform(struct!.fontDecoration),
    font_style: cdktf.stringToTerraform(struct!.fontStyle),
    font_size: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsFontConfigurationFontSizeToTerraform(struct!.fontSize),
    font_weight: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsFontConfigurationFontWeightToTerraform(struct!.fontWeight),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsFontConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsFontConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsFontConfiguration | undefined) {
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
  private _fontSize = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsFontConfigurationFontSizeOutputReference(this, "font_size");
  public get fontSize() {
    return this._fontSize;
  }
  public putFontSize(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsFontConfigurationFontSize) {
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
  private _fontWeight = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsFontConfigurationFontWeightOutputReference(this, "font_weight");
  public get fontWeight() {
    return this._fontWeight;
  }
  public putFontWeight(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsFontConfigurationFontWeight) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptionsAxisLabelOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#custom_label QuicksightTemplate#custom_label}
  */
  readonly customLabel?: string;
  /**
  * apply_to block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#apply_to QuicksightTemplate#apply_to}
  */
  readonly applyTo?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsApplyTo;
  /**
  * font_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_configuration QuicksightTemplate#font_configuration}
  */
  readonly fontConfiguration?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsFontConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptionsAxisLabelOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_label: cdktf.stringToTerraform(struct!.customLabel),
    apply_to: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsApplyToToTerraform(struct!.applyTo),
    font_configuration: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsFontConfigurationToTerraform(struct!.fontConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptionsAxisLabelOptions | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptionsAxisLabelOptions | undefined) {
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
  private _applyTo = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsApplyToOutputReference(this, "apply_to");
  public get applyTo() {
    return this._applyTo;
  }
  public putApplyTo(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsApplyTo) {
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
  private _fontConfiguration = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsFontConfigurationOutputReference(this, "font_configuration");
  public get fontConfiguration() {
    return this._fontConfiguration;
  }
  public putFontConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsFontConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptions {
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
  readonly axisLabelOptions?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptionsAxisLabelOptions;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptionsOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sort_icon_visibility: cdktf.stringToTerraform(struct!.sortIconVisibility),
    visibility: cdktf.stringToTerraform(struct!.visibility),
    axis_label_options: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsToTerraform(struct!.axisLabelOptions),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptions | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptions | undefined) {
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
  private _axisLabelOptions = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptionsAxisLabelOptionsOutputReference(this, "axis_label_options");
  public get axisLabelOptions() {
    return this._axisLabelOptions;
  }
  public putAxisLabelOptions(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptionsAxisLabelOptions) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#type QuicksightTemplate#type}
  */
  readonly type?: string;
  /**
  * contribution_analysis_defaults block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#contribution_analysis_defaults QuicksightTemplate#contribution_analysis_defaults}
  */
  readonly contributionAnalysisDefaults?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationContributionAnalysisDefaults[] | cdktf.IResolvable;
  /**
  * data_labels block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_labels QuicksightTemplate#data_labels}
  */
  readonly dataLabels?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationDataLabels;
  /**
  * default_series_settings block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#default_series_settings QuicksightTemplate#default_series_settings}
  */
  readonly defaultSeriesSettings?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationDefaultSeriesSettings;
  /**
  * field_wells block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_wells QuicksightTemplate#field_wells}
  */
  readonly fieldWells?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWells;
  /**
  * forecast_configurations block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#forecast_configurations QuicksightTemplate#forecast_configurations}
  */
  readonly forecastConfigurations?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationForecastConfigurations[] | cdktf.IResolvable;
  /**
  * legend block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#legend QuicksightTemplate#legend}
  */
  readonly legend?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationLegend;
  /**
  * primary_y_axis_display_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#primary_y_axis_display_options QuicksightTemplate#primary_y_axis_display_options}
  */
  readonly primaryYAxisDisplayOptions?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationPrimaryYAxisDisplayOptions;
  /**
  * primary_y_axis_label_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#primary_y_axis_label_options QuicksightTemplate#primary_y_axis_label_options}
  */
  readonly primaryYAxisLabelOptions?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationPrimaryYAxisLabelOptions;
  /**
  * reference_lines block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#reference_lines QuicksightTemplate#reference_lines}
  */
  readonly referenceLines?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationReferenceLines[] | cdktf.IResolvable;
  /**
  * secondary_y_axis_display_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#secondary_y_axis_display_options QuicksightTemplate#secondary_y_axis_display_options}
  */
  readonly secondaryYAxisDisplayOptions?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSecondaryYAxisDisplayOptions;
  /**
  * secondary_y_axis_label_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#secondary_y_axis_label_options QuicksightTemplate#secondary_y_axis_label_options}
  */
  readonly secondaryYAxisLabelOptions?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSecondaryYAxisLabelOptions;
  /**
  * series block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#series QuicksightTemplate#series}
  */
  readonly series?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeries[] | cdktf.IResolvable;
  /**
  * small_multiples_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#small_multiples_options QuicksightTemplate#small_multiples_options}
  */
  readonly smallMultiplesOptions?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSmallMultiplesOptions;
  /**
  * sort_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#sort_configuration QuicksightTemplate#sort_configuration}
  */
  readonly sortConfiguration?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfiguration;
  /**
  * tooltip block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#tooltip QuicksightTemplate#tooltip}
  */
  readonly tooltip?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltip;
  /**
  * visual_palette block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visual_palette QuicksightTemplate#visual_palette}
  */
  readonly visualPalette?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationVisualPalette;
  /**
  * x_axis_display_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#x_axis_display_options QuicksightTemplate#x_axis_display_options}
  */
  readonly xAxisDisplayOptions?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptions;
  /**
  * x_axis_label_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#x_axis_label_options QuicksightTemplate#x_axis_label_options}
  */
  readonly xAxisLabelOptions?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptions;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    contribution_analysis_defaults: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationContributionAnalysisDefaultsToTerraform, true)(struct!.contributionAnalysisDefaults),
    data_labels: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationDataLabelsToTerraform(struct!.dataLabels),
    default_series_settings: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationDefaultSeriesSettingsToTerraform(struct!.defaultSeriesSettings),
    field_wells: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsToTerraform(struct!.fieldWells),
    forecast_configurations: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationForecastConfigurationsToTerraform, true)(struct!.forecastConfigurations),
    legend: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationLegendToTerraform(struct!.legend),
    primary_y_axis_display_options: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationPrimaryYAxisDisplayOptionsToTerraform(struct!.primaryYAxisDisplayOptions),
    primary_y_axis_label_options: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationPrimaryYAxisLabelOptionsToTerraform(struct!.primaryYAxisLabelOptions),
    reference_lines: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationReferenceLinesToTerraform, true)(struct!.referenceLines),
    secondary_y_axis_display_options: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSecondaryYAxisDisplayOptionsToTerraform(struct!.secondaryYAxisDisplayOptions),
    secondary_y_axis_label_options: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSecondaryYAxisLabelOptionsToTerraform(struct!.secondaryYAxisLabelOptions),
    series: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesToTerraform, true)(struct!.series),
    small_multiples_options: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSmallMultiplesOptionsToTerraform(struct!.smallMultiplesOptions),
    sort_configuration: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationToTerraform(struct!.sortConfiguration),
    tooltip: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipToTerraform(struct!.tooltip),
    visual_palette: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationVisualPaletteToTerraform(struct!.visualPalette),
    x_axis_display_options: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsToTerraform(struct!.xAxisDisplayOptions),
    x_axis_label_options: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptionsToTerraform(struct!.xAxisLabelOptions),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._contributionAnalysisDefaults?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contributionAnalysisDefaults = this._contributionAnalysisDefaults?.internalValue;
    }
    if (this._dataLabels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataLabels = this._dataLabels?.internalValue;
    }
    if (this._defaultSeriesSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSeriesSettings = this._defaultSeriesSettings?.internalValue;
    }
    if (this._fieldWells?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldWells = this._fieldWells?.internalValue;
    }
    if (this._forecastConfigurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forecastConfigurations = this._forecastConfigurations?.internalValue;
    }
    if (this._legend?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.legend = this._legend?.internalValue;
    }
    if (this._primaryYAxisDisplayOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryYAxisDisplayOptions = this._primaryYAxisDisplayOptions?.internalValue;
    }
    if (this._primaryYAxisLabelOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryYAxisLabelOptions = this._primaryYAxisLabelOptions?.internalValue;
    }
    if (this._referenceLines?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.referenceLines = this._referenceLines?.internalValue;
    }
    if (this._secondaryYAxisDisplayOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryYAxisDisplayOptions = this._secondaryYAxisDisplayOptions?.internalValue;
    }
    if (this._secondaryYAxisLabelOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryYAxisLabelOptions = this._secondaryYAxisLabelOptions?.internalValue;
    }
    if (this._series?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.series = this._series?.internalValue;
    }
    if (this._smallMultiplesOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.smallMultiplesOptions = this._smallMultiplesOptions?.internalValue;
    }
    if (this._sortConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortConfiguration = this._sortConfiguration?.internalValue;
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._contributionAnalysisDefaults.internalValue = undefined;
      this._dataLabels.internalValue = undefined;
      this._defaultSeriesSettings.internalValue = undefined;
      this._fieldWells.internalValue = undefined;
      this._forecastConfigurations.internalValue = undefined;
      this._legend.internalValue = undefined;
      this._primaryYAxisDisplayOptions.internalValue = undefined;
      this._primaryYAxisLabelOptions.internalValue = undefined;
      this._referenceLines.internalValue = undefined;
      this._secondaryYAxisDisplayOptions.internalValue = undefined;
      this._secondaryYAxisLabelOptions.internalValue = undefined;
      this._series.internalValue = undefined;
      this._smallMultiplesOptions.internalValue = undefined;
      this._sortConfiguration.internalValue = undefined;
      this._tooltip.internalValue = undefined;
      this._visualPalette.internalValue = undefined;
      this._xAxisDisplayOptions.internalValue = undefined;
      this._xAxisLabelOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._contributionAnalysisDefaults.internalValue = value.contributionAnalysisDefaults;
      this._dataLabels.internalValue = value.dataLabels;
      this._defaultSeriesSettings.internalValue = value.defaultSeriesSettings;
      this._fieldWells.internalValue = value.fieldWells;
      this._forecastConfigurations.internalValue = value.forecastConfigurations;
      this._legend.internalValue = value.legend;
      this._primaryYAxisDisplayOptions.internalValue = value.primaryYAxisDisplayOptions;
      this._primaryYAxisLabelOptions.internalValue = value.primaryYAxisLabelOptions;
      this._referenceLines.internalValue = value.referenceLines;
      this._secondaryYAxisDisplayOptions.internalValue = value.secondaryYAxisDisplayOptions;
      this._secondaryYAxisLabelOptions.internalValue = value.secondaryYAxisLabelOptions;
      this._series.internalValue = value.series;
      this._smallMultiplesOptions.internalValue = value.smallMultiplesOptions;
      this._sortConfiguration.internalValue = value.sortConfiguration;
      this._tooltip.internalValue = value.tooltip;
      this._visualPalette.internalValue = value.visualPalette;
      this._xAxisDisplayOptions.internalValue = value.xAxisDisplayOptions;
      this._xAxisLabelOptions.internalValue = value.xAxisLabelOptions;
    }
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // contribution_analysis_defaults - computed: false, optional: true, required: false
  private _contributionAnalysisDefaults = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationContributionAnalysisDefaultsList(this, "contribution_analysis_defaults", false);
  public get contributionAnalysisDefaults() {
    return this._contributionAnalysisDefaults;
  }
  public putContributionAnalysisDefaults(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationContributionAnalysisDefaults[] | cdktf.IResolvable) {
    this._contributionAnalysisDefaults.internalValue = value;
  }
  public resetContributionAnalysisDefaults() {
    this._contributionAnalysisDefaults.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contributionAnalysisDefaultsInput() {
    return this._contributionAnalysisDefaults.internalValue;
  }

  // data_labels - computed: false, optional: true, required: false
  private _dataLabels = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationDataLabelsOutputReference(this, "data_labels");
  public get dataLabels() {
    return this._dataLabels;
  }
  public putDataLabels(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationDataLabels) {
    this._dataLabels.internalValue = value;
  }
  public resetDataLabels() {
    this._dataLabels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLabelsInput() {
    return this._dataLabels.internalValue;
  }

  // default_series_settings - computed: false, optional: true, required: false
  private _defaultSeriesSettings = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationDefaultSeriesSettingsOutputReference(this, "default_series_settings");
  public get defaultSeriesSettings() {
    return this._defaultSeriesSettings;
  }
  public putDefaultSeriesSettings(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationDefaultSeriesSettings) {
    this._defaultSeriesSettings.internalValue = value;
  }
  public resetDefaultSeriesSettings() {
    this._defaultSeriesSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSeriesSettingsInput() {
    return this._defaultSeriesSettings.internalValue;
  }

  // field_wells - computed: false, optional: true, required: false
  private _fieldWells = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWellsOutputReference(this, "field_wells");
  public get fieldWells() {
    return this._fieldWells;
  }
  public putFieldWells(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationFieldWells) {
    this._fieldWells.internalValue = value;
  }
  public resetFieldWells() {
    this._fieldWells.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldWellsInput() {
    return this._fieldWells.internalValue;
  }

  // forecast_configurations - computed: false, optional: true, required: false
  private _forecastConfigurations = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationForecastConfigurationsList(this, "forecast_configurations", false);
  public get forecastConfigurations() {
    return this._forecastConfigurations;
  }
  public putForecastConfigurations(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationForecastConfigurations[] | cdktf.IResolvable) {
    this._forecastConfigurations.internalValue = value;
  }
  public resetForecastConfigurations() {
    this._forecastConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forecastConfigurationsInput() {
    return this._forecastConfigurations.internalValue;
  }

  // legend - computed: false, optional: true, required: false
  private _legend = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationLegendOutputReference(this, "legend");
  public get legend() {
    return this._legend;
  }
  public putLegend(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationLegend) {
    this._legend.internalValue = value;
  }
  public resetLegend() {
    this._legend.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legendInput() {
    return this._legend.internalValue;
  }

  // primary_y_axis_display_options - computed: false, optional: true, required: false
  private _primaryYAxisDisplayOptions = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationPrimaryYAxisDisplayOptionsOutputReference(this, "primary_y_axis_display_options");
  public get primaryYAxisDisplayOptions() {
    return this._primaryYAxisDisplayOptions;
  }
  public putPrimaryYAxisDisplayOptions(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationPrimaryYAxisDisplayOptions) {
    this._primaryYAxisDisplayOptions.internalValue = value;
  }
  public resetPrimaryYAxisDisplayOptions() {
    this._primaryYAxisDisplayOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryYAxisDisplayOptionsInput() {
    return this._primaryYAxisDisplayOptions.internalValue;
  }

  // primary_y_axis_label_options - computed: false, optional: true, required: false
  private _primaryYAxisLabelOptions = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationPrimaryYAxisLabelOptionsOutputReference(this, "primary_y_axis_label_options");
  public get primaryYAxisLabelOptions() {
    return this._primaryYAxisLabelOptions;
  }
  public putPrimaryYAxisLabelOptions(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationPrimaryYAxisLabelOptions) {
    this._primaryYAxisLabelOptions.internalValue = value;
  }
  public resetPrimaryYAxisLabelOptions() {
    this._primaryYAxisLabelOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryYAxisLabelOptionsInput() {
    return this._primaryYAxisLabelOptions.internalValue;
  }

  // reference_lines - computed: false, optional: true, required: false
  private _referenceLines = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationReferenceLinesList(this, "reference_lines", false);
  public get referenceLines() {
    return this._referenceLines;
  }
  public putReferenceLines(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationReferenceLines[] | cdktf.IResolvable) {
    this._referenceLines.internalValue = value;
  }
  public resetReferenceLines() {
    this._referenceLines.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceLinesInput() {
    return this._referenceLines.internalValue;
  }

  // secondary_y_axis_display_options - computed: false, optional: true, required: false
  private _secondaryYAxisDisplayOptions = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSecondaryYAxisDisplayOptionsOutputReference(this, "secondary_y_axis_display_options");
  public get secondaryYAxisDisplayOptions() {
    return this._secondaryYAxisDisplayOptions;
  }
  public putSecondaryYAxisDisplayOptions(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSecondaryYAxisDisplayOptions) {
    this._secondaryYAxisDisplayOptions.internalValue = value;
  }
  public resetSecondaryYAxisDisplayOptions() {
    this._secondaryYAxisDisplayOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryYAxisDisplayOptionsInput() {
    return this._secondaryYAxisDisplayOptions.internalValue;
  }

  // secondary_y_axis_label_options - computed: false, optional: true, required: false
  private _secondaryYAxisLabelOptions = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSecondaryYAxisLabelOptionsOutputReference(this, "secondary_y_axis_label_options");
  public get secondaryYAxisLabelOptions() {
    return this._secondaryYAxisLabelOptions;
  }
  public putSecondaryYAxisLabelOptions(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSecondaryYAxisLabelOptions) {
    this._secondaryYAxisLabelOptions.internalValue = value;
  }
  public resetSecondaryYAxisLabelOptions() {
    this._secondaryYAxisLabelOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryYAxisLabelOptionsInput() {
    return this._secondaryYAxisLabelOptions.internalValue;
  }

  // series - computed: false, optional: true, required: false
  private _series = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeriesList(this, "series", false);
  public get series() {
    return this._series;
  }
  public putSeries(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSeries[] | cdktf.IResolvable) {
    this._series.internalValue = value;
  }
  public resetSeries() {
    this._series.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesInput() {
    return this._series.internalValue;
  }

  // small_multiples_options - computed: false, optional: true, required: false
  private _smallMultiplesOptions = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSmallMultiplesOptionsOutputReference(this, "small_multiples_options");
  public get smallMultiplesOptions() {
    return this._smallMultiplesOptions;
  }
  public putSmallMultiplesOptions(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSmallMultiplesOptions) {
    this._smallMultiplesOptions.internalValue = value;
  }
  public resetSmallMultiplesOptions() {
    this._smallMultiplesOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smallMultiplesOptionsInput() {
    return this._smallMultiplesOptions.internalValue;
  }

  // sort_configuration - computed: false, optional: true, required: false
  private _sortConfiguration = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfigurationOutputReference(this, "sort_configuration");
  public get sortConfiguration() {
    return this._sortConfiguration;
  }
  public putSortConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationSortConfiguration) {
    this._sortConfiguration.internalValue = value;
  }
  public resetSortConfiguration() {
    this._sortConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortConfigurationInput() {
    return this._sortConfiguration.internalValue;
  }

  // tooltip - computed: false, optional: true, required: false
  private _tooltip = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltipOutputReference(this, "tooltip");
  public get tooltip() {
    return this._tooltip;
  }
  public putTooltip(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationTooltip) {
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
  private _visualPalette = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationVisualPaletteOutputReference(this, "visual_palette");
  public get visualPalette() {
    return this._visualPalette;
  }
  public putVisualPalette(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationVisualPalette) {
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
  private _xAxisDisplayOptions = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptionsOutputReference(this, "x_axis_display_options");
  public get xAxisDisplayOptions() {
    return this._xAxisDisplayOptions;
  }
  public putXAxisDisplayOptions(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisDisplayOptions) {
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
  private _xAxisLabelOptions = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptionsOutputReference(this, "x_axis_label_options");
  public get xAxisLabelOptions() {
    return this._xAxisLabelOptions;
  }
  public putXAxisLabelOptions(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationXAxisLabelOptions) {
    this._xAxisLabelOptions.internalValue = value;
  }
  public resetXAxisLabelOptions() {
    this._xAxisLabelOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xAxisLabelOptionsInput() {
    return this._xAxisLabelOptions.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterColumnToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterColumnOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterColumn | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterColumn | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#category_values QuicksightTemplate#category_values}
  */
  readonly categoryValues: string[];
  /**
  * column block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column QuicksightTemplate#column}
  */
  readonly column: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterColumn;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.categoryValues),
    column: quicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterColumnToTerraform(struct!.column),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._categoryValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.categoryValues = this._categoryValues;
    }
    if (this._column?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._categoryValues = undefined;
      this._column.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._categoryValues = value.categoryValues;
      this._column.internalValue = value.column;
    }
  }

  // category_values - computed: false, optional: false, required: true
  private _categoryValues?: string[]; 
  public get categoryValues() {
    return this.getListAttribute('category_values');
  }
  public set categoryValues(value: string[]) {
    this._categoryValues = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryValuesInput() {
    return this._categoryValues;
  }

  // column - computed: false, optional: false, required: true
  private _column = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterColumnOutputReference(this, "column");
  public get column() {
    return this._column;
  }
  public putColumn(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterColumn) {
    this._column.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterColumnToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterColumnOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterColumn | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterColumn | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#value QuicksightTemplate#value}
  */
  readonly value: number;
  /**
  * column block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column QuicksightTemplate#column}
  */
  readonly column: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterColumn;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
    column: quicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterColumnToTerraform(struct!.column),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
      this._column.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
      this._column.internalValue = value.column;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // column - computed: false, optional: false, required: true
  private _column = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterColumnOutputReference(this, "column");
  public get column() {
    return this._column;
  }
  public putColumn(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterColumn) {
    this._column.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterColumnToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterColumnOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterColumn | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterColumn | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#range_maximum QuicksightTemplate#range_maximum}
  */
  readonly rangeMaximum: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#range_minimum QuicksightTemplate#range_minimum}
  */
  readonly rangeMinimum: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#time_granularity QuicksightTemplate#time_granularity}
  */
  readonly timeGranularity: string;
  /**
  * column block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column QuicksightTemplate#column}
  */
  readonly column: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterColumn;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    range_maximum: cdktf.stringToTerraform(struct!.rangeMaximum),
    range_minimum: cdktf.stringToTerraform(struct!.rangeMinimum),
    time_granularity: cdktf.stringToTerraform(struct!.timeGranularity),
    column: quicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterColumnToTerraform(struct!.column),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rangeMaximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeMaximum = this._rangeMaximum;
    }
    if (this._rangeMinimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeMinimum = this._rangeMinimum;
    }
    if (this._timeGranularity !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeGranularity = this._timeGranularity;
    }
    if (this._column?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rangeMaximum = undefined;
      this._rangeMinimum = undefined;
      this._timeGranularity = undefined;
      this._column.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rangeMaximum = value.rangeMaximum;
      this._rangeMinimum = value.rangeMinimum;
      this._timeGranularity = value.timeGranularity;
      this._column.internalValue = value.column;
    }
  }

  // range_maximum - computed: false, optional: false, required: true
  private _rangeMaximum?: string; 
  public get rangeMaximum() {
    return this.getStringAttribute('range_maximum');
  }
  public set rangeMaximum(value: string) {
    this._rangeMaximum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeMaximumInput() {
    return this._rangeMaximum;
  }

  // range_minimum - computed: false, optional: false, required: true
  private _rangeMinimum?: string; 
  public get rangeMinimum() {
    return this.getStringAttribute('range_minimum');
  }
  public set rangeMinimum(value: string) {
    this._rangeMinimum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeMinimumInput() {
    return this._rangeMinimum;
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
  private _column = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterColumnOutputReference(this, "column");
  public get column() {
    return this._column;
  }
  public putColumn(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterColumn) {
    this._column.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFilters {
  /**
  * category_filter block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#category_filter QuicksightTemplate#category_filter}
  */
  readonly categoryFilter?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilter;
  /**
  * numeric_equality_filter block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#numeric_equality_filter QuicksightTemplate#numeric_equality_filter}
  */
  readonly numericEqualityFilter?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilter;
  /**
  * time_range_filter block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#time_range_filter QuicksightTemplate#time_range_filter}
  */
  readonly timeRangeFilter?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilter;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category_filter: quicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterToTerraform(struct!.categoryFilter),
    numeric_equality_filter: quicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterToTerraform(struct!.numericEqualityFilter),
    time_range_filter: quicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterToTerraform(struct!.timeRangeFilter),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFilters | cdktf.IResolvable | undefined {
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
    if (this._timeRangeFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeRangeFilter = this._timeRangeFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._categoryFilter.internalValue = undefined;
      this._numericEqualityFilter.internalValue = undefined;
      this._timeRangeFilter.internalValue = undefined;
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
      this._timeRangeFilter.internalValue = value.timeRangeFilter;
    }
  }

  // category_filter - computed: false, optional: true, required: false
  private _categoryFilter = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilterOutputReference(this, "category_filter");
  public get categoryFilter() {
    return this._categoryFilter;
  }
  public putCategoryFilter(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersCategoryFilter) {
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
  private _numericEqualityFilter = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilterOutputReference(this, "numeric_equality_filter");
  public get numericEqualityFilter() {
    return this._numericEqualityFilter;
  }
  public putNumericEqualityFilter(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersNumericEqualityFilter) {
    this._numericEqualityFilter.internalValue = value;
  }
  public resetNumericEqualityFilter() {
    this._numericEqualityFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numericEqualityFilterInput() {
    return this._numericEqualityFilter.internalValue;
  }

  // time_range_filter - computed: false, optional: true, required: false
  private _timeRangeFilter = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilterOutputReference(this, "time_range_filter");
  public get timeRangeFilter() {
    return this._timeRangeFilter;
  }
  public putTimeRangeFilter(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersTimeRangeFilter) {
    this._timeRangeFilter.internalValue = value;
  }
  public resetTimeRangeFilter() {
    this._timeRangeFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeRangeFilterInput() {
    return this._timeRangeFilter.internalValue;
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFilters[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersOutputReference {
    return new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#hierarchy_id QuicksightTemplate#hierarchy_id}
  */
  readonly hierarchyId: string;
  /**
  * drill_down_filters block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#drill_down_filters QuicksightTemplate#drill_down_filters}
  */
  readonly drillDownFilters?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFilters[] | cdktf.IResolvable;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hierarchy_id: cdktf.stringToTerraform(struct!.hierarchyId),
    drill_down_filters: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersToTerraform, true)(struct!.drillDownFilters),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hierarchyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.hierarchyId = this._hierarchyId;
    }
    if (this._drillDownFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.drillDownFilters = this._drillDownFilters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hierarchyId = undefined;
      this._drillDownFilters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hierarchyId = value.hierarchyId;
      this._drillDownFilters.internalValue = value.drillDownFilters;
    }
  }

  // hierarchy_id - computed: false, optional: false, required: true
  private _hierarchyId?: string; 
  public get hierarchyId() {
    return this.getStringAttribute('hierarchy_id');
  }
  public set hierarchyId(value: string) {
    this._hierarchyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hierarchyIdInput() {
    return this._hierarchyId;
  }

  // drill_down_filters - computed: false, optional: true, required: false
  private _drillDownFilters = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFiltersList(this, "drill_down_filters", false);
  public get drillDownFilters() {
    return this._drillDownFilters;
  }
  public putDrillDownFilters(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyDrillDownFilters[] | cdktf.IResolvable) {
    this._drillDownFilters.internalValue = value;
  }
  public resetDrillDownFilters() {
    this._drillDownFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drillDownFiltersInput() {
    return this._drillDownFilters.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyColumns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyColumnsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyColumns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyColumns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columnName = undefined;
      this._dataSetIdentifier = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyColumnsList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyColumns[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyColumnsOutputReference {
    return new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterColumnToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterColumnOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterColumn | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterColumn | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#category_values QuicksightTemplate#category_values}
  */
  readonly categoryValues: string[];
  /**
  * column block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column QuicksightTemplate#column}
  */
  readonly column: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterColumn;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.categoryValues),
    column: quicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterColumnToTerraform(struct!.column),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._categoryValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.categoryValues = this._categoryValues;
    }
    if (this._column?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._categoryValues = undefined;
      this._column.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._categoryValues = value.categoryValues;
      this._column.internalValue = value.column;
    }
  }

  // category_values - computed: false, optional: false, required: true
  private _categoryValues?: string[]; 
  public get categoryValues() {
    return this.getListAttribute('category_values');
  }
  public set categoryValues(value: string[]) {
    this._categoryValues = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryValuesInput() {
    return this._categoryValues;
  }

  // column - computed: false, optional: false, required: true
  private _column = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterColumnOutputReference(this, "column");
  public get column() {
    return this._column;
  }
  public putColumn(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterColumn) {
    this._column.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterColumnToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterColumnOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterColumn | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterColumn | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#value QuicksightTemplate#value}
  */
  readonly value: number;
  /**
  * column block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column QuicksightTemplate#column}
  */
  readonly column: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterColumn;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
    column: quicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterColumnToTerraform(struct!.column),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
      this._column.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
      this._column.internalValue = value.column;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // column - computed: false, optional: false, required: true
  private _column = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterColumnOutputReference(this, "column");
  public get column() {
    return this._column;
  }
  public putColumn(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterColumn) {
    this._column.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterColumnToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterColumnOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterColumn | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterColumn | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#range_maximum QuicksightTemplate#range_maximum}
  */
  readonly rangeMaximum: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#range_minimum QuicksightTemplate#range_minimum}
  */
  readonly rangeMinimum: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#time_granularity QuicksightTemplate#time_granularity}
  */
  readonly timeGranularity: string;
  /**
  * column block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column QuicksightTemplate#column}
  */
  readonly column: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterColumn;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    range_maximum: cdktf.stringToTerraform(struct!.rangeMaximum),
    range_minimum: cdktf.stringToTerraform(struct!.rangeMinimum),
    time_granularity: cdktf.stringToTerraform(struct!.timeGranularity),
    column: quicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterColumnToTerraform(struct!.column),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rangeMaximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeMaximum = this._rangeMaximum;
    }
    if (this._rangeMinimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeMinimum = this._rangeMinimum;
    }
    if (this._timeGranularity !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeGranularity = this._timeGranularity;
    }
    if (this._column?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rangeMaximum = undefined;
      this._rangeMinimum = undefined;
      this._timeGranularity = undefined;
      this._column.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rangeMaximum = value.rangeMaximum;
      this._rangeMinimum = value.rangeMinimum;
      this._timeGranularity = value.timeGranularity;
      this._column.internalValue = value.column;
    }
  }

  // range_maximum - computed: false, optional: false, required: true
  private _rangeMaximum?: string; 
  public get rangeMaximum() {
    return this.getStringAttribute('range_maximum');
  }
  public set rangeMaximum(value: string) {
    this._rangeMaximum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeMaximumInput() {
    return this._rangeMaximum;
  }

  // range_minimum - computed: false, optional: false, required: true
  private _rangeMinimum?: string; 
  public get rangeMinimum() {
    return this.getStringAttribute('range_minimum');
  }
  public set rangeMinimum(value: string) {
    this._rangeMinimum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeMinimumInput() {
    return this._rangeMinimum;
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
  private _column = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterColumnOutputReference(this, "column");
  public get column() {
    return this._column;
  }
  public putColumn(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterColumn) {
    this._column.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFilters {
  /**
  * category_filter block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#category_filter QuicksightTemplate#category_filter}
  */
  readonly categoryFilter?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilter;
  /**
  * numeric_equality_filter block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#numeric_equality_filter QuicksightTemplate#numeric_equality_filter}
  */
  readonly numericEqualityFilter?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilter;
  /**
  * time_range_filter block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#time_range_filter QuicksightTemplate#time_range_filter}
  */
  readonly timeRangeFilter?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilter;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category_filter: quicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterToTerraform(struct!.categoryFilter),
    numeric_equality_filter: quicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterToTerraform(struct!.numericEqualityFilter),
    time_range_filter: quicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterToTerraform(struct!.timeRangeFilter),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFilters | cdktf.IResolvable | undefined {
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
    if (this._timeRangeFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeRangeFilter = this._timeRangeFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._categoryFilter.internalValue = undefined;
      this._numericEqualityFilter.internalValue = undefined;
      this._timeRangeFilter.internalValue = undefined;
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
      this._timeRangeFilter.internalValue = value.timeRangeFilter;
    }
  }

  // category_filter - computed: false, optional: true, required: false
  private _categoryFilter = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilterOutputReference(this, "category_filter");
  public get categoryFilter() {
    return this._categoryFilter;
  }
  public putCategoryFilter(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersCategoryFilter) {
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
  private _numericEqualityFilter = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilterOutputReference(this, "numeric_equality_filter");
  public get numericEqualityFilter() {
    return this._numericEqualityFilter;
  }
  public putNumericEqualityFilter(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersNumericEqualityFilter) {
    this._numericEqualityFilter.internalValue = value;
  }
  public resetNumericEqualityFilter() {
    this._numericEqualityFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numericEqualityFilterInput() {
    return this._numericEqualityFilter.internalValue;
  }

  // time_range_filter - computed: false, optional: true, required: false
  private _timeRangeFilter = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilterOutputReference(this, "time_range_filter");
  public get timeRangeFilter() {
    return this._timeRangeFilter;
  }
  public putTimeRangeFilter(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersTimeRangeFilter) {
    this._timeRangeFilter.internalValue = value;
  }
  public resetTimeRangeFilter() {
    this._timeRangeFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeRangeFilterInput() {
    return this._timeRangeFilter.internalValue;
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFilters[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersOutputReference {
    return new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#hierarchy_id QuicksightTemplate#hierarchy_id}
  */
  readonly hierarchyId: string;
  /**
  * columns block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#columns QuicksightTemplate#columns}
  */
  readonly columns: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyColumns[] | cdktf.IResolvable;
  /**
  * drill_down_filters block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#drill_down_filters QuicksightTemplate#drill_down_filters}
  */
  readonly drillDownFilters?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFilters[] | cdktf.IResolvable;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hierarchy_id: cdktf.stringToTerraform(struct!.hierarchyId),
    columns: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyColumnsToTerraform, true)(struct!.columns),
    drill_down_filters: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersToTerraform, true)(struct!.drillDownFilters),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hierarchyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.hierarchyId = this._hierarchyId;
    }
    if (this._columns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns?.internalValue;
    }
    if (this._drillDownFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.drillDownFilters = this._drillDownFilters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hierarchyId = undefined;
      this._columns.internalValue = undefined;
      this._drillDownFilters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hierarchyId = value.hierarchyId;
      this._columns.internalValue = value.columns;
      this._drillDownFilters.internalValue = value.drillDownFilters;
    }
  }

  // hierarchy_id - computed: false, optional: false, required: true
  private _hierarchyId?: string; 
  public get hierarchyId() {
    return this.getStringAttribute('hierarchy_id');
  }
  public set hierarchyId(value: string) {
    this._hierarchyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hierarchyIdInput() {
    return this._hierarchyId;
  }

  // columns - computed: false, optional: false, required: true
  private _columns = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }
  public putColumns(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyColumns[] | cdktf.IResolvable) {
    this._columns.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns.internalValue;
  }

  // drill_down_filters - computed: false, optional: true, required: false
  private _drillDownFilters = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFiltersList(this, "drill_down_filters", false);
  public get drillDownFilters() {
    return this._drillDownFilters;
  }
  public putDrillDownFilters(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyDrillDownFilters[] | cdktf.IResolvable) {
    this._drillDownFilters.internalValue = value;
  }
  public resetDrillDownFilters() {
    this._drillDownFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drillDownFiltersInput() {
    return this._drillDownFilters.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyColumns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyColumnsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyColumns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyColumns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columnName = undefined;
      this._dataSetIdentifier = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyColumnsList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyColumns[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyColumnsOutputReference {
    return new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersCategoryFilterColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersCategoryFilterColumnToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersCategoryFilterColumnOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersCategoryFilterColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersCategoryFilterColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersCategoryFilterColumn | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersCategoryFilterColumn | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersCategoryFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#category_values QuicksightTemplate#category_values}
  */
  readonly categoryValues: string[];
  /**
  * column block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column QuicksightTemplate#column}
  */
  readonly column: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersCategoryFilterColumn;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersCategoryFilterToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersCategoryFilterOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersCategoryFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.categoryValues),
    column: quicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersCategoryFilterColumnToTerraform(struct!.column),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersCategoryFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersCategoryFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._categoryValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.categoryValues = this._categoryValues;
    }
    if (this._column?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersCategoryFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._categoryValues = undefined;
      this._column.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._categoryValues = value.categoryValues;
      this._column.internalValue = value.column;
    }
  }

  // category_values - computed: false, optional: false, required: true
  private _categoryValues?: string[]; 
  public get categoryValues() {
    return this.getListAttribute('category_values');
  }
  public set categoryValues(value: string[]) {
    this._categoryValues = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryValuesInput() {
    return this._categoryValues;
  }

  // column - computed: false, optional: false, required: true
  private _column = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersCategoryFilterColumnOutputReference(this, "column");
  public get column() {
    return this._column;
  }
  public putColumn(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersCategoryFilterColumn) {
    this._column.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersNumericEqualityFilterColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersNumericEqualityFilterColumnToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersNumericEqualityFilterColumnOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersNumericEqualityFilterColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersNumericEqualityFilterColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersNumericEqualityFilterColumn | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersNumericEqualityFilterColumn | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersNumericEqualityFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#value QuicksightTemplate#value}
  */
  readonly value: number;
  /**
  * column block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column QuicksightTemplate#column}
  */
  readonly column: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersNumericEqualityFilterColumn;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersNumericEqualityFilterToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersNumericEqualityFilterOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersNumericEqualityFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
    column: quicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersNumericEqualityFilterColumnToTerraform(struct!.column),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersNumericEqualityFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersNumericEqualityFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersNumericEqualityFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
      this._column.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
      this._column.internalValue = value.column;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // column - computed: false, optional: false, required: true
  private _column = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersNumericEqualityFilterColumnOutputReference(this, "column");
  public get column() {
    return this._column;
  }
  public putColumn(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersNumericEqualityFilterColumn) {
    this._column.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersTimeRangeFilterColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersTimeRangeFilterColumnToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersTimeRangeFilterColumnOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersTimeRangeFilterColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersTimeRangeFilterColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersTimeRangeFilterColumn | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersTimeRangeFilterColumn | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersTimeRangeFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#range_maximum QuicksightTemplate#range_maximum}
  */
  readonly rangeMaximum: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#range_minimum QuicksightTemplate#range_minimum}
  */
  readonly rangeMinimum: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#time_granularity QuicksightTemplate#time_granularity}
  */
  readonly timeGranularity: string;
  /**
  * column block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column QuicksightTemplate#column}
  */
  readonly column: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersTimeRangeFilterColumn;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersTimeRangeFilterToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersTimeRangeFilterOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersTimeRangeFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    range_maximum: cdktf.stringToTerraform(struct!.rangeMaximum),
    range_minimum: cdktf.stringToTerraform(struct!.rangeMinimum),
    time_granularity: cdktf.stringToTerraform(struct!.timeGranularity),
    column: quicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersTimeRangeFilterColumnToTerraform(struct!.column),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersTimeRangeFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersTimeRangeFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rangeMaximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeMaximum = this._rangeMaximum;
    }
    if (this._rangeMinimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeMinimum = this._rangeMinimum;
    }
    if (this._timeGranularity !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeGranularity = this._timeGranularity;
    }
    if (this._column?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersTimeRangeFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rangeMaximum = undefined;
      this._rangeMinimum = undefined;
      this._timeGranularity = undefined;
      this._column.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rangeMaximum = value.rangeMaximum;
      this._rangeMinimum = value.rangeMinimum;
      this._timeGranularity = value.timeGranularity;
      this._column.internalValue = value.column;
    }
  }

  // range_maximum - computed: false, optional: false, required: true
  private _rangeMaximum?: string; 
  public get rangeMaximum() {
    return this.getStringAttribute('range_maximum');
  }
  public set rangeMaximum(value: string) {
    this._rangeMaximum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeMaximumInput() {
    return this._rangeMaximum;
  }

  // range_minimum - computed: false, optional: false, required: true
  private _rangeMinimum?: string; 
  public get rangeMinimum() {
    return this.getStringAttribute('range_minimum');
  }
  public set rangeMinimum(value: string) {
    this._rangeMinimum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeMinimumInput() {
    return this._rangeMinimum;
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
  private _column = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersTimeRangeFilterColumnOutputReference(this, "column");
  public get column() {
    return this._column;
  }
  public putColumn(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersTimeRangeFilterColumn) {
    this._column.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFilters {
  /**
  * category_filter block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#category_filter QuicksightTemplate#category_filter}
  */
  readonly categoryFilter?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersCategoryFilter;
  /**
  * numeric_equality_filter block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#numeric_equality_filter QuicksightTemplate#numeric_equality_filter}
  */
  readonly numericEqualityFilter?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersNumericEqualityFilter;
  /**
  * time_range_filter block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#time_range_filter QuicksightTemplate#time_range_filter}
  */
  readonly timeRangeFilter?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersTimeRangeFilter;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category_filter: quicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersCategoryFilterToTerraform(struct!.categoryFilter),
    numeric_equality_filter: quicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersNumericEqualityFilterToTerraform(struct!.numericEqualityFilter),
    time_range_filter: quicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersTimeRangeFilterToTerraform(struct!.timeRangeFilter),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFilters | cdktf.IResolvable | undefined {
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
    if (this._timeRangeFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeRangeFilter = this._timeRangeFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._categoryFilter.internalValue = undefined;
      this._numericEqualityFilter.internalValue = undefined;
      this._timeRangeFilter.internalValue = undefined;
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
      this._timeRangeFilter.internalValue = value.timeRangeFilter;
    }
  }

  // category_filter - computed: false, optional: true, required: false
  private _categoryFilter = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersCategoryFilterOutputReference(this, "category_filter");
  public get categoryFilter() {
    return this._categoryFilter;
  }
  public putCategoryFilter(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersCategoryFilter) {
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
  private _numericEqualityFilter = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersNumericEqualityFilterOutputReference(this, "numeric_equality_filter");
  public get numericEqualityFilter() {
    return this._numericEqualityFilter;
  }
  public putNumericEqualityFilter(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersNumericEqualityFilter) {
    this._numericEqualityFilter.internalValue = value;
  }
  public resetNumericEqualityFilter() {
    this._numericEqualityFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numericEqualityFilterInput() {
    return this._numericEqualityFilter.internalValue;
  }

  // time_range_filter - computed: false, optional: true, required: false
  private _timeRangeFilter = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersTimeRangeFilterOutputReference(this, "time_range_filter");
  public get timeRangeFilter() {
    return this._timeRangeFilter;
  }
  public putTimeRangeFilter(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersTimeRangeFilter) {
    this._timeRangeFilter.internalValue = value;
  }
  public resetTimeRangeFilter() {
    this._timeRangeFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeRangeFilterInput() {
    return this._timeRangeFilter.internalValue;
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFilters[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersOutputReference {
    return new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#hierarchy_id QuicksightTemplate#hierarchy_id}
  */
  readonly hierarchyId: string;
  /**
  * columns block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#columns QuicksightTemplate#columns}
  */
  readonly columns: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyColumns[] | cdktf.IResolvable;
  /**
  * drill_down_filters block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#drill_down_filters QuicksightTemplate#drill_down_filters}
  */
  readonly drillDownFilters?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFilters[] | cdktf.IResolvable;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hierarchy_id: cdktf.stringToTerraform(struct!.hierarchyId),
    columns: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyColumnsToTerraform, true)(struct!.columns),
    drill_down_filters: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersToTerraform, true)(struct!.drillDownFilters),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hierarchyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.hierarchyId = this._hierarchyId;
    }
    if (this._columns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns?.internalValue;
    }
    if (this._drillDownFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.drillDownFilters = this._drillDownFilters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hierarchyId = undefined;
      this._columns.internalValue = undefined;
      this._drillDownFilters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hierarchyId = value.hierarchyId;
      this._columns.internalValue = value.columns;
      this._drillDownFilters.internalValue = value.drillDownFilters;
    }
  }

  // hierarchy_id - computed: false, optional: false, required: true
  private _hierarchyId?: string; 
  public get hierarchyId() {
    return this.getStringAttribute('hierarchy_id');
  }
  public set hierarchyId(value: string) {
    this._hierarchyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hierarchyIdInput() {
    return this._hierarchyId;
  }

  // columns - computed: false, optional: false, required: true
  private _columns = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }
  public putColumns(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyColumns[] | cdktf.IResolvable) {
    this._columns.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns.internalValue;
  }

  // drill_down_filters - computed: false, optional: true, required: false
  private _drillDownFilters = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFiltersList(this, "drill_down_filters", false);
  public get drillDownFilters() {
    return this._drillDownFilters;
  }
  public putDrillDownFilters(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyDrillDownFilters[] | cdktf.IResolvable) {
    this._drillDownFilters.internalValue = value;
  }
  public resetDrillDownFilters() {
    this._drillDownFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drillDownFiltersInput() {
    return this._drillDownFilters.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchies {
  /**
  * date_time_hierarchy block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#date_time_hierarchy QuicksightTemplate#date_time_hierarchy}
  */
  readonly dateTimeHierarchy?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchy;
  /**
  * explicit_hierarchy block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#explicit_hierarchy QuicksightTemplate#explicit_hierarchy}
  */
  readonly explicitHierarchy?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchy;
  /**
  * predefined_hierarchy block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#predefined_hierarchy QuicksightTemplate#predefined_hierarchy}
  */
  readonly predefinedHierarchy?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchy;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    date_time_hierarchy: quicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyToTerraform(struct!.dateTimeHierarchy),
    explicit_hierarchy: quicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyToTerraform(struct!.explicitHierarchy),
    predefined_hierarchy: quicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyToTerraform(struct!.predefinedHierarchy),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dateTimeHierarchy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateTimeHierarchy = this._dateTimeHierarchy?.internalValue;
    }
    if (this._explicitHierarchy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.explicitHierarchy = this._explicitHierarchy?.internalValue;
    }
    if (this._predefinedHierarchy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.predefinedHierarchy = this._predefinedHierarchy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dateTimeHierarchy.internalValue = undefined;
      this._explicitHierarchy.internalValue = undefined;
      this._predefinedHierarchy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dateTimeHierarchy.internalValue = value.dateTimeHierarchy;
      this._explicitHierarchy.internalValue = value.explicitHierarchy;
      this._predefinedHierarchy.internalValue = value.predefinedHierarchy;
    }
  }

  // date_time_hierarchy - computed: false, optional: true, required: false
  private _dateTimeHierarchy = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchyOutputReference(this, "date_time_hierarchy");
  public get dateTimeHierarchy() {
    return this._dateTimeHierarchy;
  }
  public putDateTimeHierarchy(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesDateTimeHierarchy) {
    this._dateTimeHierarchy.internalValue = value;
  }
  public resetDateTimeHierarchy() {
    this._dateTimeHierarchy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateTimeHierarchyInput() {
    return this._dateTimeHierarchy.internalValue;
  }

  // explicit_hierarchy - computed: false, optional: true, required: false
  private _explicitHierarchy = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchyOutputReference(this, "explicit_hierarchy");
  public get explicitHierarchy() {
    return this._explicitHierarchy;
  }
  public putExplicitHierarchy(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesExplicitHierarchy) {
    this._explicitHierarchy.internalValue = value;
  }
  public resetExplicitHierarchy() {
    this._explicitHierarchy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get explicitHierarchyInput() {
    return this._explicitHierarchy.internalValue;
  }

  // predefined_hierarchy - computed: false, optional: true, required: false
  private _predefinedHierarchy = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchyOutputReference(this, "predefined_hierarchy");
  public get predefinedHierarchy() {
    return this._predefinedHierarchy;
  }
  public putPredefinedHierarchy(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesPredefinedHierarchy) {
    this._predefinedHierarchy.internalValue = value;
  }
  public resetPredefinedHierarchy() {
    this._predefinedHierarchy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predefinedHierarchyInput() {
    return this._predefinedHierarchy.internalValue;
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchies[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesOutputReference {
    return new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualSubtitleFormatText {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#plain_text QuicksightTemplate#plain_text}
  */
  readonly plainText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#rich_text QuicksightTemplate#rich_text}
  */
  readonly richText?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualSubtitleFormatTextToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualSubtitleFormatTextOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualSubtitleFormatText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    plain_text: cdktf.stringToTerraform(struct!.plainText),
    rich_text: cdktf.stringToTerraform(struct!.richText),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualSubtitleFormatTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualSubtitleFormatText | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualSubtitleFormatText | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualSubtitle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
  /**
  * format_text block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#format_text QuicksightTemplate#format_text}
  */
  readonly formatText?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualSubtitleFormatText;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualSubtitleToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualSubtitleOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualSubtitle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    visibility: cdktf.stringToTerraform(struct!.visibility),
    format_text: quicksightTemplateDefinitionSheetsVisualsLineChartVisualSubtitleFormatTextToTerraform(struct!.formatText),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualSubtitleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualSubtitle | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualSubtitle | undefined) {
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
  private _formatText = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualSubtitleFormatTextOutputReference(this, "format_text");
  public get formatText() {
    return this._formatText;
  }
  public putFormatText(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualSubtitleFormatText) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualTitleFormatText {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#plain_text QuicksightTemplate#plain_text}
  */
  readonly plainText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#rich_text QuicksightTemplate#rich_text}
  */
  readonly richText?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualTitleFormatTextToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualTitleFormatTextOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualTitleFormatText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    plain_text: cdktf.stringToTerraform(struct!.plainText),
    rich_text: cdktf.stringToTerraform(struct!.richText),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualTitleFormatTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualTitleFormatText | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualTitleFormatText | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisualTitle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
  /**
  * format_text block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#format_text QuicksightTemplate#format_text}
  */
  readonly formatText?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualTitleFormatText;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualTitleToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualTitleOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisualTitle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    visibility: cdktf.stringToTerraform(struct!.visibility),
    format_text: quicksightTemplateDefinitionSheetsVisualsLineChartVisualTitleFormatTextToTerraform(struct!.formatText),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualTitleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisualTitle | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualTitle | undefined) {
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
  private _formatText = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualTitleFormatTextOutputReference(this, "format_text");
  public get formatText() {
    return this._formatText;
  }
  public putFormatText(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualTitleFormatText) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsLineChartVisual {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visual_id QuicksightTemplate#visual_id}
  */
  readonly visualId: string;
  /**
  * actions block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#actions QuicksightTemplate#actions}
  */
  readonly actions?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualActions[] | cdktf.IResolvable;
  /**
  * chart_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#chart_configuration QuicksightTemplate#chart_configuration}
  */
  readonly chartConfiguration?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfiguration;
  /**
  * column_hierarchies block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_hierarchies QuicksightTemplate#column_hierarchies}
  */
  readonly columnHierarchies?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchies[] | cdktf.IResolvable;
  /**
  * subtitle block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#subtitle QuicksightTemplate#subtitle}
  */
  readonly subtitle?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualSubtitle;
  /**
  * title block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#title QuicksightTemplate#title}
  */
  readonly title?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualTitle;
}

export function quicksightTemplateDefinitionSheetsVisualsLineChartVisualToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualOutputReference | QuicksightTemplateDefinitionSheetsVisualsLineChartVisual): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    visual_id: cdktf.stringToTerraform(struct!.visualId),
    actions: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsLineChartVisualActionsToTerraform, true)(struct!.actions),
    chart_configuration: quicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationToTerraform(struct!.chartConfiguration),
    column_hierarchies: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesToTerraform, true)(struct!.columnHierarchies),
    subtitle: quicksightTemplateDefinitionSheetsVisualsLineChartVisualSubtitleToTerraform(struct!.subtitle),
    title: quicksightTemplateDefinitionSheetsVisualsLineChartVisualTitleToTerraform(struct!.title),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsLineChartVisualOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsLineChartVisual | undefined {
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
    if (this._columnHierarchies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnHierarchies = this._columnHierarchies?.internalValue;
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisual | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._visualId = undefined;
      this._actions.internalValue = undefined;
      this._chartConfiguration.internalValue = undefined;
      this._columnHierarchies.internalValue = undefined;
      this._subtitle.internalValue = undefined;
      this._title.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._visualId = value.visualId;
      this._actions.internalValue = value.actions;
      this._chartConfiguration.internalValue = value.chartConfiguration;
      this._columnHierarchies.internalValue = value.columnHierarchies;
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
  private _actions = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }
  public putActions(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualActions[] | cdktf.IResolvable) {
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
  private _chartConfiguration = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfigurationOutputReference(this, "chart_configuration");
  public get chartConfiguration() {
    return this._chartConfiguration;
  }
  public putChartConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualChartConfiguration) {
    this._chartConfiguration.internalValue = value;
  }
  public resetChartConfiguration() {
    this._chartConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartConfigurationInput() {
    return this._chartConfiguration.internalValue;
  }

  // column_hierarchies - computed: false, optional: true, required: false
  private _columnHierarchies = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchiesList(this, "column_hierarchies", false);
  public get columnHierarchies() {
    return this._columnHierarchies;
  }
  public putColumnHierarchies(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualColumnHierarchies[] | cdktf.IResolvable) {
    this._columnHierarchies.internalValue = value;
  }
  public resetColumnHierarchies() {
    this._columnHierarchies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnHierarchiesInput() {
    return this._columnHierarchies.internalValue;
  }

  // subtitle - computed: false, optional: true, required: false
  private _subtitle = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualSubtitleOutputReference(this, "subtitle");
  public get subtitle() {
    return this._subtitle;
  }
  public putSubtitle(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualSubtitle) {
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
  private _title = new QuicksightTemplateDefinitionSheetsVisualsLineChartVisualTitleOutputReference(this, "title");
  public get title() {
    return this._title;
  }
  public putTitle(value: QuicksightTemplateDefinitionSheetsVisualsLineChartVisualTitle) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsFilterOperationSelectedFieldsConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#selected_field_option QuicksightTemplate#selected_field_option}
  */
  readonly selectedFieldOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#selected_fields QuicksightTemplate#selected_fields}
  */
  readonly selectedFields?: string[];
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsFilterOperationSelectedFieldsConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsFilterOperationSelectedFieldsConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsFilterOperationSelectedFieldsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    selected_field_option: cdktf.stringToTerraform(struct!.selectedFieldOption),
    selected_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.selectedFields),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsFilterOperationSelectedFieldsConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsFilterOperationSelectedFieldsConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsFilterOperationSelectedFieldsConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationSameSheetTargetVisualConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#target_visual_option QuicksightTemplate#target_visual_option}
  */
  readonly targetVisualOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#target_visuals QuicksightTemplate#target_visuals}
  */
  readonly targetVisuals?: string[];
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationSameSheetTargetVisualConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationSameSheetTargetVisualConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationSameSheetTargetVisualConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_visual_option: cdktf.stringToTerraform(struct!.targetVisualOption),
    target_visuals: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targetVisuals),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationSameSheetTargetVisualConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationSameSheetTargetVisualConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationSameSheetTargetVisualConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsFilterOperationTargetVisualsConfiguration {
  /**
  * same_sheet_target_visual_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#same_sheet_target_visual_configuration QuicksightTemplate#same_sheet_target_visual_configuration}
  */
  readonly sameSheetTargetVisualConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationSameSheetTargetVisualConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsFilterOperationTargetVisualsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    same_sheet_target_visual_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationSameSheetTargetVisualConfigurationToTerraform(struct!.sameSheetTargetVisualConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsFilterOperationTargetVisualsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sameSheetTargetVisualConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sameSheetTargetVisualConfiguration = this._sameSheetTargetVisualConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsFilterOperationTargetVisualsConfiguration | undefined) {
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
  private _sameSheetTargetVisualConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationSameSheetTargetVisualConfigurationOutputReference(this, "same_sheet_target_visual_configuration");
  public get sameSheetTargetVisualConfiguration() {
    return this._sameSheetTargetVisualConfiguration;
  }
  public putSameSheetTargetVisualConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationSameSheetTargetVisualConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsFilterOperation {
  /**
  * selected_fields_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#selected_fields_configuration QuicksightTemplate#selected_fields_configuration}
  */
  readonly selectedFieldsConfiguration: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsFilterOperationSelectedFieldsConfiguration;
  /**
  * target_visuals_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#target_visuals_configuration QuicksightTemplate#target_visuals_configuration}
  */
  readonly targetVisualsConfiguration: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsFilterOperationTargetVisualsConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsFilterOperationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsFilterOperationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsFilterOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    selected_fields_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsFilterOperationSelectedFieldsConfigurationToTerraform(struct!.selectedFieldsConfiguration),
    target_visuals_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationToTerraform(struct!.targetVisualsConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsFilterOperationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsFilterOperation | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsFilterOperation | undefined) {
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
  private _selectedFieldsConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsFilterOperationSelectedFieldsConfigurationOutputReference(this, "selected_fields_configuration");
  public get selectedFieldsConfiguration() {
    return this._selectedFieldsConfiguration;
  }
  public putSelectedFieldsConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsFilterOperationSelectedFieldsConfiguration) {
    this._selectedFieldsConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedFieldsConfigurationInput() {
    return this._selectedFieldsConfiguration.internalValue;
  }

  // target_visuals_configuration - computed: false, optional: false, required: true
  private _targetVisualsConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationOutputReference(this, "target_visuals_configuration");
  public get targetVisualsConfiguration() {
    return this._targetVisualsConfiguration;
  }
  public putTargetVisualsConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsFilterOperationTargetVisualsConfiguration) {
    this._targetVisualsConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetVisualsConfigurationInput() {
    return this._targetVisualsConfiguration.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsNavigationOperationLocalNavigationConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#target_sheet_id QuicksightTemplate#target_sheet_id}
  */
  readonly targetSheetId: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsNavigationOperationLocalNavigationConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsNavigationOperationLocalNavigationConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsNavigationOperationLocalNavigationConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_sheet_id: cdktf.stringToTerraform(struct!.targetSheetId),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsNavigationOperationLocalNavigationConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsNavigationOperationLocalNavigationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetSheetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetSheetId = this._targetSheetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsNavigationOperationLocalNavigationConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsNavigationOperation {
  /**
  * local_navigation_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#local_navigation_configuration QuicksightTemplate#local_navigation_configuration}
  */
  readonly localNavigationConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsNavigationOperationLocalNavigationConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsNavigationOperationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsNavigationOperationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsNavigationOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_navigation_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsNavigationOperationLocalNavigationConfigurationToTerraform(struct!.localNavigationConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsNavigationOperationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsNavigationOperation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localNavigationConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localNavigationConfiguration = this._localNavigationConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsNavigationOperation | undefined) {
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
  private _localNavigationConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsNavigationOperationLocalNavigationConfigurationOutputReference(this, "local_navigation_configuration");
  public get localNavigationConfiguration() {
    return this._localNavigationConfiguration;
  }
  public putLocalNavigationConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsNavigationOperationLocalNavigationConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationCustomValues {
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

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationCustomValuesToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationCustomValuesOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationCustomValues): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationCustomValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationCustomValues | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationCustomValues | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#include_null_value QuicksightTemplate#include_null_value}
  */
  readonly includeNullValue?: boolean | cdktf.IResolvable;
  /**
  * custom_values block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#custom_values QuicksightTemplate#custom_values}
  */
  readonly customValues: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationCustomValues;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_null_value: cdktf.booleanToTerraform(struct!.includeNullValue),
    custom_values: quicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationCustomValuesToTerraform(struct!.customValues),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfiguration | undefined) {
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
  private _customValues = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationCustomValuesOutputReference(this, "custom_values");
  public get customValues() {
    return this._customValues;
  }
  public putCustomValues(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationCustomValues) {
    this._customValues.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customValuesInput() {
    return this._customValues.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValue {
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
  readonly customValuesConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    select_all_value_options: cdktf.stringToTerraform(struct!.selectAllValueOptions),
    source_field: cdktf.stringToTerraform(struct!.sourceField),
    source_parameter_name: cdktf.stringToTerraform(struct!.sourceParameterName),
    custom_values_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationToTerraform(struct!.customValuesConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValue | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValue | undefined) {
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
  private _customValuesConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationOutputReference(this, "custom_values_configuration");
  public get customValuesConfiguration() {
    return this._customValuesConfiguration;
  }
  public putCustomValuesConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#destination_parameter_name QuicksightTemplate#destination_parameter_name}
  */
  readonly destinationParameterName: string;
  /**
  * value block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#value QuicksightTemplate#value}
  */
  readonly value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValue;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_parameter_name: cdktf.stringToTerraform(struct!.destinationParameterName),
    value: quicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueToTerraform(struct!.value),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurations | cdktf.IResolvable | undefined) {
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
  private _value = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurations[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsOutputReference {
    return new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsSetParametersOperation {
  /**
  * parameter_value_configurations block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#parameter_value_configurations QuicksightTemplate#parameter_value_configurations}
  */
  readonly parameterValueConfigurations: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurations[] | cdktf.IResolvable;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsSetParametersOperationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsSetParametersOperationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsSetParametersOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameter_value_configurations: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsToTerraform, true)(struct!.parameterValueConfigurations),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsSetParametersOperationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsSetParametersOperation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameterValueConfigurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterValueConfigurations = this._parameterValueConfigurations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsSetParametersOperation | undefined) {
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
  private _parameterValueConfigurations = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsList(this, "parameter_value_configurations", false);
  public get parameterValueConfigurations() {
    return this._parameterValueConfigurations;
  }
  public putParameterValueConfigurations(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurations[] | cdktf.IResolvable) {
    this._parameterValueConfigurations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterValueConfigurationsInput() {
    return this._parameterValueConfigurations.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsUrlOperation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#url_target QuicksightTemplate#url_target}
  */
  readonly urlTarget: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#url_template QuicksightTemplate#url_template}
  */
  readonly urlTemplate: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsUrlOperationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsUrlOperationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsUrlOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url_target: cdktf.stringToTerraform(struct!.urlTarget),
    url_template: cdktf.stringToTerraform(struct!.urlTemplate),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsUrlOperationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsUrlOperation | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsUrlOperation | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperations {
  /**
  * filter_operation block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#filter_operation QuicksightTemplate#filter_operation}
  */
  readonly filterOperation?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsFilterOperation;
  /**
  * navigation_operation block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#navigation_operation QuicksightTemplate#navigation_operation}
  */
  readonly navigationOperation?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsNavigationOperation;
  /**
  * set_parameters_operation block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#set_parameters_operation QuicksightTemplate#set_parameters_operation}
  */
  readonly setParametersOperation?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsSetParametersOperation;
  /**
  * url_operation block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#url_operation QuicksightTemplate#url_operation}
  */
  readonly urlOperation?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsUrlOperation;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_operation: quicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsFilterOperationToTerraform(struct!.filterOperation),
    navigation_operation: quicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsNavigationOperationToTerraform(struct!.navigationOperation),
    set_parameters_operation: quicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsSetParametersOperationToTerraform(struct!.setParametersOperation),
    url_operation: quicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsUrlOperationToTerraform(struct!.urlOperation),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperations | cdktf.IResolvable | undefined) {
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
  private _filterOperation = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsFilterOperationOutputReference(this, "filter_operation");
  public get filterOperation() {
    return this._filterOperation;
  }
  public putFilterOperation(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsFilterOperation) {
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
  private _navigationOperation = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsNavigationOperationOutputReference(this, "navigation_operation");
  public get navigationOperation() {
    return this._navigationOperation;
  }
  public putNavigationOperation(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsNavigationOperation) {
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
  private _setParametersOperation = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsSetParametersOperationOutputReference(this, "set_parameters_operation");
  public get setParametersOperation() {
    return this._setParametersOperation;
  }
  public putSetParametersOperation(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsSetParametersOperation) {
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
  private _urlOperation = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsUrlOperationOutputReference(this, "url_operation");
  public get urlOperation() {
    return this._urlOperation;
  }
  public putUrlOperation(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsUrlOperation) {
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

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperations[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsOutputReference {
    return new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActions {
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
  readonly actionOperations: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperations[] | cdktf.IResolvable;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_action_id: cdktf.stringToTerraform(struct!.customActionId),
    name: cdktf.stringToTerraform(struct!.name),
    status: cdktf.stringToTerraform(struct!.status),
    trigger: cdktf.stringToTerraform(struct!.trigger),
    action_operations: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsToTerraform, true)(struct!.actionOperations),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActions | cdktf.IResolvable | undefined) {
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
  private _actionOperations = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperationsList(this, "action_operations", false);
  public get actionOperations() {
    return this._actionOperations;
  }
  public putActionOperations(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsActionOperations[] | cdktf.IResolvable) {
    this._actionOperations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionOperationsInput() {
    return this._actionOperations.internalValue;
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActions[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsOutputReference {
    return new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsApplyToColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsApplyToColumnToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsApplyToColumnOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsApplyToColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsApplyToColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsApplyToColumn | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsApplyToColumn | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsApplyTo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_id QuicksightTemplate#field_id}
  */
  readonly fieldId: string;
  /**
  * column block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column QuicksightTemplate#column}
  */
  readonly column: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsApplyToColumn;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsApplyToToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsApplyToOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsApplyTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_id: cdktf.stringToTerraform(struct!.fieldId),
    column: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsApplyToColumnToTerraform(struct!.column),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsApplyToOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsApplyTo | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsApplyTo | undefined) {
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
  private _column = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsApplyToColumnOutputReference(this, "column");
  public get column() {
    return this._column;
  }
  public putColumn(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsApplyToColumn) {
    this._column.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsFontConfigurationFontSize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#relative QuicksightTemplate#relative}
  */
  readonly relative?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsFontConfigurationFontSizeToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsFontConfigurationFontSizeOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relative: cdktf.stringToTerraform(struct!.relative),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsFontConfigurationFontSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relative !== undefined) {
      hasAnyValues = true;
      internalValueResult.relative = this._relative;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsFontConfigurationFontSize | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsFontConfigurationFontWeight {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#name QuicksightTemplate#name}
  */
  readonly name?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsFontConfigurationFontWeightToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsFontConfigurationFontWeightOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsFontConfigurationFontWeightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsFontConfigurationFontWeight | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsFontConfiguration {
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
  readonly fontSize?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsFontConfigurationFontSize;
  /**
  * font_weight block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_weight QuicksightTemplate#font_weight}
  */
  readonly fontWeight?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsFontConfigurationFontWeight;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsFontConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsFontConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    font_color: cdktf.stringToTerraform(struct!.fontColor),
    font_decoration: cdktf.stringToTerraform(struct!.fontDecoration),
    font_style: cdktf.stringToTerraform(struct!.fontStyle),
    font_size: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsFontConfigurationFontSizeToTerraform(struct!.fontSize),
    font_weight: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsFontConfigurationFontWeightToTerraform(struct!.fontWeight),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsFontConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsFontConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsFontConfiguration | undefined) {
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
  private _fontSize = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsFontConfigurationFontSizeOutputReference(this, "font_size");
  public get fontSize() {
    return this._fontSize;
  }
  public putFontSize(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsFontConfigurationFontSize) {
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
  private _fontWeight = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsFontConfigurationFontWeightOutputReference(this, "font_weight");
  public get fontWeight() {
    return this._fontWeight;
  }
  public putFontWeight(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsFontConfigurationFontWeight) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#custom_label QuicksightTemplate#custom_label}
  */
  readonly customLabel?: string;
  /**
  * apply_to block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#apply_to QuicksightTemplate#apply_to}
  */
  readonly applyTo?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsApplyTo;
  /**
  * font_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_configuration QuicksightTemplate#font_configuration}
  */
  readonly fontConfiguration?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsFontConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_label: cdktf.stringToTerraform(struct!.customLabel),
    apply_to: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsApplyToToTerraform(struct!.applyTo),
    font_configuration: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsFontConfigurationToTerraform(struct!.fontConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptions | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptions | undefined) {
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
  private _applyTo = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsApplyToOutputReference(this, "apply_to");
  public get applyTo() {
    return this._applyTo;
  }
  public putApplyTo(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsApplyTo) {
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
  private _fontConfiguration = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsFontConfigurationOutputReference(this, "font_configuration");
  public get fontConfiguration() {
    return this._fontConfiguration;
  }
  public putFontConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsFontConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationCategoryLabelOptions {
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
  readonly axisLabelOptions?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptions;
}

export function quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationCategoryLabelOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationCategoryLabelOptionsOutputReference | QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationCategoryLabelOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sort_icon_visibility: cdktf.stringToTerraform(struct!.sortIconVisibility),
    visibility: cdktf.stringToTerraform(struct!.visibility),
    axis_label_options: quicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsToTerraform(struct!.axisLabelOptions),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationCategoryLabelOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationCategoryLabelOptions | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationCategoryLabelOptions | undefined) {
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
  private _axisLabelOptions = new QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsOutputReference(this, "axis_label_options");
  public get axisLabelOptions() {
    return this._axisLabelOptions;
  }
  public putAxisLabelOptions(value: QuicksightTemplateDefinitionSheetsVisualsPieChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptions) {
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
