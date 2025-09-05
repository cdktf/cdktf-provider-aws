/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/internetmonitor_monitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InternetmonitorMonitorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/internetmonitor_monitor#id InternetmonitorMonitor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/internetmonitor_monitor#max_city_networks_to_monitor InternetmonitorMonitor#max_city_networks_to_monitor}
  */
  readonly maxCityNetworksToMonitor?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/internetmonitor_monitor#monitor_name InternetmonitorMonitor#monitor_name}
  */
  readonly monitorName: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/internetmonitor_monitor#region InternetmonitorMonitor#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/internetmonitor_monitor#resources InternetmonitorMonitor#resources}
  */
  readonly resources?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/internetmonitor_monitor#status InternetmonitorMonitor#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/internetmonitor_monitor#tags InternetmonitorMonitor#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/internetmonitor_monitor#tags_all InternetmonitorMonitor#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/internetmonitor_monitor#traffic_percentage_to_monitor InternetmonitorMonitor#traffic_percentage_to_monitor}
  */
  readonly trafficPercentageToMonitor?: number;
  /**
  * health_events_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/internetmonitor_monitor#health_events_config InternetmonitorMonitor#health_events_config}
  */
  readonly healthEventsConfig?: InternetmonitorMonitorHealthEventsConfig;
  /**
  * internet_measurements_log_delivery block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/internetmonitor_monitor#internet_measurements_log_delivery InternetmonitorMonitor#internet_measurements_log_delivery}
  */
  readonly internetMeasurementsLogDelivery?: InternetmonitorMonitorInternetMeasurementsLogDelivery;
}
export interface InternetmonitorMonitorHealthEventsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/internetmonitor_monitor#availability_score_threshold InternetmonitorMonitor#availability_score_threshold}
  */
  readonly availabilityScoreThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/internetmonitor_monitor#performance_score_threshold InternetmonitorMonitor#performance_score_threshold}
  */
  readonly performanceScoreThreshold?: number;
}

export function internetmonitorMonitorHealthEventsConfigToTerraform(struct?: InternetmonitorMonitorHealthEventsConfigOutputReference | InternetmonitorMonitorHealthEventsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_score_threshold: cdktf.numberToTerraform(struct!.availabilityScoreThreshold),
    performance_score_threshold: cdktf.numberToTerraform(struct!.performanceScoreThreshold),
  }
}


export function internetmonitorMonitorHealthEventsConfigToHclTerraform(struct?: InternetmonitorMonitorHealthEventsConfigOutputReference | InternetmonitorMonitorHealthEventsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability_score_threshold: {
      value: cdktf.numberToHclTerraform(struct!.availabilityScoreThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    performance_score_threshold: {
      value: cdktf.numberToHclTerraform(struct!.performanceScoreThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InternetmonitorMonitorHealthEventsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InternetmonitorMonitorHealthEventsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityScoreThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityScoreThreshold = this._availabilityScoreThreshold;
    }
    if (this._performanceScoreThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.performanceScoreThreshold = this._performanceScoreThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InternetmonitorMonitorHealthEventsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availabilityScoreThreshold = undefined;
      this._performanceScoreThreshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availabilityScoreThreshold = value.availabilityScoreThreshold;
      this._performanceScoreThreshold = value.performanceScoreThreshold;
    }
  }

  // availability_score_threshold - computed: false, optional: true, required: false
  private _availabilityScoreThreshold?: number; 
  public get availabilityScoreThreshold() {
    return this.getNumberAttribute('availability_score_threshold');
  }
  public set availabilityScoreThreshold(value: number) {
    this._availabilityScoreThreshold = value;
  }
  public resetAvailabilityScoreThreshold() {
    this._availabilityScoreThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityScoreThresholdInput() {
    return this._availabilityScoreThreshold;
  }

  // performance_score_threshold - computed: false, optional: true, required: false
  private _performanceScoreThreshold?: number; 
  public get performanceScoreThreshold() {
    return this.getNumberAttribute('performance_score_threshold');
  }
  public set performanceScoreThreshold(value: number) {
    this._performanceScoreThreshold = value;
  }
  public resetPerformanceScoreThreshold() {
    this._performanceScoreThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceScoreThresholdInput() {
    return this._performanceScoreThreshold;
  }
}
export interface InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/internetmonitor_monitor#bucket_name InternetmonitorMonitor#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/internetmonitor_monitor#bucket_prefix InternetmonitorMonitor#bucket_prefix}
  */
  readonly bucketPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/internetmonitor_monitor#log_delivery_status InternetmonitorMonitor#log_delivery_status}
  */
  readonly logDeliveryStatus?: string;
}

export function internetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigToTerraform(struct?: InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference | InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    bucket_prefix: cdktf.stringToTerraform(struct!.bucketPrefix),
    log_delivery_status: cdktf.stringToTerraform(struct!.logDeliveryStatus),
  }
}


export function internetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigToHclTerraform(struct?: InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference | InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_prefix: {
      value: cdktf.stringToHclTerraform(struct!.bucketPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_delivery_status: {
      value: cdktf.stringToHclTerraform(struct!.logDeliveryStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._bucketPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketPrefix = this._bucketPrefix;
    }
    if (this._logDeliveryStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.logDeliveryStatus = this._logDeliveryStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketName = undefined;
      this._bucketPrefix = undefined;
      this._logDeliveryStatus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketName = value.bucketName;
      this._bucketPrefix = value.bucketPrefix;
      this._logDeliveryStatus = value.logDeliveryStatus;
    }
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // bucket_prefix - computed: false, optional: true, required: false
  private _bucketPrefix?: string; 
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }
  public set bucketPrefix(value: string) {
    this._bucketPrefix = value;
  }
  public resetBucketPrefix() {
    this._bucketPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketPrefixInput() {
    return this._bucketPrefix;
  }

  // log_delivery_status - computed: false, optional: true, required: false
  private _logDeliveryStatus?: string; 
  public get logDeliveryStatus() {
    return this.getStringAttribute('log_delivery_status');
  }
  public set logDeliveryStatus(value: string) {
    this._logDeliveryStatus = value;
  }
  public resetLogDeliveryStatus() {
    this._logDeliveryStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logDeliveryStatusInput() {
    return this._logDeliveryStatus;
  }
}
export interface InternetmonitorMonitorInternetMeasurementsLogDelivery {
  /**
  * s3_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/internetmonitor_monitor#s3_config InternetmonitorMonitor#s3_config}
  */
  readonly s3Config?: InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config;
}

export function internetmonitorMonitorInternetMeasurementsLogDeliveryToTerraform(struct?: InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference | InternetmonitorMonitorInternetMeasurementsLogDelivery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3_config: internetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigToTerraform(struct!.s3Config),
  }
}


export function internetmonitorMonitorInternetMeasurementsLogDeliveryToHclTerraform(struct?: InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference | InternetmonitorMonitorInternetMeasurementsLogDelivery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    s3_config: {
      value: internetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigToHclTerraform(struct!.s3Config),
      isBlock: true,
      type: "list",
      storageClassType: "InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InternetmonitorMonitorInternetMeasurementsLogDelivery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Config = this._s3Config?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InternetmonitorMonitorInternetMeasurementsLogDelivery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3Config.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3Config.internalValue = value.s3Config;
    }
  }

  // s3_config - computed: false, optional: true, required: false
  private _s3Config = new InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference(this, "s3_config");
  public get s3Config() {
    return this._s3Config;
  }
  public putS3Config(value: InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config) {
    this._s3Config.internalValue = value;
  }
  public resetS3Config() {
    this._s3Config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ConfigInput() {
    return this._s3Config.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/internetmonitor_monitor aws_internetmonitor_monitor}
*/
export class InternetmonitorMonitor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_internetmonitor_monitor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InternetmonitorMonitor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InternetmonitorMonitor to import
  * @param importFromId The id of the existing InternetmonitorMonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/internetmonitor_monitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InternetmonitorMonitor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_internetmonitor_monitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/internetmonitor_monitor aws_internetmonitor_monitor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InternetmonitorMonitorConfig
  */
  public constructor(scope: Construct, id: string, config: InternetmonitorMonitorConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_internetmonitor_monitor',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.12.0',
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
    this._id = config.id;
    this._maxCityNetworksToMonitor = config.maxCityNetworksToMonitor;
    this._monitorName = config.monitorName;
    this._region = config.region;
    this._resources = config.resources;
    this._status = config.status;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._trafficPercentageToMonitor = config.trafficPercentageToMonitor;
    this._healthEventsConfig.internalValue = config.healthEventsConfig;
    this._internetMeasurementsLogDelivery.internalValue = config.internetMeasurementsLogDelivery;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // max_city_networks_to_monitor - computed: false, optional: true, required: false
  private _maxCityNetworksToMonitor?: number; 
  public get maxCityNetworksToMonitor() {
    return this.getNumberAttribute('max_city_networks_to_monitor');
  }
  public set maxCityNetworksToMonitor(value: number) {
    this._maxCityNetworksToMonitor = value;
  }
  public resetMaxCityNetworksToMonitor() {
    this._maxCityNetworksToMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCityNetworksToMonitorInput() {
    return this._maxCityNetworksToMonitor;
  }

  // monitor_name - computed: false, optional: false, required: true
  private _monitorName?: string; 
  public get monitorName() {
    return this.getStringAttribute('monitor_name');
  }
  public set monitorName(value: string) {
    this._monitorName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorNameInput() {
    return this._monitorName;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: string[]; 
  public get resources() {
    return cdktf.Fn.tolist(this.getListAttribute('resources'));
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
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

  // traffic_percentage_to_monitor - computed: false, optional: true, required: false
  private _trafficPercentageToMonitor?: number; 
  public get trafficPercentageToMonitor() {
    return this.getNumberAttribute('traffic_percentage_to_monitor');
  }
  public set trafficPercentageToMonitor(value: number) {
    this._trafficPercentageToMonitor = value;
  }
  public resetTrafficPercentageToMonitor() {
    this._trafficPercentageToMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficPercentageToMonitorInput() {
    return this._trafficPercentageToMonitor;
  }

  // health_events_config - computed: false, optional: true, required: false
  private _healthEventsConfig = new InternetmonitorMonitorHealthEventsConfigOutputReference(this, "health_events_config");
  public get healthEventsConfig() {
    return this._healthEventsConfig;
  }
  public putHealthEventsConfig(value: InternetmonitorMonitorHealthEventsConfig) {
    this._healthEventsConfig.internalValue = value;
  }
  public resetHealthEventsConfig() {
    this._healthEventsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthEventsConfigInput() {
    return this._healthEventsConfig.internalValue;
  }

  // internet_measurements_log_delivery - computed: false, optional: true, required: false
  private _internetMeasurementsLogDelivery = new InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference(this, "internet_measurements_log_delivery");
  public get internetMeasurementsLogDelivery() {
    return this._internetMeasurementsLogDelivery;
  }
  public putInternetMeasurementsLogDelivery(value: InternetmonitorMonitorInternetMeasurementsLogDelivery) {
    this._internetMeasurementsLogDelivery.internalValue = value;
  }
  public resetInternetMeasurementsLogDelivery() {
    this._internetMeasurementsLogDelivery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetMeasurementsLogDeliveryInput() {
    return this._internetMeasurementsLogDelivery.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      max_city_networks_to_monitor: cdktf.numberToTerraform(this._maxCityNetworksToMonitor),
      monitor_name: cdktf.stringToTerraform(this._monitorName),
      region: cdktf.stringToTerraform(this._region),
      resources: cdktf.listMapper(cdktf.stringToTerraform, false)(this._resources),
      status: cdktf.stringToTerraform(this._status),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      traffic_percentage_to_monitor: cdktf.numberToTerraform(this._trafficPercentageToMonitor),
      health_events_config: internetmonitorMonitorHealthEventsConfigToTerraform(this._healthEventsConfig.internalValue),
      internet_measurements_log_delivery: internetmonitorMonitorInternetMeasurementsLogDeliveryToTerraform(this._internetMeasurementsLogDelivery.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_city_networks_to_monitor: {
        value: cdktf.numberToHclTerraform(this._maxCityNetworksToMonitor),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      monitor_name: {
        value: cdktf.stringToHclTerraform(this._monitorName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resources: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._resources),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags_all: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      traffic_percentage_to_monitor: {
        value: cdktf.numberToHclTerraform(this._trafficPercentageToMonitor),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      health_events_config: {
        value: internetmonitorMonitorHealthEventsConfigToHclTerraform(this._healthEventsConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InternetmonitorMonitorHealthEventsConfigList",
      },
      internet_measurements_log_delivery: {
        value: internetmonitorMonitorInternetMeasurementsLogDeliveryToHclTerraform(this._internetMeasurementsLogDelivery.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InternetmonitorMonitorInternetMeasurementsLogDeliveryList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
