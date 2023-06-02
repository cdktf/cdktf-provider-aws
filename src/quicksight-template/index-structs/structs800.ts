import * as cdktf from 'cdktf';
import { QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsBackgroundStyle,
quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsBackgroundStyleToTerraform,
QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsBackgroundStyleOutputReference,
QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySections,
quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsToTerraform,
QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsList,
QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutCanvasSizeOptions,
quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutCanvasSizeOptionsToTerraform,
QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutCanvasSizeOptionsOutputReference,
QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSections,
quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsToTerraform,
QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsOutputReference,
QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayout,
quicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutToTerraform,
QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutOutputReference,
QuicksightTemplateDefinitionSheetsLayoutsConfigurationGridLayout,
quicksightTemplateDefinitionSheetsLayoutsConfigurationGridLayoutToTerraform,
QuicksightTemplateDefinitionSheetsLayoutsConfigurationGridLayoutOutputReference } from './structs400'
export interface QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsBorderStyle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#color QuicksightTemplate#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsBorderStyleToTerraform(struct?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsBorderStyleOutputReference | QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsBorderStyle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsBorderStyleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsBorderStyle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsBorderStyle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._color = undefined;
      this._visibility = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._color = value.color;
      this._visibility = value.visibility;
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
export interface QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsLoadingAnimation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsLoadingAnimationToTerraform(struct?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsLoadingAnimationOutputReference | QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsLoadingAnimation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsLoadingAnimationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsLoadingAnimation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsLoadingAnimation | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsRenderingRulesConfigurationOverrides {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsRenderingRulesConfigurationOverridesToTerraform(struct?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsRenderingRulesConfigurationOverridesOutputReference | QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsRenderingRulesConfigurationOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsRenderingRulesConfigurationOverridesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsRenderingRulesConfigurationOverrides | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsRenderingRulesConfigurationOverrides | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsRenderingRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#expression QuicksightTemplate#expression}
  */
  readonly expression: string;
  /**
  * configuration_overrides block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#configuration_overrides QuicksightTemplate#configuration_overrides}
  */
  readonly configurationOverrides: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsRenderingRulesConfigurationOverrides;
}

export function quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsRenderingRulesToTerraform(struct?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsRenderingRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    configuration_overrides: quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsRenderingRulesConfigurationOverridesToTerraform(struct!.configurationOverrides),
  }
}

export class QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsRenderingRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsRenderingRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._configurationOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurationOverrides = this._configurationOverrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsRenderingRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expression = undefined;
      this._configurationOverrides.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expression = value.expression;
      this._configurationOverrides.internalValue = value.configurationOverrides;
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

  // configuration_overrides - computed: false, optional: false, required: true
  private _configurationOverrides = new QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsRenderingRulesConfigurationOverridesOutputReference(this, "configuration_overrides");
  public get configurationOverrides() {
    return this._configurationOverrides;
  }
  public putConfigurationOverrides(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsRenderingRulesConfigurationOverrides) {
    this._configurationOverrides.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationOverridesInput() {
    return this._configurationOverrides.internalValue;
  }
}

export class QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsRenderingRulesList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsRenderingRules[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsRenderingRulesOutputReference {
    return new QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsRenderingRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsSelectedBorderStyle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#color QuicksightTemplate#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsSelectedBorderStyleToTerraform(struct?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsSelectedBorderStyleOutputReference | QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsSelectedBorderStyle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsSelectedBorderStyleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsSelectedBorderStyle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsSelectedBorderStyle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._color = undefined;
      this._visibility = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._color = value.color;
      this._visibility = value.visibility;
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
export interface QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElements {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#element_id QuicksightTemplate#element_id}
  */
  readonly elementId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#element_type QuicksightTemplate#element_type}
  */
  readonly elementType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#height QuicksightTemplate#height}
  */
  readonly height: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#width QuicksightTemplate#width}
  */
  readonly width: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#x_axis_location QuicksightTemplate#x_axis_location}
  */
  readonly xAxisLocation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#y_axis_location QuicksightTemplate#y_axis_location}
  */
  readonly yAxisLocation: string;
  /**
  * background_style block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#background_style QuicksightTemplate#background_style}
  */
  readonly backgroundStyle?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsBackgroundStyle;
  /**
  * border_style block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#border_style QuicksightTemplate#border_style}
  */
  readonly borderStyle?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsBorderStyle;
  /**
  * loading_animation block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#loading_animation QuicksightTemplate#loading_animation}
  */
  readonly loadingAnimation?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsLoadingAnimation;
  /**
  * rendering_rules block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#rendering_rules QuicksightTemplate#rendering_rules}
  */
  readonly renderingRules?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsRenderingRules[] | cdktf.IResolvable;
  /**
  * selected_border_style block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#selected_border_style QuicksightTemplate#selected_border_style}
  */
  readonly selectedBorderStyle?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsSelectedBorderStyle;
}

export function quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsToTerraform(struct?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    element_id: cdktf.stringToTerraform(struct!.elementId),
    element_type: cdktf.stringToTerraform(struct!.elementType),
    height: cdktf.stringToTerraform(struct!.height),
    visibility: cdktf.stringToTerraform(struct!.visibility),
    width: cdktf.stringToTerraform(struct!.width),
    x_axis_location: cdktf.stringToTerraform(struct!.xAxisLocation),
    y_axis_location: cdktf.stringToTerraform(struct!.yAxisLocation),
    background_style: quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsBackgroundStyleToTerraform(struct!.backgroundStyle),
    border_style: quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsBorderStyleToTerraform(struct!.borderStyle),
    loading_animation: quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsLoadingAnimationToTerraform(struct!.loadingAnimation),
    rendering_rules: cdktf.listMapper(quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsRenderingRulesToTerraform, true)(struct!.renderingRules),
    selected_border_style: quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsSelectedBorderStyleToTerraform(struct!.selectedBorderStyle),
  }
}

export class QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElements | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._elementId !== undefined) {
      hasAnyValues = true;
      internalValueResult.elementId = this._elementId;
    }
    if (this._elementType !== undefined) {
      hasAnyValues = true;
      internalValueResult.elementType = this._elementType;
    }
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    if (this._xAxisLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.xAxisLocation = this._xAxisLocation;
    }
    if (this._yAxisLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.yAxisLocation = this._yAxisLocation;
    }
    if (this._backgroundStyle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backgroundStyle = this._backgroundStyle?.internalValue;
    }
    if (this._borderStyle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.borderStyle = this._borderStyle?.internalValue;
    }
    if (this._loadingAnimation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadingAnimation = this._loadingAnimation?.internalValue;
    }
    if (this._renderingRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.renderingRules = this._renderingRules?.internalValue;
    }
    if (this._selectedBorderStyle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectedBorderStyle = this._selectedBorderStyle?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElements | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._elementId = undefined;
      this._elementType = undefined;
      this._height = undefined;
      this._visibility = undefined;
      this._width = undefined;
      this._xAxisLocation = undefined;
      this._yAxisLocation = undefined;
      this._backgroundStyle.internalValue = undefined;
      this._borderStyle.internalValue = undefined;
      this._loadingAnimation.internalValue = undefined;
      this._renderingRules.internalValue = undefined;
      this._selectedBorderStyle.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._elementId = value.elementId;
      this._elementType = value.elementType;
      this._height = value.height;
      this._visibility = value.visibility;
      this._width = value.width;
      this._xAxisLocation = value.xAxisLocation;
      this._yAxisLocation = value.yAxisLocation;
      this._backgroundStyle.internalValue = value.backgroundStyle;
      this._borderStyle.internalValue = value.borderStyle;
      this._loadingAnimation.internalValue = value.loadingAnimation;
      this._renderingRules.internalValue = value.renderingRules;
      this._selectedBorderStyle.internalValue = value.selectedBorderStyle;
    }
  }

  // element_id - computed: false, optional: false, required: true
  private _elementId?: string; 
  public get elementId() {
    return this.getStringAttribute('element_id');
  }
  public set elementId(value: string) {
    this._elementId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get elementIdInput() {
    return this._elementId;
  }

  // element_type - computed: false, optional: false, required: true
  private _elementType?: string; 
  public get elementType() {
    return this.getStringAttribute('element_type');
  }
  public set elementType(value: string) {
    this._elementType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get elementTypeInput() {
    return this._elementType;
  }

  // height - computed: false, optional: false, required: true
  private _height?: string; 
  public get height() {
    return this.getStringAttribute('height');
  }
  public set height(value: string) {
    this._height = value;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
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

  // width - computed: false, optional: false, required: true
  private _width?: string; 
  public get width() {
    return this.getStringAttribute('width');
  }
  public set width(value: string) {
    this._width = value;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }

  // x_axis_location - computed: false, optional: false, required: true
  private _xAxisLocation?: string; 
  public get xAxisLocation() {
    return this.getStringAttribute('x_axis_location');
  }
  public set xAxisLocation(value: string) {
    this._xAxisLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get xAxisLocationInput() {
    return this._xAxisLocation;
  }

  // y_axis_location - computed: false, optional: false, required: true
  private _yAxisLocation?: string; 
  public get yAxisLocation() {
    return this.getStringAttribute('y_axis_location');
  }
  public set yAxisLocation(value: string) {
    this._yAxisLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get yAxisLocationInput() {
    return this._yAxisLocation;
  }

  // background_style - computed: false, optional: true, required: false
  private _backgroundStyle = new QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsBackgroundStyleOutputReference(this, "background_style");
  public get backgroundStyle() {
    return this._backgroundStyle;
  }
  public putBackgroundStyle(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsBackgroundStyle) {
    this._backgroundStyle.internalValue = value;
  }
  public resetBackgroundStyle() {
    this._backgroundStyle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundStyleInput() {
    return this._backgroundStyle.internalValue;
  }

  // border_style - computed: false, optional: true, required: false
  private _borderStyle = new QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsBorderStyleOutputReference(this, "border_style");
  public get borderStyle() {
    return this._borderStyle;
  }
  public putBorderStyle(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsBorderStyle) {
    this._borderStyle.internalValue = value;
  }
  public resetBorderStyle() {
    this._borderStyle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get borderStyleInput() {
    return this._borderStyle.internalValue;
  }

  // loading_animation - computed: false, optional: true, required: false
  private _loadingAnimation = new QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsLoadingAnimationOutputReference(this, "loading_animation");
  public get loadingAnimation() {
    return this._loadingAnimation;
  }
  public putLoadingAnimation(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsLoadingAnimation) {
    this._loadingAnimation.internalValue = value;
  }
  public resetLoadingAnimation() {
    this._loadingAnimation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadingAnimationInput() {
    return this._loadingAnimation.internalValue;
  }

  // rendering_rules - computed: false, optional: true, required: false
  private _renderingRules = new QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsRenderingRulesList(this, "rendering_rules", false);
  public get renderingRules() {
    return this._renderingRules;
  }
  public putRenderingRules(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsRenderingRules[] | cdktf.IResolvable) {
    this._renderingRules.internalValue = value;
  }
  public resetRenderingRules() {
    this._renderingRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renderingRulesInput() {
    return this._renderingRules.internalValue;
  }

  // selected_border_style - computed: false, optional: true, required: false
  private _selectedBorderStyle = new QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsSelectedBorderStyleOutputReference(this, "selected_border_style");
  public get selectedBorderStyle() {
    return this._selectedBorderStyle;
  }
  public putSelectedBorderStyle(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsSelectedBorderStyle) {
    this._selectedBorderStyle.internalValue = value;
  }
  public resetSelectedBorderStyle() {
    this._selectedBorderStyle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedBorderStyleInput() {
    return this._selectedBorderStyle.internalValue;
  }
}

export class QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElements[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsOutputReference {
    return new QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayout {
  /**
  * elements block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#elements QuicksightTemplate#elements}
  */
  readonly elements: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElements[] | cdktf.IResolvable;
}

export function quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutToTerraform(struct?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutOutputReference | QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    elements: cdktf.listMapper(quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsToTerraform, true)(struct!.elements),
  }
}

export class QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._elements?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.elements = this._elements?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._elements.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._elements.internalValue = value.elements;
    }
  }

  // elements - computed: false, optional: false, required: true
  private _elements = new QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElementsList(this, "elements", false);
  public get elements() {
    return this._elements;
  }
  public putElements(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutElements[] | cdktf.IResolvable) {
    this._elements.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get elementsInput() {
    return this._elements.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayout {
  /**
  * free_form_layout block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#free_form_layout QuicksightTemplate#free_form_layout}
  */
  readonly freeFormLayout: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayout;
}

export function quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutToTerraform(struct?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutOutputReference | QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    free_form_layout: quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutToTerraform(struct!.freeFormLayout),
  }
}

export class QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._freeFormLayout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.freeFormLayout = this._freeFormLayout?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._freeFormLayout.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._freeFormLayout.internalValue = value.freeFormLayout;
    }
  }

  // free_form_layout - computed: false, optional: false, required: true
  private _freeFormLayout = new QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayoutOutputReference(this, "free_form_layout");
  public get freeFormLayout() {
    return this._freeFormLayout;
  }
  public putFreeFormLayout(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutFreeFormLayout) {
    this._freeFormLayout.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get freeFormLayoutInput() {
    return this._freeFormLayout.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsStylePadding {
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

export function quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsStylePaddingToTerraform(struct?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsStylePaddingOutputReference | QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsStylePadding): any {
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

export class QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsStylePaddingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsStylePadding | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsStylePadding | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsStyle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#height QuicksightTemplate#height}
  */
  readonly height?: string;
  /**
  * padding block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#padding QuicksightTemplate#padding}
  */
  readonly padding?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsStylePadding;
}

export function quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsStyleToTerraform(struct?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsStyleOutputReference | QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsStyle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    height: cdktf.stringToTerraform(struct!.height),
    padding: quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsStylePaddingToTerraform(struct!.padding),
  }
}

export class QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsStyleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsStyle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._padding?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.padding = this._padding?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsStyle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._height = undefined;
      this._padding.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._height = value.height;
      this._padding.internalValue = value.padding;
    }
  }

  // height - computed: false, optional: true, required: false
  private _height?: string; 
  public get height() {
    return this.getStringAttribute('height');
  }
  public set height(value: string) {
    this._height = value;
  }
  public resetHeight() {
    this._height = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
  }

  // padding - computed: false, optional: true, required: false
  private _padding = new QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsStylePaddingOutputReference(this, "padding");
  public get padding() {
    return this._padding;
  }
  public putPadding(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsStylePadding) {
    this._padding.internalValue = value;
  }
  public resetPadding() {
    this._padding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paddingInput() {
    return this._padding.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSections {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#section_id QuicksightTemplate#section_id}
  */
  readonly sectionId: string;
  /**
  * layout block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#layout QuicksightTemplate#layout}
  */
  readonly layout?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayout;
  /**
  * style block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#style QuicksightTemplate#style}
  */
  readonly style?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsStyle;
}

export function quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsOutputReference | QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    section_id: cdktf.stringToTerraform(struct!.sectionId),
    layout: quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutToTerraform(struct!.layout),
    style: quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsStyleToTerraform(struct!.style),
  }
}

export class QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSections | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sectionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sectionId = this._sectionId;
    }
    if (this._layout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.layout = this._layout?.internalValue;
    }
    if (this._style?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.style = this._style?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSections | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sectionId = undefined;
      this._layout.internalValue = undefined;
      this._style.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sectionId = value.sectionId;
      this._layout.internalValue = value.layout;
      this._style.internalValue = value.style;
    }
  }

  // section_id - computed: false, optional: false, required: true
  private _sectionId?: string; 
  public get sectionId() {
    return this.getStringAttribute('section_id');
  }
  public set sectionId(value: string) {
    this._sectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sectionIdInput() {
    return this._sectionId;
  }

  // layout - computed: false, optional: true, required: false
  private _layout = new QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayoutOutputReference(this, "layout");
  public get layout() {
    return this._layout;
  }
  public putLayout(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsLayout) {
    this._layout.internalValue = value;
  }
  public resetLayout() {
    this._layout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layoutInput() {
    return this._layout.internalValue;
  }

  // style - computed: false, optional: true, required: false
  private _style = new QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsStyleOutputReference(this, "style");
  public get style() {
    return this._style;
  }
  public putStyle(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsStyle) {
    this._style.internalValue = value;
  }
  public resetStyle() {
    this._style.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get styleInput() {
    return this._style.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayout {
  /**
  * body_sections block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#body_sections QuicksightTemplate#body_sections}
  */
  readonly bodySections: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySections[] | cdktf.IResolvable;
  /**
  * canvas_size_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#canvas_size_options QuicksightTemplate#canvas_size_options}
  */
  readonly canvasSizeOptions?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutCanvasSizeOptions;
  /**
  * footer_sections block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#footer_sections QuicksightTemplate#footer_sections}
  */
  readonly footerSections: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSections;
  /**
  * header_sections block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#header_sections QuicksightTemplate#header_sections}
  */
  readonly headerSections: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSections;
}

export function quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutToTerraform(struct?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutOutputReference | QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body_sections: cdktf.listMapper(quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsToTerraform, true)(struct!.bodySections),
    canvas_size_options: quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutCanvasSizeOptionsToTerraform(struct!.canvasSizeOptions),
    footer_sections: quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsToTerraform(struct!.footerSections),
    header_sections: quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsToTerraform(struct!.headerSections),
  }
}

export class QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bodySections?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bodySections = this._bodySections?.internalValue;
    }
    if (this._canvasSizeOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.canvasSizeOptions = this._canvasSizeOptions?.internalValue;
    }
    if (this._footerSections?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.footerSections = this._footerSections?.internalValue;
    }
    if (this._headerSections?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerSections = this._headerSections?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bodySections.internalValue = undefined;
      this._canvasSizeOptions.internalValue = undefined;
      this._footerSections.internalValue = undefined;
      this._headerSections.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bodySections.internalValue = value.bodySections;
      this._canvasSizeOptions.internalValue = value.canvasSizeOptions;
      this._footerSections.internalValue = value.footerSections;
      this._headerSections.internalValue = value.headerSections;
    }
  }

  // body_sections - computed: false, optional: false, required: true
  private _bodySections = new QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySectionsList(this, "body_sections", false);
  public get bodySections() {
    return this._bodySections;
  }
  public putBodySections(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutBodySections[] | cdktf.IResolvable) {
    this._bodySections.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bodySectionsInput() {
    return this._bodySections.internalValue;
  }

  // canvas_size_options - computed: false, optional: true, required: false
  private _canvasSizeOptions = new QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutCanvasSizeOptionsOutputReference(this, "canvas_size_options");
  public get canvasSizeOptions() {
    return this._canvasSizeOptions;
  }
  public putCanvasSizeOptions(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutCanvasSizeOptions) {
    this._canvasSizeOptions.internalValue = value;
  }
  public resetCanvasSizeOptions() {
    this._canvasSizeOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canvasSizeOptionsInput() {
    return this._canvasSizeOptions.internalValue;
  }

  // footer_sections - computed: false, optional: false, required: true
  private _footerSections = new QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSectionsOutputReference(this, "footer_sections");
  public get footerSections() {
    return this._footerSections;
  }
  public putFooterSections(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutFooterSections) {
    this._footerSections.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get footerSectionsInput() {
    return this._footerSections.internalValue;
  }

  // header_sections - computed: false, optional: false, required: true
  private _headerSections = new QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSectionsOutputReference(this, "header_sections");
  public get headerSections() {
    return this._headerSections;
  }
  public putHeaderSections(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutHeaderSections) {
    this._headerSections.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerSectionsInput() {
    return this._headerSections.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsLayoutsConfiguration {
  /**
  * free_form_layout block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#free_form_layout QuicksightTemplate#free_form_layout}
  */
  readonly freeFormLayout?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayout;
  /**
  * grid_layout block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#grid_layout QuicksightTemplate#grid_layout}
  */
  readonly gridLayout?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationGridLayout;
  /**
  * section_based_layout block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#section_based_layout QuicksightTemplate#section_based_layout}
  */
  readonly sectionBasedLayout?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayout;
}

export function quicksightTemplateDefinitionSheetsLayoutsConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsLayoutsConfigurationOutputReference | QuicksightTemplateDefinitionSheetsLayoutsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    free_form_layout: quicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutToTerraform(struct!.freeFormLayout),
    grid_layout: quicksightTemplateDefinitionSheetsLayoutsConfigurationGridLayoutToTerraform(struct!.gridLayout),
    section_based_layout: quicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutToTerraform(struct!.sectionBasedLayout),
  }
}

export class QuicksightTemplateDefinitionSheetsLayoutsConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsLayoutsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._freeFormLayout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.freeFormLayout = this._freeFormLayout?.internalValue;
    }
    if (this._gridLayout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gridLayout = this._gridLayout?.internalValue;
    }
    if (this._sectionBasedLayout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sectionBasedLayout = this._sectionBasedLayout?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsLayoutsConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._freeFormLayout.internalValue = undefined;
      this._gridLayout.internalValue = undefined;
      this._sectionBasedLayout.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._freeFormLayout.internalValue = value.freeFormLayout;
      this._gridLayout.internalValue = value.gridLayout;
      this._sectionBasedLayout.internalValue = value.sectionBasedLayout;
    }
  }

  // free_form_layout - computed: false, optional: true, required: false
  private _freeFormLayout = new QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayoutOutputReference(this, "free_form_layout");
  public get freeFormLayout() {
    return this._freeFormLayout;
  }
  public putFreeFormLayout(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationFreeFormLayout) {
    this._freeFormLayout.internalValue = value;
  }
  public resetFreeFormLayout() {
    this._freeFormLayout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeFormLayoutInput() {
    return this._freeFormLayout.internalValue;
  }

  // grid_layout - computed: false, optional: true, required: false
  private _gridLayout = new QuicksightTemplateDefinitionSheetsLayoutsConfigurationGridLayoutOutputReference(this, "grid_layout");
  public get gridLayout() {
    return this._gridLayout;
  }
  public putGridLayout(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationGridLayout) {
    this._gridLayout.internalValue = value;
  }
  public resetGridLayout() {
    this._gridLayout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gridLayoutInput() {
    return this._gridLayout.internalValue;
  }

  // section_based_layout - computed: false, optional: true, required: false
  private _sectionBasedLayout = new QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayoutOutputReference(this, "section_based_layout");
  public get sectionBasedLayout() {
    return this._sectionBasedLayout;
  }
  public putSectionBasedLayout(value: QuicksightTemplateDefinitionSheetsLayoutsConfigurationSectionBasedLayout) {
    this._sectionBasedLayout.internalValue = value;
  }
  public resetSectionBasedLayout() {
    this._sectionBasedLayout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sectionBasedLayoutInput() {
    return this._sectionBasedLayout.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsLayouts {
  /**
  * configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#configuration QuicksightTemplate#configuration}
  */
  readonly configuration: QuicksightTemplateDefinitionSheetsLayoutsConfiguration;
}

export function quicksightTemplateDefinitionSheetsLayoutsToTerraform(struct?: QuicksightTemplateDefinitionSheetsLayoutsOutputReference | QuicksightTemplateDefinitionSheetsLayouts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration: quicksightTemplateDefinitionSheetsLayoutsConfigurationToTerraform(struct!.configuration),
  }
}

export class QuicksightTemplateDefinitionSheetsLayoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsLayouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsLayouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configuration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configuration.internalValue = value.configuration;
    }
  }

  // configuration - computed: false, optional: false, required: true
  private _configuration = new QuicksightTemplateDefinitionSheetsLayoutsConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: QuicksightTemplateDefinitionSheetsLayoutsConfiguration) {
    this._configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationFontSize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#relative QuicksightTemplate#relative}
  */
  readonly relative?: string;
}

export function quicksightTemplateDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationFontSizeToTerraform(struct?: QuicksightTemplateDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationFontSizeOutputReference | QuicksightTemplateDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relative: cdktf.stringToTerraform(struct!.relative),
  }
}

export class QuicksightTemplateDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationFontSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relative !== undefined) {
      hasAnyValues = true;
      internalValueResult.relative = this._relative;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationFontSize | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationFontWeight {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#name QuicksightTemplate#name}
  */
  readonly name?: string;
}

export function quicksightTemplateDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationFontWeightToTerraform(struct?: QuicksightTemplateDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationFontWeightOutputReference | QuicksightTemplateDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class QuicksightTemplateDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationFontWeightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationFontWeight | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfiguration {
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
  readonly fontSize?: QuicksightTemplateDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationFontSize;
  /**
  * font_weight block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_weight QuicksightTemplate#font_weight}
  */
  readonly fontWeight?: QuicksightTemplateDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationFontWeight;
}

export function quicksightTemplateDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationOutputReference | QuicksightTemplateDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    font_color: cdktf.stringToTerraform(struct!.fontColor),
    font_decoration: cdktf.stringToTerraform(struct!.fontDecoration),
    font_style: cdktf.stringToTerraform(struct!.fontStyle),
    font_size: quicksightTemplateDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationFontSizeToTerraform(struct!.fontSize),
    font_weight: quicksightTemplateDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationFontWeightToTerraform(struct!.fontWeight),
  }
}

export class QuicksightTemplateDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfiguration | undefined) {
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
  private _fontSize = new QuicksightTemplateDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationFontSizeOutputReference(this, "font_size");
  public get fontSize() {
    return this._fontSize;
  }
  public putFontSize(value: QuicksightTemplateDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationFontSize) {
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
  private _fontWeight = new QuicksightTemplateDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationFontWeightOutputReference(this, "font_weight");
  public get fontWeight() {
    return this._fontWeight;
  }
  public putFontWeight(value: QuicksightTemplateDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationFontWeight) {
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
export interface QuicksightTemplateDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptions {
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
  readonly fontConfiguration?: QuicksightTemplateDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfiguration;
}

export function quicksightTemplateDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsOutputReference | QuicksightTemplateDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_label: cdktf.stringToTerraform(struct!.customLabel),
    visibility: cdktf.stringToTerraform(struct!.visibility),
    font_configuration: quicksightTemplateDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationToTerraform(struct!.fontConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptions | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptions | undefined) {
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
  private _fontConfiguration = new QuicksightTemplateDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfigurationOutputReference(this, "font_configuration");
  public get fontConfiguration() {
    return this._fontConfiguration;
  }
  public putFontConfiguration(value: QuicksightTemplateDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsFontConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsParameterControlsDateTimePickerDisplayOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#date_time_format QuicksightTemplate#date_time_format}
  */
  readonly dateTimeFormat?: string;
  /**
  * title_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#title_options QuicksightTemplate#title_options}
  */
  readonly titleOptions?: QuicksightTemplateDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptions;
}

export function quicksightTemplateDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsOutputReference | QuicksightTemplateDefinitionSheetsParameterControlsDateTimePickerDisplayOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    date_time_format: cdktf.stringToTerraform(struct!.dateTimeFormat),
    title_options: quicksightTemplateDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsToTerraform(struct!.titleOptions),
  }
}

export class QuicksightTemplateDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsParameterControlsDateTimePickerDisplayOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dateTimeFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateTimeFormat = this._dateTimeFormat;
    }
    if (this._titleOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.titleOptions = this._titleOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsParameterControlsDateTimePickerDisplayOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dateTimeFormat = undefined;
      this._titleOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dateTimeFormat = value.dateTimeFormat;
      this._titleOptions.internalValue = value.titleOptions;
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

  // title_options - computed: false, optional: true, required: false
  private _titleOptions = new QuicksightTemplateDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptionsOutputReference(this, "title_options");
  public get titleOptions() {
    return this._titleOptions;
  }
  public putTitleOptions(value: QuicksightTemplateDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsTitleOptions) {
    this._titleOptions.internalValue = value;
  }
  public resetTitleOptions() {
    this._titleOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleOptionsInput() {
    return this._titleOptions.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsParameterControlsDateTimePicker {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#parameter_control_id QuicksightTemplate#parameter_control_id}
  */
  readonly parameterControlId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#source_parameter_name QuicksightTemplate#source_parameter_name}
  */
  readonly sourceParameterName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#title QuicksightTemplate#title}
  */
  readonly title: string;
  /**
  * display_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#display_options QuicksightTemplate#display_options}
  */
  readonly displayOptions?: QuicksightTemplateDefinitionSheetsParameterControlsDateTimePickerDisplayOptions;
}

export function quicksightTemplateDefinitionSheetsParameterControlsDateTimePickerToTerraform(struct?: QuicksightTemplateDefinitionSheetsParameterControlsDateTimePickerOutputReference | QuicksightTemplateDefinitionSheetsParameterControlsDateTimePicker): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameter_control_id: cdktf.stringToTerraform(struct!.parameterControlId),
    source_parameter_name: cdktf.stringToTerraform(struct!.sourceParameterName),
    title: cdktf.stringToTerraform(struct!.title),
    display_options: quicksightTemplateDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsToTerraform(struct!.displayOptions),
  }
}

export class QuicksightTemplateDefinitionSheetsParameterControlsDateTimePickerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsParameterControlsDateTimePicker | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameterControlId !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterControlId = this._parameterControlId;
    }
    if (this._sourceParameterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceParameterName = this._sourceParameterName;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._displayOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayOptions = this._displayOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsParameterControlsDateTimePicker | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._parameterControlId = undefined;
      this._sourceParameterName = undefined;
      this._title = undefined;
      this._displayOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._parameterControlId = value.parameterControlId;
      this._sourceParameterName = value.sourceParameterName;
      this._title = value.title;
      this._displayOptions.internalValue = value.displayOptions;
    }
  }

  // parameter_control_id - computed: false, optional: false, required: true
  private _parameterControlId?: string; 
  public get parameterControlId() {
    return this.getStringAttribute('parameter_control_id');
  }
  public set parameterControlId(value: string) {
    this._parameterControlId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterControlIdInput() {
    return this._parameterControlId;
  }

  // source_parameter_name - computed: false, optional: false, required: true
  private _sourceParameterName?: string; 
  public get sourceParameterName() {
    return this.getStringAttribute('source_parameter_name');
  }
  public set sourceParameterName(value: string) {
    this._sourceParameterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceParameterNameInput() {
    return this._sourceParameterName;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // display_options - computed: false, optional: true, required: false
  private _displayOptions = new QuicksightTemplateDefinitionSheetsParameterControlsDateTimePickerDisplayOptionsOutputReference(this, "display_options");
  public get displayOptions() {
    return this._displayOptions;
  }
  public putDisplayOptions(value: QuicksightTemplateDefinitionSheetsParameterControlsDateTimePickerDisplayOptions) {
    this._displayOptions.internalValue = value;
  }
  public resetDisplayOptions() {
    this._displayOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayOptionsInput() {
    return this._displayOptions.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsParameterControlsDropdownCascadingControlConfigurationSourceControlsColumnToMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionSheetsParameterControlsDropdownCascadingControlConfigurationSourceControlsColumnToMatchToTerraform(struct?: QuicksightTemplateDefinitionSheetsParameterControlsDropdownCascadingControlConfigurationSourceControlsColumnToMatchOutputReference | QuicksightTemplateDefinitionSheetsParameterControlsDropdownCascadingControlConfigurationSourceControlsColumnToMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionSheetsParameterControlsDropdownCascadingControlConfigurationSourceControlsColumnToMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsParameterControlsDropdownCascadingControlConfigurationSourceControlsColumnToMatch | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsParameterControlsDropdownCascadingControlConfigurationSourceControlsColumnToMatch | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsParameterControlsDropdownCascadingControlConfigurationSourceControls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#source_sheet_control_id QuicksightTemplate#source_sheet_control_id}
  */
  readonly sourceSheetControlId?: string;
  /**
  * column_to_match block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_to_match QuicksightTemplate#column_to_match}
  */
  readonly columnToMatch: QuicksightTemplateDefinitionSheetsParameterControlsDropdownCascadingControlConfigurationSourceControlsColumnToMatch;
}

export function quicksightTemplateDefinitionSheetsParameterControlsDropdownCascadingControlConfigurationSourceControlsToTerraform(struct?: QuicksightTemplateDefinitionSheetsParameterControlsDropdownCascadingControlConfigurationSourceControls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_sheet_control_id: cdktf.stringToTerraform(struct!.sourceSheetControlId),
    column_to_match: quicksightTemplateDefinitionSheetsParameterControlsDropdownCascadingControlConfigurationSourceControlsColumnToMatchToTerraform(struct!.columnToMatch),
  }
}

export class QuicksightTemplateDefinitionSheetsParameterControlsDropdownCascadingControlConfigurationSourceControlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsParameterControlsDropdownCascadingControlConfigurationSourceControls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceSheetControlId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceSheetControlId = this._sourceSheetControlId;
    }
    if (this._columnToMatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnToMatch = this._columnToMatch?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsParameterControlsDropdownCascadingControlConfigurationSourceControls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sourceSheetControlId = undefined;
      this._columnToMatch.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sourceSheetControlId = value.sourceSheetControlId;
      this._columnToMatch.internalValue = value.columnToMatch;
    }
  }

  // source_sheet_control_id - computed: false, optional: true, required: false
  private _sourceSheetControlId?: string; 
  public get sourceSheetControlId() {
    return this.getStringAttribute('source_sheet_control_id');
  }
  public set sourceSheetControlId(value: string) {
    this._sourceSheetControlId = value;
  }
  public resetSourceSheetControlId() {
    this._sourceSheetControlId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceSheetControlIdInput() {
    return this._sourceSheetControlId;
  }

  // column_to_match - computed: false, optional: false, required: true
  private _columnToMatch = new QuicksightTemplateDefinitionSheetsParameterControlsDropdownCascadingControlConfigurationSourceControlsColumnToMatchOutputReference(this, "column_to_match");
  public get columnToMatch() {
    return this._columnToMatch;
  }
  public putColumnToMatch(value: QuicksightTemplateDefinitionSheetsParameterControlsDropdownCascadingControlConfigurationSourceControlsColumnToMatch) {
    this._columnToMatch.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnToMatchInput() {
    return this._columnToMatch.internalValue;
  }
}

export class QuicksightTemplateDefinitionSheetsParameterControlsDropdownCascadingControlConfigurationSourceControlsList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsParameterControlsDropdownCascadingControlConfigurationSourceControls[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionSheetsParameterControlsDropdownCascadingControlConfigurationSourceControlsOutputReference {
    return new QuicksightTemplateDefinitionSheetsParameterControlsDropdownCascadingControlConfigurationSourceControlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsParameterControlsDropdownCascadingControlConfiguration {
  /**
  * source_controls block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#source_controls QuicksightTemplate#source_controls}
  */
  readonly sourceControls?: QuicksightTemplateDefinitionSheetsParameterControlsDropdownCascadingControlConfigurationSourceControls[] | cdktf.IResolvable;
}

export function quicksightTemplateDefinitionSheetsParameterControlsDropdownCascadingControlConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsParameterControlsDropdownCascadingControlConfigurationOutputReference | QuicksightTemplateDefinitionSheetsParameterControlsDropdownCascadingControlConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_controls: cdktf.listMapper(quicksightTemplateDefinitionSheetsParameterControlsDropdownCascadingControlConfigurationSourceControlsToTerraform, true)(struct!.sourceControls),
  }
}

export class QuicksightTemplateDefinitionSheetsParameterControlsDropdownCascadingControlConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsParameterControlsDropdownCascadingControlConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceControls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceControls = this._sourceControls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsParameterControlsDropdownCascadingControlConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sourceControls.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sourceControls.internalValue = value.sourceControls;
    }
  }

  // source_controls - computed: false, optional: true, required: false
  private _sourceControls = new QuicksightTemplateDefinitionSheetsParameterControlsDropdownCascadingControlConfigurationSourceControlsList(this, "source_controls", false);
  public get sourceControls() {
    return this._sourceControls;
  }
  public putSourceControls(value: QuicksightTemplateDefinitionSheetsParameterControlsDropdownCascadingControlConfigurationSourceControls[] | cdktf.IResolvable) {
    this._sourceControls.internalValue = value;
  }
  public resetSourceControls() {
    this._sourceControls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceControlsInput() {
    return this._sourceControls.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsParameterControlsDropdownDisplayOptionsSelectAllOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsParameterControlsDropdownDisplayOptionsSelectAllOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsParameterControlsDropdownDisplayOptionsSelectAllOptionsOutputReference | QuicksightTemplateDefinitionSheetsParameterControlsDropdownDisplayOptionsSelectAllOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsParameterControlsDropdownDisplayOptionsSelectAllOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsParameterControlsDropdownDisplayOptionsSelectAllOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsParameterControlsDropdownDisplayOptionsSelectAllOptions | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationFontSize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#relative QuicksightTemplate#relative}
  */
  readonly relative?: string;
}

export function quicksightTemplateDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationFontSizeToTerraform(struct?: QuicksightTemplateDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationFontSizeOutputReference | QuicksightTemplateDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relative: cdktf.stringToTerraform(struct!.relative),
  }
}

export class QuicksightTemplateDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationFontSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relative !== undefined) {
      hasAnyValues = true;
      internalValueResult.relative = this._relative;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationFontSize | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationFontWeight {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#name QuicksightTemplate#name}
  */
  readonly name?: string;
}

export function quicksightTemplateDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationFontWeightToTerraform(struct?: QuicksightTemplateDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationFontWeightOutputReference | QuicksightTemplateDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class QuicksightTemplateDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationFontWeightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationFontWeight | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsFontConfiguration {
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
  readonly fontSize?: QuicksightTemplateDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationFontSize;
  /**
  * font_weight block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_weight QuicksightTemplate#font_weight}
  */
  readonly fontWeight?: QuicksightTemplateDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationFontWeight;
}

export function quicksightTemplateDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationOutputReference | QuicksightTemplateDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    font_color: cdktf.stringToTerraform(struct!.fontColor),
    font_decoration: cdktf.stringToTerraform(struct!.fontDecoration),
    font_style: cdktf.stringToTerraform(struct!.fontStyle),
    font_size: quicksightTemplateDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationFontSizeToTerraform(struct!.fontSize),
    font_weight: quicksightTemplateDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationFontWeightToTerraform(struct!.fontWeight),
  }
}

export class QuicksightTemplateDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsFontConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsFontConfiguration | undefined) {
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
  private _fontSize = new QuicksightTemplateDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationFontSizeOutputReference(this, "font_size");
  public get fontSize() {
    return this._fontSize;
  }
  public putFontSize(value: QuicksightTemplateDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationFontSize) {
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
  private _fontWeight = new QuicksightTemplateDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationFontWeightOutputReference(this, "font_weight");
  public get fontWeight() {
    return this._fontWeight;
  }
  public putFontWeight(value: QuicksightTemplateDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationFontWeight) {
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
export interface QuicksightTemplateDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptions {
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
  readonly fontConfiguration?: QuicksightTemplateDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsFontConfiguration;
}

export function quicksightTemplateDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsOutputReference | QuicksightTemplateDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_label: cdktf.stringToTerraform(struct!.customLabel),
    visibility: cdktf.stringToTerraform(struct!.visibility),
    font_configuration: quicksightTemplateDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationToTerraform(struct!.fontConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptions | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptions | undefined) {
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
  private _fontConfiguration = new QuicksightTemplateDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsFontConfigurationOutputReference(this, "font_configuration");
  public get fontConfiguration() {
    return this._fontConfiguration;
  }
  public putFontConfiguration(value: QuicksightTemplateDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsFontConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsParameterControlsDropdownDisplayOptions {
  /**
  * select_all_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#select_all_options QuicksightTemplate#select_all_options}
  */
  readonly selectAllOptions?: QuicksightTemplateDefinitionSheetsParameterControlsDropdownDisplayOptionsSelectAllOptions;
  /**
  * title_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#title_options QuicksightTemplate#title_options}
  */
  readonly titleOptions?: QuicksightTemplateDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptions;
}

export function quicksightTemplateDefinitionSheetsParameterControlsDropdownDisplayOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsParameterControlsDropdownDisplayOptionsOutputReference | QuicksightTemplateDefinitionSheetsParameterControlsDropdownDisplayOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    select_all_options: quicksightTemplateDefinitionSheetsParameterControlsDropdownDisplayOptionsSelectAllOptionsToTerraform(struct!.selectAllOptions),
    title_options: quicksightTemplateDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsToTerraform(struct!.titleOptions),
  }
}

export class QuicksightTemplateDefinitionSheetsParameterControlsDropdownDisplayOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsParameterControlsDropdownDisplayOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._selectAllOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectAllOptions = this._selectAllOptions?.internalValue;
    }
    if (this._titleOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.titleOptions = this._titleOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsParameterControlsDropdownDisplayOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._selectAllOptions.internalValue = undefined;
      this._titleOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._selectAllOptions.internalValue = value.selectAllOptions;
      this._titleOptions.internalValue = value.titleOptions;
    }
  }

  // select_all_options - computed: false, optional: true, required: false
  private _selectAllOptions = new QuicksightTemplateDefinitionSheetsParameterControlsDropdownDisplayOptionsSelectAllOptionsOutputReference(this, "select_all_options");
  public get selectAllOptions() {
    return this._selectAllOptions;
  }
  public putSelectAllOptions(value: QuicksightTemplateDefinitionSheetsParameterControlsDropdownDisplayOptionsSelectAllOptions) {
    this._selectAllOptions.internalValue = value;
  }
  public resetSelectAllOptions() {
    this._selectAllOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectAllOptionsInput() {
    return this._selectAllOptions.internalValue;
  }

  // title_options - computed: false, optional: true, required: false
  private _titleOptions = new QuicksightTemplateDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptionsOutputReference(this, "title_options");
  public get titleOptions() {
    return this._titleOptions;
  }
  public putTitleOptions(value: QuicksightTemplateDefinitionSheetsParameterControlsDropdownDisplayOptionsTitleOptions) {
    this._titleOptions.internalValue = value;
  }
  public resetTitleOptions() {
    this._titleOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleOptionsInput() {
    return this._titleOptions.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsParameterControlsDropdownSelectableValuesLinkToDataSetColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionSheetsParameterControlsDropdownSelectableValuesLinkToDataSetColumnToTerraform(struct?: QuicksightTemplateDefinitionSheetsParameterControlsDropdownSelectableValuesLinkToDataSetColumnOutputReference | QuicksightTemplateDefinitionSheetsParameterControlsDropdownSelectableValuesLinkToDataSetColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionSheetsParameterControlsDropdownSelectableValuesLinkToDataSetColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsParameterControlsDropdownSelectableValuesLinkToDataSetColumn | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsParameterControlsDropdownSelectableValuesLinkToDataSetColumn | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsParameterControlsDropdownSelectableValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#values QuicksightTemplate#values}
  */
  readonly values?: string[];
  /**
  * link_to_data_set_column block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#link_to_data_set_column QuicksightTemplate#link_to_data_set_column}
  */
  readonly linkToDataSetColumn: QuicksightTemplateDefinitionSheetsParameterControlsDropdownSelectableValuesLinkToDataSetColumn;
}

export function quicksightTemplateDefinitionSheetsParameterControlsDropdownSelectableValuesToTerraform(struct?: QuicksightTemplateDefinitionSheetsParameterControlsDropdownSelectableValuesOutputReference | QuicksightTemplateDefinitionSheetsParameterControlsDropdownSelectableValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
    link_to_data_set_column: quicksightTemplateDefinitionSheetsParameterControlsDropdownSelectableValuesLinkToDataSetColumnToTerraform(struct!.linkToDataSetColumn),
  }
}

export class QuicksightTemplateDefinitionSheetsParameterControlsDropdownSelectableValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsParameterControlsDropdownSelectableValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    if (this._linkToDataSetColumn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkToDataSetColumn = this._linkToDataSetColumn?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsParameterControlsDropdownSelectableValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._values = undefined;
      this._linkToDataSetColumn.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._values = value.values;
      this._linkToDataSetColumn.internalValue = value.linkToDataSetColumn;
    }
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }

  // link_to_data_set_column - computed: false, optional: false, required: true
  private _linkToDataSetColumn = new QuicksightTemplateDefinitionSheetsParameterControlsDropdownSelectableValuesLinkToDataSetColumnOutputReference(this, "link_to_data_set_column");
  public get linkToDataSetColumn() {
    return this._linkToDataSetColumn;
  }
  public putLinkToDataSetColumn(value: QuicksightTemplateDefinitionSheetsParameterControlsDropdownSelectableValuesLinkToDataSetColumn) {
    this._linkToDataSetColumn.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linkToDataSetColumnInput() {
    return this._linkToDataSetColumn.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsParameterControlsDropdown {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#parameter_control_id QuicksightTemplate#parameter_control_id}
  */
  readonly parameterControlId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#source_parameter_name QuicksightTemplate#source_parameter_name}
  */
  readonly sourceParameterName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#title QuicksightTemplate#title}
  */
  readonly title: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#type QuicksightTemplate#type}
  */
  readonly type?: string;
  /**
  * cascading_control_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#cascading_control_configuration QuicksightTemplate#cascading_control_configuration}
  */
  readonly cascadingControlConfiguration?: QuicksightTemplateDefinitionSheetsParameterControlsDropdownCascadingControlConfiguration;
  /**
  * display_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#display_options QuicksightTemplate#display_options}
  */
  readonly displayOptions?: QuicksightTemplateDefinitionSheetsParameterControlsDropdownDisplayOptions;
  /**
  * selectable_values block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#selectable_values QuicksightTemplate#selectable_values}
  */
  readonly selectableValues?: QuicksightTemplateDefinitionSheetsParameterControlsDropdownSelectableValues;
}

export function quicksightTemplateDefinitionSheetsParameterControlsDropdownToTerraform(struct?: QuicksightTemplateDefinitionSheetsParameterControlsDropdownOutputReference | QuicksightTemplateDefinitionSheetsParameterControlsDropdown): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameter_control_id: cdktf.stringToTerraform(struct!.parameterControlId),
    source_parameter_name: cdktf.stringToTerraform(struct!.sourceParameterName),
    title: cdktf.stringToTerraform(struct!.title),
    type: cdktf.stringToTerraform(struct!.type),
    cascading_control_configuration: quicksightTemplateDefinitionSheetsParameterControlsDropdownCascadingControlConfigurationToTerraform(struct!.cascadingControlConfiguration),
    display_options: quicksightTemplateDefinitionSheetsParameterControlsDropdownDisplayOptionsToTerraform(struct!.displayOptions),
    selectable_values: quicksightTemplateDefinitionSheetsParameterControlsDropdownSelectableValuesToTerraform(struct!.selectableValues),
  }
}

export class QuicksightTemplateDefinitionSheetsParameterControlsDropdownOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsParameterControlsDropdown | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameterControlId !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterControlId = this._parameterControlId;
    }
    if (this._sourceParameterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceParameterName = this._sourceParameterName;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._cascadingControlConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cascadingControlConfiguration = this._cascadingControlConfiguration?.internalValue;
    }
    if (this._displayOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayOptions = this._displayOptions?.internalValue;
    }
    if (this._selectableValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectableValues = this._selectableValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsParameterControlsDropdown | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._parameterControlId = undefined;
      this._sourceParameterName = undefined;
      this._title = undefined;
      this._type = undefined;
      this._cascadingControlConfiguration.internalValue = undefined;
      this._displayOptions.internalValue = undefined;
      this._selectableValues.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._parameterControlId = value.parameterControlId;
      this._sourceParameterName = value.sourceParameterName;
      this._title = value.title;
      this._type = value.type;
      this._cascadingControlConfiguration.internalValue = value.cascadingControlConfiguration;
      this._displayOptions.internalValue = value.displayOptions;
      this._selectableValues.internalValue = value.selectableValues;
    }
  }

  // parameter_control_id - computed: false, optional: false, required: true
  private _parameterControlId?: string; 
  public get parameterControlId() {
    return this.getStringAttribute('parameter_control_id');
  }
  public set parameterControlId(value: string) {
    this._parameterControlId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterControlIdInput() {
    return this._parameterControlId;
  }

  // source_parameter_name - computed: false, optional: false, required: true
  private _sourceParameterName?: string; 
  public get sourceParameterName() {
    return this.getStringAttribute('source_parameter_name');
  }
  public set sourceParameterName(value: string) {
    this._sourceParameterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceParameterNameInput() {
    return this._sourceParameterName;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // type - computed: false, optional: true, required: false
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

  // cascading_control_configuration - computed: false, optional: true, required: false
  private _cascadingControlConfiguration = new QuicksightTemplateDefinitionSheetsParameterControlsDropdownCascadingControlConfigurationOutputReference(this, "cascading_control_configuration");
  public get cascadingControlConfiguration() {
    return this._cascadingControlConfiguration;
  }
  public putCascadingControlConfiguration(value: QuicksightTemplateDefinitionSheetsParameterControlsDropdownCascadingControlConfiguration) {
    this._cascadingControlConfiguration.internalValue = value;
  }
  public resetCascadingControlConfiguration() {
    this._cascadingControlConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cascadingControlConfigurationInput() {
    return this._cascadingControlConfiguration.internalValue;
  }

  // display_options - computed: false, optional: true, required: false
  private _displayOptions = new QuicksightTemplateDefinitionSheetsParameterControlsDropdownDisplayOptionsOutputReference(this, "display_options");
  public get displayOptions() {
    return this._displayOptions;
  }
  public putDisplayOptions(value: QuicksightTemplateDefinitionSheetsParameterControlsDropdownDisplayOptions) {
    this._displayOptions.internalValue = value;
  }
  public resetDisplayOptions() {
    this._displayOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayOptionsInput() {
    return this._displayOptions.internalValue;
  }

  // selectable_values - computed: false, optional: true, required: false
  private _selectableValues = new QuicksightTemplateDefinitionSheetsParameterControlsDropdownSelectableValuesOutputReference(this, "selectable_values");
  public get selectableValues() {
    return this._selectableValues;
  }
  public putSelectableValues(value: QuicksightTemplateDefinitionSheetsParameterControlsDropdownSelectableValues) {
    this._selectableValues.internalValue = value;
  }
  public resetSelectableValues() {
    this._selectableValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectableValuesInput() {
    return this._selectableValues.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsParameterControlsListCascadingControlConfigurationSourceControlsColumnToMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionSheetsParameterControlsListCascadingControlConfigurationSourceControlsColumnToMatchToTerraform(struct?: QuicksightTemplateDefinitionSheetsParameterControlsListCascadingControlConfigurationSourceControlsColumnToMatchOutputReference | QuicksightTemplateDefinitionSheetsParameterControlsListCascadingControlConfigurationSourceControlsColumnToMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionSheetsParameterControlsListCascadingControlConfigurationSourceControlsColumnToMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsParameterControlsListCascadingControlConfigurationSourceControlsColumnToMatch | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsParameterControlsListCascadingControlConfigurationSourceControlsColumnToMatch | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsParameterControlsListCascadingControlConfigurationSourceControls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#source_sheet_control_id QuicksightTemplate#source_sheet_control_id}
  */
  readonly sourceSheetControlId?: string;
  /**
  * column_to_match block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_to_match QuicksightTemplate#column_to_match}
  */
  readonly columnToMatch: QuicksightTemplateDefinitionSheetsParameterControlsListCascadingControlConfigurationSourceControlsColumnToMatch;
}

export function quicksightTemplateDefinitionSheetsParameterControlsListCascadingControlConfigurationSourceControlsToTerraform(struct?: QuicksightTemplateDefinitionSheetsParameterControlsListCascadingControlConfigurationSourceControls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_sheet_control_id: cdktf.stringToTerraform(struct!.sourceSheetControlId),
    column_to_match: quicksightTemplateDefinitionSheetsParameterControlsListCascadingControlConfigurationSourceControlsColumnToMatchToTerraform(struct!.columnToMatch),
  }
}

export class QuicksightTemplateDefinitionSheetsParameterControlsListCascadingControlConfigurationSourceControlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsParameterControlsListCascadingControlConfigurationSourceControls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceSheetControlId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceSheetControlId = this._sourceSheetControlId;
    }
    if (this._columnToMatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnToMatch = this._columnToMatch?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsParameterControlsListCascadingControlConfigurationSourceControls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sourceSheetControlId = undefined;
      this._columnToMatch.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sourceSheetControlId = value.sourceSheetControlId;
      this._columnToMatch.internalValue = value.columnToMatch;
    }
  }

  // source_sheet_control_id - computed: false, optional: true, required: false
  private _sourceSheetControlId?: string; 
  public get sourceSheetControlId() {
    return this.getStringAttribute('source_sheet_control_id');
  }
  public set sourceSheetControlId(value: string) {
    this._sourceSheetControlId = value;
  }
  public resetSourceSheetControlId() {
    this._sourceSheetControlId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceSheetControlIdInput() {
    return this._sourceSheetControlId;
  }

  // column_to_match - computed: false, optional: false, required: true
  private _columnToMatch = new QuicksightTemplateDefinitionSheetsParameterControlsListCascadingControlConfigurationSourceControlsColumnToMatchOutputReference(this, "column_to_match");
  public get columnToMatch() {
    return this._columnToMatch;
  }
  public putColumnToMatch(value: QuicksightTemplateDefinitionSheetsParameterControlsListCascadingControlConfigurationSourceControlsColumnToMatch) {
    this._columnToMatch.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnToMatchInput() {
    return this._columnToMatch.internalValue;
  }
}

export class QuicksightTemplateDefinitionSheetsParameterControlsListCascadingControlConfigurationSourceControlsList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsParameterControlsListCascadingControlConfigurationSourceControls[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionSheetsParameterControlsListCascadingControlConfigurationSourceControlsOutputReference {
    return new QuicksightTemplateDefinitionSheetsParameterControlsListCascadingControlConfigurationSourceControlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsParameterControlsListCascadingControlConfiguration {
  /**
  * source_controls block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#source_controls QuicksightTemplate#source_controls}
  */
  readonly sourceControls?: QuicksightTemplateDefinitionSheetsParameterControlsListCascadingControlConfigurationSourceControls[] | cdktf.IResolvable;
}

export function quicksightTemplateDefinitionSheetsParameterControlsListCascadingControlConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsParameterControlsListCascadingControlConfigurationOutputReference | QuicksightTemplateDefinitionSheetsParameterControlsListCascadingControlConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_controls: cdktf.listMapper(quicksightTemplateDefinitionSheetsParameterControlsListCascadingControlConfigurationSourceControlsToTerraform, true)(struct!.sourceControls),
  }
}

export class QuicksightTemplateDefinitionSheetsParameterControlsListCascadingControlConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsParameterControlsListCascadingControlConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceControls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceControls = this._sourceControls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsParameterControlsListCascadingControlConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sourceControls.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sourceControls.internalValue = value.sourceControls;
    }
  }

  // source_controls - computed: false, optional: true, required: false
  private _sourceControls = new QuicksightTemplateDefinitionSheetsParameterControlsListCascadingControlConfigurationSourceControlsList(this, "source_controls", false);
  public get sourceControls() {
    return this._sourceControls;
  }
  public putSourceControls(value: QuicksightTemplateDefinitionSheetsParameterControlsListCascadingControlConfigurationSourceControls[] | cdktf.IResolvable) {
    this._sourceControls.internalValue = value;
  }
  public resetSourceControls() {
    this._sourceControls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceControlsInput() {
    return this._sourceControls.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsParameterControlsListDisplayOptionsSearchOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsParameterControlsListDisplayOptionsSearchOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsParameterControlsListDisplayOptionsSearchOptionsOutputReference | QuicksightTemplateDefinitionSheetsParameterControlsListDisplayOptionsSearchOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsParameterControlsListDisplayOptionsSearchOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsParameterControlsListDisplayOptionsSearchOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsParameterControlsListDisplayOptionsSearchOptions | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsParameterControlsListDisplayOptionsSelectAllOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsParameterControlsListDisplayOptionsSelectAllOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsParameterControlsListDisplayOptionsSelectAllOptionsOutputReference | QuicksightTemplateDefinitionSheetsParameterControlsListDisplayOptionsSelectAllOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsParameterControlsListDisplayOptionsSelectAllOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsParameterControlsListDisplayOptionsSelectAllOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsParameterControlsListDisplayOptionsSelectAllOptions | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsFontConfigurationFontSize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#relative QuicksightTemplate#relative}
  */
  readonly relative?: string;
}

export function quicksightTemplateDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsFontConfigurationFontSizeToTerraform(struct?: QuicksightTemplateDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsFontConfigurationFontSizeOutputReference | QuicksightTemplateDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relative: cdktf.stringToTerraform(struct!.relative),
  }
}

export class QuicksightTemplateDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsFontConfigurationFontSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relative !== undefined) {
      hasAnyValues = true;
      internalValueResult.relative = this._relative;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsFontConfigurationFontSize | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsFontConfigurationFontWeight {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#name QuicksightTemplate#name}
  */
  readonly name?: string;
}

export function quicksightTemplateDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsFontConfigurationFontWeightToTerraform(struct?: QuicksightTemplateDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsFontConfigurationFontWeightOutputReference | QuicksightTemplateDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class QuicksightTemplateDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsFontConfigurationFontWeightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsFontConfigurationFontWeight | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsFontConfiguration {
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
  readonly fontSize?: QuicksightTemplateDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsFontConfigurationFontSize;
  /**
  * font_weight block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_weight QuicksightTemplate#font_weight}
  */
  readonly fontWeight?: QuicksightTemplateDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsFontConfigurationFontWeight;
}

export function quicksightTemplateDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsFontConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsFontConfigurationOutputReference | QuicksightTemplateDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    font_color: cdktf.stringToTerraform(struct!.fontColor),
    font_decoration: cdktf.stringToTerraform(struct!.fontDecoration),
    font_style: cdktf.stringToTerraform(struct!.fontStyle),
    font_size: quicksightTemplateDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsFontConfigurationFontSizeToTerraform(struct!.fontSize),
    font_weight: quicksightTemplateDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsFontConfigurationFontWeightToTerraform(struct!.fontWeight),
  }
}

export class QuicksightTemplateDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsFontConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsFontConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsFontConfiguration | undefined) {
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
  private _fontSize = new QuicksightTemplateDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsFontConfigurationFontSizeOutputReference(this, "font_size");
  public get fontSize() {
    return this._fontSize;
  }
  public putFontSize(value: QuicksightTemplateDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsFontConfigurationFontSize) {
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
  private _fontWeight = new QuicksightTemplateDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsFontConfigurationFontWeightOutputReference(this, "font_weight");
  public get fontWeight() {
    return this._fontWeight;
  }
  public putFontWeight(value: QuicksightTemplateDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsFontConfigurationFontWeight) {
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
export interface QuicksightTemplateDefinitionSheetsParameterControlsListDisplayOptionsTitleOptions {
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
  readonly fontConfiguration?: QuicksightTemplateDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsFontConfiguration;
}

export function quicksightTemplateDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsOutputReference | QuicksightTemplateDefinitionSheetsParameterControlsListDisplayOptionsTitleOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_label: cdktf.stringToTerraform(struct!.customLabel),
    visibility: cdktf.stringToTerraform(struct!.visibility),
    font_configuration: quicksightTemplateDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsFontConfigurationToTerraform(struct!.fontConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsParameterControlsListDisplayOptionsTitleOptions | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsParameterControlsListDisplayOptionsTitleOptions | undefined) {
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
  private _fontConfiguration = new QuicksightTemplateDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsFontConfigurationOutputReference(this, "font_configuration");
  public get fontConfiguration() {
    return this._fontConfiguration;
  }
  public putFontConfiguration(value: QuicksightTemplateDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsFontConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsParameterControlsListDisplayOptions {
  /**
  * search_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#search_options QuicksightTemplate#search_options}
  */
  readonly searchOptions?: QuicksightTemplateDefinitionSheetsParameterControlsListDisplayOptionsSearchOptions;
  /**
  * select_all_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#select_all_options QuicksightTemplate#select_all_options}
  */
  readonly selectAllOptions?: QuicksightTemplateDefinitionSheetsParameterControlsListDisplayOptionsSelectAllOptions;
  /**
  * title_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#title_options QuicksightTemplate#title_options}
  */
  readonly titleOptions?: QuicksightTemplateDefinitionSheetsParameterControlsListDisplayOptionsTitleOptions;
}

export function quicksightTemplateDefinitionSheetsParameterControlsListDisplayOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsParameterControlsListDisplayOptionsOutputReference | QuicksightTemplateDefinitionSheetsParameterControlsListDisplayOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    search_options: quicksightTemplateDefinitionSheetsParameterControlsListDisplayOptionsSearchOptionsToTerraform(struct!.searchOptions),
    select_all_options: quicksightTemplateDefinitionSheetsParameterControlsListDisplayOptionsSelectAllOptionsToTerraform(struct!.selectAllOptions),
    title_options: quicksightTemplateDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsToTerraform(struct!.titleOptions),
  }
}

export class QuicksightTemplateDefinitionSheetsParameterControlsListDisplayOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsParameterControlsListDisplayOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._searchOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchOptions = this._searchOptions?.internalValue;
    }
    if (this._selectAllOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectAllOptions = this._selectAllOptions?.internalValue;
    }
    if (this._titleOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.titleOptions = this._titleOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsParameterControlsListDisplayOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._searchOptions.internalValue = undefined;
      this._selectAllOptions.internalValue = undefined;
      this._titleOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._searchOptions.internalValue = value.searchOptions;
      this._selectAllOptions.internalValue = value.selectAllOptions;
      this._titleOptions.internalValue = value.titleOptions;
    }
  }

  // search_options - computed: false, optional: true, required: false
  private _searchOptions = new QuicksightTemplateDefinitionSheetsParameterControlsListDisplayOptionsSearchOptionsOutputReference(this, "search_options");
  public get searchOptions() {
    return this._searchOptions;
  }
  public putSearchOptions(value: QuicksightTemplateDefinitionSheetsParameterControlsListDisplayOptionsSearchOptions) {
    this._searchOptions.internalValue = value;
  }
  public resetSearchOptions() {
    this._searchOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchOptionsInput() {
    return this._searchOptions.internalValue;
  }

  // select_all_options - computed: false, optional: true, required: false
  private _selectAllOptions = new QuicksightTemplateDefinitionSheetsParameterControlsListDisplayOptionsSelectAllOptionsOutputReference(this, "select_all_options");
  public get selectAllOptions() {
    return this._selectAllOptions;
  }
  public putSelectAllOptions(value: QuicksightTemplateDefinitionSheetsParameterControlsListDisplayOptionsSelectAllOptions) {
    this._selectAllOptions.internalValue = value;
  }
  public resetSelectAllOptions() {
    this._selectAllOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectAllOptionsInput() {
    return this._selectAllOptions.internalValue;
  }

  // title_options - computed: false, optional: true, required: false
  private _titleOptions = new QuicksightTemplateDefinitionSheetsParameterControlsListDisplayOptionsTitleOptionsOutputReference(this, "title_options");
  public get titleOptions() {
    return this._titleOptions;
  }
  public putTitleOptions(value: QuicksightTemplateDefinitionSheetsParameterControlsListDisplayOptionsTitleOptions) {
    this._titleOptions.internalValue = value;
  }
  public resetTitleOptions() {
    this._titleOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleOptionsInput() {
    return this._titleOptions.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsParameterControlsListSelectableValuesLinkToDataSetColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionSheetsParameterControlsListSelectableValuesLinkToDataSetColumnToTerraform(struct?: QuicksightTemplateDefinitionSheetsParameterControlsListSelectableValuesLinkToDataSetColumnOutputReference | QuicksightTemplateDefinitionSheetsParameterControlsListSelectableValuesLinkToDataSetColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionSheetsParameterControlsListSelectableValuesLinkToDataSetColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsParameterControlsListSelectableValuesLinkToDataSetColumn | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsParameterControlsListSelectableValuesLinkToDataSetColumn | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsParameterControlsListSelectableValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#values QuicksightTemplate#values}
  */
  readonly values?: string[];
  /**
  * link_to_data_set_column block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#link_to_data_set_column QuicksightTemplate#link_to_data_set_column}
  */
  readonly linkToDataSetColumn: QuicksightTemplateDefinitionSheetsParameterControlsListSelectableValuesLinkToDataSetColumn;
}

export function quicksightTemplateDefinitionSheetsParameterControlsListSelectableValuesToTerraform(struct?: QuicksightTemplateDefinitionSheetsParameterControlsListSelectableValuesOutputReference | QuicksightTemplateDefinitionSheetsParameterControlsListSelectableValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
    link_to_data_set_column: quicksightTemplateDefinitionSheetsParameterControlsListSelectableValuesLinkToDataSetColumnToTerraform(struct!.linkToDataSetColumn),
  }
}

export class QuicksightTemplateDefinitionSheetsParameterControlsListSelectableValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsParameterControlsListSelectableValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    if (this._linkToDataSetColumn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkToDataSetColumn = this._linkToDataSetColumn?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsParameterControlsListSelectableValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._values = undefined;
      this._linkToDataSetColumn.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._values = value.values;
      this._linkToDataSetColumn.internalValue = value.linkToDataSetColumn;
    }
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }

  // link_to_data_set_column - computed: false, optional: false, required: true
  private _linkToDataSetColumn = new QuicksightTemplateDefinitionSheetsParameterControlsListSelectableValuesLinkToDataSetColumnOutputReference(this, "link_to_data_set_column");
  public get linkToDataSetColumn() {
    return this._linkToDataSetColumn;
  }
  public putLinkToDataSetColumn(value: QuicksightTemplateDefinitionSheetsParameterControlsListSelectableValuesLinkToDataSetColumn) {
    this._linkToDataSetColumn.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linkToDataSetColumnInput() {
    return this._linkToDataSetColumn.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsParameterControlsListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#parameter_control_id QuicksightTemplate#parameter_control_id}
  */
  readonly parameterControlId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#source_parameter_name QuicksightTemplate#source_parameter_name}
  */
  readonly sourceParameterName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#title QuicksightTemplate#title}
  */
  readonly title: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#type QuicksightTemplate#type}
  */
  readonly type?: string;
  /**
  * cascading_control_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#cascading_control_configuration QuicksightTemplate#cascading_control_configuration}
  */
  readonly cascadingControlConfiguration?: QuicksightTemplateDefinitionSheetsParameterControlsListCascadingControlConfiguration;
  /**
  * display_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#display_options QuicksightTemplate#display_options}
  */
  readonly displayOptions?: QuicksightTemplateDefinitionSheetsParameterControlsListDisplayOptions;
  /**
  * selectable_values block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#selectable_values QuicksightTemplate#selectable_values}
  */
  readonly selectableValues?: QuicksightTemplateDefinitionSheetsParameterControlsListSelectableValues;
}

export function quicksightTemplateDefinitionSheetsParameterControlsListStructToTerraform(struct?: QuicksightTemplateDefinitionSheetsParameterControlsListStructOutputReference | QuicksightTemplateDefinitionSheetsParameterControlsListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameter_control_id: cdktf.stringToTerraform(struct!.parameterControlId),
    source_parameter_name: cdktf.stringToTerraform(struct!.sourceParameterName),
    title: cdktf.stringToTerraform(struct!.title),
    type: cdktf.stringToTerraform(struct!.type),
    cascading_control_configuration: quicksightTemplateDefinitionSheetsParameterControlsListCascadingControlConfigurationToTerraform(struct!.cascadingControlConfiguration),
    display_options: quicksightTemplateDefinitionSheetsParameterControlsListDisplayOptionsToTerraform(struct!.displayOptions),
    selectable_values: quicksightTemplateDefinitionSheetsParameterControlsListSelectableValuesToTerraform(struct!.selectableValues),
  }
}

export class QuicksightTemplateDefinitionSheetsParameterControlsListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsParameterControlsListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameterControlId !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterControlId = this._parameterControlId;
    }
    if (this._sourceParameterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceParameterName = this._sourceParameterName;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._cascadingControlConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cascadingControlConfiguration = this._cascadingControlConfiguration?.internalValue;
    }
    if (this._displayOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayOptions = this._displayOptions?.internalValue;
    }
    if (this._selectableValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectableValues = this._selectableValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsParameterControlsListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._parameterControlId = undefined;
      this._sourceParameterName = undefined;
      this._title = undefined;
      this._type = undefined;
      this._cascadingControlConfiguration.internalValue = undefined;
      this._displayOptions.internalValue = undefined;
      this._selectableValues.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._parameterControlId = value.parameterControlId;
      this._sourceParameterName = value.sourceParameterName;
      this._title = value.title;
      this._type = value.type;
      this._cascadingControlConfiguration.internalValue = value.cascadingControlConfiguration;
      this._displayOptions.internalValue = value.displayOptions;
      this._selectableValues.internalValue = value.selectableValues;
    }
  }

  // parameter_control_id - computed: false, optional: false, required: true
  private _parameterControlId?: string; 
  public get parameterControlId() {
    return this.getStringAttribute('parameter_control_id');
  }
  public set parameterControlId(value: string) {
    this._parameterControlId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterControlIdInput() {
    return this._parameterControlId;
  }

  // source_parameter_name - computed: false, optional: false, required: true
  private _sourceParameterName?: string; 
  public get sourceParameterName() {
    return this.getStringAttribute('source_parameter_name');
  }
  public set sourceParameterName(value: string) {
    this._sourceParameterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceParameterNameInput() {
    return this._sourceParameterName;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // type - computed: false, optional: true, required: false
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

  // cascading_control_configuration - computed: false, optional: true, required: false
  private _cascadingControlConfiguration = new QuicksightTemplateDefinitionSheetsParameterControlsListCascadingControlConfigurationOutputReference(this, "cascading_control_configuration");
  public get cascadingControlConfiguration() {
    return this._cascadingControlConfiguration;
  }
  public putCascadingControlConfiguration(value: QuicksightTemplateDefinitionSheetsParameterControlsListCascadingControlConfiguration) {
    this._cascadingControlConfiguration.internalValue = value;
  }
  public resetCascadingControlConfiguration() {
    this._cascadingControlConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cascadingControlConfigurationInput() {
    return this._cascadingControlConfiguration.internalValue;
  }

  // display_options - computed: false, optional: true, required: false
  private _displayOptions = new QuicksightTemplateDefinitionSheetsParameterControlsListDisplayOptionsOutputReference(this, "display_options");
  public get displayOptions() {
    return this._displayOptions;
  }
  public putDisplayOptions(value: QuicksightTemplateDefinitionSheetsParameterControlsListDisplayOptions) {
    this._displayOptions.internalValue = value;
  }
  public resetDisplayOptions() {
    this._displayOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayOptionsInput() {
    return this._displayOptions.internalValue;
  }

  // selectable_values - computed: false, optional: true, required: false
  private _selectableValues = new QuicksightTemplateDefinitionSheetsParameterControlsListSelectableValuesOutputReference(this, "selectable_values");
  public get selectableValues() {
    return this._selectableValues;
  }
  public putSelectableValues(value: QuicksightTemplateDefinitionSheetsParameterControlsListSelectableValues) {
    this._selectableValues.internalValue = value;
  }
  public resetSelectableValues() {
    this._selectableValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectableValuesInput() {
    return this._selectableValues.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsParameterControlsSliderDisplayOptionsTitleOptionsFontConfigurationFontSize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#relative QuicksightTemplate#relative}
  */
  readonly relative?: string;
}

export function quicksightTemplateDefinitionSheetsParameterControlsSliderDisplayOptionsTitleOptionsFontConfigurationFontSizeToTerraform(struct?: QuicksightTemplateDefinitionSheetsParameterControlsSliderDisplayOptionsTitleOptionsFontConfigurationFontSizeOutputReference | QuicksightTemplateDefinitionSheetsParameterControlsSliderDisplayOptionsTitleOptionsFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relative: cdktf.stringToTerraform(struct!.relative),
  }
}

export class QuicksightTemplateDefinitionSheetsParameterControlsSliderDisplayOptionsTitleOptionsFontConfigurationFontSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsParameterControlsSliderDisplayOptionsTitleOptionsFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relative !== undefined) {
      hasAnyValues = true;
      internalValueResult.relative = this._relative;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsParameterControlsSliderDisplayOptionsTitleOptionsFontConfigurationFontSize | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsParameterControlsSliderDisplayOptionsTitleOptionsFontConfigurationFontWeight {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#name QuicksightTemplate#name}
  */
  readonly name?: string;
}

export function quicksightTemplateDefinitionSheetsParameterControlsSliderDisplayOptionsTitleOptionsFontConfigurationFontWeightToTerraform(struct?: QuicksightTemplateDefinitionSheetsParameterControlsSliderDisplayOptionsTitleOptionsFontConfigurationFontWeightOutputReference | QuicksightTemplateDefinitionSheetsParameterControlsSliderDisplayOptionsTitleOptionsFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class QuicksightTemplateDefinitionSheetsParameterControlsSliderDisplayOptionsTitleOptionsFontConfigurationFontWeightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsParameterControlsSliderDisplayOptionsTitleOptionsFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsParameterControlsSliderDisplayOptionsTitleOptionsFontConfigurationFontWeight | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsParameterControlsSliderDisplayOptionsTitleOptionsFontConfiguration {
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
  readonly fontSize?: QuicksightTemplateDefinitionSheetsParameterControlsSliderDisplayOptionsTitleOptionsFontConfigurationFontSize;
  /**
  * font_weight block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_weight QuicksightTemplate#font_weight}
  */
  readonly fontWeight?: QuicksightTemplateDefinitionSheetsParameterControlsSliderDisplayOptionsTitleOptionsFontConfigurationFontWeight;
}

export function quicksightTemplateDefinitionSheetsParameterControlsSliderDisplayOptionsTitleOptionsFontConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsParameterControlsSliderDisplayOptionsTitleOptionsFontConfigurationOutputReference | QuicksightTemplateDefinitionSheetsParameterControlsSliderDisplayOptionsTitleOptionsFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    font_color: cdktf.stringToTerraform(struct!.fontColor),
    font_decoration: cdktf.stringToTerraform(struct!.fontDecoration),
    font_style: cdktf.stringToTerraform(struct!.fontStyle),
    font_size: quicksightTemplateDefinitionSheetsParameterControlsSliderDisplayOptionsTitleOptionsFontConfigurationFontSizeToTerraform(struct!.fontSize),
    font_weight: quicksightTemplateDefinitionSheetsParameterControlsSliderDisplayOptionsTitleOptionsFontConfigurationFontWeightToTerraform(struct!.fontWeight),
  }
}

export class QuicksightTemplateDefinitionSheetsParameterControlsSliderDisplayOptionsTitleOptionsFontConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsParameterControlsSliderDisplayOptionsTitleOptionsFontConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsParameterControlsSliderDisplayOptionsTitleOptionsFontConfiguration | undefined) {
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
  private _fontSize = new QuicksightTemplateDefinitionSheetsParameterControlsSliderDisplayOptionsTitleOptionsFontConfigurationFontSizeOutputReference(this, "font_size");
  public get fontSize() {
    return this._fontSize;
  }
  public putFontSize(value: QuicksightTemplateDefinitionSheetsParameterControlsSliderDisplayOptionsTitleOptionsFontConfigurationFontSize) {
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
  private _fontWeight = new QuicksightTemplateDefinitionSheetsParameterControlsSliderDisplayOptionsTitleOptionsFontConfigurationFontWeightOutputReference(this, "font_weight");
  public get fontWeight() {
    return this._fontWeight;
  }
  public putFontWeight(value: QuicksightTemplateDefinitionSheetsParameterControlsSliderDisplayOptionsTitleOptionsFontConfigurationFontWeight) {
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
export interface QuicksightTemplateDefinitionSheetsParameterControlsSliderDisplayOptionsTitleOptions {
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
  readonly fontConfiguration?: QuicksightTemplateDefinitionSheetsParameterControlsSliderDisplayOptionsTitleOptionsFontConfiguration;
}

export function quicksightTemplateDefinitionSheetsParameterControlsSliderDisplayOptionsTitleOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsParameterControlsSliderDisplayOptionsTitleOptionsOutputReference | QuicksightTemplateDefinitionSheetsParameterControlsSliderDisplayOptionsTitleOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_label: cdktf.stringToTerraform(struct!.customLabel),
    visibility: cdktf.stringToTerraform(struct!.visibility),
    font_configuration: quicksightTemplateDefinitionSheetsParameterControlsSliderDisplayOptionsTitleOptionsFontConfigurationToTerraform(struct!.fontConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsParameterControlsSliderDisplayOptionsTitleOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsParameterControlsSliderDisplayOptionsTitleOptions | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsParameterControlsSliderDisplayOptionsTitleOptions | undefined) {
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
  private _fontConfiguration = new QuicksightTemplateDefinitionSheetsParameterControlsSliderDisplayOptionsTitleOptionsFontConfigurationOutputReference(this, "font_configuration");
  public get fontConfiguration() {
    return this._fontConfiguration;
  }
  public putFontConfiguration(value: QuicksightTemplateDefinitionSheetsParameterControlsSliderDisplayOptionsTitleOptionsFontConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsParameterControlsSliderDisplayOptions {
  /**
  * title_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#title_options QuicksightTemplate#title_options}
  */
  readonly titleOptions?: QuicksightTemplateDefinitionSheetsParameterControlsSliderDisplayOptionsTitleOptions;
}

export function quicksightTemplateDefinitionSheetsParameterControlsSliderDisplayOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsParameterControlsSliderDisplayOptionsOutputReference | QuicksightTemplateDefinitionSheetsParameterControlsSliderDisplayOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    title_options: quicksightTemplateDefinitionSheetsParameterControlsSliderDisplayOptionsTitleOptionsToTerraform(struct!.titleOptions),
  }
}

export class QuicksightTemplateDefinitionSheetsParameterControlsSliderDisplayOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsParameterControlsSliderDisplayOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._titleOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.titleOptions = this._titleOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsParameterControlsSliderDisplayOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._titleOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._titleOptions.internalValue = value.titleOptions;
    }
  }

  // title_options - computed: false, optional: true, required: false
  private _titleOptions = new QuicksightTemplateDefinitionSheetsParameterControlsSliderDisplayOptionsTitleOptionsOutputReference(this, "title_options");
  public get titleOptions() {
    return this._titleOptions;
  }
  public putTitleOptions(value: QuicksightTemplateDefinitionSheetsParameterControlsSliderDisplayOptionsTitleOptions) {
    this._titleOptions.internalValue = value;
  }
  public resetTitleOptions() {
    this._titleOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleOptionsInput() {
    return this._titleOptions.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsParameterControlsSlider {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#maximum_value QuicksightTemplate#maximum_value}
  */
  readonly maximumValue: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#minimum_value QuicksightTemplate#minimum_value}
  */
  readonly minimumValue: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#parameter_control_id QuicksightTemplate#parameter_control_id}
  */
  readonly parameterControlId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#source_parameter_name QuicksightTemplate#source_parameter_name}
  */
  readonly sourceParameterName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#step_size QuicksightTemplate#step_size}
  */
  readonly stepSize: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#title QuicksightTemplate#title}
  */
  readonly title: string;
  /**
  * display_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#display_options QuicksightTemplate#display_options}
  */
  readonly displayOptions?: QuicksightTemplateDefinitionSheetsParameterControlsSliderDisplayOptions;
}

export function quicksightTemplateDefinitionSheetsParameterControlsSliderToTerraform(struct?: QuicksightTemplateDefinitionSheetsParameterControlsSliderOutputReference | QuicksightTemplateDefinitionSheetsParameterControlsSlider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maximum_value: cdktf.numberToTerraform(struct!.maximumValue),
    minimum_value: cdktf.numberToTerraform(struct!.minimumValue),
    parameter_control_id: cdktf.stringToTerraform(struct!.parameterControlId),
    source_parameter_name: cdktf.stringToTerraform(struct!.sourceParameterName),
    step_size: cdktf.numberToTerraform(struct!.stepSize),
    title: cdktf.stringToTerraform(struct!.title),
    display_options: quicksightTemplateDefinitionSheetsParameterControlsSliderDisplayOptionsToTerraform(struct!.displayOptions),
  }
}

export class QuicksightTemplateDefinitionSheetsParameterControlsSliderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsParameterControlsSlider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximumValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumValue = this._maximumValue;
    }
    if (this._minimumValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumValue = this._minimumValue;
    }
    if (this._parameterControlId !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterControlId = this._parameterControlId;
    }
    if (this._sourceParameterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceParameterName = this._sourceParameterName;
    }
    if (this._stepSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.stepSize = this._stepSize;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._displayOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayOptions = this._displayOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsParameterControlsSlider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maximumValue = undefined;
      this._minimumValue = undefined;
      this._parameterControlId = undefined;
      this._sourceParameterName = undefined;
      this._stepSize = undefined;
      this._title = undefined;
      this._displayOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maximumValue = value.maximumValue;
      this._minimumValue = value.minimumValue;
      this._parameterControlId = value.parameterControlId;
      this._sourceParameterName = value.sourceParameterName;
      this._stepSize = value.stepSize;
      this._title = value.title;
      this._displayOptions.internalValue = value.displayOptions;
    }
  }

  // maximum_value - computed: false, optional: false, required: true
  private _maximumValue?: number; 
  public get maximumValue() {
    return this.getNumberAttribute('maximum_value');
  }
  public set maximumValue(value: number) {
    this._maximumValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumValueInput() {
    return this._maximumValue;
  }

  // minimum_value - computed: false, optional: false, required: true
  private _minimumValue?: number; 
  public get minimumValue() {
    return this.getNumberAttribute('minimum_value');
  }
  public set minimumValue(value: number) {
    this._minimumValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumValueInput() {
    return this._minimumValue;
  }

  // parameter_control_id - computed: false, optional: false, required: true
  private _parameterControlId?: string; 
  public get parameterControlId() {
    return this.getStringAttribute('parameter_control_id');
  }
  public set parameterControlId(value: string) {
    this._parameterControlId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterControlIdInput() {
    return this._parameterControlId;
  }

  // source_parameter_name - computed: false, optional: false, required: true
  private _sourceParameterName?: string; 
  public get sourceParameterName() {
    return this.getStringAttribute('source_parameter_name');
  }
  public set sourceParameterName(value: string) {
    this._sourceParameterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceParameterNameInput() {
    return this._sourceParameterName;
  }

  // step_size - computed: false, optional: false, required: true
  private _stepSize?: number; 
  public get stepSize() {
    return this.getNumberAttribute('step_size');
  }
  public set stepSize(value: number) {
    this._stepSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stepSizeInput() {
    return this._stepSize;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // display_options - computed: false, optional: true, required: false
  private _displayOptions = new QuicksightTemplateDefinitionSheetsParameterControlsSliderDisplayOptionsOutputReference(this, "display_options");
  public get displayOptions() {
    return this._displayOptions;
  }
  public putDisplayOptions(value: QuicksightTemplateDefinitionSheetsParameterControlsSliderDisplayOptions) {
    this._displayOptions.internalValue = value;
  }
  public resetDisplayOptions() {
    this._displayOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayOptionsInput() {
    return this._displayOptions.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsParameterControlsTextAreaDisplayOptionsPlaceholderOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsParameterControlsTextAreaDisplayOptionsPlaceholderOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsParameterControlsTextAreaDisplayOptionsPlaceholderOptionsOutputReference | QuicksightTemplateDefinitionSheetsParameterControlsTextAreaDisplayOptionsPlaceholderOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsParameterControlsTextAreaDisplayOptionsPlaceholderOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsParameterControlsTextAreaDisplayOptionsPlaceholderOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsParameterControlsTextAreaDisplayOptionsPlaceholderOptions | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsParameterControlsTextAreaDisplayOptionsTitleOptionsFontConfigurationFontSize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#relative QuicksightTemplate#relative}
  */
  readonly relative?: string;
}

export function quicksightTemplateDefinitionSheetsParameterControlsTextAreaDisplayOptionsTitleOptionsFontConfigurationFontSizeToTerraform(struct?: QuicksightTemplateDefinitionSheetsParameterControlsTextAreaDisplayOptionsTitleOptionsFontConfigurationFontSizeOutputReference | QuicksightTemplateDefinitionSheetsParameterControlsTextAreaDisplayOptionsTitleOptionsFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relative: cdktf.stringToTerraform(struct!.relative),
  }
}

export class QuicksightTemplateDefinitionSheetsParameterControlsTextAreaDisplayOptionsTitleOptionsFontConfigurationFontSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsParameterControlsTextAreaDisplayOptionsTitleOptionsFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relative !== undefined) {
      hasAnyValues = true;
      internalValueResult.relative = this._relative;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsParameterControlsTextAreaDisplayOptionsTitleOptionsFontConfigurationFontSize | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsParameterControlsTextAreaDisplayOptionsTitleOptionsFontConfigurationFontWeight {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#name QuicksightTemplate#name}
  */
  readonly name?: string;
}

export function quicksightTemplateDefinitionSheetsParameterControlsTextAreaDisplayOptionsTitleOptionsFontConfigurationFontWeightToTerraform(struct?: QuicksightTemplateDefinitionSheetsParameterControlsTextAreaDisplayOptionsTitleOptionsFontConfigurationFontWeightOutputReference | QuicksightTemplateDefinitionSheetsParameterControlsTextAreaDisplayOptionsTitleOptionsFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class QuicksightTemplateDefinitionSheetsParameterControlsTextAreaDisplayOptionsTitleOptionsFontConfigurationFontWeightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsParameterControlsTextAreaDisplayOptionsTitleOptionsFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsParameterControlsTextAreaDisplayOptionsTitleOptionsFontConfigurationFontWeight | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsParameterControlsTextAreaDisplayOptionsTitleOptionsFontConfiguration {
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
  readonly fontSize?: QuicksightTemplateDefinitionSheetsParameterControlsTextAreaDisplayOptionsTitleOptionsFontConfigurationFontSize;
  /**
  * font_weight block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_weight QuicksightTemplate#font_weight}
  */
  readonly fontWeight?: QuicksightTemplateDefinitionSheetsParameterControlsTextAreaDisplayOptionsTitleOptionsFontConfigurationFontWeight;
}

export function quicksightTemplateDefinitionSheetsParameterControlsTextAreaDisplayOptionsTitleOptionsFontConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsParameterControlsTextAreaDisplayOptionsTitleOptionsFontConfigurationOutputReference | QuicksightTemplateDefinitionSheetsParameterControlsTextAreaDisplayOptionsTitleOptionsFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    font_color: cdktf.stringToTerraform(struct!.fontColor),
    font_decoration: cdktf.stringToTerraform(struct!.fontDecoration),
    font_style: cdktf.stringToTerraform(struct!.fontStyle),
    font_size: quicksightTemplateDefinitionSheetsParameterControlsTextAreaDisplayOptionsTitleOptionsFontConfigurationFontSizeToTerraform(struct!.fontSize),
    font_weight: quicksightTemplateDefinitionSheetsParameterControlsTextAreaDisplayOptionsTitleOptionsFontConfigurationFontWeightToTerraform(struct!.fontWeight),
  }
}

export class QuicksightTemplateDefinitionSheetsParameterControlsTextAreaDisplayOptionsTitleOptionsFontConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsParameterControlsTextAreaDisplayOptionsTitleOptionsFontConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsParameterControlsTextAreaDisplayOptionsTitleOptionsFontConfiguration | undefined) {
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
  private _fontSize = new QuicksightTemplateDefinitionSheetsParameterControlsTextAreaDisplayOptionsTitleOptionsFontConfigurationFontSizeOutputReference(this, "font_size");
  public get fontSize() {
    return this._fontSize;
  }
  public putFontSize(value: QuicksightTemplateDefinitionSheetsParameterControlsTextAreaDisplayOptionsTitleOptionsFontConfigurationFontSize) {
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
  private _fontWeight = new QuicksightTemplateDefinitionSheetsParameterControlsTextAreaDisplayOptionsTitleOptionsFontConfigurationFontWeightOutputReference(this, "font_weight");
  public get fontWeight() {
    return this._fontWeight;
  }
  public putFontWeight(value: QuicksightTemplateDefinitionSheetsParameterControlsTextAreaDisplayOptionsTitleOptionsFontConfigurationFontWeight) {
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
export interface QuicksightTemplateDefinitionSheetsParameterControlsTextAreaDisplayOptionsTitleOptions {
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
  readonly fontConfiguration?: QuicksightTemplateDefinitionSheetsParameterControlsTextAreaDisplayOptionsTitleOptionsFontConfiguration;
}

export function quicksightTemplateDefinitionSheetsParameterControlsTextAreaDisplayOptionsTitleOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsParameterControlsTextAreaDisplayOptionsTitleOptionsOutputReference | QuicksightTemplateDefinitionSheetsParameterControlsTextAreaDisplayOptionsTitleOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_label: cdktf.stringToTerraform(struct!.customLabel),
    visibility: cdktf.stringToTerraform(struct!.visibility),
    font_configuration: quicksightTemplateDefinitionSheetsParameterControlsTextAreaDisplayOptionsTitleOptionsFontConfigurationToTerraform(struct!.fontConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsParameterControlsTextAreaDisplayOptionsTitleOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsParameterControlsTextAreaDisplayOptionsTitleOptions | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsParameterControlsTextAreaDisplayOptionsTitleOptions | undefined) {
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
  private _fontConfiguration = new QuicksightTemplateDefinitionSheetsParameterControlsTextAreaDisplayOptionsTitleOptionsFontConfigurationOutputReference(this, "font_configuration");
  public get fontConfiguration() {
    return this._fontConfiguration;
  }
  public putFontConfiguration(value: QuicksightTemplateDefinitionSheetsParameterControlsTextAreaDisplayOptionsTitleOptionsFontConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsParameterControlsTextAreaDisplayOptions {
  /**
  * placeholder_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#placeholder_options QuicksightTemplate#placeholder_options}
  */
  readonly placeholderOptions?: QuicksightTemplateDefinitionSheetsParameterControlsTextAreaDisplayOptionsPlaceholderOptions;
  /**
  * title_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#title_options QuicksightTemplate#title_options}
  */
  readonly titleOptions?: QuicksightTemplateDefinitionSheetsParameterControlsTextAreaDisplayOptionsTitleOptions;
}

export function quicksightTemplateDefinitionSheetsParameterControlsTextAreaDisplayOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsParameterControlsTextAreaDisplayOptionsOutputReference | QuicksightTemplateDefinitionSheetsParameterControlsTextAreaDisplayOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    placeholder_options: quicksightTemplateDefinitionSheetsParameterControlsTextAreaDisplayOptionsPlaceholderOptionsToTerraform(struct!.placeholderOptions),
    title_options: quicksightTemplateDefinitionSheetsParameterControlsTextAreaDisplayOptionsTitleOptionsToTerraform(struct!.titleOptions),
  }
}

export class QuicksightTemplateDefinitionSheetsParameterControlsTextAreaDisplayOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsParameterControlsTextAreaDisplayOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._placeholderOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.placeholderOptions = this._placeholderOptions?.internalValue;
    }
    if (this._titleOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.titleOptions = this._titleOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsParameterControlsTextAreaDisplayOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._placeholderOptions.internalValue = undefined;
      this._titleOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._placeholderOptions.internalValue = value.placeholderOptions;
      this._titleOptions.internalValue = value.titleOptions;
    }
  }

  // placeholder_options - computed: false, optional: true, required: false
  private _placeholderOptions = new QuicksightTemplateDefinitionSheetsParameterControlsTextAreaDisplayOptionsPlaceholderOptionsOutputReference(this, "placeholder_options");
  public get placeholderOptions() {
    return this._placeholderOptions;
  }
  public putPlaceholderOptions(value: QuicksightTemplateDefinitionSheetsParameterControlsTextAreaDisplayOptionsPlaceholderOptions) {
    this._placeholderOptions.internalValue = value;
  }
  public resetPlaceholderOptions() {
    this._placeholderOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placeholderOptionsInput() {
    return this._placeholderOptions.internalValue;
  }

  // title_options - computed: false, optional: true, required: false
  private _titleOptions = new QuicksightTemplateDefinitionSheetsParameterControlsTextAreaDisplayOptionsTitleOptionsOutputReference(this, "title_options");
  public get titleOptions() {
    return this._titleOptions;
  }
  public putTitleOptions(value: QuicksightTemplateDefinitionSheetsParameterControlsTextAreaDisplayOptionsTitleOptions) {
    this._titleOptions.internalValue = value;
  }
  public resetTitleOptions() {
    this._titleOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleOptionsInput() {
    return this._titleOptions.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsParameterControlsTextArea {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#delimiter QuicksightTemplate#delimiter}
  */
  readonly delimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#parameter_control_id QuicksightTemplate#parameter_control_id}
  */
  readonly parameterControlId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#source_parameter_name QuicksightTemplate#source_parameter_name}
  */
  readonly sourceParameterName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#title QuicksightTemplate#title}
  */
  readonly title: string;
  /**
  * display_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#display_options QuicksightTemplate#display_options}
  */
  readonly displayOptions?: QuicksightTemplateDefinitionSheetsParameterControlsTextAreaDisplayOptions;
}

export function quicksightTemplateDefinitionSheetsParameterControlsTextAreaToTerraform(struct?: QuicksightTemplateDefinitionSheetsParameterControlsTextAreaOutputReference | QuicksightTemplateDefinitionSheetsParameterControlsTextArea): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delimiter: cdktf.stringToTerraform(struct!.delimiter),
    parameter_control_id: cdktf.stringToTerraform(struct!.parameterControlId),
    source_parameter_name: cdktf.stringToTerraform(struct!.sourceParameterName),
    title: cdktf.stringToTerraform(struct!.title),
    display_options: quicksightTemplateDefinitionSheetsParameterControlsTextAreaDisplayOptionsToTerraform(struct!.displayOptions),
  }
}

export class QuicksightTemplateDefinitionSheetsParameterControlsTextAreaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsParameterControlsTextArea | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.delimiter = this._delimiter;
    }
    if (this._parameterControlId !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterControlId = this._parameterControlId;
    }
    if (this._sourceParameterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceParameterName = this._sourceParameterName;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._displayOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayOptions = this._displayOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsParameterControlsTextArea | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._delimiter = undefined;
      this._parameterControlId = undefined;
      this._sourceParameterName = undefined;
      this._title = undefined;
      this._displayOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._delimiter = value.delimiter;
      this._parameterControlId = value.parameterControlId;
      this._sourceParameterName = value.sourceParameterName;
      this._title = value.title;
      this._displayOptions.internalValue = value.displayOptions;
    }
  }

  // delimiter - computed: false, optional: true, required: false
  private _delimiter?: string; 
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }
  public set delimiter(value: string) {
    this._delimiter = value;
  }
  public resetDelimiter() {
    this._delimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delimiterInput() {
    return this._delimiter;
  }

  // parameter_control_id - computed: false, optional: false, required: true
  private _parameterControlId?: string; 
  public get parameterControlId() {
    return this.getStringAttribute('parameter_control_id');
  }
  public set parameterControlId(value: string) {
    this._parameterControlId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterControlIdInput() {
    return this._parameterControlId;
  }

  // source_parameter_name - computed: false, optional: false, required: true
  private _sourceParameterName?: string; 
  public get sourceParameterName() {
    return this.getStringAttribute('source_parameter_name');
  }
  public set sourceParameterName(value: string) {
    this._sourceParameterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceParameterNameInput() {
    return this._sourceParameterName;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // display_options - computed: false, optional: true, required: false
  private _displayOptions = new QuicksightTemplateDefinitionSheetsParameterControlsTextAreaDisplayOptionsOutputReference(this, "display_options");
  public get displayOptions() {
    return this._displayOptions;
  }
  public putDisplayOptions(value: QuicksightTemplateDefinitionSheetsParameterControlsTextAreaDisplayOptions) {
    this._displayOptions.internalValue = value;
  }
  public resetDisplayOptions() {
    this._displayOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayOptionsInput() {
    return this._displayOptions.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsParameterControlsTextFieldDisplayOptionsPlaceholderOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsParameterControlsTextFieldDisplayOptionsPlaceholderOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsParameterControlsTextFieldDisplayOptionsPlaceholderOptionsOutputReference | QuicksightTemplateDefinitionSheetsParameterControlsTextFieldDisplayOptionsPlaceholderOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsParameterControlsTextFieldDisplayOptionsPlaceholderOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsParameterControlsTextFieldDisplayOptionsPlaceholderOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsParameterControlsTextFieldDisplayOptionsPlaceholderOptions | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsParameterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationFontSize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#relative QuicksightTemplate#relative}
  */
  readonly relative?: string;
}

export function quicksightTemplateDefinitionSheetsParameterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationFontSizeToTerraform(struct?: QuicksightTemplateDefinitionSheetsParameterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationFontSizeOutputReference | QuicksightTemplateDefinitionSheetsParameterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relative: cdktf.stringToTerraform(struct!.relative),
  }
}

export class QuicksightTemplateDefinitionSheetsParameterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationFontSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsParameterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relative !== undefined) {
      hasAnyValues = true;
      internalValueResult.relative = this._relative;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsParameterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationFontSize | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsParameterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationFontWeight {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#name QuicksightTemplate#name}
  */
  readonly name?: string;
}

export function quicksightTemplateDefinitionSheetsParameterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationFontWeightToTerraform(struct?: QuicksightTemplateDefinitionSheetsParameterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationFontWeightOutputReference | QuicksightTemplateDefinitionSheetsParameterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class QuicksightTemplateDefinitionSheetsParameterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationFontWeightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsParameterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsParameterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationFontWeight | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsParameterControlsTextFieldDisplayOptionsTitleOptionsFontConfiguration {
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
  readonly fontSize?: QuicksightTemplateDefinitionSheetsParameterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationFontSize;
  /**
  * font_weight block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_weight QuicksightTemplate#font_weight}
  */
  readonly fontWeight?: QuicksightTemplateDefinitionSheetsParameterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationFontWeight;
}

export function quicksightTemplateDefinitionSheetsParameterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsParameterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationOutputReference | QuicksightTemplateDefinitionSheetsParameterControlsTextFieldDisplayOptionsTitleOptionsFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    font_color: cdktf.stringToTerraform(struct!.fontColor),
    font_decoration: cdktf.stringToTerraform(struct!.fontDecoration),
    font_style: cdktf.stringToTerraform(struct!.fontStyle),
    font_size: quicksightTemplateDefinitionSheetsParameterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationFontSizeToTerraform(struct!.fontSize),
    font_weight: quicksightTemplateDefinitionSheetsParameterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationFontWeightToTerraform(struct!.fontWeight),
  }
}

export class QuicksightTemplateDefinitionSheetsParameterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsParameterControlsTextFieldDisplayOptionsTitleOptionsFontConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsParameterControlsTextFieldDisplayOptionsTitleOptionsFontConfiguration | undefined) {
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
  private _fontSize = new QuicksightTemplateDefinitionSheetsParameterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationFontSizeOutputReference(this, "font_size");
  public get fontSize() {
    return this._fontSize;
  }
  public putFontSize(value: QuicksightTemplateDefinitionSheetsParameterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationFontSize) {
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
  private _fontWeight = new QuicksightTemplateDefinitionSheetsParameterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationFontWeightOutputReference(this, "font_weight");
  public get fontWeight() {
    return this._fontWeight;
  }
  public putFontWeight(value: QuicksightTemplateDefinitionSheetsParameterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationFontWeight) {
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
export interface QuicksightTemplateDefinitionSheetsParameterControlsTextFieldDisplayOptionsTitleOptions {
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
  readonly fontConfiguration?: QuicksightTemplateDefinitionSheetsParameterControlsTextFieldDisplayOptionsTitleOptionsFontConfiguration;
}

export function quicksightTemplateDefinitionSheetsParameterControlsTextFieldDisplayOptionsTitleOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsParameterControlsTextFieldDisplayOptionsTitleOptionsOutputReference | QuicksightTemplateDefinitionSheetsParameterControlsTextFieldDisplayOptionsTitleOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_label: cdktf.stringToTerraform(struct!.customLabel),
    visibility: cdktf.stringToTerraform(struct!.visibility),
    font_configuration: quicksightTemplateDefinitionSheetsParameterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationToTerraform(struct!.fontConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsParameterControlsTextFieldDisplayOptionsTitleOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsParameterControlsTextFieldDisplayOptionsTitleOptions | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsParameterControlsTextFieldDisplayOptionsTitleOptions | undefined) {
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
  private _fontConfiguration = new QuicksightTemplateDefinitionSheetsParameterControlsTextFieldDisplayOptionsTitleOptionsFontConfigurationOutputReference(this, "font_configuration");
  public get fontConfiguration() {
    return this._fontConfiguration;
  }
  public putFontConfiguration(value: QuicksightTemplateDefinitionSheetsParameterControlsTextFieldDisplayOptionsTitleOptionsFontConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsParameterControlsTextFieldDisplayOptions {
  /**
  * placeholder_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#placeholder_options QuicksightTemplate#placeholder_options}
  */
  readonly placeholderOptions?: QuicksightTemplateDefinitionSheetsParameterControlsTextFieldDisplayOptionsPlaceholderOptions;
  /**
  * title_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#title_options QuicksightTemplate#title_options}
  */
  readonly titleOptions?: QuicksightTemplateDefinitionSheetsParameterControlsTextFieldDisplayOptionsTitleOptions;
}

export function quicksightTemplateDefinitionSheetsParameterControlsTextFieldDisplayOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsParameterControlsTextFieldDisplayOptionsOutputReference | QuicksightTemplateDefinitionSheetsParameterControlsTextFieldDisplayOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    placeholder_options: quicksightTemplateDefinitionSheetsParameterControlsTextFieldDisplayOptionsPlaceholderOptionsToTerraform(struct!.placeholderOptions),
    title_options: quicksightTemplateDefinitionSheetsParameterControlsTextFieldDisplayOptionsTitleOptionsToTerraform(struct!.titleOptions),
  }
}

export class QuicksightTemplateDefinitionSheetsParameterControlsTextFieldDisplayOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsParameterControlsTextFieldDisplayOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._placeholderOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.placeholderOptions = this._placeholderOptions?.internalValue;
    }
    if (this._titleOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.titleOptions = this._titleOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsParameterControlsTextFieldDisplayOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._placeholderOptions.internalValue = undefined;
      this._titleOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._placeholderOptions.internalValue = value.placeholderOptions;
      this._titleOptions.internalValue = value.titleOptions;
    }
  }

  // placeholder_options - computed: false, optional: true, required: false
  private _placeholderOptions = new QuicksightTemplateDefinitionSheetsParameterControlsTextFieldDisplayOptionsPlaceholderOptionsOutputReference(this, "placeholder_options");
  public get placeholderOptions() {
    return this._placeholderOptions;
  }
  public putPlaceholderOptions(value: QuicksightTemplateDefinitionSheetsParameterControlsTextFieldDisplayOptionsPlaceholderOptions) {
    this._placeholderOptions.internalValue = value;
  }
  public resetPlaceholderOptions() {
    this._placeholderOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placeholderOptionsInput() {
    return this._placeholderOptions.internalValue;
  }

  // title_options - computed: false, optional: true, required: false
  private _titleOptions = new QuicksightTemplateDefinitionSheetsParameterControlsTextFieldDisplayOptionsTitleOptionsOutputReference(this, "title_options");
  public get titleOptions() {
    return this._titleOptions;
  }
  public putTitleOptions(value: QuicksightTemplateDefinitionSheetsParameterControlsTextFieldDisplayOptionsTitleOptions) {
    this._titleOptions.internalValue = value;
  }
  public resetTitleOptions() {
    this._titleOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleOptionsInput() {
    return this._titleOptions.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsParameterControlsTextField {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#parameter_control_id QuicksightTemplate#parameter_control_id}
  */
  readonly parameterControlId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#source_parameter_name QuicksightTemplate#source_parameter_name}
  */
  readonly sourceParameterName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#title QuicksightTemplate#title}
  */
  readonly title: string;
  /**
  * display_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#display_options QuicksightTemplate#display_options}
  */
  readonly displayOptions?: QuicksightTemplateDefinitionSheetsParameterControlsTextFieldDisplayOptions;
}

export function quicksightTemplateDefinitionSheetsParameterControlsTextFieldToTerraform(struct?: QuicksightTemplateDefinitionSheetsParameterControlsTextFieldOutputReference | QuicksightTemplateDefinitionSheetsParameterControlsTextField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameter_control_id: cdktf.stringToTerraform(struct!.parameterControlId),
    source_parameter_name: cdktf.stringToTerraform(struct!.sourceParameterName),
    title: cdktf.stringToTerraform(struct!.title),
    display_options: quicksightTemplateDefinitionSheetsParameterControlsTextFieldDisplayOptionsToTerraform(struct!.displayOptions),
  }
}

export class QuicksightTemplateDefinitionSheetsParameterControlsTextFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsParameterControlsTextField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameterControlId !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterControlId = this._parameterControlId;
    }
    if (this._sourceParameterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceParameterName = this._sourceParameterName;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._displayOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayOptions = this._displayOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsParameterControlsTextField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._parameterControlId = undefined;
      this._sourceParameterName = undefined;
      this._title = undefined;
      this._displayOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._parameterControlId = value.parameterControlId;
      this._sourceParameterName = value.sourceParameterName;
      this._title = value.title;
      this._displayOptions.internalValue = value.displayOptions;
    }
  }

  // parameter_control_id - computed: false, optional: false, required: true
  private _parameterControlId?: string; 
  public get parameterControlId() {
    return this.getStringAttribute('parameter_control_id');
  }
  public set parameterControlId(value: string) {
    this._parameterControlId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterControlIdInput() {
    return this._parameterControlId;
  }

  // source_parameter_name - computed: false, optional: false, required: true
  private _sourceParameterName?: string; 
  public get sourceParameterName() {
    return this.getStringAttribute('source_parameter_name');
  }
  public set sourceParameterName(value: string) {
    this._sourceParameterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceParameterNameInput() {
    return this._sourceParameterName;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // display_options - computed: false, optional: true, required: false
  private _displayOptions = new QuicksightTemplateDefinitionSheetsParameterControlsTextFieldDisplayOptionsOutputReference(this, "display_options");
  public get displayOptions() {
    return this._displayOptions;
  }
  public putDisplayOptions(value: QuicksightTemplateDefinitionSheetsParameterControlsTextFieldDisplayOptions) {
    this._displayOptions.internalValue = value;
  }
  public resetDisplayOptions() {
    this._displayOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayOptionsInput() {
    return this._displayOptions.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsParameterControls {
  /**
  * date_time_picker block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#date_time_picker QuicksightTemplate#date_time_picker}
  */
  readonly dateTimePicker?: QuicksightTemplateDefinitionSheetsParameterControlsDateTimePicker;
  /**
  * dropdown block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#dropdown QuicksightTemplate#dropdown}
  */
  readonly dropdown?: QuicksightTemplateDefinitionSheetsParameterControlsDropdown;
  /**
  * list block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#list QuicksightTemplate#list}
  */
  readonly list?: QuicksightTemplateDefinitionSheetsParameterControlsListStruct;
  /**
  * slider block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#slider QuicksightTemplate#slider}
  */
  readonly slider?: QuicksightTemplateDefinitionSheetsParameterControlsSlider;
  /**
  * text_area block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#text_area QuicksightTemplate#text_area}
  */
  readonly textArea?: QuicksightTemplateDefinitionSheetsParameterControlsTextArea;
  /**
  * text_field block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#text_field QuicksightTemplate#text_field}
  */
  readonly textField?: QuicksightTemplateDefinitionSheetsParameterControlsTextField;
}

export function quicksightTemplateDefinitionSheetsParameterControlsToTerraform(struct?: QuicksightTemplateDefinitionSheetsParameterControls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    date_time_picker: quicksightTemplateDefinitionSheetsParameterControlsDateTimePickerToTerraform(struct!.dateTimePicker),
    dropdown: quicksightTemplateDefinitionSheetsParameterControlsDropdownToTerraform(struct!.dropdown),
    list: quicksightTemplateDefinitionSheetsParameterControlsListStructToTerraform(struct!.list),
    slider: quicksightTemplateDefinitionSheetsParameterControlsSliderToTerraform(struct!.slider),
    text_area: quicksightTemplateDefinitionSheetsParameterControlsTextAreaToTerraform(struct!.textArea),
    text_field: quicksightTemplateDefinitionSheetsParameterControlsTextFieldToTerraform(struct!.textField),
  }
}

export class QuicksightTemplateDefinitionSheetsParameterControlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsParameterControls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dateTimePicker?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateTimePicker = this._dateTimePicker?.internalValue;
    }
    if (this._dropdown?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropdown = this._dropdown?.internalValue;
    }
    if (this._list?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.list = this._list?.internalValue;
    }
    if (this._slider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slider = this._slider?.internalValue;
    }
    if (this._textArea?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.textArea = this._textArea?.internalValue;
    }
    if (this._textField?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.textField = this._textField?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsParameterControls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dateTimePicker.internalValue = undefined;
      this._dropdown.internalValue = undefined;
      this._list.internalValue = undefined;
      this._slider.internalValue = undefined;
      this._textArea.internalValue = undefined;
      this._textField.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dateTimePicker.internalValue = value.dateTimePicker;
      this._dropdown.internalValue = value.dropdown;
      this._list.internalValue = value.list;
      this._slider.internalValue = value.slider;
      this._textArea.internalValue = value.textArea;
      this._textField.internalValue = value.textField;
    }
  }

  // date_time_picker - computed: false, optional: true, required: false
  private _dateTimePicker = new QuicksightTemplateDefinitionSheetsParameterControlsDateTimePickerOutputReference(this, "date_time_picker");
  public get dateTimePicker() {
    return this._dateTimePicker;
  }
  public putDateTimePicker(value: QuicksightTemplateDefinitionSheetsParameterControlsDateTimePicker) {
    this._dateTimePicker.internalValue = value;
  }
  public resetDateTimePicker() {
    this._dateTimePicker.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateTimePickerInput() {
    return this._dateTimePicker.internalValue;
  }

  // dropdown - computed: false, optional: true, required: false
  private _dropdown = new QuicksightTemplateDefinitionSheetsParameterControlsDropdownOutputReference(this, "dropdown");
  public get dropdown() {
    return this._dropdown;
  }
  public putDropdown(value: QuicksightTemplateDefinitionSheetsParameterControlsDropdown) {
    this._dropdown.internalValue = value;
  }
  public resetDropdown() {
    this._dropdown.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropdownInput() {
    return this._dropdown.internalValue;
  }

  // list - computed: false, optional: true, required: false
  private _list = new QuicksightTemplateDefinitionSheetsParameterControlsListStructOutputReference(this, "list");
  public get list() {
    return this._list;
  }
  public putList(value: QuicksightTemplateDefinitionSheetsParameterControlsListStruct) {
    this._list.internalValue = value;
  }
  public resetList() {
    this._list.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listInput() {
    return this._list.internalValue;
  }

  // slider - computed: false, optional: true, required: false
  private _slider = new QuicksightTemplateDefinitionSheetsParameterControlsSliderOutputReference(this, "slider");
  public get slider() {
    return this._slider;
  }
  public putSlider(value: QuicksightTemplateDefinitionSheetsParameterControlsSlider) {
    this._slider.internalValue = value;
  }
  public resetSlider() {
    this._slider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sliderInput() {
    return this._slider.internalValue;
  }

  // text_area - computed: false, optional: true, required: false
  private _textArea = new QuicksightTemplateDefinitionSheetsParameterControlsTextAreaOutputReference(this, "text_area");
  public get textArea() {
    return this._textArea;
  }
  public putTextArea(value: QuicksightTemplateDefinitionSheetsParameterControlsTextArea) {
    this._textArea.internalValue = value;
  }
  public resetTextArea() {
    this._textArea.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textAreaInput() {
    return this._textArea.internalValue;
  }

  // text_field - computed: false, optional: true, required: false
  private _textField = new QuicksightTemplateDefinitionSheetsParameterControlsTextFieldOutputReference(this, "text_field");
  public get textField() {
    return this._textField;
  }
  public putTextField(value: QuicksightTemplateDefinitionSheetsParameterControlsTextField) {
    this._textField.internalValue = value;
  }
  public resetTextField() {
    this._textField.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textFieldInput() {
    return this._textField.internalValue;
  }
}

export class QuicksightTemplateDefinitionSheetsParameterControlsList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsParameterControls[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionSheetsParameterControlsOutputReference {
    return new QuicksightTemplateDefinitionSheetsParameterControlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsSheetControlLayoutsConfigurationGridLayoutCanvasSizeOptionsScreenCanvasSizeOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#optimized_view_port_width QuicksightTemplate#optimized_view_port_width}
  */
  readonly optimizedViewPortWidth: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#resize_option QuicksightTemplate#resize_option}
  */
  readonly resizeOption: string;
}

export function quicksightTemplateDefinitionSheetsSheetControlLayoutsConfigurationGridLayoutCanvasSizeOptionsScreenCanvasSizeOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsSheetControlLayoutsConfigurationGridLayoutCanvasSizeOptionsScreenCanvasSizeOptionsOutputReference | QuicksightTemplateDefinitionSheetsSheetControlLayoutsConfigurationGridLayoutCanvasSizeOptionsScreenCanvasSizeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    optimized_view_port_width: cdktf.stringToTerraform(struct!.optimizedViewPortWidth),
    resize_option: cdktf.stringToTerraform(struct!.resizeOption),
  }
}

export class QuicksightTemplateDefinitionSheetsSheetControlLayoutsConfigurationGridLayoutCanvasSizeOptionsScreenCanvasSizeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsSheetControlLayoutsConfigurationGridLayoutCanvasSizeOptionsScreenCanvasSizeOptions | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsSheetControlLayoutsConfigurationGridLayoutCanvasSizeOptionsScreenCanvasSizeOptions | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsSheetControlLayoutsConfigurationGridLayoutCanvasSizeOptions {
  /**
  * screen_canvas_size_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#screen_canvas_size_options QuicksightTemplate#screen_canvas_size_options}
  */
  readonly screenCanvasSizeOptions?: QuicksightTemplateDefinitionSheetsSheetControlLayoutsConfigurationGridLayoutCanvasSizeOptionsScreenCanvasSizeOptions;
}

export function quicksightTemplateDefinitionSheetsSheetControlLayoutsConfigurationGridLayoutCanvasSizeOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsSheetControlLayoutsConfigurationGridLayoutCanvasSizeOptionsOutputReference | QuicksightTemplateDefinitionSheetsSheetControlLayoutsConfigurationGridLayoutCanvasSizeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    screen_canvas_size_options: quicksightTemplateDefinitionSheetsSheetControlLayoutsConfigurationGridLayoutCanvasSizeOptionsScreenCanvasSizeOptionsToTerraform(struct!.screenCanvasSizeOptions),
  }
}

export class QuicksightTemplateDefinitionSheetsSheetControlLayoutsConfigurationGridLayoutCanvasSizeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsSheetControlLayoutsConfigurationGridLayoutCanvasSizeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._screenCanvasSizeOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.screenCanvasSizeOptions = this._screenCanvasSizeOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsSheetControlLayoutsConfigurationGridLayoutCanvasSizeOptions | undefined) {
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
  private _screenCanvasSizeOptions = new QuicksightTemplateDefinitionSheetsSheetControlLayoutsConfigurationGridLayoutCanvasSizeOptionsScreenCanvasSizeOptionsOutputReference(this, "screen_canvas_size_options");
  public get screenCanvasSizeOptions() {
    return this._screenCanvasSizeOptions;
  }
  public putScreenCanvasSizeOptions(value: QuicksightTemplateDefinitionSheetsSheetControlLayoutsConfigurationGridLayoutCanvasSizeOptionsScreenCanvasSizeOptions) {
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
export interface QuicksightTemplateDefinitionSheetsSheetControlLayoutsConfigurationGridLayoutElements {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_index QuicksightTemplate#column_index}
  */
  readonly columnIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_span QuicksightTemplate#column_span}
  */
  readonly columnSpan: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#element_id QuicksightTemplate#element_id}
  */
  readonly elementId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#element_type QuicksightTemplate#element_type}
  */
  readonly elementType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#row_index QuicksightTemplate#row_index}
  */
  readonly rowIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#row_span QuicksightTemplate#row_span}
  */
  readonly rowSpan: number;
}

export function quicksightTemplateDefinitionSheetsSheetControlLayoutsConfigurationGridLayoutElementsToTerraform(struct?: QuicksightTemplateDefinitionSheetsSheetControlLayoutsConfigurationGridLayoutElements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_index: cdktf.numberToTerraform(struct!.columnIndex),
    column_span: cdktf.numberToTerraform(struct!.columnSpan),
    element_id: cdktf.stringToTerraform(struct!.elementId),
    element_type: cdktf.stringToTerraform(struct!.elementType),
    row_index: cdktf.numberToTerraform(struct!.rowIndex),
    row_span: cdktf.numberToTerraform(struct!.rowSpan),
  }
}

export class QuicksightTemplateDefinitionSheetsSheetControlLayoutsConfigurationGridLayoutElementsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsSheetControlLayoutsConfigurationGridLayoutElements | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnIndex = this._columnIndex;
    }
    if (this._columnSpan !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnSpan = this._columnSpan;
    }
    if (this._elementId !== undefined) {
      hasAnyValues = true;
      internalValueResult.elementId = this._elementId;
    }
    if (this._elementType !== undefined) {
      hasAnyValues = true;
      internalValueResult.elementType = this._elementType;
    }
    if (this._rowIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.rowIndex = this._rowIndex;
    }
    if (this._rowSpan !== undefined) {
      hasAnyValues = true;
      internalValueResult.rowSpan = this._rowSpan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsSheetControlLayoutsConfigurationGridLayoutElements | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columnIndex = undefined;
      this._columnSpan = undefined;
      this._elementId = undefined;
      this._elementType = undefined;
      this._rowIndex = undefined;
      this._rowSpan = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columnIndex = value.columnIndex;
      this._columnSpan = value.columnSpan;
      this._elementId = value.elementId;
      this._elementType = value.elementType;
      this._rowIndex = value.rowIndex;
      this._rowSpan = value.rowSpan;
    }
  }

  // column_index - computed: false, optional: true, required: false
  private _columnIndex?: number; 
  public get columnIndex() {
    return this.getNumberAttribute('column_index');
  }
  public set columnIndex(value: number) {
    this._columnIndex = value;
  }
  public resetColumnIndex() {
    this._columnIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnIndexInput() {
    return this._columnIndex;
  }

  // column_span - computed: false, optional: false, required: true
  private _columnSpan?: number; 
  public get columnSpan() {
    return this.getNumberAttribute('column_span');
  }
  public set columnSpan(value: number) {
    this._columnSpan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnSpanInput() {
    return this._columnSpan;
  }

  // element_id - computed: false, optional: false, required: true
  private _elementId?: string; 
  public get elementId() {
    return this.getStringAttribute('element_id');
  }
  public set elementId(value: string) {
    this._elementId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get elementIdInput() {
    return this._elementId;
  }

  // element_type - computed: false, optional: false, required: true
  private _elementType?: string; 
  public get elementType() {
    return this.getStringAttribute('element_type');
  }
  public set elementType(value: string) {
    this._elementType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get elementTypeInput() {
    return this._elementType;
  }

  // row_index - computed: false, optional: true, required: false
  private _rowIndex?: number; 
  public get rowIndex() {
    return this.getNumberAttribute('row_index');
  }
  public set rowIndex(value: number) {
    this._rowIndex = value;
  }
  public resetRowIndex() {
    this._rowIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowIndexInput() {
    return this._rowIndex;
  }

  // row_span - computed: false, optional: false, required: true
  private _rowSpan?: number; 
  public get rowSpan() {
    return this.getNumberAttribute('row_span');
  }
  public set rowSpan(value: number) {
    this._rowSpan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rowSpanInput() {
    return this._rowSpan;
  }
}

export class QuicksightTemplateDefinitionSheetsSheetControlLayoutsConfigurationGridLayoutElementsList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsSheetControlLayoutsConfigurationGridLayoutElements[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionSheetsSheetControlLayoutsConfigurationGridLayoutElementsOutputReference {
    return new QuicksightTemplateDefinitionSheetsSheetControlLayoutsConfigurationGridLayoutElementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsSheetControlLayoutsConfigurationGridLayout {
  /**
  * canvas_size_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#canvas_size_options QuicksightTemplate#canvas_size_options}
  */
  readonly canvasSizeOptions?: QuicksightTemplateDefinitionSheetsSheetControlLayoutsConfigurationGridLayoutCanvasSizeOptions;
  /**
  * elements block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#elements QuicksightTemplate#elements}
  */
  readonly elements: QuicksightTemplateDefinitionSheetsSheetControlLayoutsConfigurationGridLayoutElements[] | cdktf.IResolvable;
}

export function quicksightTemplateDefinitionSheetsSheetControlLayoutsConfigurationGridLayoutToTerraform(struct?: QuicksightTemplateDefinitionSheetsSheetControlLayoutsConfigurationGridLayoutOutputReference | QuicksightTemplateDefinitionSheetsSheetControlLayoutsConfigurationGridLayout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    canvas_size_options: quicksightTemplateDefinitionSheetsSheetControlLayoutsConfigurationGridLayoutCanvasSizeOptionsToTerraform(struct!.canvasSizeOptions),
    elements: cdktf.listMapper(quicksightTemplateDefinitionSheetsSheetControlLayoutsConfigurationGridLayoutElementsToTerraform, true)(struct!.elements),
  }
}

export class QuicksightTemplateDefinitionSheetsSheetControlLayoutsConfigurationGridLayoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsSheetControlLayoutsConfigurationGridLayout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._canvasSizeOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.canvasSizeOptions = this._canvasSizeOptions?.internalValue;
    }
    if (this._elements?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.elements = this._elements?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsSheetControlLayoutsConfigurationGridLayout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._canvasSizeOptions.internalValue = undefined;
      this._elements.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._canvasSizeOptions.internalValue = value.canvasSizeOptions;
      this._elements.internalValue = value.elements;
    }
  }

  // canvas_size_options - computed: false, optional: true, required: false
  private _canvasSizeOptions = new QuicksightTemplateDefinitionSheetsSheetControlLayoutsConfigurationGridLayoutCanvasSizeOptionsOutputReference(this, "canvas_size_options");
  public get canvasSizeOptions() {
    return this._canvasSizeOptions;
  }
  public putCanvasSizeOptions(value: QuicksightTemplateDefinitionSheetsSheetControlLayoutsConfigurationGridLayoutCanvasSizeOptions) {
    this._canvasSizeOptions.internalValue = value;
  }
  public resetCanvasSizeOptions() {
    this._canvasSizeOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canvasSizeOptionsInput() {
    return this._canvasSizeOptions.internalValue;
  }

  // elements - computed: false, optional: false, required: true
  private _elements = new QuicksightTemplateDefinitionSheetsSheetControlLayoutsConfigurationGridLayoutElementsList(this, "elements", false);
  public get elements() {
    return this._elements;
  }
  public putElements(value: QuicksightTemplateDefinitionSheetsSheetControlLayoutsConfigurationGridLayoutElements[] | cdktf.IResolvable) {
    this._elements.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get elementsInput() {
    return this._elements.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsSheetControlLayoutsConfiguration {
  /**
  * grid_layout block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#grid_layout QuicksightTemplate#grid_layout}
  */
  readonly gridLayout?: QuicksightTemplateDefinitionSheetsSheetControlLayoutsConfigurationGridLayout;
}

export function quicksightTemplateDefinitionSheetsSheetControlLayoutsConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsSheetControlLayoutsConfigurationOutputReference | QuicksightTemplateDefinitionSheetsSheetControlLayoutsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    grid_layout: quicksightTemplateDefinitionSheetsSheetControlLayoutsConfigurationGridLayoutToTerraform(struct!.gridLayout),
  }
}

export class QuicksightTemplateDefinitionSheetsSheetControlLayoutsConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsSheetControlLayoutsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gridLayout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gridLayout = this._gridLayout?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsSheetControlLayoutsConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gridLayout.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gridLayout.internalValue = value.gridLayout;
    }
  }

  // grid_layout - computed: false, optional: true, required: false
  private _gridLayout = new QuicksightTemplateDefinitionSheetsSheetControlLayoutsConfigurationGridLayoutOutputReference(this, "grid_layout");
  public get gridLayout() {
    return this._gridLayout;
  }
  public putGridLayout(value: QuicksightTemplateDefinitionSheetsSheetControlLayoutsConfigurationGridLayout) {
    this._gridLayout.internalValue = value;
  }
  public resetGridLayout() {
    this._gridLayout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gridLayoutInput() {
    return this._gridLayout.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsSheetControlLayouts {
  /**
  * configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#configuration QuicksightTemplate#configuration}
  */
  readonly configuration: QuicksightTemplateDefinitionSheetsSheetControlLayoutsConfiguration;
}

export function quicksightTemplateDefinitionSheetsSheetControlLayoutsToTerraform(struct?: QuicksightTemplateDefinitionSheetsSheetControlLayoutsOutputReference | QuicksightTemplateDefinitionSheetsSheetControlLayouts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration: quicksightTemplateDefinitionSheetsSheetControlLayoutsConfigurationToTerraform(struct!.configuration),
  }
}

export class QuicksightTemplateDefinitionSheetsSheetControlLayoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsSheetControlLayouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsSheetControlLayouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configuration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configuration.internalValue = value.configuration;
    }
  }

  // configuration - computed: false, optional: false, required: true
  private _configuration = new QuicksightTemplateDefinitionSheetsSheetControlLayoutsConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: QuicksightTemplateDefinitionSheetsSheetControlLayoutsConfiguration) {
    this._configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsTextBoxes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#content QuicksightTemplate#content}
  */
  readonly content?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#sheet_text_box_id QuicksightTemplate#sheet_text_box_id}
  */
  readonly sheetTextBoxId: string;
}

export function quicksightTemplateDefinitionSheetsTextBoxesToTerraform(struct?: QuicksightTemplateDefinitionSheetsTextBoxes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    sheet_text_box_id: cdktf.stringToTerraform(struct!.sheetTextBoxId),
  }
}

export class QuicksightTemplateDefinitionSheetsTextBoxesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsTextBoxes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._sheetTextBoxId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sheetTextBoxId = this._sheetTextBoxId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsTextBoxes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._sheetTextBoxId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._sheetTextBoxId = value.sheetTextBoxId;
    }
  }

  // content - computed: false, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // sheet_text_box_id - computed: false, optional: false, required: true
  private _sheetTextBoxId?: string; 
  public get sheetTextBoxId() {
    return this.getStringAttribute('sheet_text_box_id');
  }
  public set sheetTextBoxId(value: string) {
    this._sheetTextBoxId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sheetTextBoxIdInput() {
    return this._sheetTextBoxId;
  }
}

export class QuicksightTemplateDefinitionSheetsTextBoxesList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsTextBoxes[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionSheetsTextBoxesOutputReference {
    return new QuicksightTemplateDefinitionSheetsTextBoxesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsFilterOperationSelectedFieldsConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#selected_field_option QuicksightTemplate#selected_field_option}
  */
  readonly selectedFieldOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#selected_fields QuicksightTemplate#selected_fields}
  */
  readonly selectedFields?: string[];
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsFilterOperationSelectedFieldsConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsFilterOperationSelectedFieldsConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsFilterOperationSelectedFieldsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    selected_field_option: cdktf.stringToTerraform(struct!.selectedFieldOption),
    selected_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.selectedFields),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsFilterOperationSelectedFieldsConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsFilterOperationSelectedFieldsConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsFilterOperationSelectedFieldsConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationSameSheetTargetVisualConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#target_visual_option QuicksightTemplate#target_visual_option}
  */
  readonly targetVisualOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#target_visuals QuicksightTemplate#target_visuals}
  */
  readonly targetVisuals?: string[];
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationSameSheetTargetVisualConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationSameSheetTargetVisualConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationSameSheetTargetVisualConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_visual_option: cdktf.stringToTerraform(struct!.targetVisualOption),
    target_visuals: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targetVisuals),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationSameSheetTargetVisualConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationSameSheetTargetVisualConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationSameSheetTargetVisualConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsFilterOperationTargetVisualsConfiguration {
  /**
  * same_sheet_target_visual_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#same_sheet_target_visual_configuration QuicksightTemplate#same_sheet_target_visual_configuration}
  */
  readonly sameSheetTargetVisualConfiguration?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationSameSheetTargetVisualConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsFilterOperationTargetVisualsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    same_sheet_target_visual_configuration: quicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationSameSheetTargetVisualConfigurationToTerraform(struct!.sameSheetTargetVisualConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsFilterOperationTargetVisualsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sameSheetTargetVisualConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sameSheetTargetVisualConfiguration = this._sameSheetTargetVisualConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsFilterOperationTargetVisualsConfiguration | undefined) {
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
  private _sameSheetTargetVisualConfiguration = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationSameSheetTargetVisualConfigurationOutputReference(this, "same_sheet_target_visual_configuration");
  public get sameSheetTargetVisualConfiguration() {
    return this._sameSheetTargetVisualConfiguration;
  }
  public putSameSheetTargetVisualConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationSameSheetTargetVisualConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsFilterOperation {
  /**
  * selected_fields_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#selected_fields_configuration QuicksightTemplate#selected_fields_configuration}
  */
  readonly selectedFieldsConfiguration: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsFilterOperationSelectedFieldsConfiguration;
  /**
  * target_visuals_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#target_visuals_configuration QuicksightTemplate#target_visuals_configuration}
  */
  readonly targetVisualsConfiguration: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsFilterOperationTargetVisualsConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsFilterOperationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsFilterOperationOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsFilterOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    selected_fields_configuration: quicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsFilterOperationSelectedFieldsConfigurationToTerraform(struct!.selectedFieldsConfiguration),
    target_visuals_configuration: quicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationToTerraform(struct!.targetVisualsConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsFilterOperationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsFilterOperation | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsFilterOperation | undefined) {
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
  private _selectedFieldsConfiguration = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsFilterOperationSelectedFieldsConfigurationOutputReference(this, "selected_fields_configuration");
  public get selectedFieldsConfiguration() {
    return this._selectedFieldsConfiguration;
  }
  public putSelectedFieldsConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsFilterOperationSelectedFieldsConfiguration) {
    this._selectedFieldsConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedFieldsConfigurationInput() {
    return this._selectedFieldsConfiguration.internalValue;
  }

  // target_visuals_configuration - computed: false, optional: false, required: true
  private _targetVisualsConfiguration = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsFilterOperationTargetVisualsConfigurationOutputReference(this, "target_visuals_configuration");
  public get targetVisualsConfiguration() {
    return this._targetVisualsConfiguration;
  }
  public putTargetVisualsConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsFilterOperationTargetVisualsConfiguration) {
    this._targetVisualsConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetVisualsConfigurationInput() {
    return this._targetVisualsConfiguration.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsNavigationOperationLocalNavigationConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#target_sheet_id QuicksightTemplate#target_sheet_id}
  */
  readonly targetSheetId: string;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsNavigationOperationLocalNavigationConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsNavigationOperationLocalNavigationConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsNavigationOperationLocalNavigationConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_sheet_id: cdktf.stringToTerraform(struct!.targetSheetId),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsNavigationOperationLocalNavigationConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsNavigationOperationLocalNavigationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetSheetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetSheetId = this._targetSheetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsNavigationOperationLocalNavigationConfiguration | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsNavigationOperation {
  /**
  * local_navigation_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#local_navigation_configuration QuicksightTemplate#local_navigation_configuration}
  */
  readonly localNavigationConfiguration?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsNavigationOperationLocalNavigationConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsNavigationOperationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsNavigationOperationOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsNavigationOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_navigation_configuration: quicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsNavigationOperationLocalNavigationConfigurationToTerraform(struct!.localNavigationConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsNavigationOperationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsNavigationOperation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localNavigationConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localNavigationConfiguration = this._localNavigationConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsNavigationOperation | undefined) {
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
  private _localNavigationConfiguration = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsNavigationOperationLocalNavigationConfigurationOutputReference(this, "local_navigation_configuration");
  public get localNavigationConfiguration() {
    return this._localNavigationConfiguration;
  }
  public putLocalNavigationConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsNavigationOperationLocalNavigationConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationCustomValues {
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

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationCustomValuesToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationCustomValuesOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationCustomValues): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationCustomValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationCustomValues | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationCustomValues | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#include_null_value QuicksightTemplate#include_null_value}
  */
  readonly includeNullValue?: boolean | cdktf.IResolvable;
  /**
  * custom_values block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#custom_values QuicksightTemplate#custom_values}
  */
  readonly customValues: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationCustomValues;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_null_value: cdktf.booleanToTerraform(struct!.includeNullValue),
    custom_values: quicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationCustomValuesToTerraform(struct!.customValues),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfiguration | undefined) {
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
  private _customValues = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationCustomValuesOutputReference(this, "custom_values");
  public get customValues() {
    return this._customValues;
  }
  public putCustomValues(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationCustomValues) {
    this._customValues.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customValuesInput() {
    return this._customValues.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValue {
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
  readonly customValuesConfiguration?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    select_all_value_options: cdktf.stringToTerraform(struct!.selectAllValueOptions),
    source_field: cdktf.stringToTerraform(struct!.sourceField),
    source_parameter_name: cdktf.stringToTerraform(struct!.sourceParameterName),
    custom_values_configuration: quicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationToTerraform(struct!.customValuesConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValue | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValue | undefined) {
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
  private _customValuesConfiguration = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfigurationOutputReference(this, "custom_values_configuration");
  public get customValuesConfiguration() {
    return this._customValuesConfiguration;
  }
  public putCustomValuesConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueCustomValuesConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#destination_parameter_name QuicksightTemplate#destination_parameter_name}
  */
  readonly destinationParameterName: string;
  /**
  * value block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#value QuicksightTemplate#value}
  */
  readonly value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValue;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_parameter_name: cdktf.stringToTerraform(struct!.destinationParameterName),
    value: quicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueToTerraform(struct!.value),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurations | cdktf.IResolvable | undefined) {
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
  private _value = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurations[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsOutputReference {
    return new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsSetParametersOperation {
  /**
  * parameter_value_configurations block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#parameter_value_configurations QuicksightTemplate#parameter_value_configurations}
  */
  readonly parameterValueConfigurations: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurations[] | cdktf.IResolvable;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsSetParametersOperationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsSetParametersOperationOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsSetParametersOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameter_value_configurations: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsToTerraform, true)(struct!.parameterValueConfigurations),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsSetParametersOperationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsSetParametersOperation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameterValueConfigurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterValueConfigurations = this._parameterValueConfigurations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsSetParametersOperation | undefined) {
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
  private _parameterValueConfigurations = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurationsList(this, "parameter_value_configurations", false);
  public get parameterValueConfigurations() {
    return this._parameterValueConfigurations;
  }
  public putParameterValueConfigurations(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsSetParametersOperationParameterValueConfigurations[] | cdktf.IResolvable) {
    this._parameterValueConfigurations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterValueConfigurationsInput() {
    return this._parameterValueConfigurations.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsUrlOperation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#url_target QuicksightTemplate#url_target}
  */
  readonly urlTarget: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#url_template QuicksightTemplate#url_template}
  */
  readonly urlTemplate: string;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsUrlOperationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsUrlOperationOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsUrlOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url_target: cdktf.stringToTerraform(struct!.urlTarget),
    url_template: cdktf.stringToTerraform(struct!.urlTemplate),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsUrlOperationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsUrlOperation | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsUrlOperation | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperations {
  /**
  * filter_operation block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#filter_operation QuicksightTemplate#filter_operation}
  */
  readonly filterOperation?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsFilterOperation;
  /**
  * navigation_operation block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#navigation_operation QuicksightTemplate#navigation_operation}
  */
  readonly navigationOperation?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsNavigationOperation;
  /**
  * set_parameters_operation block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#set_parameters_operation QuicksightTemplate#set_parameters_operation}
  */
  readonly setParametersOperation?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsSetParametersOperation;
  /**
  * url_operation block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#url_operation QuicksightTemplate#url_operation}
  */
  readonly urlOperation?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsUrlOperation;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_operation: quicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsFilterOperationToTerraform(struct!.filterOperation),
    navigation_operation: quicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsNavigationOperationToTerraform(struct!.navigationOperation),
    set_parameters_operation: quicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsSetParametersOperationToTerraform(struct!.setParametersOperation),
    url_operation: quicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsUrlOperationToTerraform(struct!.urlOperation),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperations | cdktf.IResolvable | undefined) {
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
  private _filterOperation = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsFilterOperationOutputReference(this, "filter_operation");
  public get filterOperation() {
    return this._filterOperation;
  }
  public putFilterOperation(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsFilterOperation) {
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
  private _navigationOperation = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsNavigationOperationOutputReference(this, "navigation_operation");
  public get navigationOperation() {
    return this._navigationOperation;
  }
  public putNavigationOperation(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsNavigationOperation) {
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
  private _setParametersOperation = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsSetParametersOperationOutputReference(this, "set_parameters_operation");
  public get setParametersOperation() {
    return this._setParametersOperation;
  }
  public putSetParametersOperation(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsSetParametersOperation) {
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
  private _urlOperation = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsUrlOperationOutputReference(this, "url_operation");
  public get urlOperation() {
    return this._urlOperation;
  }
  public putUrlOperation(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsUrlOperation) {
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

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperations[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsOutputReference {
    return new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActions {
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
  readonly actionOperations: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperations[] | cdktf.IResolvable;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_action_id: cdktf.stringToTerraform(struct!.customActionId),
    name: cdktf.stringToTerraform(struct!.name),
    status: cdktf.stringToTerraform(struct!.status),
    trigger: cdktf.stringToTerraform(struct!.trigger),
    action_operations: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsToTerraform, true)(struct!.actionOperations),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActions | cdktf.IResolvable | undefined) {
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
  private _actionOperations = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperationsList(this, "action_operations", false);
  public get actionOperations() {
    return this._actionOperations;
  }
  public putActionOperations(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsActionOperations[] | cdktf.IResolvable) {
    this._actionOperations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionOperationsInput() {
    return this._actionOperations.internalValue;
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActions[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsOutputReference {
    return new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsDateAxisOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#missing_date_visibility QuicksightTemplate#missing_date_visibility}
  */
  readonly missingDateVisibility?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsDateAxisOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsDateAxisOptionsOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsDateAxisOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    missing_date_visibility: cdktf.stringToTerraform(struct!.missingDateVisibility),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsDateAxisOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsDateAxisOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._missingDateVisibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.missingDateVisibility = this._missingDateVisibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsDateAxisOptions | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptionsRangeDataDriven {
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptionsRangeDataDrivenToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptionsRangeDataDrivenOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptionsRangeDataDriven): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptionsRangeDataDrivenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptionsRangeDataDriven | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptionsRangeDataDriven | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptionsRangeMinMax {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#maximum QuicksightTemplate#maximum}
  */
  readonly maximum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#minimum QuicksightTemplate#minimum}
  */
  readonly minimum?: number;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptionsRangeMinMaxToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptionsRangeMinMaxOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptionsRangeMinMax): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maximum: cdktf.numberToTerraform(struct!.maximum),
    minimum: cdktf.numberToTerraform(struct!.minimum),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptionsRangeMinMaxOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptionsRangeMinMax | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptionsRangeMinMax | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptionsRange {
  /**
  * data_driven block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_driven QuicksightTemplate#data_driven}
  */
  readonly dataDriven?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptionsRangeDataDriven;
  /**
  * min_max block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#min_max QuicksightTemplate#min_max}
  */
  readonly minMax?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptionsRangeMinMax;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptionsRangeToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptionsRangeOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptionsRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_driven: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptionsRangeDataDrivenToTerraform(struct!.dataDriven),
    min_max: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptionsRangeMinMaxToTerraform(struct!.minMax),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptionsRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptionsRange | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptionsRange | undefined) {
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
  private _dataDriven = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptionsRangeDataDrivenOutputReference(this, "data_driven");
  public get dataDriven() {
    return this._dataDriven;
  }
  public putDataDriven(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptionsRangeDataDriven) {
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
  private _minMax = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptionsRangeMinMaxOutputReference(this, "min_max");
  public get minMax() {
    return this._minMax;
  }
  public putMinMax(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptionsRangeMinMax) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptionsScaleLinear {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#step_count QuicksightTemplate#step_count}
  */
  readonly stepCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#step_size QuicksightTemplate#step_size}
  */
  readonly stepSize?: number;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptionsScaleLinearToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptionsScaleLinearOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptionsScaleLinear): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    step_count: cdktf.numberToTerraform(struct!.stepCount),
    step_size: cdktf.numberToTerraform(struct!.stepSize),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptionsScaleLinearOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptionsScaleLinear | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptionsScaleLinear | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptionsScaleLogarithmic {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#base QuicksightTemplate#base}
  */
  readonly base?: number;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptionsScaleLogarithmicToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptionsScaleLogarithmicOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptionsScaleLogarithmic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base: cdktf.numberToTerraform(struct!.base),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptionsScaleLogarithmicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptionsScaleLogarithmic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._base !== undefined) {
      hasAnyValues = true;
      internalValueResult.base = this._base;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptionsScaleLogarithmic | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptionsScale {
  /**
  * linear block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#linear QuicksightTemplate#linear}
  */
  readonly linear?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptionsScaleLinear;
  /**
  * logarithmic block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#logarithmic QuicksightTemplate#logarithmic}
  */
  readonly logarithmic?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptionsScaleLogarithmic;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptionsScaleToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptionsScaleOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptionsScale): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    linear: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptionsScaleLinearToTerraform(struct!.linear),
    logarithmic: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptionsScaleLogarithmicToTerraform(struct!.logarithmic),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptionsScaleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptionsScale | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptionsScale | undefined) {
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
  private _linear = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptionsScaleLinearOutputReference(this, "linear");
  public get linear() {
    return this._linear;
  }
  public putLinear(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptionsScaleLinear) {
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
  private _logarithmic = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptionsScaleLogarithmicOutputReference(this, "logarithmic");
  public get logarithmic() {
    return this._logarithmic;
  }
  public putLogarithmic(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptionsScaleLogarithmic) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptions {
  /**
  * range block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#range QuicksightTemplate#range}
  */
  readonly range?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptionsRange;
  /**
  * scale block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#scale QuicksightTemplate#scale}
  */
  readonly scale?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptionsScale;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptionsOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    range: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptionsRangeToTerraform(struct!.range),
    scale: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptionsScaleToTerraform(struct!.scale),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptions | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptions | undefined) {
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
  private _range = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptionsRangeOutputReference(this, "range");
  public get range() {
    return this._range;
  }
  public putRange(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptionsRange) {
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
  private _scale = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptionsScaleOutputReference(this, "scale");
  public get scale() {
    return this._scale;
  }
  public putScale(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptionsScale) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptions {
  /**
  * date_axis_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#date_axis_options QuicksightTemplate#date_axis_options}
  */
  readonly dateAxisOptions?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsDateAxisOptions;
  /**
  * numeric_axis_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#numeric_axis_options QuicksightTemplate#numeric_axis_options}
  */
  readonly numericAxisOptions?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptions;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    date_axis_options: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsDateAxisOptionsToTerraform(struct!.dateAxisOptions),
    numeric_axis_options: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptionsToTerraform(struct!.numericAxisOptions),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptions | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptions | undefined) {
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
  private _dateAxisOptions = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsDateAxisOptionsOutputReference(this, "date_axis_options");
  public get dateAxisOptions() {
    return this._dateAxisOptions;
  }
  public putDateAxisOptions(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsDateAxisOptions) {
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
  private _numericAxisOptions = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptionsOutputReference(this, "numeric_axis_options");
  public get numericAxisOptions() {
    return this._numericAxisOptions;
  }
  public putNumericAxisOptions(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsNumericAxisOptions) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisScrollbarOptionsVisibleRangePercentRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#from QuicksightTemplate#from}
  */
  readonly from?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#to QuicksightTemplate#to}
  */
  readonly to?: number;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisScrollbarOptionsVisibleRangePercentRangeToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisScrollbarOptionsVisibleRangePercentRangeOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisScrollbarOptionsVisibleRangePercentRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.numberToTerraform(struct!.from),
    to: cdktf.numberToTerraform(struct!.to),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisScrollbarOptionsVisibleRangePercentRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisScrollbarOptionsVisibleRangePercentRange | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisScrollbarOptionsVisibleRangePercentRange | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisScrollbarOptionsVisibleRange {
  /**
  * percent_range block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#percent_range QuicksightTemplate#percent_range}
  */
  readonly percentRange?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisScrollbarOptionsVisibleRangePercentRange;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisScrollbarOptionsVisibleRangeToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisScrollbarOptionsVisibleRangeOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisScrollbarOptionsVisibleRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    percent_range: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisScrollbarOptionsVisibleRangePercentRangeToTerraform(struct!.percentRange),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisScrollbarOptionsVisibleRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisScrollbarOptionsVisibleRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._percentRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentRange = this._percentRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisScrollbarOptionsVisibleRange | undefined) {
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
  private _percentRange = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisScrollbarOptionsVisibleRangePercentRangeOutputReference(this, "percent_range");
  public get percentRange() {
    return this._percentRange;
  }
  public putPercentRange(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisScrollbarOptionsVisibleRangePercentRange) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisScrollbarOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
  /**
  * visible_range block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visible_range QuicksightTemplate#visible_range}
  */
  readonly visibleRange?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisScrollbarOptionsVisibleRange;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisScrollbarOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisScrollbarOptionsOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisScrollbarOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    visibility: cdktf.stringToTerraform(struct!.visibility),
    visible_range: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisScrollbarOptionsVisibleRangeToTerraform(struct!.visibleRange),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisScrollbarOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisScrollbarOptions | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisScrollbarOptions | undefined) {
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
  private _visibleRange = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisScrollbarOptionsVisibleRangeOutputReference(this, "visible_range");
  public get visibleRange() {
    return this._visibleRange;
  }
  public putVisibleRange(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisScrollbarOptionsVisibleRange) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisTickLabelOptionsLabelOptionsFontConfigurationFontSize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#relative QuicksightTemplate#relative}
  */
  readonly relative?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisTickLabelOptionsLabelOptionsFontConfigurationFontSizeToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisTickLabelOptionsLabelOptionsFontConfigurationFontSizeOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisTickLabelOptionsLabelOptionsFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relative: cdktf.stringToTerraform(struct!.relative),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisTickLabelOptionsLabelOptionsFontConfigurationFontSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisTickLabelOptionsLabelOptionsFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relative !== undefined) {
      hasAnyValues = true;
      internalValueResult.relative = this._relative;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisTickLabelOptionsLabelOptionsFontConfigurationFontSize | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisTickLabelOptionsLabelOptionsFontConfigurationFontWeight {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#name QuicksightTemplate#name}
  */
  readonly name?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisTickLabelOptionsLabelOptionsFontConfigurationFontWeightToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisTickLabelOptionsLabelOptionsFontConfigurationFontWeightOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisTickLabelOptionsLabelOptionsFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisTickLabelOptionsLabelOptionsFontConfigurationFontWeightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisTickLabelOptionsLabelOptionsFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisTickLabelOptionsLabelOptionsFontConfigurationFontWeight | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisTickLabelOptionsLabelOptionsFontConfiguration {
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
  readonly fontSize?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisTickLabelOptionsLabelOptionsFontConfigurationFontSize;
  /**
  * font_weight block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_weight QuicksightTemplate#font_weight}
  */
  readonly fontWeight?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisTickLabelOptionsLabelOptionsFontConfigurationFontWeight;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisTickLabelOptionsLabelOptionsFontConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisTickLabelOptionsLabelOptionsFontConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisTickLabelOptionsLabelOptionsFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    font_color: cdktf.stringToTerraform(struct!.fontColor),
    font_decoration: cdktf.stringToTerraform(struct!.fontDecoration),
    font_style: cdktf.stringToTerraform(struct!.fontStyle),
    font_size: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisTickLabelOptionsLabelOptionsFontConfigurationFontSizeToTerraform(struct!.fontSize),
    font_weight: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisTickLabelOptionsLabelOptionsFontConfigurationFontWeightToTerraform(struct!.fontWeight),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisTickLabelOptionsLabelOptionsFontConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisTickLabelOptionsLabelOptionsFontConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisTickLabelOptionsLabelOptionsFontConfiguration | undefined) {
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
  private _fontSize = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisTickLabelOptionsLabelOptionsFontConfigurationFontSizeOutputReference(this, "font_size");
  public get fontSize() {
    return this._fontSize;
  }
  public putFontSize(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisTickLabelOptionsLabelOptionsFontConfigurationFontSize) {
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
  private _fontWeight = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisTickLabelOptionsLabelOptionsFontConfigurationFontWeightOutputReference(this, "font_weight");
  public get fontWeight() {
    return this._fontWeight;
  }
  public putFontWeight(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisTickLabelOptionsLabelOptionsFontConfigurationFontWeight) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisTickLabelOptionsLabelOptions {
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
  readonly fontConfiguration?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisTickLabelOptionsLabelOptionsFontConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisTickLabelOptionsLabelOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisTickLabelOptionsLabelOptionsOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisTickLabelOptionsLabelOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_label: cdktf.stringToTerraform(struct!.customLabel),
    visibility: cdktf.stringToTerraform(struct!.visibility),
    font_configuration: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisTickLabelOptionsLabelOptionsFontConfigurationToTerraform(struct!.fontConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisTickLabelOptionsLabelOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisTickLabelOptionsLabelOptions | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisTickLabelOptionsLabelOptions | undefined) {
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
  private _fontConfiguration = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisTickLabelOptionsLabelOptionsFontConfigurationOutputReference(this, "font_configuration");
  public get fontConfiguration() {
    return this._fontConfiguration;
  }
  public putFontConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisTickLabelOptionsLabelOptionsFontConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisTickLabelOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#rotation_angle QuicksightTemplate#rotation_angle}
  */
  readonly rotationAngle?: number;
  /**
  * label_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#label_options QuicksightTemplate#label_options}
  */
  readonly labelOptions?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisTickLabelOptionsLabelOptions;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisTickLabelOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisTickLabelOptionsOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisTickLabelOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rotation_angle: cdktf.numberToTerraform(struct!.rotationAngle),
    label_options: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisTickLabelOptionsLabelOptionsToTerraform(struct!.labelOptions),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisTickLabelOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisTickLabelOptions | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisTickLabelOptions | undefined) {
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
  private _labelOptions = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisTickLabelOptionsLabelOptionsOutputReference(this, "label_options");
  public get labelOptions() {
    return this._labelOptions;
  }
  public putLabelOptions(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisTickLabelOptionsLabelOptions) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxis {
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
  readonly dataOptions?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptions;
  /**
  * scrollbar_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#scrollbar_options QuicksightTemplate#scrollbar_options}
  */
  readonly scrollbarOptions?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisScrollbarOptions;
  /**
  * tick_label_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#tick_label_options QuicksightTemplate#tick_label_options}
  */
  readonly tickLabelOptions?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisTickLabelOptions;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    axis_line_visibility: cdktf.stringToTerraform(struct!.axisLineVisibility),
    axis_offset: cdktf.stringToTerraform(struct!.axisOffset),
    grid_line_visibility: cdktf.stringToTerraform(struct!.gridLineVisibility),
    data_options: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsToTerraform(struct!.dataOptions),
    scrollbar_options: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisScrollbarOptionsToTerraform(struct!.scrollbarOptions),
    tick_label_options: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisTickLabelOptionsToTerraform(struct!.tickLabelOptions),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxis | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxis | undefined) {
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
  private _dataOptions = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptionsOutputReference(this, "data_options");
  public get dataOptions() {
    return this._dataOptions;
  }
  public putDataOptions(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisDataOptions) {
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
  private _scrollbarOptions = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisScrollbarOptionsOutputReference(this, "scrollbar_options");
  public get scrollbarOptions() {
    return this._scrollbarOptions;
  }
  public putScrollbarOptions(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisScrollbarOptions) {
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
  private _tickLabelOptions = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisTickLabelOptionsOutputReference(this, "tick_label_options");
  public get tickLabelOptions() {
    return this._tickLabelOptions;
  }
  public putTickLabelOptions(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryAxisTickLabelOptions) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsApplyToColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsApplyToColumnToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsApplyToColumnOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsApplyToColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsApplyToColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsApplyToColumn | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsApplyToColumn | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsApplyTo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_id QuicksightTemplate#field_id}
  */
  readonly fieldId: string;
  /**
  * column block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column QuicksightTemplate#column}
  */
  readonly column: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsApplyToColumn;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsApplyToToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsApplyToOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsApplyTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_id: cdktf.stringToTerraform(struct!.fieldId),
    column: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsApplyToColumnToTerraform(struct!.column),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsApplyToOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsApplyTo | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsApplyTo | undefined) {
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
  private _column = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsApplyToColumnOutputReference(this, "column");
  public get column() {
    return this._column;
  }
  public putColumn(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsApplyToColumn) {
    this._column.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsFontConfigurationFontSize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#relative QuicksightTemplate#relative}
  */
  readonly relative?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsFontConfigurationFontSizeToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsFontConfigurationFontSizeOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relative: cdktf.stringToTerraform(struct!.relative),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsFontConfigurationFontSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relative !== undefined) {
      hasAnyValues = true;
      internalValueResult.relative = this._relative;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsFontConfigurationFontSize | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsFontConfigurationFontWeight {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#name QuicksightTemplate#name}
  */
  readonly name?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsFontConfigurationFontWeightToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsFontConfigurationFontWeightOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsFontConfigurationFontWeightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsFontConfigurationFontWeight | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsFontConfiguration {
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
  readonly fontSize?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsFontConfigurationFontSize;
  /**
  * font_weight block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_weight QuicksightTemplate#font_weight}
  */
  readonly fontWeight?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsFontConfigurationFontWeight;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsFontConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsFontConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    font_color: cdktf.stringToTerraform(struct!.fontColor),
    font_decoration: cdktf.stringToTerraform(struct!.fontDecoration),
    font_style: cdktf.stringToTerraform(struct!.fontStyle),
    font_size: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsFontConfigurationFontSizeToTerraform(struct!.fontSize),
    font_weight: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsFontConfigurationFontWeightToTerraform(struct!.fontWeight),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsFontConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsFontConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsFontConfiguration | undefined) {
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
  private _fontSize = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsFontConfigurationFontSizeOutputReference(this, "font_size");
  public get fontSize() {
    return this._fontSize;
  }
  public putFontSize(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsFontConfigurationFontSize) {
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
  private _fontWeight = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsFontConfigurationFontWeightOutputReference(this, "font_weight");
  public get fontWeight() {
    return this._fontWeight;
  }
  public putFontWeight(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsFontConfigurationFontWeight) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#custom_label QuicksightTemplate#custom_label}
  */
  readonly customLabel?: string;
  /**
  * apply_to block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#apply_to QuicksightTemplate#apply_to}
  */
  readonly applyTo?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsApplyTo;
  /**
  * font_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_configuration QuicksightTemplate#font_configuration}
  */
  readonly fontConfiguration?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsFontConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_label: cdktf.stringToTerraform(struct!.customLabel),
    apply_to: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsApplyToToTerraform(struct!.applyTo),
    font_configuration: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsFontConfigurationToTerraform(struct!.fontConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptions | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptions | undefined) {
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
  private _applyTo = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsApplyToOutputReference(this, "apply_to");
  public get applyTo() {
    return this._applyTo;
  }
  public putApplyTo(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsApplyTo) {
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
  private _fontConfiguration = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsFontConfigurationOutputReference(this, "font_configuration");
  public get fontConfiguration() {
    return this._fontConfiguration;
  }
  public putFontConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsFontConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptions {
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
  readonly axisLabelOptions?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptions;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptionsOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sort_icon_visibility: cdktf.stringToTerraform(struct!.sortIconVisibility),
    visibility: cdktf.stringToTerraform(struct!.visibility),
    axis_label_options: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsToTerraform(struct!.axisLabelOptions),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptions | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptions | undefined) {
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
  private _axisLabelOptions = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptionsOutputReference(this, "axis_label_options");
  public get axisLabelOptions() {
    return this._axisLabelOptions;
  }
  public putAxisLabelOptions(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationCategoryLabelOptionsAxisLabelOptions) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptionsAxisLabelOptionsApplyToColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptionsAxisLabelOptionsApplyToColumnToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptionsAxisLabelOptionsApplyToColumnOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptionsAxisLabelOptionsApplyToColumn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptionsAxisLabelOptionsApplyToColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptionsAxisLabelOptionsApplyToColumn | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptionsAxisLabelOptionsApplyToColumn | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptionsAxisLabelOptionsApplyTo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_id QuicksightTemplate#field_id}
  */
  readonly fieldId: string;
  /**
  * column block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column QuicksightTemplate#column}
  */
  readonly column: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptionsAxisLabelOptionsApplyToColumn;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptionsAxisLabelOptionsApplyToToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptionsAxisLabelOptionsApplyToOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptionsAxisLabelOptionsApplyTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_id: cdktf.stringToTerraform(struct!.fieldId),
    column: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptionsAxisLabelOptionsApplyToColumnToTerraform(struct!.column),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptionsAxisLabelOptionsApplyToOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptionsAxisLabelOptionsApplyTo | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptionsAxisLabelOptionsApplyTo | undefined) {
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
  private _column = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptionsAxisLabelOptionsApplyToColumnOutputReference(this, "column");
  public get column() {
    return this._column;
  }
  public putColumn(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptionsAxisLabelOptionsApplyToColumn) {
    this._column.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptionsAxisLabelOptionsFontConfigurationFontSize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#relative QuicksightTemplate#relative}
  */
  readonly relative?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptionsAxisLabelOptionsFontConfigurationFontSizeToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptionsAxisLabelOptionsFontConfigurationFontSizeOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptionsAxisLabelOptionsFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relative: cdktf.stringToTerraform(struct!.relative),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptionsAxisLabelOptionsFontConfigurationFontSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptionsAxisLabelOptionsFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relative !== undefined) {
      hasAnyValues = true;
      internalValueResult.relative = this._relative;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptionsAxisLabelOptionsFontConfigurationFontSize | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptionsAxisLabelOptionsFontConfigurationFontWeight {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#name QuicksightTemplate#name}
  */
  readonly name?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptionsAxisLabelOptionsFontConfigurationFontWeightToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptionsAxisLabelOptionsFontConfigurationFontWeightOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptionsAxisLabelOptionsFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptionsAxisLabelOptionsFontConfigurationFontWeightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptionsAxisLabelOptionsFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptionsAxisLabelOptionsFontConfigurationFontWeight | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptionsAxisLabelOptionsFontConfiguration {
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
  readonly fontSize?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptionsAxisLabelOptionsFontConfigurationFontSize;
  /**
  * font_weight block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_weight QuicksightTemplate#font_weight}
  */
  readonly fontWeight?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptionsAxisLabelOptionsFontConfigurationFontWeight;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptionsAxisLabelOptionsFontConfigurationToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptionsAxisLabelOptionsFontConfigurationOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptionsAxisLabelOptionsFontConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    font_color: cdktf.stringToTerraform(struct!.fontColor),
    font_decoration: cdktf.stringToTerraform(struct!.fontDecoration),
    font_style: cdktf.stringToTerraform(struct!.fontStyle),
    font_size: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptionsAxisLabelOptionsFontConfigurationFontSizeToTerraform(struct!.fontSize),
    font_weight: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptionsAxisLabelOptionsFontConfigurationFontWeightToTerraform(struct!.fontWeight),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptionsAxisLabelOptionsFontConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptionsAxisLabelOptionsFontConfiguration | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptionsAxisLabelOptionsFontConfiguration | undefined) {
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
  private _fontSize = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptionsAxisLabelOptionsFontConfigurationFontSizeOutputReference(this, "font_size");
  public get fontSize() {
    return this._fontSize;
  }
  public putFontSize(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptionsAxisLabelOptionsFontConfigurationFontSize) {
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
  private _fontWeight = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptionsAxisLabelOptionsFontConfigurationFontWeightOutputReference(this, "font_weight");
  public get fontWeight() {
    return this._fontWeight;
  }
  public putFontWeight(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptionsAxisLabelOptionsFontConfigurationFontWeight) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptionsAxisLabelOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#custom_label QuicksightTemplate#custom_label}
  */
  readonly customLabel?: string;
  /**
  * apply_to block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#apply_to QuicksightTemplate#apply_to}
  */
  readonly applyTo?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptionsAxisLabelOptionsApplyTo;
  /**
  * font_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#font_configuration QuicksightTemplate#font_configuration}
  */
  readonly fontConfiguration?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptionsAxisLabelOptionsFontConfiguration;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptionsAxisLabelOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptionsAxisLabelOptionsOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptionsAxisLabelOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_label: cdktf.stringToTerraform(struct!.customLabel),
    apply_to: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptionsAxisLabelOptionsApplyToToTerraform(struct!.applyTo),
    font_configuration: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptionsAxisLabelOptionsFontConfigurationToTerraform(struct!.fontConfiguration),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptionsAxisLabelOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptionsAxisLabelOptions | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptionsAxisLabelOptions | undefined) {
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
  private _applyTo = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptionsAxisLabelOptionsApplyToOutputReference(this, "apply_to");
  public get applyTo() {
    return this._applyTo;
  }
  public putApplyTo(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptionsAxisLabelOptionsApplyTo) {
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
  private _fontConfiguration = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptionsAxisLabelOptionsFontConfigurationOutputReference(this, "font_configuration");
  public get fontConfiguration() {
    return this._fontConfiguration;
  }
  public putFontConfiguration(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptionsAxisLabelOptionsFontConfiguration) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptions {
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
  readonly axisLabelOptions?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptionsAxisLabelOptions;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptionsOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sort_icon_visibility: cdktf.stringToTerraform(struct!.sortIconVisibility),
    visibility: cdktf.stringToTerraform(struct!.visibility),
    axis_label_options: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptionsAxisLabelOptionsToTerraform(struct!.axisLabelOptions),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptions | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptions | undefined) {
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
  private _axisLabelOptions = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptionsAxisLabelOptionsOutputReference(this, "axis_label_options");
  public get axisLabelOptions() {
    return this._axisLabelOptions;
  }
  public putAxisLabelOptions(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationColorLabelOptionsAxisLabelOptions) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationContributionAnalysisDefaultsContributorDimensions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#column_name QuicksightTemplate#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_set_identifier QuicksightTemplate#data_set_identifier}
  */
  readonly dataSetIdentifier: string;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationContributionAnalysisDefaultsContributorDimensionsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationContributionAnalysisDefaultsContributorDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    data_set_identifier: cdktf.stringToTerraform(struct!.dataSetIdentifier),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationContributionAnalysisDefaultsContributorDimensionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationContributionAnalysisDefaultsContributorDimensions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationContributionAnalysisDefaultsContributorDimensions | cdktf.IResolvable | undefined) {
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

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationContributionAnalysisDefaultsContributorDimensionsList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationContributionAnalysisDefaultsContributorDimensions[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationContributionAnalysisDefaultsContributorDimensionsOutputReference {
    return new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationContributionAnalysisDefaultsContributorDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationContributionAnalysisDefaults {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#measure_field_id QuicksightTemplate#measure_field_id}
  */
  readonly measureFieldId: string;
  /**
  * contributor_dimensions block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#contributor_dimensions QuicksightTemplate#contributor_dimensions}
  */
  readonly contributorDimensions: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationContributionAnalysisDefaultsContributorDimensions[] | cdktf.IResolvable;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationContributionAnalysisDefaultsToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationContributionAnalysisDefaults | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    measure_field_id: cdktf.stringToTerraform(struct!.measureFieldId),
    contributor_dimensions: cdktf.listMapper(quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationContributionAnalysisDefaultsContributorDimensionsToTerraform, true)(struct!.contributorDimensions),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationContributionAnalysisDefaultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationContributionAnalysisDefaults | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._measureFieldId !== undefined) {
      hasAnyValues = true;
      internalValueResult.measureFieldId = this._measureFieldId;
    }
    if (this._contributorDimensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contributorDimensions = this._contributorDimensions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationContributionAnalysisDefaults | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._measureFieldId = undefined;
      this._contributorDimensions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._measureFieldId = value.measureFieldId;
      this._contributorDimensions.internalValue = value.contributorDimensions;
    }
  }

  // measure_field_id - computed: false, optional: false, required: true
  private _measureFieldId?: string; 
  public get measureFieldId() {
    return this.getStringAttribute('measure_field_id');
  }
  public set measureFieldId(value: string) {
    this._measureFieldId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get measureFieldIdInput() {
    return this._measureFieldId;
  }

  // contributor_dimensions - computed: false, optional: false, required: true
  private _contributorDimensions = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationContributionAnalysisDefaultsContributorDimensionsList(this, "contributor_dimensions", false);
  public get contributorDimensions() {
    return this._contributorDimensions;
  }
  public putContributorDimensions(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationContributionAnalysisDefaultsContributorDimensions[] | cdktf.IResolvable) {
    this._contributorDimensions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contributorDimensionsInput() {
    return this._contributorDimensions.internalValue;
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationContributionAnalysisDefaultsList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationContributionAnalysisDefaults[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationContributionAnalysisDefaultsOutputReference {
    return new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationContributionAnalysisDefaultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsDataLabelTypesDataPathLabelType {
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

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsDataLabelTypesDataPathLabelTypeToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsDataLabelTypesDataPathLabelTypeOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsDataLabelTypesDataPathLabelType): any {
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

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsDataLabelTypesDataPathLabelTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsDataLabelTypesDataPathLabelType | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsDataLabelTypesDataPathLabelType | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsDataLabelTypesFieldLabelType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_id QuicksightTemplate#field_id}
  */
  readonly fieldId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsDataLabelTypesFieldLabelTypeToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsDataLabelTypesFieldLabelTypeOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsDataLabelTypesFieldLabelType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_id: cdktf.stringToTerraform(struct!.fieldId),
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsDataLabelTypesFieldLabelTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsDataLabelTypesFieldLabelType | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsDataLabelTypesFieldLabelType | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsDataLabelTypesMaximumLabelType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsDataLabelTypesMaximumLabelTypeToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsDataLabelTypesMaximumLabelTypeOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsDataLabelTypesMaximumLabelType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsDataLabelTypesMaximumLabelTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsDataLabelTypesMaximumLabelType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsDataLabelTypesMaximumLabelType | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsDataLabelTypesMinimumLabelType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsDataLabelTypesMinimumLabelTypeToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsDataLabelTypesMinimumLabelTypeOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsDataLabelTypesMinimumLabelType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsDataLabelTypesMinimumLabelTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsDataLabelTypesMinimumLabelType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsDataLabelTypesMinimumLabelType | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsDataLabelTypesRangeEndsLabelType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#visibility QuicksightTemplate#visibility}
  */
  readonly visibility?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsDataLabelTypesRangeEndsLabelTypeToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsDataLabelTypesRangeEndsLabelTypeOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsDataLabelTypesRangeEndsLabelType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsDataLabelTypesRangeEndsLabelTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsDataLabelTypesRangeEndsLabelType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsDataLabelTypesRangeEndsLabelType | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsDataLabelTypes {
  /**
  * data_path_label_type block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#data_path_label_type QuicksightTemplate#data_path_label_type}
  */
  readonly dataPathLabelType?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsDataLabelTypesDataPathLabelType;
  /**
  * field_label_type block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#field_label_type QuicksightTemplate#field_label_type}
  */
  readonly fieldLabelType?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsDataLabelTypesFieldLabelType;
  /**
  * maximum_label_type block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#maximum_label_type QuicksightTemplate#maximum_label_type}
  */
  readonly maximumLabelType?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsDataLabelTypesMaximumLabelType;
  /**
  * minimum_label_type block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#minimum_label_type QuicksightTemplate#minimum_label_type}
  */
  readonly minimumLabelType?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsDataLabelTypesMinimumLabelType;
  /**
  * range_ends_label_type block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#range_ends_label_type QuicksightTemplate#range_ends_label_type}
  */
  readonly rangeEndsLabelType?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsDataLabelTypesRangeEndsLabelType;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsDataLabelTypesToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsDataLabelTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_path_label_type: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsDataLabelTypesDataPathLabelTypeToTerraform(struct!.dataPathLabelType),
    field_label_type: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsDataLabelTypesFieldLabelTypeToTerraform(struct!.fieldLabelType),
    maximum_label_type: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsDataLabelTypesMaximumLabelTypeToTerraform(struct!.maximumLabelType),
    minimum_label_type: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsDataLabelTypesMinimumLabelTypeToTerraform(struct!.minimumLabelType),
    range_ends_label_type: quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsDataLabelTypesRangeEndsLabelTypeToTerraform(struct!.rangeEndsLabelType),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsDataLabelTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsDataLabelTypes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsDataLabelTypes | cdktf.IResolvable | undefined) {
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
  private _dataPathLabelType = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsDataLabelTypesDataPathLabelTypeOutputReference(this, "data_path_label_type");
  public get dataPathLabelType() {
    return this._dataPathLabelType;
  }
  public putDataPathLabelType(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsDataLabelTypesDataPathLabelType) {
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
  private _fieldLabelType = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsDataLabelTypesFieldLabelTypeOutputReference(this, "field_label_type");
  public get fieldLabelType() {
    return this._fieldLabelType;
  }
  public putFieldLabelType(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsDataLabelTypesFieldLabelType) {
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
  private _maximumLabelType = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsDataLabelTypesMaximumLabelTypeOutputReference(this, "maximum_label_type");
  public get maximumLabelType() {
    return this._maximumLabelType;
  }
  public putMaximumLabelType(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsDataLabelTypesMaximumLabelType) {
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
  private _minimumLabelType = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsDataLabelTypesMinimumLabelTypeOutputReference(this, "minimum_label_type");
  public get minimumLabelType() {
    return this._minimumLabelType;
  }
  public putMinimumLabelType(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsDataLabelTypesMinimumLabelType) {
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
  private _rangeEndsLabelType = new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsDataLabelTypesRangeEndsLabelTypeOutputReference(this, "range_ends_label_type");
  public get rangeEndsLabelType() {
    return this._rangeEndsLabelType;
  }
  public putRangeEndsLabelType(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsDataLabelTypesRangeEndsLabelType) {
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

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsDataLabelTypesList extends cdktf.ComplexList {
  public internalValue? : QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsDataLabelTypes[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsDataLabelTypesOutputReference {
    return new QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsDataLabelTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsLabelFontConfigurationFontSize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#relative QuicksightTemplate#relative}
  */
  readonly relative?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsLabelFontConfigurationFontSizeToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsLabelFontConfigurationFontSizeOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsLabelFontConfigurationFontSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relative: cdktf.stringToTerraform(struct!.relative),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsLabelFontConfigurationFontSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsLabelFontConfigurationFontSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relative !== undefined) {
      hasAnyValues = true;
      internalValueResult.relative = this._relative;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsLabelFontConfigurationFontSize | undefined) {
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
export interface QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsLabelFontConfigurationFontWeight {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/quicksight_template#name QuicksightTemplate#name}
  */
  readonly name?: string;
}

export function quicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsLabelFontConfigurationFontWeightToTerraform(struct?: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsLabelFontConfigurationFontWeightOutputReference | QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsLabelFontConfigurationFontWeight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsLabelFontConfigurationFontWeightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsLabelFontConfigurationFontWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateDefinitionSheetsVisualsBarChartVisualChartConfigurationDataLabelsLabelFontConfigurationFontWeight | undefined) {
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
