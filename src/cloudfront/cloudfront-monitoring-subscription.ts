// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS CloudFront
*/
export interface CloudfrontMonitoringSubscriptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_monitoring_subscription#distribution_id CloudfrontMonitoringSubscription#distribution_id}
  */
  readonly distributionId: string;
  /**
  * monitoring_subscription block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_monitoring_subscription#monitoring_subscription CloudfrontMonitoringSubscription#monitoring_subscription}
  */
  readonly monitoringSubscription: CloudfrontMonitoringSubscriptionMonitoringSubscription;
}
export interface CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_monitoring_subscription#realtime_metrics_subscription_status CloudfrontMonitoringSubscription#realtime_metrics_subscription_status}
  */
  readonly realtimeMetricsSubscriptionStatus: string;
}

export function cloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigToTerraform(struct?: CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference | CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    realtime_metrics_subscription_status: cdktf.stringToTerraform(struct!.realtimeMetricsSubscriptionStatus),
  }
}

export class CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._realtimeMetricsSubscriptionStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.realtimeMetricsSubscriptionStatus = this._realtimeMetricsSubscriptionStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._realtimeMetricsSubscriptionStatus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._realtimeMetricsSubscriptionStatus = value.realtimeMetricsSubscriptionStatus;
    }
  }

  // realtime_metrics_subscription_status - computed: false, optional: false, required: true
  private _realtimeMetricsSubscriptionStatus?: string; 
  public get realtimeMetricsSubscriptionStatus() {
    return this.getStringAttribute('realtime_metrics_subscription_status');
  }
  public set realtimeMetricsSubscriptionStatus(value: string) {
    this._realtimeMetricsSubscriptionStatus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get realtimeMetricsSubscriptionStatusInput() {
    return this._realtimeMetricsSubscriptionStatus;
  }
}
export interface CloudfrontMonitoringSubscriptionMonitoringSubscription {
  /**
  * realtime_metrics_subscription_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_monitoring_subscription#realtime_metrics_subscription_config CloudfrontMonitoringSubscription#realtime_metrics_subscription_config}
  */
  readonly realtimeMetricsSubscriptionConfig: CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig;
}

export function cloudfrontMonitoringSubscriptionMonitoringSubscriptionToTerraform(struct?: CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference | CloudfrontMonitoringSubscriptionMonitoringSubscription): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    realtime_metrics_subscription_config: cloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigToTerraform(struct!.realtimeMetricsSubscriptionConfig),
  }
}

export class CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): CloudfrontMonitoringSubscriptionMonitoringSubscription | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._realtimeMetricsSubscriptionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.realtimeMetricsSubscriptionConfig = this._realtimeMetricsSubscriptionConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontMonitoringSubscriptionMonitoringSubscription | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._realtimeMetricsSubscriptionConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._realtimeMetricsSubscriptionConfig.internalValue = value.realtimeMetricsSubscriptionConfig;
    }
  }

  // realtime_metrics_subscription_config - computed: false, optional: false, required: true
  private _realtimeMetricsSubscriptionConfig = new CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference(this, "realtime_metrics_subscription_config", true);
  public get realtimeMetricsSubscriptionConfig() {
    return this._realtimeMetricsSubscriptionConfig;
  }
  public putRealtimeMetricsSubscriptionConfig(value: CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig) {
    this._realtimeMetricsSubscriptionConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get realtimeMetricsSubscriptionConfigInput() {
    return this._realtimeMetricsSubscriptionConfig.internalValue;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_monitoring_subscription aws_cloudfront_monitoring_subscription}
*/
export class CloudfrontMonitoringSubscription extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_cloudfront_monitoring_subscription";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_monitoring_subscription aws_cloudfront_monitoring_subscription} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudfrontMonitoringSubscriptionConfig
  */
  public constructor(scope: Construct, id: string, config: CloudfrontMonitoringSubscriptionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudfront_monitoring_subscription',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._distributionId = config.distributionId;
    this._monitoringSubscription.internalValue = config.monitoringSubscription;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // distribution_id - computed: false, optional: false, required: true
  private _distributionId?: string; 
  public get distributionId() {
    return this.getStringAttribute('distribution_id');
  }
  public set distributionId(value: string) {
    this._distributionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get distributionIdInput() {
    return this._distributionId;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // monitoring_subscription - computed: false, optional: false, required: true
  private _monitoringSubscription = new CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference(this, "monitoring_subscription", true);
  public get monitoringSubscription() {
    return this._monitoringSubscription;
  }
  public putMonitoringSubscription(value: CloudfrontMonitoringSubscriptionMonitoringSubscription) {
    this._monitoringSubscription.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringSubscriptionInput() {
    return this._monitoringSubscription.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      distribution_id: cdktf.stringToTerraform(this._distributionId),
      monitoring_subscription: cloudfrontMonitoringSubscriptionMonitoringSubscriptionToTerraform(this._monitoringSubscription.internalValue),
    };
  }
}
