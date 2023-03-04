// https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Apigatewayv2StageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#api_id Apigatewayv2Stage#api_id}
  */
  readonly apiId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#auto_deploy Apigatewayv2Stage#auto_deploy}
  */
  readonly autoDeploy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#client_certificate_id Apigatewayv2Stage#client_certificate_id}
  */
  readonly clientCertificateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#deployment_id Apigatewayv2Stage#deployment_id}
  */
  readonly deploymentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#description Apigatewayv2Stage#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#id Apigatewayv2Stage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#name Apigatewayv2Stage#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#stage_variables Apigatewayv2Stage#stage_variables}
  */
  readonly stageVariables?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#tags Apigatewayv2Stage#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#tags_all Apigatewayv2Stage#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * access_log_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#access_log_settings Apigatewayv2Stage#access_log_settings}
  */
  readonly accessLogSettings?: Apigatewayv2StageAccessLogSettings;
  /**
  * default_route_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#default_route_settings Apigatewayv2Stage#default_route_settings}
  */
  readonly defaultRouteSettings?: Apigatewayv2StageDefaultRouteSettings;
  /**
  * route_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#route_settings Apigatewayv2Stage#route_settings}
  */
  readonly routeSettings?: Apigatewayv2StageRouteSettings[] | cdktf.IResolvable;
}
export interface Apigatewayv2StageAccessLogSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#destination_arn Apigatewayv2Stage#destination_arn}
  */
  readonly destinationArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#format Apigatewayv2Stage#format}
  */
  readonly format: string;
}

export function apigatewayv2StageAccessLogSettingsToTerraform(struct?: Apigatewayv2StageAccessLogSettingsOutputReference | Apigatewayv2StageAccessLogSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_arn: cdktf.stringToTerraform(struct!.destinationArn),
    format: cdktf.stringToTerraform(struct!.format),
  }
}

export class Apigatewayv2StageAccessLogSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Apigatewayv2StageAccessLogSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationArn = this._destinationArn;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Apigatewayv2StageAccessLogSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destinationArn = undefined;
      this._format = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destinationArn = value.destinationArn;
      this._format = value.format;
    }
  }

  // destination_arn - computed: false, optional: false, required: true
  private _destinationArn?: string; 
  public get destinationArn() {
    return this.getStringAttribute('destination_arn');
  }
  public set destinationArn(value: string) {
    this._destinationArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationArnInput() {
    return this._destinationArn;
  }

  // format - computed: false, optional: false, required: true
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }
}
export interface Apigatewayv2StageDefaultRouteSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#data_trace_enabled Apigatewayv2Stage#data_trace_enabled}
  */
  readonly dataTraceEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#detailed_metrics_enabled Apigatewayv2Stage#detailed_metrics_enabled}
  */
  readonly detailedMetricsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#logging_level Apigatewayv2Stage#logging_level}
  */
  readonly loggingLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#throttling_burst_limit Apigatewayv2Stage#throttling_burst_limit}
  */
  readonly throttlingBurstLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#throttling_rate_limit Apigatewayv2Stage#throttling_rate_limit}
  */
  readonly throttlingRateLimit?: number;
}

export function apigatewayv2StageDefaultRouteSettingsToTerraform(struct?: Apigatewayv2StageDefaultRouteSettingsOutputReference | Apigatewayv2StageDefaultRouteSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_trace_enabled: cdktf.booleanToTerraform(struct!.dataTraceEnabled),
    detailed_metrics_enabled: cdktf.booleanToTerraform(struct!.detailedMetricsEnabled),
    logging_level: cdktf.stringToTerraform(struct!.loggingLevel),
    throttling_burst_limit: cdktf.numberToTerraform(struct!.throttlingBurstLimit),
    throttling_rate_limit: cdktf.numberToTerraform(struct!.throttlingRateLimit),
  }
}

export class Apigatewayv2StageDefaultRouteSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Apigatewayv2StageDefaultRouteSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataTraceEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataTraceEnabled = this._dataTraceEnabled;
    }
    if (this._detailedMetricsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.detailedMetricsEnabled = this._detailedMetricsEnabled;
    }
    if (this._loggingLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggingLevel = this._loggingLevel;
    }
    if (this._throttlingBurstLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.throttlingBurstLimit = this._throttlingBurstLimit;
    }
    if (this._throttlingRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.throttlingRateLimit = this._throttlingRateLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Apigatewayv2StageDefaultRouteSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataTraceEnabled = undefined;
      this._detailedMetricsEnabled = undefined;
      this._loggingLevel = undefined;
      this._throttlingBurstLimit = undefined;
      this._throttlingRateLimit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataTraceEnabled = value.dataTraceEnabled;
      this._detailedMetricsEnabled = value.detailedMetricsEnabled;
      this._loggingLevel = value.loggingLevel;
      this._throttlingBurstLimit = value.throttlingBurstLimit;
      this._throttlingRateLimit = value.throttlingRateLimit;
    }
  }

  // data_trace_enabled - computed: false, optional: true, required: false
  private _dataTraceEnabled?: boolean | cdktf.IResolvable; 
  public get dataTraceEnabled() {
    return this.getBooleanAttribute('data_trace_enabled');
  }
  public set dataTraceEnabled(value: boolean | cdktf.IResolvable) {
    this._dataTraceEnabled = value;
  }
  public resetDataTraceEnabled() {
    this._dataTraceEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTraceEnabledInput() {
    return this._dataTraceEnabled;
  }

  // detailed_metrics_enabled - computed: false, optional: true, required: false
  private _detailedMetricsEnabled?: boolean | cdktf.IResolvable; 
  public get detailedMetricsEnabled() {
    return this.getBooleanAttribute('detailed_metrics_enabled');
  }
  public set detailedMetricsEnabled(value: boolean | cdktf.IResolvable) {
    this._detailedMetricsEnabled = value;
  }
  public resetDetailedMetricsEnabled() {
    this._detailedMetricsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailedMetricsEnabledInput() {
    return this._detailedMetricsEnabled;
  }

  // logging_level - computed: true, optional: true, required: false
  private _loggingLevel?: string; 
  public get loggingLevel() {
    return this.getStringAttribute('logging_level');
  }
  public set loggingLevel(value: string) {
    this._loggingLevel = value;
  }
  public resetLoggingLevel() {
    this._loggingLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingLevelInput() {
    return this._loggingLevel;
  }

  // throttling_burst_limit - computed: false, optional: true, required: false
  private _throttlingBurstLimit?: number; 
  public get throttlingBurstLimit() {
    return this.getNumberAttribute('throttling_burst_limit');
  }
  public set throttlingBurstLimit(value: number) {
    this._throttlingBurstLimit = value;
  }
  public resetThrottlingBurstLimit() {
    this._throttlingBurstLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttlingBurstLimitInput() {
    return this._throttlingBurstLimit;
  }

  // throttling_rate_limit - computed: false, optional: true, required: false
  private _throttlingRateLimit?: number; 
  public get throttlingRateLimit() {
    return this.getNumberAttribute('throttling_rate_limit');
  }
  public set throttlingRateLimit(value: number) {
    this._throttlingRateLimit = value;
  }
  public resetThrottlingRateLimit() {
    this._throttlingRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttlingRateLimitInput() {
    return this._throttlingRateLimit;
  }
}
export interface Apigatewayv2StageRouteSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#data_trace_enabled Apigatewayv2Stage#data_trace_enabled}
  */
  readonly dataTraceEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#detailed_metrics_enabled Apigatewayv2Stage#detailed_metrics_enabled}
  */
  readonly detailedMetricsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#logging_level Apigatewayv2Stage#logging_level}
  */
  readonly loggingLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#route_key Apigatewayv2Stage#route_key}
  */
  readonly routeKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#throttling_burst_limit Apigatewayv2Stage#throttling_burst_limit}
  */
  readonly throttlingBurstLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#throttling_rate_limit Apigatewayv2Stage#throttling_rate_limit}
  */
  readonly throttlingRateLimit?: number;
}

export function apigatewayv2StageRouteSettingsToTerraform(struct?: Apigatewayv2StageRouteSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_trace_enabled: cdktf.booleanToTerraform(struct!.dataTraceEnabled),
    detailed_metrics_enabled: cdktf.booleanToTerraform(struct!.detailedMetricsEnabled),
    logging_level: cdktf.stringToTerraform(struct!.loggingLevel),
    route_key: cdktf.stringToTerraform(struct!.routeKey),
    throttling_burst_limit: cdktf.numberToTerraform(struct!.throttlingBurstLimit),
    throttling_rate_limit: cdktf.numberToTerraform(struct!.throttlingRateLimit),
  }
}

export class Apigatewayv2StageRouteSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Apigatewayv2StageRouteSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataTraceEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataTraceEnabled = this._dataTraceEnabled;
    }
    if (this._detailedMetricsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.detailedMetricsEnabled = this._detailedMetricsEnabled;
    }
    if (this._loggingLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggingLevel = this._loggingLevel;
    }
    if (this._routeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeKey = this._routeKey;
    }
    if (this._throttlingBurstLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.throttlingBurstLimit = this._throttlingBurstLimit;
    }
    if (this._throttlingRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.throttlingRateLimit = this._throttlingRateLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Apigatewayv2StageRouteSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataTraceEnabled = undefined;
      this._detailedMetricsEnabled = undefined;
      this._loggingLevel = undefined;
      this._routeKey = undefined;
      this._throttlingBurstLimit = undefined;
      this._throttlingRateLimit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataTraceEnabled = value.dataTraceEnabled;
      this._detailedMetricsEnabled = value.detailedMetricsEnabled;
      this._loggingLevel = value.loggingLevel;
      this._routeKey = value.routeKey;
      this._throttlingBurstLimit = value.throttlingBurstLimit;
      this._throttlingRateLimit = value.throttlingRateLimit;
    }
  }

  // data_trace_enabled - computed: false, optional: true, required: false
  private _dataTraceEnabled?: boolean | cdktf.IResolvable; 
  public get dataTraceEnabled() {
    return this.getBooleanAttribute('data_trace_enabled');
  }
  public set dataTraceEnabled(value: boolean | cdktf.IResolvable) {
    this._dataTraceEnabled = value;
  }
  public resetDataTraceEnabled() {
    this._dataTraceEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTraceEnabledInput() {
    return this._dataTraceEnabled;
  }

  // detailed_metrics_enabled - computed: false, optional: true, required: false
  private _detailedMetricsEnabled?: boolean | cdktf.IResolvable; 
  public get detailedMetricsEnabled() {
    return this.getBooleanAttribute('detailed_metrics_enabled');
  }
  public set detailedMetricsEnabled(value: boolean | cdktf.IResolvable) {
    this._detailedMetricsEnabled = value;
  }
  public resetDetailedMetricsEnabled() {
    this._detailedMetricsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailedMetricsEnabledInput() {
    return this._detailedMetricsEnabled;
  }

  // logging_level - computed: true, optional: true, required: false
  private _loggingLevel?: string; 
  public get loggingLevel() {
    return this.getStringAttribute('logging_level');
  }
  public set loggingLevel(value: string) {
    this._loggingLevel = value;
  }
  public resetLoggingLevel() {
    this._loggingLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingLevelInput() {
    return this._loggingLevel;
  }

  // route_key - computed: false, optional: false, required: true
  private _routeKey?: string; 
  public get routeKey() {
    return this.getStringAttribute('route_key');
  }
  public set routeKey(value: string) {
    this._routeKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeKeyInput() {
    return this._routeKey;
  }

  // throttling_burst_limit - computed: false, optional: true, required: false
  private _throttlingBurstLimit?: number; 
  public get throttlingBurstLimit() {
    return this.getNumberAttribute('throttling_burst_limit');
  }
  public set throttlingBurstLimit(value: number) {
    this._throttlingBurstLimit = value;
  }
  public resetThrottlingBurstLimit() {
    this._throttlingBurstLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttlingBurstLimitInput() {
    return this._throttlingBurstLimit;
  }

  // throttling_rate_limit - computed: false, optional: true, required: false
  private _throttlingRateLimit?: number; 
  public get throttlingRateLimit() {
    return this.getNumberAttribute('throttling_rate_limit');
  }
  public set throttlingRateLimit(value: number) {
    this._throttlingRateLimit = value;
  }
  public resetThrottlingRateLimit() {
    this._throttlingRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttlingRateLimitInput() {
    return this._throttlingRateLimit;
  }
}

export class Apigatewayv2StageRouteSettingsList extends cdktf.ComplexList {
  public internalValue? : Apigatewayv2StageRouteSettings[] | cdktf.IResolvable

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
  public get(index: number): Apigatewayv2StageRouteSettingsOutputReference {
    return new Apigatewayv2StageRouteSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage aws_apigatewayv2_stage}
*/
export class Apigatewayv2Stage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_apigatewayv2_stage";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage aws_apigatewayv2_stage} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Apigatewayv2StageConfig
  */
  public constructor(scope: Construct, id: string, config: Apigatewayv2StageConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_apigatewayv2_stage',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
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
    this._apiId = config.apiId;
    this._autoDeploy = config.autoDeploy;
    this._clientCertificateId = config.clientCertificateId;
    this._deploymentId = config.deploymentId;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._stageVariables = config.stageVariables;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._accessLogSettings.internalValue = config.accessLogSettings;
    this._defaultRouteSettings.internalValue = config.defaultRouteSettings;
    this._routeSettings.internalValue = config.routeSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_id - computed: false, optional: false, required: true
  private _apiId?: string; 
  public get apiId() {
    return this.getStringAttribute('api_id');
  }
  public set apiId(value: string) {
    this._apiId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiIdInput() {
    return this._apiId;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auto_deploy - computed: false, optional: true, required: false
  private _autoDeploy?: boolean | cdktf.IResolvable; 
  public get autoDeploy() {
    return this.getBooleanAttribute('auto_deploy');
  }
  public set autoDeploy(value: boolean | cdktf.IResolvable) {
    this._autoDeploy = value;
  }
  public resetAutoDeploy() {
    this._autoDeploy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDeployInput() {
    return this._autoDeploy;
  }

  // client_certificate_id - computed: false, optional: true, required: false
  private _clientCertificateId?: string; 
  public get clientCertificateId() {
    return this.getStringAttribute('client_certificate_id');
  }
  public set clientCertificateId(value: string) {
    this._clientCertificateId = value;
  }
  public resetClientCertificateId() {
    this._clientCertificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateIdInput() {
    return this._clientCertificateId;
  }

  // deployment_id - computed: true, optional: true, required: false
  private _deploymentId?: string; 
  public get deploymentId() {
    return this.getStringAttribute('deployment_id');
  }
  public set deploymentId(value: string) {
    this._deploymentId = value;
  }
  public resetDeploymentId() {
    this._deploymentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentIdInput() {
    return this._deploymentId;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // execution_arn - computed: true, optional: false, required: false
  public get executionArn() {
    return this.getStringAttribute('execution_arn');
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

  // invoke_url - computed: true, optional: false, required: false
  public get invokeUrl() {
    return this.getStringAttribute('invoke_url');
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

  // stage_variables - computed: false, optional: true, required: false
  private _stageVariables?: { [key: string]: string }; 
  public get stageVariables() {
    return this.getStringMapAttribute('stage_variables');
  }
  public set stageVariables(value: { [key: string]: string }) {
    this._stageVariables = value;
  }
  public resetStageVariables() {
    this._stageVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stageVariablesInput() {
    return this._stageVariables;
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

  // access_log_settings - computed: false, optional: true, required: false
  private _accessLogSettings = new Apigatewayv2StageAccessLogSettingsOutputReference(this, "access_log_settings");
  public get accessLogSettings() {
    return this._accessLogSettings;
  }
  public putAccessLogSettings(value: Apigatewayv2StageAccessLogSettings) {
    this._accessLogSettings.internalValue = value;
  }
  public resetAccessLogSettings() {
    this._accessLogSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLogSettingsInput() {
    return this._accessLogSettings.internalValue;
  }

  // default_route_settings - computed: false, optional: true, required: false
  private _defaultRouteSettings = new Apigatewayv2StageDefaultRouteSettingsOutputReference(this, "default_route_settings");
  public get defaultRouteSettings() {
    return this._defaultRouteSettings;
  }
  public putDefaultRouteSettings(value: Apigatewayv2StageDefaultRouteSettings) {
    this._defaultRouteSettings.internalValue = value;
  }
  public resetDefaultRouteSettings() {
    this._defaultRouteSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRouteSettingsInput() {
    return this._defaultRouteSettings.internalValue;
  }

  // route_settings - computed: false, optional: true, required: false
  private _routeSettings = new Apigatewayv2StageRouteSettingsList(this, "route_settings", true);
  public get routeSettings() {
    return this._routeSettings;
  }
  public putRouteSettings(value: Apigatewayv2StageRouteSettings[] | cdktf.IResolvable) {
    this._routeSettings.internalValue = value;
  }
  public resetRouteSettings() {
    this._routeSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeSettingsInput() {
    return this._routeSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_id: cdktf.stringToTerraform(this._apiId),
      auto_deploy: cdktf.booleanToTerraform(this._autoDeploy),
      client_certificate_id: cdktf.stringToTerraform(this._clientCertificateId),
      deployment_id: cdktf.stringToTerraform(this._deploymentId),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      stage_variables: cdktf.hashMapper(cdktf.stringToTerraform)(this._stageVariables),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      access_log_settings: apigatewayv2StageAccessLogSettingsToTerraform(this._accessLogSettings.internalValue),
      default_route_settings: apigatewayv2StageDefaultRouteSettingsToTerraform(this._defaultRouteSettings.internalValue),
      route_settings: cdktf.listMapper(apigatewayv2StageRouteSettingsToTerraform, true)(this._routeSettings.internalValue),
    };
  }
}
