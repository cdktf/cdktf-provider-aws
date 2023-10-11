// https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_dashboard
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface QuicksightDashboardConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_dashboard#aws_account_id QuicksightDashboard#aws_account_id}
  */
  readonly awsAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_dashboard#dashboard_id QuicksightDashboard#dashboard_id}
  */
  readonly dashboardId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_dashboard#id QuicksightDashboard#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_dashboard#name QuicksightDashboard#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_dashboard#tags QuicksightDashboard#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_dashboard#tags_all QuicksightDashboard#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_dashboard#theme_arn QuicksightDashboard#theme_arn}
  */
  readonly themeArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_dashboard#version_description QuicksightDashboard#version_description}
  */
  readonly versionDescription: string;
  /**
  * dashboard_publish_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_dashboard#dashboard_publish_options QuicksightDashboard#dashboard_publish_options}
  */
  readonly dashboardPublishOptions?: QuicksightDashboardDashboardPublishOptions;
  /**
  * definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_dashboard#definition QuicksightDashboard#definition}
  */
  readonly definition?: any;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_dashboard#parameters QuicksightDashboard#parameters}
  */
  readonly parameters?: QuicksightDashboardParameters;
  /**
  * permissions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_dashboard#permissions QuicksightDashboard#permissions}
  */
  readonly permissions?: QuicksightDashboardPermissions[] | cdktf.IResolvable;
  /**
  * source_entity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_dashboard#source_entity QuicksightDashboard#source_entity}
  */
  readonly sourceEntity?: QuicksightDashboardSourceEntity;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_dashboard#timeouts QuicksightDashboard#timeouts}
  */
  readonly timeouts?: QuicksightDashboardTimeouts;
}
export interface QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}
  */
  readonly availabilityStatus?: string;
}

export function quicksightDashboardDashboardPublishOptionsAdHocFilteringOptionToTerraform(struct?: QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference | QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_status: cdktf.stringToTerraform(struct!.availabilityStatus),
  }
}

export class QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityStatus = this._availabilityStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availabilityStatus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availabilityStatus = value.availabilityStatus;
    }
  }

  // availability_status - computed: false, optional: true, required: false
  private _availabilityStatus?: string; 
  public get availabilityStatus() {
    return this.getStringAttribute('availability_status');
  }
  public set availabilityStatus(value: string) {
    this._availabilityStatus = value;
  }
  public resetAvailabilityStatus() {
    this._availabilityStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityStatusInput() {
    return this._availabilityStatus;
  }
}
export interface QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}
  */
  readonly availabilityStatus?: string;
}

export function quicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionToTerraform(struct?: QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference | QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_status: cdktf.stringToTerraform(struct!.availabilityStatus),
  }
}

export class QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityStatus = this._availabilityStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availabilityStatus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availabilityStatus = value.availabilityStatus;
    }
  }

  // availability_status - computed: false, optional: true, required: false
  private _availabilityStatus?: string; 
  public get availabilityStatus() {
    return this.getStringAttribute('availability_status');
  }
  public set availabilityStatus(value: string) {
    this._availabilityStatus = value;
  }
  public resetAvailabilityStatus() {
    this._availabilityStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityStatusInput() {
    return this._availabilityStatus;
  }
}
export interface QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}
  */
  readonly availabilityStatus?: string;
}

export function quicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionToTerraform(struct?: QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference | QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_status: cdktf.stringToTerraform(struct!.availabilityStatus),
  }
}

export class QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityStatus = this._availabilityStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availabilityStatus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availabilityStatus = value.availabilityStatus;
    }
  }

  // availability_status - computed: false, optional: true, required: false
  private _availabilityStatus?: string; 
  public get availabilityStatus() {
    return this.getStringAttribute('availability_status');
  }
  public set availabilityStatus(value: string) {
    this._availabilityStatus = value;
  }
  public resetAvailabilityStatus() {
    this._availabilityStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityStatusInput() {
    return this._availabilityStatus;
  }
}
export interface QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}
  */
  readonly availabilityStatus?: string;
}

export function quicksightDashboardDashboardPublishOptionsDataPointTooltipOptionToTerraform(struct?: QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference | QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_status: cdktf.stringToTerraform(struct!.availabilityStatus),
  }
}

export class QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityStatus = this._availabilityStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availabilityStatus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availabilityStatus = value.availabilityStatus;
    }
  }

  // availability_status - computed: false, optional: true, required: false
  private _availabilityStatus?: string; 
  public get availabilityStatus() {
    return this.getStringAttribute('availability_status');
  }
  public set availabilityStatus(value: string) {
    this._availabilityStatus = value;
  }
  public resetAvailabilityStatus() {
    this._availabilityStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityStatusInput() {
    return this._availabilityStatus;
  }
}
export interface QuicksightDashboardDashboardPublishOptionsExportToCsvOption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}
  */
  readonly availabilityStatus?: string;
}

export function quicksightDashboardDashboardPublishOptionsExportToCsvOptionToTerraform(struct?: QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference | QuicksightDashboardDashboardPublishOptionsExportToCsvOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_status: cdktf.stringToTerraform(struct!.availabilityStatus),
  }
}

export class QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightDashboardDashboardPublishOptionsExportToCsvOption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityStatus = this._availabilityStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDashboardDashboardPublishOptionsExportToCsvOption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availabilityStatus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availabilityStatus = value.availabilityStatus;
    }
  }

  // availability_status - computed: false, optional: true, required: false
  private _availabilityStatus?: string; 
  public get availabilityStatus() {
    return this.getStringAttribute('availability_status');
  }
  public set availabilityStatus(value: string) {
    this._availabilityStatus = value;
  }
  public resetAvailabilityStatus() {
    this._availabilityStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityStatusInput() {
    return this._availabilityStatus;
  }
}
export interface QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}
  */
  readonly availabilityStatus?: string;
}

export function quicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionToTerraform(struct?: QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference | QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_status: cdktf.stringToTerraform(struct!.availabilityStatus),
  }
}

export class QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityStatus = this._availabilityStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availabilityStatus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availabilityStatus = value.availabilityStatus;
    }
  }

  // availability_status - computed: false, optional: true, required: false
  private _availabilityStatus?: string; 
  public get availabilityStatus() {
    return this.getStringAttribute('availability_status');
  }
  public set availabilityStatus(value: string) {
    this._availabilityStatus = value;
  }
  public resetAvailabilityStatus() {
    this._availabilityStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityStatusInput() {
    return this._availabilityStatus;
  }
}
export interface QuicksightDashboardDashboardPublishOptionsSheetControlsOption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_dashboard#visibility_state QuicksightDashboard#visibility_state}
  */
  readonly visibilityState?: string;
}

export function quicksightDashboardDashboardPublishOptionsSheetControlsOptionToTerraform(struct?: QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference | QuicksightDashboardDashboardPublishOptionsSheetControlsOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    visibility_state: cdktf.stringToTerraform(struct!.visibilityState),
  }
}

export class QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightDashboardDashboardPublishOptionsSheetControlsOption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._visibilityState !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibilityState = this._visibilityState;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDashboardDashboardPublishOptionsSheetControlsOption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._visibilityState = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._visibilityState = value.visibilityState;
    }
  }

  // visibility_state - computed: false, optional: true, required: false
  private _visibilityState?: string; 
  public get visibilityState() {
    return this.getStringAttribute('visibility_state');
  }
  public set visibilityState(value: string) {
    this._visibilityState = value;
  }
  public resetVisibilityState() {
    this._visibilityState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityStateInput() {
    return this._visibilityState;
  }
}
export interface QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}
  */
  readonly availabilityStatus?: string;
}

export function quicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionToTerraform(struct?: QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference | QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_status: cdktf.stringToTerraform(struct!.availabilityStatus),
  }
}

export class QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityStatus = this._availabilityStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availabilityStatus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availabilityStatus = value.availabilityStatus;
    }
  }

  // availability_status - computed: false, optional: true, required: false
  private _availabilityStatus?: string; 
  public get availabilityStatus() {
    return this.getStringAttribute('availability_status');
  }
  public set availabilityStatus(value: string) {
    this._availabilityStatus = value;
  }
  public resetAvailabilityStatus() {
    this._availabilityStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityStatusInput() {
    return this._availabilityStatus;
  }
}
export interface QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}
  */
  readonly availabilityStatus?: string;
}

export function quicksightDashboardDashboardPublishOptionsVisualAxisSortOptionToTerraform(struct?: QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference | QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_status: cdktf.stringToTerraform(struct!.availabilityStatus),
  }
}

export class QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityStatus = this._availabilityStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availabilityStatus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availabilityStatus = value.availabilityStatus;
    }
  }

  // availability_status - computed: false, optional: true, required: false
  private _availabilityStatus?: string; 
  public get availabilityStatus() {
    return this.getStringAttribute('availability_status');
  }
  public set availabilityStatus(value: string) {
    this._availabilityStatus = value;
  }
  public resetAvailabilityStatus() {
    this._availabilityStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityStatusInput() {
    return this._availabilityStatus;
  }
}
export interface QuicksightDashboardDashboardPublishOptionsVisualMenuOption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}
  */
  readonly availabilityStatus?: string;
}

export function quicksightDashboardDashboardPublishOptionsVisualMenuOptionToTerraform(struct?: QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference | QuicksightDashboardDashboardPublishOptionsVisualMenuOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_status: cdktf.stringToTerraform(struct!.availabilityStatus),
  }
}

export class QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightDashboardDashboardPublishOptionsVisualMenuOption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityStatus = this._availabilityStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDashboardDashboardPublishOptionsVisualMenuOption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availabilityStatus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availabilityStatus = value.availabilityStatus;
    }
  }

  // availability_status - computed: false, optional: true, required: false
  private _availabilityStatus?: string; 
  public get availabilityStatus() {
    return this.getStringAttribute('availability_status');
  }
  public set availabilityStatus(value: string) {
    this._availabilityStatus = value;
  }
  public resetAvailabilityStatus() {
    this._availabilityStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityStatusInput() {
    return this._availabilityStatus;
  }
}
export interface QuicksightDashboardDashboardPublishOptions {
  /**
  * ad_hoc_filtering_option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_dashboard#ad_hoc_filtering_option QuicksightDashboard#ad_hoc_filtering_option}
  */
  readonly adHocFilteringOption?: QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption;
  /**
  * data_point_drill_up_down_option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_dashboard#data_point_drill_up_down_option QuicksightDashboard#data_point_drill_up_down_option}
  */
  readonly dataPointDrillUpDownOption?: QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption;
  /**
  * data_point_menu_label_option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_dashboard#data_point_menu_label_option QuicksightDashboard#data_point_menu_label_option}
  */
  readonly dataPointMenuLabelOption?: QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption;
  /**
  * data_point_tooltip_option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_dashboard#data_point_tooltip_option QuicksightDashboard#data_point_tooltip_option}
  */
  readonly dataPointTooltipOption?: QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption;
  /**
  * export_to_csv_option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_dashboard#export_to_csv_option QuicksightDashboard#export_to_csv_option}
  */
  readonly exportToCsvOption?: QuicksightDashboardDashboardPublishOptionsExportToCsvOption;
  /**
  * export_with_hidden_fields_option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_dashboard#export_with_hidden_fields_option QuicksightDashboard#export_with_hidden_fields_option}
  */
  readonly exportWithHiddenFieldsOption?: QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption;
  /**
  * sheet_controls_option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_dashboard#sheet_controls_option QuicksightDashboard#sheet_controls_option}
  */
  readonly sheetControlsOption?: QuicksightDashboardDashboardPublishOptionsSheetControlsOption;
  /**
  * sheet_layout_element_maximization_option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_dashboard#sheet_layout_element_maximization_option QuicksightDashboard#sheet_layout_element_maximization_option}
  */
  readonly sheetLayoutElementMaximizationOption?: QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption;
  /**
  * visual_axis_sort_option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_dashboard#visual_axis_sort_option QuicksightDashboard#visual_axis_sort_option}
  */
  readonly visualAxisSortOption?: QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption;
  /**
  * visual_menu_option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_dashboard#visual_menu_option QuicksightDashboard#visual_menu_option}
  */
  readonly visualMenuOption?: QuicksightDashboardDashboardPublishOptionsVisualMenuOption;
}

export function quicksightDashboardDashboardPublishOptionsToTerraform(struct?: QuicksightDashboardDashboardPublishOptionsOutputReference | QuicksightDashboardDashboardPublishOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ad_hoc_filtering_option: quicksightDashboardDashboardPublishOptionsAdHocFilteringOptionToTerraform(struct!.adHocFilteringOption),
    data_point_drill_up_down_option: quicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionToTerraform(struct!.dataPointDrillUpDownOption),
    data_point_menu_label_option: quicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionToTerraform(struct!.dataPointMenuLabelOption),
    data_point_tooltip_option: quicksightDashboardDashboardPublishOptionsDataPointTooltipOptionToTerraform(struct!.dataPointTooltipOption),
    export_to_csv_option: quicksightDashboardDashboardPublishOptionsExportToCsvOptionToTerraform(struct!.exportToCsvOption),
    export_with_hidden_fields_option: quicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionToTerraform(struct!.exportWithHiddenFieldsOption),
    sheet_controls_option: quicksightDashboardDashboardPublishOptionsSheetControlsOptionToTerraform(struct!.sheetControlsOption),
    sheet_layout_element_maximization_option: quicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionToTerraform(struct!.sheetLayoutElementMaximizationOption),
    visual_axis_sort_option: quicksightDashboardDashboardPublishOptionsVisualAxisSortOptionToTerraform(struct!.visualAxisSortOption),
    visual_menu_option: quicksightDashboardDashboardPublishOptionsVisualMenuOptionToTerraform(struct!.visualMenuOption),
  }
}

export class QuicksightDashboardDashboardPublishOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightDashboardDashboardPublishOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adHocFilteringOption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.adHocFilteringOption = this._adHocFilteringOption?.internalValue;
    }
    if (this._dataPointDrillUpDownOption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataPointDrillUpDownOption = this._dataPointDrillUpDownOption?.internalValue;
    }
    if (this._dataPointMenuLabelOption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataPointMenuLabelOption = this._dataPointMenuLabelOption?.internalValue;
    }
    if (this._dataPointTooltipOption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataPointTooltipOption = this._dataPointTooltipOption?.internalValue;
    }
    if (this._exportToCsvOption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportToCsvOption = this._exportToCsvOption?.internalValue;
    }
    if (this._exportWithHiddenFieldsOption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportWithHiddenFieldsOption = this._exportWithHiddenFieldsOption?.internalValue;
    }
    if (this._sheetControlsOption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sheetControlsOption = this._sheetControlsOption?.internalValue;
    }
    if (this._sheetLayoutElementMaximizationOption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sheetLayoutElementMaximizationOption = this._sheetLayoutElementMaximizationOption?.internalValue;
    }
    if (this._visualAxisSortOption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.visualAxisSortOption = this._visualAxisSortOption?.internalValue;
    }
    if (this._visualMenuOption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.visualMenuOption = this._visualMenuOption?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDashboardDashboardPublishOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adHocFilteringOption.internalValue = undefined;
      this._dataPointDrillUpDownOption.internalValue = undefined;
      this._dataPointMenuLabelOption.internalValue = undefined;
      this._dataPointTooltipOption.internalValue = undefined;
      this._exportToCsvOption.internalValue = undefined;
      this._exportWithHiddenFieldsOption.internalValue = undefined;
      this._sheetControlsOption.internalValue = undefined;
      this._sheetLayoutElementMaximizationOption.internalValue = undefined;
      this._visualAxisSortOption.internalValue = undefined;
      this._visualMenuOption.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adHocFilteringOption.internalValue = value.adHocFilteringOption;
      this._dataPointDrillUpDownOption.internalValue = value.dataPointDrillUpDownOption;
      this._dataPointMenuLabelOption.internalValue = value.dataPointMenuLabelOption;
      this._dataPointTooltipOption.internalValue = value.dataPointTooltipOption;
      this._exportToCsvOption.internalValue = value.exportToCsvOption;
      this._exportWithHiddenFieldsOption.internalValue = value.exportWithHiddenFieldsOption;
      this._sheetControlsOption.internalValue = value.sheetControlsOption;
      this._sheetLayoutElementMaximizationOption.internalValue = value.sheetLayoutElementMaximizationOption;
      this._visualAxisSortOption.internalValue = value.visualAxisSortOption;
      this._visualMenuOption.internalValue = value.visualMenuOption;
    }
  }

  // ad_hoc_filtering_option - computed: false, optional: true, required: false
  private _adHocFilteringOption = new QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference(this, "ad_hoc_filtering_option");
  public get adHocFilteringOption() {
    return this._adHocFilteringOption;
  }
  public putAdHocFilteringOption(value: QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption) {
    this._adHocFilteringOption.internalValue = value;
  }
  public resetAdHocFilteringOption() {
    this._adHocFilteringOption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adHocFilteringOptionInput() {
    return this._adHocFilteringOption.internalValue;
  }

  // data_point_drill_up_down_option - computed: false, optional: true, required: false
  private _dataPointDrillUpDownOption = new QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference(this, "data_point_drill_up_down_option");
  public get dataPointDrillUpDownOption() {
    return this._dataPointDrillUpDownOption;
  }
  public putDataPointDrillUpDownOption(value: QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption) {
    this._dataPointDrillUpDownOption.internalValue = value;
  }
  public resetDataPointDrillUpDownOption() {
    this._dataPointDrillUpDownOption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataPointDrillUpDownOptionInput() {
    return this._dataPointDrillUpDownOption.internalValue;
  }

  // data_point_menu_label_option - computed: false, optional: true, required: false
  private _dataPointMenuLabelOption = new QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference(this, "data_point_menu_label_option");
  public get dataPointMenuLabelOption() {
    return this._dataPointMenuLabelOption;
  }
  public putDataPointMenuLabelOption(value: QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption) {
    this._dataPointMenuLabelOption.internalValue = value;
  }
  public resetDataPointMenuLabelOption() {
    this._dataPointMenuLabelOption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataPointMenuLabelOptionInput() {
    return this._dataPointMenuLabelOption.internalValue;
  }

  // data_point_tooltip_option - computed: false, optional: true, required: false
  private _dataPointTooltipOption = new QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference(this, "data_point_tooltip_option");
  public get dataPointTooltipOption() {
    return this._dataPointTooltipOption;
  }
  public putDataPointTooltipOption(value: QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption) {
    this._dataPointTooltipOption.internalValue = value;
  }
  public resetDataPointTooltipOption() {
    this._dataPointTooltipOption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataPointTooltipOptionInput() {
    return this._dataPointTooltipOption.internalValue;
  }

  // export_to_csv_option - computed: false, optional: true, required: false
  private _exportToCsvOption = new QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference(this, "export_to_csv_option");
  public get exportToCsvOption() {
    return this._exportToCsvOption;
  }
  public putExportToCsvOption(value: QuicksightDashboardDashboardPublishOptionsExportToCsvOption) {
    this._exportToCsvOption.internalValue = value;
  }
  public resetExportToCsvOption() {
    this._exportToCsvOption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportToCsvOptionInput() {
    return this._exportToCsvOption.internalValue;
  }

  // export_with_hidden_fields_option - computed: false, optional: true, required: false
  private _exportWithHiddenFieldsOption = new QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference(this, "export_with_hidden_fields_option");
  public get exportWithHiddenFieldsOption() {
    return this._exportWithHiddenFieldsOption;
  }
  public putExportWithHiddenFieldsOption(value: QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption) {
    this._exportWithHiddenFieldsOption.internalValue = value;
  }
  public resetExportWithHiddenFieldsOption() {
    this._exportWithHiddenFieldsOption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportWithHiddenFieldsOptionInput() {
    return this._exportWithHiddenFieldsOption.internalValue;
  }

  // sheet_controls_option - computed: false, optional: true, required: false
  private _sheetControlsOption = new QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference(this, "sheet_controls_option");
  public get sheetControlsOption() {
    return this._sheetControlsOption;
  }
  public putSheetControlsOption(value: QuicksightDashboardDashboardPublishOptionsSheetControlsOption) {
    this._sheetControlsOption.internalValue = value;
  }
  public resetSheetControlsOption() {
    this._sheetControlsOption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sheetControlsOptionInput() {
    return this._sheetControlsOption.internalValue;
  }

  // sheet_layout_element_maximization_option - computed: false, optional: true, required: false
  private _sheetLayoutElementMaximizationOption = new QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference(this, "sheet_layout_element_maximization_option");
  public get sheetLayoutElementMaximizationOption() {
    return this._sheetLayoutElementMaximizationOption;
  }
  public putSheetLayoutElementMaximizationOption(value: QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption) {
    this._sheetLayoutElementMaximizationOption.internalValue = value;
  }
  public resetSheetLayoutElementMaximizationOption() {
    this._sheetLayoutElementMaximizationOption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sheetLayoutElementMaximizationOptionInput() {
    return this._sheetLayoutElementMaximizationOption.internalValue;
  }

  // visual_axis_sort_option - computed: false, optional: true, required: false
  private _visualAxisSortOption = new QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference(this, "visual_axis_sort_option");
  public get visualAxisSortOption() {
    return this._visualAxisSortOption;
  }
  public putVisualAxisSortOption(value: QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption) {
    this._visualAxisSortOption.internalValue = value;
  }
  public resetVisualAxisSortOption() {
    this._visualAxisSortOption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visualAxisSortOptionInput() {
    return this._visualAxisSortOption.internalValue;
  }

  // visual_menu_option - computed: false, optional: true, required: false
  private _visualMenuOption = new QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference(this, "visual_menu_option");
  public get visualMenuOption() {
    return this._visualMenuOption;
  }
  public putVisualMenuOption(value: QuicksightDashboardDashboardPublishOptionsVisualMenuOption) {
    this._visualMenuOption.internalValue = value;
  }
  public resetVisualMenuOption() {
    this._visualMenuOption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visualMenuOptionInput() {
    return this._visualMenuOption.internalValue;
  }
}
export interface QuicksightDashboardParametersDateTimeParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_dashboard#name QuicksightDashboard#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_dashboard#values QuicksightDashboard#values}
  */
  readonly values: string[];
}

export function quicksightDashboardParametersDateTimeParametersToTerraform(struct?: QuicksightDashboardParametersDateTimeParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}

export class QuicksightDashboardParametersDateTimeParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightDashboardParametersDateTimeParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDashboardParametersDateTimeParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._values = value.values;
    }
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class QuicksightDashboardParametersDateTimeParametersList extends cdktf.ComplexList {
  public internalValue? : QuicksightDashboardParametersDateTimeParameters[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightDashboardParametersDateTimeParametersOutputReference {
    return new QuicksightDashboardParametersDateTimeParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightDashboardParametersDecimalParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_dashboard#name QuicksightDashboard#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_dashboard#values QuicksightDashboard#values}
  */
  readonly values: number[];
}

export function quicksightDashboardParametersDecimalParametersToTerraform(struct?: QuicksightDashboardParametersDecimalParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.values),
  }
}

export class QuicksightDashboardParametersDecimalParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightDashboardParametersDecimalParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDashboardParametersDecimalParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._values = value.values;
    }
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

  // values - computed: false, optional: false, required: true
  private _values?: number[]; 
  public get values() {
    return this.getNumberListAttribute('values');
  }
  public set values(value: number[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class QuicksightDashboardParametersDecimalParametersList extends cdktf.ComplexList {
  public internalValue? : QuicksightDashboardParametersDecimalParameters[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightDashboardParametersDecimalParametersOutputReference {
    return new QuicksightDashboardParametersDecimalParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightDashboardParametersIntegerParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_dashboard#name QuicksightDashboard#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_dashboard#values QuicksightDashboard#values}
  */
  readonly values: number[];
}

export function quicksightDashboardParametersIntegerParametersToTerraform(struct?: QuicksightDashboardParametersIntegerParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.values),
  }
}

export class QuicksightDashboardParametersIntegerParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightDashboardParametersIntegerParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDashboardParametersIntegerParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._values = value.values;
    }
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

  // values - computed: false, optional: false, required: true
  private _values?: number[]; 
  public get values() {
    return this.getNumberListAttribute('values');
  }
  public set values(value: number[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class QuicksightDashboardParametersIntegerParametersList extends cdktf.ComplexList {
  public internalValue? : QuicksightDashboardParametersIntegerParameters[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightDashboardParametersIntegerParametersOutputReference {
    return new QuicksightDashboardParametersIntegerParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightDashboardParametersStringParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_dashboard#name QuicksightDashboard#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_dashboard#values QuicksightDashboard#values}
  */
  readonly values: string[];
}

export function quicksightDashboardParametersStringParametersToTerraform(struct?: QuicksightDashboardParametersStringParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}

export class QuicksightDashboardParametersStringParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightDashboardParametersStringParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDashboardParametersStringParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._values = value.values;
    }
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class QuicksightDashboardParametersStringParametersList extends cdktf.ComplexList {
  public internalValue? : QuicksightDashboardParametersStringParameters[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightDashboardParametersStringParametersOutputReference {
    return new QuicksightDashboardParametersStringParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightDashboardParameters {
  /**
  * date_time_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_dashboard#date_time_parameters QuicksightDashboard#date_time_parameters}
  */
  readonly dateTimeParameters?: QuicksightDashboardParametersDateTimeParameters[] | cdktf.IResolvable;
  /**
  * decimal_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_dashboard#decimal_parameters QuicksightDashboard#decimal_parameters}
  */
  readonly decimalParameters?: QuicksightDashboardParametersDecimalParameters[] | cdktf.IResolvable;
  /**
  * integer_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_dashboard#integer_parameters QuicksightDashboard#integer_parameters}
  */
  readonly integerParameters?: QuicksightDashboardParametersIntegerParameters[] | cdktf.IResolvable;
  /**
  * string_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_dashboard#string_parameters QuicksightDashboard#string_parameters}
  */
  readonly stringParameters?: QuicksightDashboardParametersStringParameters[] | cdktf.IResolvable;
}

export function quicksightDashboardParametersToTerraform(struct?: QuicksightDashboardParametersOutputReference | QuicksightDashboardParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    date_time_parameters: cdktf.listMapper(quicksightDashboardParametersDateTimeParametersToTerraform, true)(struct!.dateTimeParameters),
    decimal_parameters: cdktf.listMapper(quicksightDashboardParametersDecimalParametersToTerraform, true)(struct!.decimalParameters),
    integer_parameters: cdktf.listMapper(quicksightDashboardParametersIntegerParametersToTerraform, true)(struct!.integerParameters),
    string_parameters: cdktf.listMapper(quicksightDashboardParametersStringParametersToTerraform, true)(struct!.stringParameters),
  }
}

export class QuicksightDashboardParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightDashboardParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dateTimeParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateTimeParameters = this._dateTimeParameters?.internalValue;
    }
    if (this._decimalParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.decimalParameters = this._decimalParameters?.internalValue;
    }
    if (this._integerParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerParameters = this._integerParameters?.internalValue;
    }
    if (this._stringParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringParameters = this._stringParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDashboardParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dateTimeParameters.internalValue = undefined;
      this._decimalParameters.internalValue = undefined;
      this._integerParameters.internalValue = undefined;
      this._stringParameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dateTimeParameters.internalValue = value.dateTimeParameters;
      this._decimalParameters.internalValue = value.decimalParameters;
      this._integerParameters.internalValue = value.integerParameters;
      this._stringParameters.internalValue = value.stringParameters;
    }
  }

  // date_time_parameters - computed: false, optional: true, required: false
  private _dateTimeParameters = new QuicksightDashboardParametersDateTimeParametersList(this, "date_time_parameters", false);
  public get dateTimeParameters() {
    return this._dateTimeParameters;
  }
  public putDateTimeParameters(value: QuicksightDashboardParametersDateTimeParameters[] | cdktf.IResolvable) {
    this._dateTimeParameters.internalValue = value;
  }
  public resetDateTimeParameters() {
    this._dateTimeParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateTimeParametersInput() {
    return this._dateTimeParameters.internalValue;
  }

  // decimal_parameters - computed: false, optional: true, required: false
  private _decimalParameters = new QuicksightDashboardParametersDecimalParametersList(this, "decimal_parameters", false);
  public get decimalParameters() {
    return this._decimalParameters;
  }
  public putDecimalParameters(value: QuicksightDashboardParametersDecimalParameters[] | cdktf.IResolvable) {
    this._decimalParameters.internalValue = value;
  }
  public resetDecimalParameters() {
    this._decimalParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decimalParametersInput() {
    return this._decimalParameters.internalValue;
  }

  // integer_parameters - computed: false, optional: true, required: false
  private _integerParameters = new QuicksightDashboardParametersIntegerParametersList(this, "integer_parameters", false);
  public get integerParameters() {
    return this._integerParameters;
  }
  public putIntegerParameters(value: QuicksightDashboardParametersIntegerParameters[] | cdktf.IResolvable) {
    this._integerParameters.internalValue = value;
  }
  public resetIntegerParameters() {
    this._integerParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerParametersInput() {
    return this._integerParameters.internalValue;
  }

  // string_parameters - computed: false, optional: true, required: false
  private _stringParameters = new QuicksightDashboardParametersStringParametersList(this, "string_parameters", false);
  public get stringParameters() {
    return this._stringParameters;
  }
  public putStringParameters(value: QuicksightDashboardParametersStringParameters[] | cdktf.IResolvable) {
    this._stringParameters.internalValue = value;
  }
  public resetStringParameters() {
    this._stringParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringParametersInput() {
    return this._stringParameters.internalValue;
  }
}
export interface QuicksightDashboardPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_dashboard#actions QuicksightDashboard#actions}
  */
  readonly actions: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_dashboard#principal QuicksightDashboard#principal}
  */
  readonly principal: string;
}

export function quicksightDashboardPermissionsToTerraform(struct?: QuicksightDashboardPermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.actions),
    principal: cdktf.stringToTerraform(struct!.principal),
  }
}

export class QuicksightDashboardPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightDashboardPermissions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: QuicksightDashboardPermissions | cdktf.IResolvable | undefined) {
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

export class QuicksightDashboardPermissionsList extends cdktf.ComplexList {
  public internalValue? : QuicksightDashboardPermissions[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightDashboardPermissionsOutputReference {
    return new QuicksightDashboardPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightDashboardSourceEntitySourceTemplateDataSetReferences {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_dashboard#data_set_arn QuicksightDashboard#data_set_arn}
  */
  readonly dataSetArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_dashboard#data_set_placeholder QuicksightDashboard#data_set_placeholder}
  */
  readonly dataSetPlaceholder: string;
}

export function quicksightDashboardSourceEntitySourceTemplateDataSetReferencesToTerraform(struct?: QuicksightDashboardSourceEntitySourceTemplateDataSetReferences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_set_arn: cdktf.stringToTerraform(struct!.dataSetArn),
    data_set_placeholder: cdktf.stringToTerraform(struct!.dataSetPlaceholder),
  }
}

export class QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightDashboardSourceEntitySourceTemplateDataSetReferences | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSetArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSetArn = this._dataSetArn;
    }
    if (this._dataSetPlaceholder !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSetPlaceholder = this._dataSetPlaceholder;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDashboardSourceEntitySourceTemplateDataSetReferences | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataSetArn = undefined;
      this._dataSetPlaceholder = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataSetArn = value.dataSetArn;
      this._dataSetPlaceholder = value.dataSetPlaceholder;
    }
  }

  // data_set_arn - computed: false, optional: false, required: true
  private _dataSetArn?: string; 
  public get dataSetArn() {
    return this.getStringAttribute('data_set_arn');
  }
  public set dataSetArn(value: string) {
    this._dataSetArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSetArnInput() {
    return this._dataSetArn;
  }

  // data_set_placeholder - computed: false, optional: false, required: true
  private _dataSetPlaceholder?: string; 
  public get dataSetPlaceholder() {
    return this.getStringAttribute('data_set_placeholder');
  }
  public set dataSetPlaceholder(value: string) {
    this._dataSetPlaceholder = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSetPlaceholderInput() {
    return this._dataSetPlaceholder;
  }
}

export class QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList extends cdktf.ComplexList {
  public internalValue? : QuicksightDashboardSourceEntitySourceTemplateDataSetReferences[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference {
    return new QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightDashboardSourceEntitySourceTemplate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_dashboard#arn QuicksightDashboard#arn}
  */
  readonly arn: string;
  /**
  * data_set_references block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_dashboard#data_set_references QuicksightDashboard#data_set_references}
  */
  readonly dataSetReferences: QuicksightDashboardSourceEntitySourceTemplateDataSetReferences[] | cdktf.IResolvable;
}

export function quicksightDashboardSourceEntitySourceTemplateToTerraform(struct?: QuicksightDashboardSourceEntitySourceTemplateOutputReference | QuicksightDashboardSourceEntitySourceTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    data_set_references: cdktf.listMapper(quicksightDashboardSourceEntitySourceTemplateDataSetReferencesToTerraform, true)(struct!.dataSetReferences),
  }
}

export class QuicksightDashboardSourceEntitySourceTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightDashboardSourceEntitySourceTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._dataSetReferences?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSetReferences = this._dataSetReferences?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDashboardSourceEntitySourceTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._arn = undefined;
      this._dataSetReferences.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._arn = value.arn;
      this._dataSetReferences.internalValue = value.dataSetReferences;
    }
  }

  // arn - computed: false, optional: false, required: true
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // data_set_references - computed: false, optional: false, required: true
  private _dataSetReferences = new QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList(this, "data_set_references", false);
  public get dataSetReferences() {
    return this._dataSetReferences;
  }
  public putDataSetReferences(value: QuicksightDashboardSourceEntitySourceTemplateDataSetReferences[] | cdktf.IResolvable) {
    this._dataSetReferences.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSetReferencesInput() {
    return this._dataSetReferences.internalValue;
  }
}
export interface QuicksightDashboardSourceEntity {
  /**
  * source_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_dashboard#source_template QuicksightDashboard#source_template}
  */
  readonly sourceTemplate?: QuicksightDashboardSourceEntitySourceTemplate;
}

export function quicksightDashboardSourceEntityToTerraform(struct?: QuicksightDashboardSourceEntityOutputReference | QuicksightDashboardSourceEntity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_template: quicksightDashboardSourceEntitySourceTemplateToTerraform(struct!.sourceTemplate),
  }
}

export class QuicksightDashboardSourceEntityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuicksightDashboardSourceEntity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceTemplate = this._sourceTemplate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDashboardSourceEntity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sourceTemplate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sourceTemplate.internalValue = value.sourceTemplate;
    }
  }

  // source_template - computed: false, optional: true, required: false
  private _sourceTemplate = new QuicksightDashboardSourceEntitySourceTemplateOutputReference(this, "source_template");
  public get sourceTemplate() {
    return this._sourceTemplate;
  }
  public putSourceTemplate(value: QuicksightDashboardSourceEntitySourceTemplate) {
    this._sourceTemplate.internalValue = value;
  }
  public resetSourceTemplate() {
    this._sourceTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTemplateInput() {
    return this._sourceTemplate.internalValue;
  }
}
export interface QuicksightDashboardTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_dashboard#create QuicksightDashboard#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_dashboard#delete QuicksightDashboard#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_dashboard#update QuicksightDashboard#update}
  */
  readonly update?: string;
}

export function quicksightDashboardTimeoutsToTerraform(struct?: QuicksightDashboardTimeouts | cdktf.IResolvable): any {
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

export class QuicksightDashboardTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDashboardTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: QuicksightDashboardTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_dashboard aws_quicksight_dashboard}
*/
export class QuicksightDashboard extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_quicksight_dashboard";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_dashboard aws_quicksight_dashboard} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QuicksightDashboardConfig
  */
  public constructor(scope: Construct, id: string, config: QuicksightDashboardConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_quicksight_dashboard',
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
    this._dashboardId = config.dashboardId;
    this._id = config.id;
    this._name = config.name;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._themeArn = config.themeArn;
    this._versionDescription = config.versionDescription;
    this._dashboardPublishOptions.internalValue = config.dashboardPublishOptions;
    this._definition = config.definition;
    this._parameters.internalValue = config.parameters;
    this._permissions.internalValue = config.permissions;
    this._sourceEntity.internalValue = config.sourceEntity;
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

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // dashboard_id - computed: false, optional: false, required: true
  private _dashboardId?: string; 
  public get dashboardId() {
    return this.getStringAttribute('dashboard_id');
  }
  public set dashboardId(value: string) {
    this._dashboardId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardIdInput() {
    return this._dashboardId;
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

  // last_published_time - computed: true, optional: false, required: false
  public get lastPublishedTime() {
    return this.getStringAttribute('last_published_time');
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

  // source_entity_arn - computed: true, optional: false, required: false
  public get sourceEntityArn() {
    return this.getStringAttribute('source_entity_arn');
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

  // theme_arn - computed: false, optional: true, required: false
  private _themeArn?: string; 
  public get themeArn() {
    return this.getStringAttribute('theme_arn');
  }
  public set themeArn(value: string) {
    this._themeArn = value;
  }
  public resetThemeArn() {
    this._themeArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get themeArnInput() {
    return this._themeArn;
  }

  // version_description - computed: false, optional: false, required: true
  private _versionDescription?: string; 
  public get versionDescription() {
    return this.getStringAttribute('version_description');
  }
  public set versionDescription(value: string) {
    this._versionDescription = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionDescriptionInput() {
    return this._versionDescription;
  }

  // version_number - computed: true, optional: false, required: false
  public get versionNumber() {
    return this.getNumberAttribute('version_number');
  }

  // dashboard_publish_options - computed: false, optional: true, required: false
  private _dashboardPublishOptions = new QuicksightDashboardDashboardPublishOptionsOutputReference(this, "dashboard_publish_options");
  public get dashboardPublishOptions() {
    return this._dashboardPublishOptions;
  }
  public putDashboardPublishOptions(value: QuicksightDashboardDashboardPublishOptions) {
    this._dashboardPublishOptions.internalValue = value;
  }
  public resetDashboardPublishOptions() {
    this._dashboardPublishOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardPublishOptionsInput() {
    return this._dashboardPublishOptions.internalValue;
  }

  // definition - computed: false, optional: true, required: false
  private _definition?: any; 
  public get definition() {
    return this.interpolationForAttribute('definition');
  }
  public set definition(value: any) {
    this._definition = value;
  }
  public resetDefinition() {
    this._definition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new QuicksightDashboardParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: QuicksightDashboardParameters) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions = new QuicksightDashboardPermissionsList(this, "permissions", true);
  public get permissions() {
    return this._permissions;
  }
  public putPermissions(value: QuicksightDashboardPermissions[] | cdktf.IResolvable) {
    this._permissions.internalValue = value;
  }
  public resetPermissions() {
    this._permissions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions.internalValue;
  }

  // source_entity - computed: false, optional: true, required: false
  private _sourceEntity = new QuicksightDashboardSourceEntityOutputReference(this, "source_entity");
  public get sourceEntity() {
    return this._sourceEntity;
  }
  public putSourceEntity(value: QuicksightDashboardSourceEntity) {
    this._sourceEntity.internalValue = value;
  }
  public resetSourceEntity() {
    this._sourceEntity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEntityInput() {
    return this._sourceEntity.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new QuicksightDashboardTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: QuicksightDashboardTimeouts) {
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
      dashboard_id: cdktf.stringToTerraform(this._dashboardId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      theme_arn: cdktf.stringToTerraform(this._themeArn),
      version_description: cdktf.stringToTerraform(this._versionDescription),
      dashboard_publish_options: quicksightDashboardDashboardPublishOptionsToTerraform(this._dashboardPublishOptions.internalValue),
      definition: cdktf.anyToTerraform(this._definition),
      parameters: quicksightDashboardParametersToTerraform(this._parameters.internalValue),
      permissions: cdktf.listMapper(quicksightDashboardPermissionsToTerraform, true)(this._permissions.internalValue),
      source_entity: quicksightDashboardSourceEntityToTerraform(this._sourceEntity.internalValue),
      timeouts: quicksightDashboardTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
