// https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiGatewayMethodSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#id ApiGatewayMethodSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#method_path ApiGatewayMethodSettings#method_path}
  */
  readonly methodPath: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#rest_api_id ApiGatewayMethodSettings#rest_api_id}
  */
  readonly restApiId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#stage_name ApiGatewayMethodSettings#stage_name}
  */
  readonly stageName: string;
  /**
  * settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#settings ApiGatewayMethodSettings#settings}
  */
  readonly settings: ApiGatewayMethodSettingsSettings;
}
export interface ApiGatewayMethodSettingsSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#cache_data_encrypted ApiGatewayMethodSettings#cache_data_encrypted}
  */
  readonly cacheDataEncrypted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#cache_ttl_in_seconds ApiGatewayMethodSettings#cache_ttl_in_seconds}
  */
  readonly cacheTtlInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#caching_enabled ApiGatewayMethodSettings#caching_enabled}
  */
  readonly cachingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#data_trace_enabled ApiGatewayMethodSettings#data_trace_enabled}
  */
  readonly dataTraceEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#logging_level ApiGatewayMethodSettings#logging_level}
  */
  readonly loggingLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#metrics_enabled ApiGatewayMethodSettings#metrics_enabled}
  */
  readonly metricsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#require_authorization_for_cache_control ApiGatewayMethodSettings#require_authorization_for_cache_control}
  */
  readonly requireAuthorizationForCacheControl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#throttling_burst_limit ApiGatewayMethodSettings#throttling_burst_limit}
  */
  readonly throttlingBurstLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#throttling_rate_limit ApiGatewayMethodSettings#throttling_rate_limit}
  */
  readonly throttlingRateLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#unauthorized_cache_control_header_strategy ApiGatewayMethodSettings#unauthorized_cache_control_header_strategy}
  */
  readonly unauthorizedCacheControlHeaderStrategy?: string;
}

export function apiGatewayMethodSettingsSettingsToTerraform(struct?: ApiGatewayMethodSettingsSettingsOutputReference | ApiGatewayMethodSettingsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_data_encrypted: cdktf.booleanToTerraform(struct!.cacheDataEncrypted),
    cache_ttl_in_seconds: cdktf.numberToTerraform(struct!.cacheTtlInSeconds),
    caching_enabled: cdktf.booleanToTerraform(struct!.cachingEnabled),
    data_trace_enabled: cdktf.booleanToTerraform(struct!.dataTraceEnabled),
    logging_level: cdktf.stringToTerraform(struct!.loggingLevel),
    metrics_enabled: cdktf.booleanToTerraform(struct!.metricsEnabled),
    require_authorization_for_cache_control: cdktf.booleanToTerraform(struct!.requireAuthorizationForCacheControl),
    throttling_burst_limit: cdktf.numberToTerraform(struct!.throttlingBurstLimit),
    throttling_rate_limit: cdktf.numberToTerraform(struct!.throttlingRateLimit),
    unauthorized_cache_control_header_strategy: cdktf.stringToTerraform(struct!.unauthorizedCacheControlHeaderStrategy),
  }
}

export class ApiGatewayMethodSettingsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiGatewayMethodSettingsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheDataEncrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheDataEncrypted = this._cacheDataEncrypted;
    }
    if (this._cacheTtlInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheTtlInSeconds = this._cacheTtlInSeconds;
    }
    if (this._cachingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.cachingEnabled = this._cachingEnabled;
    }
    if (this._dataTraceEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataTraceEnabled = this._dataTraceEnabled;
    }
    if (this._loggingLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggingLevel = this._loggingLevel;
    }
    if (this._metricsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsEnabled = this._metricsEnabled;
    }
    if (this._requireAuthorizationForCacheControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireAuthorizationForCacheControl = this._requireAuthorizationForCacheControl;
    }
    if (this._throttlingBurstLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.throttlingBurstLimit = this._throttlingBurstLimit;
    }
    if (this._throttlingRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.throttlingRateLimit = this._throttlingRateLimit;
    }
    if (this._unauthorizedCacheControlHeaderStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.unauthorizedCacheControlHeaderStrategy = this._unauthorizedCacheControlHeaderStrategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayMethodSettingsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cacheDataEncrypted = undefined;
      this._cacheTtlInSeconds = undefined;
      this._cachingEnabled = undefined;
      this._dataTraceEnabled = undefined;
      this._loggingLevel = undefined;
      this._metricsEnabled = undefined;
      this._requireAuthorizationForCacheControl = undefined;
      this._throttlingBurstLimit = undefined;
      this._throttlingRateLimit = undefined;
      this._unauthorizedCacheControlHeaderStrategy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cacheDataEncrypted = value.cacheDataEncrypted;
      this._cacheTtlInSeconds = value.cacheTtlInSeconds;
      this._cachingEnabled = value.cachingEnabled;
      this._dataTraceEnabled = value.dataTraceEnabled;
      this._loggingLevel = value.loggingLevel;
      this._metricsEnabled = value.metricsEnabled;
      this._requireAuthorizationForCacheControl = value.requireAuthorizationForCacheControl;
      this._throttlingBurstLimit = value.throttlingBurstLimit;
      this._throttlingRateLimit = value.throttlingRateLimit;
      this._unauthorizedCacheControlHeaderStrategy = value.unauthorizedCacheControlHeaderStrategy;
    }
  }

  // cache_data_encrypted - computed: true, optional: true, required: false
  private _cacheDataEncrypted?: boolean | cdktf.IResolvable; 
  public get cacheDataEncrypted() {
    return this.getBooleanAttribute('cache_data_encrypted');
  }
  public set cacheDataEncrypted(value: boolean | cdktf.IResolvable) {
    this._cacheDataEncrypted = value;
  }
  public resetCacheDataEncrypted() {
    this._cacheDataEncrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheDataEncryptedInput() {
    return this._cacheDataEncrypted;
  }

  // cache_ttl_in_seconds - computed: true, optional: true, required: false
  private _cacheTtlInSeconds?: number; 
  public get cacheTtlInSeconds() {
    return this.getNumberAttribute('cache_ttl_in_seconds');
  }
  public set cacheTtlInSeconds(value: number) {
    this._cacheTtlInSeconds = value;
  }
  public resetCacheTtlInSeconds() {
    this._cacheTtlInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTtlInSecondsInput() {
    return this._cacheTtlInSeconds;
  }

  // caching_enabled - computed: true, optional: true, required: false
  private _cachingEnabled?: boolean | cdktf.IResolvable; 
  public get cachingEnabled() {
    return this.getBooleanAttribute('caching_enabled');
  }
  public set cachingEnabled(value: boolean | cdktf.IResolvable) {
    this._cachingEnabled = value;
  }
  public resetCachingEnabled() {
    this._cachingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachingEnabledInput() {
    return this._cachingEnabled;
  }

  // data_trace_enabled - computed: true, optional: true, required: false
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

  // metrics_enabled - computed: true, optional: true, required: false
  private _metricsEnabled?: boolean | cdktf.IResolvable; 
  public get metricsEnabled() {
    return this.getBooleanAttribute('metrics_enabled');
  }
  public set metricsEnabled(value: boolean | cdktf.IResolvable) {
    this._metricsEnabled = value;
  }
  public resetMetricsEnabled() {
    this._metricsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsEnabledInput() {
    return this._metricsEnabled;
  }

  // require_authorization_for_cache_control - computed: true, optional: true, required: false
  private _requireAuthorizationForCacheControl?: boolean | cdktf.IResolvable; 
  public get requireAuthorizationForCacheControl() {
    return this.getBooleanAttribute('require_authorization_for_cache_control');
  }
  public set requireAuthorizationForCacheControl(value: boolean | cdktf.IResolvable) {
    this._requireAuthorizationForCacheControl = value;
  }
  public resetRequireAuthorizationForCacheControl() {
    this._requireAuthorizationForCacheControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireAuthorizationForCacheControlInput() {
    return this._requireAuthorizationForCacheControl;
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

  // unauthorized_cache_control_header_strategy - computed: true, optional: true, required: false
  private _unauthorizedCacheControlHeaderStrategy?: string; 
  public get unauthorizedCacheControlHeaderStrategy() {
    return this.getStringAttribute('unauthorized_cache_control_header_strategy');
  }
  public set unauthorizedCacheControlHeaderStrategy(value: string) {
    this._unauthorizedCacheControlHeaderStrategy = value;
  }
  public resetUnauthorizedCacheControlHeaderStrategy() {
    this._unauthorizedCacheControlHeaderStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unauthorizedCacheControlHeaderStrategyInput() {
    return this._unauthorizedCacheControlHeaderStrategy;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings aws_api_gateway_method_settings}
*/
export class ApiGatewayMethodSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_api_gateway_method_settings";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings aws_api_gateway_method_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiGatewayMethodSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: ApiGatewayMethodSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_api_gateway_method_settings',
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
    this._id = config.id;
    this._methodPath = config.methodPath;
    this._restApiId = config.restApiId;
    this._stageName = config.stageName;
    this._settings.internalValue = config.settings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // method_path - computed: false, optional: false, required: true
  private _methodPath?: string; 
  public get methodPath() {
    return this.getStringAttribute('method_path');
  }
  public set methodPath(value: string) {
    this._methodPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodPathInput() {
    return this._methodPath;
  }

  // rest_api_id - computed: false, optional: false, required: true
  private _restApiId?: string; 
  public get restApiId() {
    return this.getStringAttribute('rest_api_id');
  }
  public set restApiId(value: string) {
    this._restApiId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restApiIdInput() {
    return this._restApiId;
  }

  // stage_name - computed: false, optional: false, required: true
  private _stageName?: string; 
  public get stageName() {
    return this.getStringAttribute('stage_name');
  }
  public set stageName(value: string) {
    this._stageName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stageNameInput() {
    return this._stageName;
  }

  // settings - computed: false, optional: false, required: true
  private _settings = new ApiGatewayMethodSettingsSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: ApiGatewayMethodSettingsSettings) {
    this._settings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      method_path: cdktf.stringToTerraform(this._methodPath),
      rest_api_id: cdktf.stringToTerraform(this._restApiId),
      stage_name: cdktf.stringToTerraform(this._stageName),
      settings: apiGatewayMethodSettingsSettingsToTerraform(this._settings.internalValue),
    };
  }
}
