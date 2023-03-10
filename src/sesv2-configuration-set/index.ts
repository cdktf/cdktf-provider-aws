// https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Sesv2ConfigurationSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set#configuration_set_name Sesv2ConfigurationSet#configuration_set_name}
  */
  readonly configurationSetName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set#id Sesv2ConfigurationSet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set#tags Sesv2ConfigurationSet#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set#tags_all Sesv2ConfigurationSet#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * delivery_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set#delivery_options Sesv2ConfigurationSet#delivery_options}
  */
  readonly deliveryOptions?: Sesv2ConfigurationSetDeliveryOptions;
  /**
  * reputation_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set#reputation_options Sesv2ConfigurationSet#reputation_options}
  */
  readonly reputationOptions?: Sesv2ConfigurationSetReputationOptions;
  /**
  * sending_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set#sending_options Sesv2ConfigurationSet#sending_options}
  */
  readonly sendingOptions?: Sesv2ConfigurationSetSendingOptions;
  /**
  * suppression_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set#suppression_options Sesv2ConfigurationSet#suppression_options}
  */
  readonly suppressionOptions?: Sesv2ConfigurationSetSuppressionOptions;
  /**
  * tracking_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set#tracking_options Sesv2ConfigurationSet#tracking_options}
  */
  readonly trackingOptions?: Sesv2ConfigurationSetTrackingOptions;
  /**
  * vdm_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set#vdm_options Sesv2ConfigurationSet#vdm_options}
  */
  readonly vdmOptions?: Sesv2ConfigurationSetVdmOptions;
}
export interface Sesv2ConfigurationSetDeliveryOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set#sending_pool_name Sesv2ConfigurationSet#sending_pool_name}
  */
  readonly sendingPoolName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set#tls_policy Sesv2ConfigurationSet#tls_policy}
  */
  readonly tlsPolicy?: string;
}

export function sesv2ConfigurationSetDeliveryOptionsToTerraform(struct?: Sesv2ConfigurationSetDeliveryOptionsOutputReference | Sesv2ConfigurationSetDeliveryOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sending_pool_name: cdktf.stringToTerraform(struct!.sendingPoolName),
    tls_policy: cdktf.stringToTerraform(struct!.tlsPolicy),
  }
}

export class Sesv2ConfigurationSetDeliveryOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Sesv2ConfigurationSetDeliveryOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sendingPoolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendingPoolName = this._sendingPoolName;
    }
    if (this._tlsPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsPolicy = this._tlsPolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Sesv2ConfigurationSetDeliveryOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sendingPoolName = undefined;
      this._tlsPolicy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sendingPoolName = value.sendingPoolName;
      this._tlsPolicy = value.tlsPolicy;
    }
  }

  // sending_pool_name - computed: false, optional: true, required: false
  private _sendingPoolName?: string; 
  public get sendingPoolName() {
    return this.getStringAttribute('sending_pool_name');
  }
  public set sendingPoolName(value: string) {
    this._sendingPoolName = value;
  }
  public resetSendingPoolName() {
    this._sendingPoolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendingPoolNameInput() {
    return this._sendingPoolName;
  }

  // tls_policy - computed: false, optional: true, required: false
  private _tlsPolicy?: string; 
  public get tlsPolicy() {
    return this.getStringAttribute('tls_policy');
  }
  public set tlsPolicy(value: string) {
    this._tlsPolicy = value;
  }
  public resetTlsPolicy() {
    this._tlsPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsPolicyInput() {
    return this._tlsPolicy;
  }
}
export interface Sesv2ConfigurationSetReputationOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set#reputation_metrics_enabled Sesv2ConfigurationSet#reputation_metrics_enabled}
  */
  readonly reputationMetricsEnabled?: boolean | cdktf.IResolvable;
}

export function sesv2ConfigurationSetReputationOptionsToTerraform(struct?: Sesv2ConfigurationSetReputationOptionsOutputReference | Sesv2ConfigurationSetReputationOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reputation_metrics_enabled: cdktf.booleanToTerraform(struct!.reputationMetricsEnabled),
  }
}

export class Sesv2ConfigurationSetReputationOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Sesv2ConfigurationSetReputationOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reputationMetricsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.reputationMetricsEnabled = this._reputationMetricsEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Sesv2ConfigurationSetReputationOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._reputationMetricsEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._reputationMetricsEnabled = value.reputationMetricsEnabled;
    }
  }

  // last_fresh_start - computed: true, optional: false, required: false
  public get lastFreshStart() {
    return this.getStringAttribute('last_fresh_start');
  }

  // reputation_metrics_enabled - computed: true, optional: true, required: false
  private _reputationMetricsEnabled?: boolean | cdktf.IResolvable; 
  public get reputationMetricsEnabled() {
    return this.getBooleanAttribute('reputation_metrics_enabled');
  }
  public set reputationMetricsEnabled(value: boolean | cdktf.IResolvable) {
    this._reputationMetricsEnabled = value;
  }
  public resetReputationMetricsEnabled() {
    this._reputationMetricsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reputationMetricsEnabledInput() {
    return this._reputationMetricsEnabled;
  }
}
export interface Sesv2ConfigurationSetSendingOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set#sending_enabled Sesv2ConfigurationSet#sending_enabled}
  */
  readonly sendingEnabled?: boolean | cdktf.IResolvable;
}

export function sesv2ConfigurationSetSendingOptionsToTerraform(struct?: Sesv2ConfigurationSetSendingOptionsOutputReference | Sesv2ConfigurationSetSendingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sending_enabled: cdktf.booleanToTerraform(struct!.sendingEnabled),
  }
}

export class Sesv2ConfigurationSetSendingOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Sesv2ConfigurationSetSendingOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sendingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendingEnabled = this._sendingEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Sesv2ConfigurationSetSendingOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sendingEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sendingEnabled = value.sendingEnabled;
    }
  }

  // sending_enabled - computed: true, optional: true, required: false
  private _sendingEnabled?: boolean | cdktf.IResolvable; 
  public get sendingEnabled() {
    return this.getBooleanAttribute('sending_enabled');
  }
  public set sendingEnabled(value: boolean | cdktf.IResolvable) {
    this._sendingEnabled = value;
  }
  public resetSendingEnabled() {
    this._sendingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendingEnabledInput() {
    return this._sendingEnabled;
  }
}
export interface Sesv2ConfigurationSetSuppressionOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set#suppressed_reasons Sesv2ConfigurationSet#suppressed_reasons}
  */
  readonly suppressedReasons?: string[];
}

export function sesv2ConfigurationSetSuppressionOptionsToTerraform(struct?: Sesv2ConfigurationSetSuppressionOptionsOutputReference | Sesv2ConfigurationSetSuppressionOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    suppressed_reasons: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.suppressedReasons),
  }
}

export class Sesv2ConfigurationSetSuppressionOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Sesv2ConfigurationSetSuppressionOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._suppressedReasons !== undefined) {
      hasAnyValues = true;
      internalValueResult.suppressedReasons = this._suppressedReasons;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Sesv2ConfigurationSetSuppressionOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._suppressedReasons = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._suppressedReasons = value.suppressedReasons;
    }
  }

  // suppressed_reasons - computed: false, optional: true, required: false
  private _suppressedReasons?: string[]; 
  public get suppressedReasons() {
    return this.getListAttribute('suppressed_reasons');
  }
  public set suppressedReasons(value: string[]) {
    this._suppressedReasons = value;
  }
  public resetSuppressedReasons() {
    this._suppressedReasons = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressedReasonsInput() {
    return this._suppressedReasons;
  }
}
export interface Sesv2ConfigurationSetTrackingOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set#custom_redirect_domain Sesv2ConfigurationSet#custom_redirect_domain}
  */
  readonly customRedirectDomain: string;
}

export function sesv2ConfigurationSetTrackingOptionsToTerraform(struct?: Sesv2ConfigurationSetTrackingOptionsOutputReference | Sesv2ConfigurationSetTrackingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_redirect_domain: cdktf.stringToTerraform(struct!.customRedirectDomain),
  }
}

export class Sesv2ConfigurationSetTrackingOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Sesv2ConfigurationSetTrackingOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customRedirectDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.customRedirectDomain = this._customRedirectDomain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Sesv2ConfigurationSetTrackingOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customRedirectDomain = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customRedirectDomain = value.customRedirectDomain;
    }
  }

  // custom_redirect_domain - computed: false, optional: false, required: true
  private _customRedirectDomain?: string; 
  public get customRedirectDomain() {
    return this.getStringAttribute('custom_redirect_domain');
  }
  public set customRedirectDomain(value: string) {
    this._customRedirectDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customRedirectDomainInput() {
    return this._customRedirectDomain;
  }
}
export interface Sesv2ConfigurationSetVdmOptionsDashboardOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set#engagement_metrics Sesv2ConfigurationSet#engagement_metrics}
  */
  readonly engagementMetrics?: string;
}

export function sesv2ConfigurationSetVdmOptionsDashboardOptionsToTerraform(struct?: Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference | Sesv2ConfigurationSetVdmOptionsDashboardOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    engagement_metrics: cdktf.stringToTerraform(struct!.engagementMetrics),
  }
}

export class Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Sesv2ConfigurationSetVdmOptionsDashboardOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._engagementMetrics !== undefined) {
      hasAnyValues = true;
      internalValueResult.engagementMetrics = this._engagementMetrics;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Sesv2ConfigurationSetVdmOptionsDashboardOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._engagementMetrics = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._engagementMetrics = value.engagementMetrics;
    }
  }

  // engagement_metrics - computed: false, optional: true, required: false
  private _engagementMetrics?: string; 
  public get engagementMetrics() {
    return this.getStringAttribute('engagement_metrics');
  }
  public set engagementMetrics(value: string) {
    this._engagementMetrics = value;
  }
  public resetEngagementMetrics() {
    this._engagementMetrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engagementMetricsInput() {
    return this._engagementMetrics;
  }
}
export interface Sesv2ConfigurationSetVdmOptionsGuardianOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set#optimized_shared_delivery Sesv2ConfigurationSet#optimized_shared_delivery}
  */
  readonly optimizedSharedDelivery?: string;
}

export function sesv2ConfigurationSetVdmOptionsGuardianOptionsToTerraform(struct?: Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference | Sesv2ConfigurationSetVdmOptionsGuardianOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    optimized_shared_delivery: cdktf.stringToTerraform(struct!.optimizedSharedDelivery),
  }
}

export class Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Sesv2ConfigurationSetVdmOptionsGuardianOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optimizedSharedDelivery !== undefined) {
      hasAnyValues = true;
      internalValueResult.optimizedSharedDelivery = this._optimizedSharedDelivery;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Sesv2ConfigurationSetVdmOptionsGuardianOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._optimizedSharedDelivery = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._optimizedSharedDelivery = value.optimizedSharedDelivery;
    }
  }

  // optimized_shared_delivery - computed: false, optional: true, required: false
  private _optimizedSharedDelivery?: string; 
  public get optimizedSharedDelivery() {
    return this.getStringAttribute('optimized_shared_delivery');
  }
  public set optimizedSharedDelivery(value: string) {
    this._optimizedSharedDelivery = value;
  }
  public resetOptimizedSharedDelivery() {
    this._optimizedSharedDelivery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optimizedSharedDeliveryInput() {
    return this._optimizedSharedDelivery;
  }
}
export interface Sesv2ConfigurationSetVdmOptions {
  /**
  * dashboard_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set#dashboard_options Sesv2ConfigurationSet#dashboard_options}
  */
  readonly dashboardOptions?: Sesv2ConfigurationSetVdmOptionsDashboardOptions;
  /**
  * guardian_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set#guardian_options Sesv2ConfigurationSet#guardian_options}
  */
  readonly guardianOptions?: Sesv2ConfigurationSetVdmOptionsGuardianOptions;
}

export function sesv2ConfigurationSetVdmOptionsToTerraform(struct?: Sesv2ConfigurationSetVdmOptionsOutputReference | Sesv2ConfigurationSetVdmOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dashboard_options: sesv2ConfigurationSetVdmOptionsDashboardOptionsToTerraform(struct!.dashboardOptions),
    guardian_options: sesv2ConfigurationSetVdmOptionsGuardianOptionsToTerraform(struct!.guardianOptions),
  }
}

export class Sesv2ConfigurationSetVdmOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Sesv2ConfigurationSetVdmOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dashboardOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dashboardOptions = this._dashboardOptions?.internalValue;
    }
    if (this._guardianOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.guardianOptions = this._guardianOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Sesv2ConfigurationSetVdmOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dashboardOptions.internalValue = undefined;
      this._guardianOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dashboardOptions.internalValue = value.dashboardOptions;
      this._guardianOptions.internalValue = value.guardianOptions;
    }
  }

  // dashboard_options - computed: false, optional: true, required: false
  private _dashboardOptions = new Sesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference(this, "dashboard_options");
  public get dashboardOptions() {
    return this._dashboardOptions;
  }
  public putDashboardOptions(value: Sesv2ConfigurationSetVdmOptionsDashboardOptions) {
    this._dashboardOptions.internalValue = value;
  }
  public resetDashboardOptions() {
    this._dashboardOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardOptionsInput() {
    return this._dashboardOptions.internalValue;
  }

  // guardian_options - computed: false, optional: true, required: false
  private _guardianOptions = new Sesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference(this, "guardian_options");
  public get guardianOptions() {
    return this._guardianOptions;
  }
  public putGuardianOptions(value: Sesv2ConfigurationSetVdmOptionsGuardianOptions) {
    this._guardianOptions.internalValue = value;
  }
  public resetGuardianOptions() {
    this._guardianOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guardianOptionsInput() {
    return this._guardianOptions.internalValue;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set aws_sesv2_configuration_set}
*/
export class Sesv2ConfigurationSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sesv2_configuration_set";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set aws_sesv2_configuration_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Sesv2ConfigurationSetConfig
  */
  public constructor(scope: Construct, id: string, config: Sesv2ConfigurationSetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sesv2_configuration_set',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.58.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configurationSetName = config.configurationSetName;
    this._id = config.id;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._deliveryOptions.internalValue = config.deliveryOptions;
    this._reputationOptions.internalValue = config.reputationOptions;
    this._sendingOptions.internalValue = config.sendingOptions;
    this._suppressionOptions.internalValue = config.suppressionOptions;
    this._trackingOptions.internalValue = config.trackingOptions;
    this._vdmOptions.internalValue = config.vdmOptions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // configuration_set_name - computed: false, optional: false, required: true
  private _configurationSetName?: string; 
  public get configurationSetName() {
    return this.getStringAttribute('configuration_set_name');
  }
  public set configurationSetName(value: string) {
    this._configurationSetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationSetNameInput() {
    return this._configurationSetName;
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

  // delivery_options - computed: false, optional: true, required: false
  private _deliveryOptions = new Sesv2ConfigurationSetDeliveryOptionsOutputReference(this, "delivery_options");
  public get deliveryOptions() {
    return this._deliveryOptions;
  }
  public putDeliveryOptions(value: Sesv2ConfigurationSetDeliveryOptions) {
    this._deliveryOptions.internalValue = value;
  }
  public resetDeliveryOptions() {
    this._deliveryOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryOptionsInput() {
    return this._deliveryOptions.internalValue;
  }

  // reputation_options - computed: false, optional: true, required: false
  private _reputationOptions = new Sesv2ConfigurationSetReputationOptionsOutputReference(this, "reputation_options");
  public get reputationOptions() {
    return this._reputationOptions;
  }
  public putReputationOptions(value: Sesv2ConfigurationSetReputationOptions) {
    this._reputationOptions.internalValue = value;
  }
  public resetReputationOptions() {
    this._reputationOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reputationOptionsInput() {
    return this._reputationOptions.internalValue;
  }

  // sending_options - computed: false, optional: true, required: false
  private _sendingOptions = new Sesv2ConfigurationSetSendingOptionsOutputReference(this, "sending_options");
  public get sendingOptions() {
    return this._sendingOptions;
  }
  public putSendingOptions(value: Sesv2ConfigurationSetSendingOptions) {
    this._sendingOptions.internalValue = value;
  }
  public resetSendingOptions() {
    this._sendingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendingOptionsInput() {
    return this._sendingOptions.internalValue;
  }

  // suppression_options - computed: false, optional: true, required: false
  private _suppressionOptions = new Sesv2ConfigurationSetSuppressionOptionsOutputReference(this, "suppression_options");
  public get suppressionOptions() {
    return this._suppressionOptions;
  }
  public putSuppressionOptions(value: Sesv2ConfigurationSetSuppressionOptions) {
    this._suppressionOptions.internalValue = value;
  }
  public resetSuppressionOptions() {
    this._suppressionOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressionOptionsInput() {
    return this._suppressionOptions.internalValue;
  }

  // tracking_options - computed: false, optional: true, required: false
  private _trackingOptions = new Sesv2ConfigurationSetTrackingOptionsOutputReference(this, "tracking_options");
  public get trackingOptions() {
    return this._trackingOptions;
  }
  public putTrackingOptions(value: Sesv2ConfigurationSetTrackingOptions) {
    this._trackingOptions.internalValue = value;
  }
  public resetTrackingOptions() {
    this._trackingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackingOptionsInput() {
    return this._trackingOptions.internalValue;
  }

  // vdm_options - computed: false, optional: true, required: false
  private _vdmOptions = new Sesv2ConfigurationSetVdmOptionsOutputReference(this, "vdm_options");
  public get vdmOptions() {
    return this._vdmOptions;
  }
  public putVdmOptions(value: Sesv2ConfigurationSetVdmOptions) {
    this._vdmOptions.internalValue = value;
  }
  public resetVdmOptions() {
    this._vdmOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdmOptionsInput() {
    return this._vdmOptions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      configuration_set_name: cdktf.stringToTerraform(this._configurationSetName),
      id: cdktf.stringToTerraform(this._id),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      delivery_options: sesv2ConfigurationSetDeliveryOptionsToTerraform(this._deliveryOptions.internalValue),
      reputation_options: sesv2ConfigurationSetReputationOptionsToTerraform(this._reputationOptions.internalValue),
      sending_options: sesv2ConfigurationSetSendingOptionsToTerraform(this._sendingOptions.internalValue),
      suppression_options: sesv2ConfigurationSetSuppressionOptionsToTerraform(this._suppressionOptions.internalValue),
      tracking_options: sesv2ConfigurationSetTrackingOptionsToTerraform(this._trackingOptions.internalValue),
      vdm_options: sesv2ConfigurationSetVdmOptionsToTerraform(this._vdmOptions.internalValue),
    };
  }
}
