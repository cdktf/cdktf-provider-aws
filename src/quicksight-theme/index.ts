// https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_theme
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface QuicksightThemeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_theme#aws_account_id QuicksightTheme#aws_account_id}
  */
  readonly awsAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_theme#base_theme_id QuicksightTheme#base_theme_id}
  */
  readonly baseThemeId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_theme#id QuicksightTheme#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_theme#name QuicksightTheme#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_theme#tags QuicksightTheme#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_theme#tags_all QuicksightTheme#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_theme#theme_id QuicksightTheme#theme_id}
  */
  readonly themeId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_theme#version_description QuicksightTheme#version_description}
  */
  readonly versionDescription?: string;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_theme#configuration QuicksightTheme#configuration}
  */
  readonly configuration?: QuicksightThemeConfiguration;
  /**
  * permissions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_theme#permissions QuicksightTheme#permissions}
  */
  readonly permissions?: QuicksightThemePermissions[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_theme#timeouts QuicksightTheme#timeouts}
  */
  readonly timeouts?: QuicksightThemeTimeouts;
}
export interface QuicksightThemeConfigurationDataColorPalette {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_theme#colors QuicksightTheme#colors}
  */
  readonly colors?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_theme#empty_fill_color QuicksightTheme#empty_fill_color}
  */
  readonly emptyFillColor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_theme#min_max_gradient QuicksightTheme#min_max_gradient}
  */
  readonly minMaxGradient?: string[];
}

export function quicksightThemeConfigurationDataColorPaletteToTerraform(struct?: QuicksightThemeConfigurationDataColorPaletteOutputReference | QuicksightThemeConfigurationDataColorPalette): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    colors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.colors),
    empty_fill_color: cdktf.stringToTerraform(struct!.emptyFillColor),
    min_max_gradient: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.minMaxGradient),
  }
}

export class QuicksightThemeConfigurationDataColorPaletteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightThemeConfigurationDataColorPalette | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._colors !== undefined) {
      hasAnyValues = true;
      internalValueResult.colors = this._colors;
    }
    if (this._emptyFillColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.emptyFillColor = this._emptyFillColor;
    }
    if (this._minMaxGradient !== undefined) {
      hasAnyValues = true;
      internalValueResult.minMaxGradient = this._minMaxGradient;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeConfigurationDataColorPalette | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._colors = undefined;
      this._emptyFillColor = undefined;
      this._minMaxGradient = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._colors = value.colors;
      this._emptyFillColor = value.emptyFillColor;
      this._minMaxGradient = value.minMaxGradient;
    }
  }

  // colors - computed: false, optional: true, required: false
  private _colors?: string[]; 
  public get colors() {
    return this.getListAttribute('colors');
  }
  public set colors(value: string[]) {
    this._colors = value;
  }
  public resetColors() {
    this._colors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorsInput() {
    return this._colors;
  }

  // empty_fill_color - computed: false, optional: true, required: false
  private _emptyFillColor?: string; 
  public get emptyFillColor() {
    return this.getStringAttribute('empty_fill_color');
  }
  public set emptyFillColor(value: string) {
    this._emptyFillColor = value;
  }
  public resetEmptyFillColor() {
    this._emptyFillColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emptyFillColorInput() {
    return this._emptyFillColor;
  }

  // min_max_gradient - computed: false, optional: true, required: false
  private _minMaxGradient?: string[]; 
  public get minMaxGradient() {
    return this.getListAttribute('min_max_gradient');
  }
  public set minMaxGradient(value: string[]) {
    this._minMaxGradient = value;
  }
  public resetMinMaxGradient() {
    this._minMaxGradient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minMaxGradientInput() {
    return this._minMaxGradient;
  }
}
export interface QuicksightThemeConfigurationSheetTileBorder {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_theme#show QuicksightTheme#show}
  */
  readonly show?: boolean | cdktf.IResolvable;
}

export function quicksightThemeConfigurationSheetTileBorderToTerraform(struct?: QuicksightThemeConfigurationSheetTileBorderOutputReference | QuicksightThemeConfigurationSheetTileBorder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    show: cdktf.booleanToTerraform(struct!.show),
  }
}

export class QuicksightThemeConfigurationSheetTileBorderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightThemeConfigurationSheetTileBorder | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._show !== undefined) {
      hasAnyValues = true;
      internalValueResult.show = this._show;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeConfigurationSheetTileBorder | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._show = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._show = value.show;
    }
  }

  // show - computed: false, optional: true, required: false
  private _show?: boolean | cdktf.IResolvable; 
  public get show() {
    return this.getBooleanAttribute('show');
  }
  public set show(value: boolean | cdktf.IResolvable) {
    this._show = value;
  }
  public resetShow() {
    this._show = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showInput() {
    return this._show;
  }
}
export interface QuicksightThemeConfigurationSheetTile {
  /**
  * border block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_theme#border QuicksightTheme#border}
  */
  readonly border?: QuicksightThemeConfigurationSheetTileBorder;
}

export function quicksightThemeConfigurationSheetTileToTerraform(struct?: QuicksightThemeConfigurationSheetTileOutputReference | QuicksightThemeConfigurationSheetTile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    border: quicksightThemeConfigurationSheetTileBorderToTerraform(struct!.border),
  }
}

export class QuicksightThemeConfigurationSheetTileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightThemeConfigurationSheetTile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._border?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.border = this._border?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeConfigurationSheetTile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._border.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._border.internalValue = value.border;
    }
  }

  // border - computed: false, optional: true, required: false
  private _border = new QuicksightThemeConfigurationSheetTileBorderOutputReference(this, "border");
  public get border() {
    return this._border;
  }
  public putBorder(value: QuicksightThemeConfigurationSheetTileBorder) {
    this._border.internalValue = value;
  }
  public resetBorder() {
    this._border.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get borderInput() {
    return this._border.internalValue;
  }
}
export interface QuicksightThemeConfigurationSheetTileLayoutGutter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_theme#show QuicksightTheme#show}
  */
  readonly show?: boolean | cdktf.IResolvable;
}

export function quicksightThemeConfigurationSheetTileLayoutGutterToTerraform(struct?: QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference | QuicksightThemeConfigurationSheetTileLayoutGutter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    show: cdktf.booleanToTerraform(struct!.show),
  }
}

export class QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightThemeConfigurationSheetTileLayoutGutter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._show !== undefined) {
      hasAnyValues = true;
      internalValueResult.show = this._show;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeConfigurationSheetTileLayoutGutter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._show = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._show = value.show;
    }
  }

  // show - computed: false, optional: true, required: false
  private _show?: boolean | cdktf.IResolvable; 
  public get show() {
    return this.getBooleanAttribute('show');
  }
  public set show(value: boolean | cdktf.IResolvable) {
    this._show = value;
  }
  public resetShow() {
    this._show = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showInput() {
    return this._show;
  }
}
export interface QuicksightThemeConfigurationSheetTileLayoutMargin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_theme#show QuicksightTheme#show}
  */
  readonly show?: boolean | cdktf.IResolvable;
}

export function quicksightThemeConfigurationSheetTileLayoutMarginToTerraform(struct?: QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference | QuicksightThemeConfigurationSheetTileLayoutMargin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    show: cdktf.booleanToTerraform(struct!.show),
  }
}

export class QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightThemeConfigurationSheetTileLayoutMargin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._show !== undefined) {
      hasAnyValues = true;
      internalValueResult.show = this._show;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeConfigurationSheetTileLayoutMargin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._show = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._show = value.show;
    }
  }

  // show - computed: false, optional: true, required: false
  private _show?: boolean | cdktf.IResolvable; 
  public get show() {
    return this.getBooleanAttribute('show');
  }
  public set show(value: boolean | cdktf.IResolvable) {
    this._show = value;
  }
  public resetShow() {
    this._show = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showInput() {
    return this._show;
  }
}
export interface QuicksightThemeConfigurationSheetTileLayout {
  /**
  * gutter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_theme#gutter QuicksightTheme#gutter}
  */
  readonly gutter?: QuicksightThemeConfigurationSheetTileLayoutGutter;
  /**
  * margin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_theme#margin QuicksightTheme#margin}
  */
  readonly margin?: QuicksightThemeConfigurationSheetTileLayoutMargin;
}

export function quicksightThemeConfigurationSheetTileLayoutToTerraform(struct?: QuicksightThemeConfigurationSheetTileLayoutOutputReference | QuicksightThemeConfigurationSheetTileLayout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gutter: quicksightThemeConfigurationSheetTileLayoutGutterToTerraform(struct!.gutter),
    margin: quicksightThemeConfigurationSheetTileLayoutMarginToTerraform(struct!.margin),
  }
}

export class QuicksightThemeConfigurationSheetTileLayoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightThemeConfigurationSheetTileLayout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gutter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gutter = this._gutter?.internalValue;
    }
    if (this._margin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.margin = this._margin?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeConfigurationSheetTileLayout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gutter.internalValue = undefined;
      this._margin.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gutter.internalValue = value.gutter;
      this._margin.internalValue = value.margin;
    }
  }

  // gutter - computed: false, optional: true, required: false
  private _gutter = new QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference(this, "gutter");
  public get gutter() {
    return this._gutter;
  }
  public putGutter(value: QuicksightThemeConfigurationSheetTileLayoutGutter) {
    this._gutter.internalValue = value;
  }
  public resetGutter() {
    this._gutter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gutterInput() {
    return this._gutter.internalValue;
  }

  // margin - computed: false, optional: true, required: false
  private _margin = new QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference(this, "margin");
  public get margin() {
    return this._margin;
  }
  public putMargin(value: QuicksightThemeConfigurationSheetTileLayoutMargin) {
    this._margin.internalValue = value;
  }
  public resetMargin() {
    this._margin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get marginInput() {
    return this._margin.internalValue;
  }
}
export interface QuicksightThemeConfigurationSheet {
  /**
  * tile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_theme#tile QuicksightTheme#tile}
  */
  readonly tile?: QuicksightThemeConfigurationSheetTile;
  /**
  * tile_layout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_theme#tile_layout QuicksightTheme#tile_layout}
  */
  readonly tileLayout?: QuicksightThemeConfigurationSheetTileLayout;
}

export function quicksightThemeConfigurationSheetToTerraform(struct?: QuicksightThemeConfigurationSheetOutputReference | QuicksightThemeConfigurationSheet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tile: quicksightThemeConfigurationSheetTileToTerraform(struct!.tile),
    tile_layout: quicksightThemeConfigurationSheetTileLayoutToTerraform(struct!.tileLayout),
  }
}

export class QuicksightThemeConfigurationSheetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightThemeConfigurationSheet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tile = this._tile?.internalValue;
    }
    if (this._tileLayout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tileLayout = this._tileLayout?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeConfigurationSheet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tile.internalValue = undefined;
      this._tileLayout.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tile.internalValue = value.tile;
      this._tileLayout.internalValue = value.tileLayout;
    }
  }

  // tile - computed: false, optional: true, required: false
  private _tile = new QuicksightThemeConfigurationSheetTileOutputReference(this, "tile");
  public get tile() {
    return this._tile;
  }
  public putTile(value: QuicksightThemeConfigurationSheetTile) {
    this._tile.internalValue = value;
  }
  public resetTile() {
    this._tile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tileInput() {
    return this._tile.internalValue;
  }

  // tile_layout - computed: false, optional: true, required: false
  private _tileLayout = new QuicksightThemeConfigurationSheetTileLayoutOutputReference(this, "tile_layout");
  public get tileLayout() {
    return this._tileLayout;
  }
  public putTileLayout(value: QuicksightThemeConfigurationSheetTileLayout) {
    this._tileLayout.internalValue = value;
  }
  public resetTileLayout() {
    this._tileLayout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tileLayoutInput() {
    return this._tileLayout.internalValue;
  }
}
export interface QuicksightThemeConfigurationTypographyFontFamilies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_theme#font_family QuicksightTheme#font_family}
  */
  readonly fontFamily?: string;
}

export function quicksightThemeConfigurationTypographyFontFamiliesToTerraform(struct?: QuicksightThemeConfigurationTypographyFontFamilies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    font_family: cdktf.stringToTerraform(struct!.fontFamily),
  }
}

export class QuicksightThemeConfigurationTypographyFontFamiliesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightThemeConfigurationTypographyFontFamilies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fontFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontFamily = this._fontFamily;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeConfigurationTypographyFontFamilies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fontFamily = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fontFamily = value.fontFamily;
    }
  }

  // font_family - computed: false, optional: true, required: false
  private _fontFamily?: string; 
  public get fontFamily() {
    return this.getStringAttribute('font_family');
  }
  public set fontFamily(value: string) {
    this._fontFamily = value;
  }
  public resetFontFamily() {
    this._fontFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontFamilyInput() {
    return this._fontFamily;
  }
}

export class QuicksightThemeConfigurationTypographyFontFamiliesList extends cdktf.ComplexList {
  public internalValue? : QuicksightThemeConfigurationTypographyFontFamilies[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightThemeConfigurationTypographyFontFamiliesOutputReference {
    return new QuicksightThemeConfigurationTypographyFontFamiliesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightThemeConfigurationTypography {
  /**
  * font_families block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_theme#font_families QuicksightTheme#font_families}
  */
  readonly fontFamilies?: QuicksightThemeConfigurationTypographyFontFamilies[] | cdktf.IResolvable;
}

export function quicksightThemeConfigurationTypographyToTerraform(struct?: QuicksightThemeConfigurationTypographyOutputReference | QuicksightThemeConfigurationTypography): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    font_families: cdktf.listMapper(quicksightThemeConfigurationTypographyFontFamiliesToTerraform, true)(struct!.fontFamilies),
  }
}

export class QuicksightThemeConfigurationTypographyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightThemeConfigurationTypography | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fontFamilies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontFamilies = this._fontFamilies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeConfigurationTypography | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fontFamilies.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fontFamilies.internalValue = value.fontFamilies;
    }
  }

  // font_families - computed: false, optional: true, required: false
  private _fontFamilies = new QuicksightThemeConfigurationTypographyFontFamiliesList(this, "font_families", false);
  public get fontFamilies() {
    return this._fontFamilies;
  }
  public putFontFamilies(value: QuicksightThemeConfigurationTypographyFontFamilies[] | cdktf.IResolvable) {
    this._fontFamilies.internalValue = value;
  }
  public resetFontFamilies() {
    this._fontFamilies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontFamiliesInput() {
    return this._fontFamilies.internalValue;
  }
}
export interface QuicksightThemeConfigurationUiColorPalette {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_theme#accent QuicksightTheme#accent}
  */
  readonly accent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_theme#accent_foreground QuicksightTheme#accent_foreground}
  */
  readonly accentForeground?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_theme#danger QuicksightTheme#danger}
  */
  readonly danger?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_theme#danger_foreground QuicksightTheme#danger_foreground}
  */
  readonly dangerForeground?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_theme#dimension QuicksightTheme#dimension}
  */
  readonly dimension?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_theme#dimension_foreground QuicksightTheme#dimension_foreground}
  */
  readonly dimensionForeground?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_theme#measure QuicksightTheme#measure}
  */
  readonly measure?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_theme#measure_foreground QuicksightTheme#measure_foreground}
  */
  readonly measureForeground?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_theme#primary_background QuicksightTheme#primary_background}
  */
  readonly primaryBackground?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_theme#primary_foreground QuicksightTheme#primary_foreground}
  */
  readonly primaryForeground?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_theme#secondary_background QuicksightTheme#secondary_background}
  */
  readonly secondaryBackground?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_theme#secondary_foreground QuicksightTheme#secondary_foreground}
  */
  readonly secondaryForeground?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_theme#success QuicksightTheme#success}
  */
  readonly success?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_theme#success_foreground QuicksightTheme#success_foreground}
  */
  readonly successForeground?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_theme#warning QuicksightTheme#warning}
  */
  readonly warning?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_theme#warning_foreground QuicksightTheme#warning_foreground}
  */
  readonly warningForeground?: string;
}

export function quicksightThemeConfigurationUiColorPaletteToTerraform(struct?: QuicksightThemeConfigurationUiColorPaletteOutputReference | QuicksightThemeConfigurationUiColorPalette): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accent: cdktf.stringToTerraform(struct!.accent),
    accent_foreground: cdktf.stringToTerraform(struct!.accentForeground),
    danger: cdktf.stringToTerraform(struct!.danger),
    danger_foreground: cdktf.stringToTerraform(struct!.dangerForeground),
    dimension: cdktf.stringToTerraform(struct!.dimension),
    dimension_foreground: cdktf.stringToTerraform(struct!.dimensionForeground),
    measure: cdktf.stringToTerraform(struct!.measure),
    measure_foreground: cdktf.stringToTerraform(struct!.measureForeground),
    primary_background: cdktf.stringToTerraform(struct!.primaryBackground),
    primary_foreground: cdktf.stringToTerraform(struct!.primaryForeground),
    secondary_background: cdktf.stringToTerraform(struct!.secondaryBackground),
    secondary_foreground: cdktf.stringToTerraform(struct!.secondaryForeground),
    success: cdktf.stringToTerraform(struct!.success),
    success_foreground: cdktf.stringToTerraform(struct!.successForeground),
    warning: cdktf.stringToTerraform(struct!.warning),
    warning_foreground: cdktf.stringToTerraform(struct!.warningForeground),
  }
}

export class QuicksightThemeConfigurationUiColorPaletteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightThemeConfigurationUiColorPalette | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accent !== undefined) {
      hasAnyValues = true;
      internalValueResult.accent = this._accent;
    }
    if (this._accentForeground !== undefined) {
      hasAnyValues = true;
      internalValueResult.accentForeground = this._accentForeground;
    }
    if (this._danger !== undefined) {
      hasAnyValues = true;
      internalValueResult.danger = this._danger;
    }
    if (this._dangerForeground !== undefined) {
      hasAnyValues = true;
      internalValueResult.dangerForeground = this._dangerForeground;
    }
    if (this._dimension !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension;
    }
    if (this._dimensionForeground !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionForeground = this._dimensionForeground;
    }
    if (this._measure !== undefined) {
      hasAnyValues = true;
      internalValueResult.measure = this._measure;
    }
    if (this._measureForeground !== undefined) {
      hasAnyValues = true;
      internalValueResult.measureForeground = this._measureForeground;
    }
    if (this._primaryBackground !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryBackground = this._primaryBackground;
    }
    if (this._primaryForeground !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryForeground = this._primaryForeground;
    }
    if (this._secondaryBackground !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryBackground = this._secondaryBackground;
    }
    if (this._secondaryForeground !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryForeground = this._secondaryForeground;
    }
    if (this._success !== undefined) {
      hasAnyValues = true;
      internalValueResult.success = this._success;
    }
    if (this._successForeground !== undefined) {
      hasAnyValues = true;
      internalValueResult.successForeground = this._successForeground;
    }
    if (this._warning !== undefined) {
      hasAnyValues = true;
      internalValueResult.warning = this._warning;
    }
    if (this._warningForeground !== undefined) {
      hasAnyValues = true;
      internalValueResult.warningForeground = this._warningForeground;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeConfigurationUiColorPalette | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accent = undefined;
      this._accentForeground = undefined;
      this._danger = undefined;
      this._dangerForeground = undefined;
      this._dimension = undefined;
      this._dimensionForeground = undefined;
      this._measure = undefined;
      this._measureForeground = undefined;
      this._primaryBackground = undefined;
      this._primaryForeground = undefined;
      this._secondaryBackground = undefined;
      this._secondaryForeground = undefined;
      this._success = undefined;
      this._successForeground = undefined;
      this._warning = undefined;
      this._warningForeground = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accent = value.accent;
      this._accentForeground = value.accentForeground;
      this._danger = value.danger;
      this._dangerForeground = value.dangerForeground;
      this._dimension = value.dimension;
      this._dimensionForeground = value.dimensionForeground;
      this._measure = value.measure;
      this._measureForeground = value.measureForeground;
      this._primaryBackground = value.primaryBackground;
      this._primaryForeground = value.primaryForeground;
      this._secondaryBackground = value.secondaryBackground;
      this._secondaryForeground = value.secondaryForeground;
      this._success = value.success;
      this._successForeground = value.successForeground;
      this._warning = value.warning;
      this._warningForeground = value.warningForeground;
    }
  }

  // accent - computed: false, optional: true, required: false
  private _accent?: string; 
  public get accent() {
    return this.getStringAttribute('accent');
  }
  public set accent(value: string) {
    this._accent = value;
  }
  public resetAccent() {
    this._accent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accentInput() {
    return this._accent;
  }

  // accent_foreground - computed: false, optional: true, required: false
  private _accentForeground?: string; 
  public get accentForeground() {
    return this.getStringAttribute('accent_foreground');
  }
  public set accentForeground(value: string) {
    this._accentForeground = value;
  }
  public resetAccentForeground() {
    this._accentForeground = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accentForegroundInput() {
    return this._accentForeground;
  }

  // danger - computed: false, optional: true, required: false
  private _danger?: string; 
  public get danger() {
    return this.getStringAttribute('danger');
  }
  public set danger(value: string) {
    this._danger = value;
  }
  public resetDanger() {
    this._danger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dangerInput() {
    return this._danger;
  }

  // danger_foreground - computed: false, optional: true, required: false
  private _dangerForeground?: string; 
  public get dangerForeground() {
    return this.getStringAttribute('danger_foreground');
  }
  public set dangerForeground(value: string) {
    this._dangerForeground = value;
  }
  public resetDangerForeground() {
    this._dangerForeground = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dangerForegroundInput() {
    return this._dangerForeground;
  }

  // dimension - computed: false, optional: true, required: false
  private _dimension?: string; 
  public get dimension() {
    return this.getStringAttribute('dimension');
  }
  public set dimension(value: string) {
    this._dimension = value;
  }
  public resetDimension() {
    this._dimension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension;
  }

  // dimension_foreground - computed: false, optional: true, required: false
  private _dimensionForeground?: string; 
  public get dimensionForeground() {
    return this.getStringAttribute('dimension_foreground');
  }
  public set dimensionForeground(value: string) {
    this._dimensionForeground = value;
  }
  public resetDimensionForeground() {
    this._dimensionForeground = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionForegroundInput() {
    return this._dimensionForeground;
  }

  // measure - computed: false, optional: true, required: false
  private _measure?: string; 
  public get measure() {
    return this.getStringAttribute('measure');
  }
  public set measure(value: string) {
    this._measure = value;
  }
  public resetMeasure() {
    this._measure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get measureInput() {
    return this._measure;
  }

  // measure_foreground - computed: false, optional: true, required: false
  private _measureForeground?: string; 
  public get measureForeground() {
    return this.getStringAttribute('measure_foreground');
  }
  public set measureForeground(value: string) {
    this._measureForeground = value;
  }
  public resetMeasureForeground() {
    this._measureForeground = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get measureForegroundInput() {
    return this._measureForeground;
  }

  // primary_background - computed: false, optional: true, required: false
  private _primaryBackground?: string; 
  public get primaryBackground() {
    return this.getStringAttribute('primary_background');
  }
  public set primaryBackground(value: string) {
    this._primaryBackground = value;
  }
  public resetPrimaryBackground() {
    this._primaryBackground = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryBackgroundInput() {
    return this._primaryBackground;
  }

  // primary_foreground - computed: false, optional: true, required: false
  private _primaryForeground?: string; 
  public get primaryForeground() {
    return this.getStringAttribute('primary_foreground');
  }
  public set primaryForeground(value: string) {
    this._primaryForeground = value;
  }
  public resetPrimaryForeground() {
    this._primaryForeground = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryForegroundInput() {
    return this._primaryForeground;
  }

  // secondary_background - computed: false, optional: true, required: false
  private _secondaryBackground?: string; 
  public get secondaryBackground() {
    return this.getStringAttribute('secondary_background');
  }
  public set secondaryBackground(value: string) {
    this._secondaryBackground = value;
  }
  public resetSecondaryBackground() {
    this._secondaryBackground = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryBackgroundInput() {
    return this._secondaryBackground;
  }

  // secondary_foreground - computed: false, optional: true, required: false
  private _secondaryForeground?: string; 
  public get secondaryForeground() {
    return this.getStringAttribute('secondary_foreground');
  }
  public set secondaryForeground(value: string) {
    this._secondaryForeground = value;
  }
  public resetSecondaryForeground() {
    this._secondaryForeground = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryForegroundInput() {
    return this._secondaryForeground;
  }

  // success - computed: false, optional: true, required: false
  private _success?: string; 
  public get success() {
    return this.getStringAttribute('success');
  }
  public set success(value: string) {
    this._success = value;
  }
  public resetSuccess() {
    this._success = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successInput() {
    return this._success;
  }

  // success_foreground - computed: false, optional: true, required: false
  private _successForeground?: string; 
  public get successForeground() {
    return this.getStringAttribute('success_foreground');
  }
  public set successForeground(value: string) {
    this._successForeground = value;
  }
  public resetSuccessForeground() {
    this._successForeground = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successForegroundInput() {
    return this._successForeground;
  }

  // warning - computed: false, optional: true, required: false
  private _warning?: string; 
  public get warning() {
    return this.getStringAttribute('warning');
  }
  public set warning(value: string) {
    this._warning = value;
  }
  public resetWarning() {
    this._warning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningInput() {
    return this._warning;
  }

  // warning_foreground - computed: false, optional: true, required: false
  private _warningForeground?: string; 
  public get warningForeground() {
    return this.getStringAttribute('warning_foreground');
  }
  public set warningForeground(value: string) {
    this._warningForeground = value;
  }
  public resetWarningForeground() {
    this._warningForeground = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningForegroundInput() {
    return this._warningForeground;
  }
}
export interface QuicksightThemeConfiguration {
  /**
  * data_color_palette block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_theme#data_color_palette QuicksightTheme#data_color_palette}
  */
  readonly dataColorPalette?: QuicksightThemeConfigurationDataColorPalette;
  /**
  * sheet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_theme#sheet QuicksightTheme#sheet}
  */
  readonly sheet?: QuicksightThemeConfigurationSheet;
  /**
  * typography block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_theme#typography QuicksightTheme#typography}
  */
  readonly typography?: QuicksightThemeConfigurationTypography;
  /**
  * ui_color_palette block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_theme#ui_color_palette QuicksightTheme#ui_color_palette}
  */
  readonly uiColorPalette?: QuicksightThemeConfigurationUiColorPalette;
}

export function quicksightThemeConfigurationToTerraform(struct?: QuicksightThemeConfigurationOutputReference | QuicksightThemeConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_color_palette: quicksightThemeConfigurationDataColorPaletteToTerraform(struct!.dataColorPalette),
    sheet: quicksightThemeConfigurationSheetToTerraform(struct!.sheet),
    typography: quicksightThemeConfigurationTypographyToTerraform(struct!.typography),
    ui_color_palette: quicksightThemeConfigurationUiColorPaletteToTerraform(struct!.uiColorPalette),
  }
}

export class QuicksightThemeConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightThemeConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataColorPalette?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataColorPalette = this._dataColorPalette?.internalValue;
    }
    if (this._sheet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sheet = this._sheet?.internalValue;
    }
    if (this._typography?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.typography = this._typography?.internalValue;
    }
    if (this._uiColorPalette?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uiColorPalette = this._uiColorPalette?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataColorPalette.internalValue = undefined;
      this._sheet.internalValue = undefined;
      this._typography.internalValue = undefined;
      this._uiColorPalette.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataColorPalette.internalValue = value.dataColorPalette;
      this._sheet.internalValue = value.sheet;
      this._typography.internalValue = value.typography;
      this._uiColorPalette.internalValue = value.uiColorPalette;
    }
  }

  // data_color_palette - computed: false, optional: true, required: false
  private _dataColorPalette = new QuicksightThemeConfigurationDataColorPaletteOutputReference(this, "data_color_palette");
  public get dataColorPalette() {
    return this._dataColorPalette;
  }
  public putDataColorPalette(value: QuicksightThemeConfigurationDataColorPalette) {
    this._dataColorPalette.internalValue = value;
  }
  public resetDataColorPalette() {
    this._dataColorPalette.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataColorPaletteInput() {
    return this._dataColorPalette.internalValue;
  }

  // sheet - computed: false, optional: true, required: false
  private _sheet = new QuicksightThemeConfigurationSheetOutputReference(this, "sheet");
  public get sheet() {
    return this._sheet;
  }
  public putSheet(value: QuicksightThemeConfigurationSheet) {
    this._sheet.internalValue = value;
  }
  public resetSheet() {
    this._sheet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sheetInput() {
    return this._sheet.internalValue;
  }

  // typography - computed: false, optional: true, required: false
  private _typography = new QuicksightThemeConfigurationTypographyOutputReference(this, "typography");
  public get typography() {
    return this._typography;
  }
  public putTypography(value: QuicksightThemeConfigurationTypography) {
    this._typography.internalValue = value;
  }
  public resetTypography() {
    this._typography.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typographyInput() {
    return this._typography.internalValue;
  }

  // ui_color_palette - computed: false, optional: true, required: false
  private _uiColorPalette = new QuicksightThemeConfigurationUiColorPaletteOutputReference(this, "ui_color_palette");
  public get uiColorPalette() {
    return this._uiColorPalette;
  }
  public putUiColorPalette(value: QuicksightThemeConfigurationUiColorPalette) {
    this._uiColorPalette.internalValue = value;
  }
  public resetUiColorPalette() {
    this._uiColorPalette.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uiColorPaletteInput() {
    return this._uiColorPalette.internalValue;
  }
}
export interface QuicksightThemePermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_theme#actions QuicksightTheme#actions}
  */
  readonly actions: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_theme#principal QuicksightTheme#principal}
  */
  readonly principal: string;
}

export function quicksightThemePermissionsToTerraform(struct?: QuicksightThemePermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.actions),
    principal: cdktf.stringToTerraform(struct!.principal),
  }
}

export class QuicksightThemePermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightThemePermissions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    if (this._principal !== undefined) {
      hasAnyValues = true;
      internalValueResult.principal = this._principal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemePermissions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions = undefined;
      this._principal = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions = value.actions;
      this._principal = value.principal;
    }
  }

  // actions - computed: false, optional: false, required: true
  private _actions?: string[]; 
  public get actions() {
    return cdktf.Fn.tolist(this.getListAttribute('actions'));
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // principal - computed: false, optional: false, required: true
  private _principal?: string; 
  public get principal() {
    return this.getStringAttribute('principal');
  }
  public set principal(value: string) {
    this._principal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal;
  }
}

export class QuicksightThemePermissionsList extends cdktf.ComplexList {
  public internalValue? : QuicksightThemePermissions[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightThemePermissionsOutputReference {
    return new QuicksightThemePermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightThemeTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_theme#create QuicksightTheme#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_theme#delete QuicksightTheme#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_theme#update QuicksightTheme#update}
  */
  readonly update?: string;
}

export function quicksightThemeTimeoutsToTerraform(struct?: QuicksightThemeTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class QuicksightThemeTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightThemeTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightThemeTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_theme aws_quicksight_theme}
*/
export class QuicksightTheme extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_quicksight_theme";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_theme aws_quicksight_theme} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QuicksightThemeConfig
  */
  public constructor(scope: Construct, id: string, config: QuicksightThemeConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_quicksight_theme',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.20.1',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._awsAccountId = config.awsAccountId;
    this._baseThemeId = config.baseThemeId;
    this._id = config.id;
    this._name = config.name;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._themeId = config.themeId;
    this._versionDescription = config.versionDescription;
    this._configuration.internalValue = config.configuration;
    this._permissions.internalValue = config.permissions;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // aws_account_id - computed: true, optional: true, required: false
  private _awsAccountId?: string; 
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }
  public set awsAccountId(value: string) {
    this._awsAccountId = value;
  }
  public resetAwsAccountId() {
    this._awsAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountIdInput() {
    return this._awsAccountId;
  }

  // base_theme_id - computed: false, optional: false, required: true
  private _baseThemeId?: string; 
  public get baseThemeId() {
    return this.getStringAttribute('base_theme_id');
  }
  public set baseThemeId(value: string) {
    this._baseThemeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseThemeIdInput() {
    return this._baseThemeId;
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // last_updated_time - computed: true, optional: false, required: false
  public get lastUpdatedTime() {
    return this.getStringAttribute('last_updated_time');
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // theme_id - computed: false, optional: false, required: true
  private _themeId?: string; 
  public get themeId() {
    return this.getStringAttribute('theme_id');
  }
  public set themeId(value: string) {
    this._themeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get themeIdInput() {
    return this._themeId;
  }

  // version_description - computed: false, optional: true, required: false
  private _versionDescription?: string; 
  public get versionDescription() {
    return this.getStringAttribute('version_description');
  }
  public set versionDescription(value: string) {
    this._versionDescription = value;
  }
  public resetVersionDescription() {
    this._versionDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionDescriptionInput() {
    return this._versionDescription;
  }

  // version_number - computed: true, optional: false, required: false
  public get versionNumber() {
    return this.getNumberAttribute('version_number');
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration = new QuicksightThemeConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: QuicksightThemeConfiguration) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions = new QuicksightThemePermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }
  public putPermissions(value: QuicksightThemePermissions[] | cdktf.IResolvable) {
    this._permissions.internalValue = value;
  }
  public resetPermissions() {
    this._permissions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new QuicksightThemeTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: QuicksightThemeTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_account_id: cdktf.stringToTerraform(this._awsAccountId),
      base_theme_id: cdktf.stringToTerraform(this._baseThemeId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      theme_id: cdktf.stringToTerraform(this._themeId),
      version_description: cdktf.stringToTerraform(this._versionDescription),
      configuration: quicksightThemeConfigurationToTerraform(this._configuration.internalValue),
      permissions: cdktf.listMapper(quicksightThemePermissionsToTerraform, true)(this._permissions.internalValue),
      timeouts: quicksightThemeTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
