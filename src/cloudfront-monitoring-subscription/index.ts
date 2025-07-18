/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudfront_monitoring_subscription
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudfrontMonitoringSubscriptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudfront_monitoring_subscription#distribution_id CloudfrontMonitoringSubscription#distribution_id}
  */
  readonly distributionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudfront_monitoring_subscription#id CloudfrontMonitoringSubscription#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * monitoring_subscription block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudfront_monitoring_subscription#monitoring_subscription CloudfrontMonitoringSubscription#monitoring_subscription}
  */
  readonly monitoringSubscription: CloudfrontMonitoringSubscriptionMonitoringSubscription;
}
export interface CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudfront_monitoring_subscription#realtime_metrics_subscription_status CloudfrontMonitoringSubscription#realtime_metrics_subscription_status}
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


export function cloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigToHclTerraform(struct?: CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference | CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    realtime_metrics_subscription_status: {
      value: cdktf.stringToHclTerraform(struct!.realtimeMetricsSubscriptionStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudfront_monitoring_subscription#realtime_metrics_subscription_config CloudfrontMonitoringSubscription#realtime_metrics_subscription_config}
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


export function cloudfrontMonitoringSubscriptionMonitoringSubscriptionToHclTerraform(struct?: CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference | CloudfrontMonitoringSubscriptionMonitoringSubscription): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    realtime_metrics_subscription_config: {
      value: cloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigToHclTerraform(struct!.realtimeMetricsSubscriptionConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
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
  private _realtimeMetricsSubscriptionConfig = new CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference(this, "realtime_metrics_subscription_config");
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudfront_monitoring_subscription aws_cloudfront_monitoring_subscription}
*/
export class CloudfrontMonitoringSubscription extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cloudfront_monitoring_subscription";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudfrontMonitoringSubscription resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudfrontMonitoringSubscription to import
  * @param importFromId The id of the existing CloudfrontMonitoringSubscription that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudfront_monitoring_subscription#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudfrontMonitoringSubscription to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_cloudfront_monitoring_subscription", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudfront_monitoring_subscription aws_cloudfront_monitoring_subscription} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudfrontMonitoringSubscriptionConfig
  */
  public constructor(scope: Construct, id: string, config: CloudfrontMonitoringSubscriptionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudfront_monitoring_subscription',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.4.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._distributionId = config.distributionId;
    this._id = config.id;
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

  // monitoring_subscription - computed: false, optional: false, required: true
  private _monitoringSubscription = new CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference(this, "monitoring_subscription");
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
      id: cdktf.stringToTerraform(this._id),
      monitoring_subscription: cloudfrontMonitoringSubscriptionMonitoringSubscriptionToTerraform(this._monitoringSubscription.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      distribution_id: {
        value: cdktf.stringToHclTerraform(this._distributionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitoring_subscription: {
        value: cloudfrontMonitoringSubscriptionMonitoringSubscriptionToHclTerraform(this._monitoringSubscription.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudfrontMonitoringSubscriptionMonitoringSubscriptionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
