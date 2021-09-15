// https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiGatewayMethodSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html#method_path ApiGatewayMethodSettings#method_path}
  */
  readonly methodPath: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html#rest_api_id ApiGatewayMethodSettings#rest_api_id}
  */
  readonly restApiId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html#stage_name ApiGatewayMethodSettings#stage_name}
  */
  readonly stageName: string;
  /**
  * settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html#settings ApiGatewayMethodSettings#settings}
  */
  readonly settings: ApiGatewayMethodSettingsSettings[];
}
export interface ApiGatewayMethodSettingsSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html#cache_data_encrypted ApiGatewayMethodSettings#cache_data_encrypted}
  */
  readonly cacheDataEncrypted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html#cache_ttl_in_seconds ApiGatewayMethodSettings#cache_ttl_in_seconds}
  */
  readonly cacheTtlInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html#caching_enabled ApiGatewayMethodSettings#caching_enabled}
  */
  readonly cachingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html#data_trace_enabled ApiGatewayMethodSettings#data_trace_enabled}
  */
  readonly dataTraceEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html#logging_level ApiGatewayMethodSettings#logging_level}
  */
  readonly loggingLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html#metrics_enabled ApiGatewayMethodSettings#metrics_enabled}
  */
  readonly metricsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html#require_authorization_for_cache_control ApiGatewayMethodSettings#require_authorization_for_cache_control}
  */
  readonly requireAuthorizationForCacheControl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html#throttling_burst_limit ApiGatewayMethodSettings#throttling_burst_limit}
  */
  readonly throttlingBurstLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html#throttling_rate_limit ApiGatewayMethodSettings#throttling_rate_limit}
  */
  readonly throttlingRateLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html#unauthorized_cache_control_header_strategy ApiGatewayMethodSettings#unauthorized_cache_control_header_strategy}
  */
  readonly unauthorizedCacheControlHeaderStrategy?: string;
}

function apiGatewayMethodSettingsSettingsToTerraform(struct?: ApiGatewayMethodSettingsSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html aws_api_gateway_method_settings}
*/
export class ApiGatewayMethodSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_api_gateway_method_settings";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html aws_api_gateway_method_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiGatewayMethodSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: ApiGatewayMethodSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_api_gateway_method_settings',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._methodPath = config.methodPath;
    this._restApiId = config.restApiId;
    this._stageName = config.stageName;
    this._settings = config.settings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // method_path - computed: false, optional: false, required: true
  private _methodPath: string;
  public get methodPath() {
    return this.getStringAttribute('method_path');
  }
  public set methodPath(value: string) {
    this._methodPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodPathInput() {
    return this._methodPath
  }

  // rest_api_id - computed: false, optional: false, required: true
  private _restApiId: string;
  public get restApiId() {
    return this.getStringAttribute('rest_api_id');
  }
  public set restApiId(value: string) {
    this._restApiId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restApiIdInput() {
    return this._restApiId
  }

  // stage_name - computed: false, optional: false, required: true
  private _stageName: string;
  public get stageName() {
    return this.getStringAttribute('stage_name');
  }
  public set stageName(value: string) {
    this._stageName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stageNameInput() {
    return this._stageName
  }

  // settings - computed: false, optional: false, required: true
  private _settings: ApiGatewayMethodSettingsSettings[];
  public get settings() {
    return this.interpolationForAttribute('settings') as any;
  }
  public set settings(value: ApiGatewayMethodSettingsSettings[]) {
    this._settings = value;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      method_path: cdktf.stringToTerraform(this._methodPath),
      rest_api_id: cdktf.stringToTerraform(this._restApiId),
      stage_name: cdktf.stringToTerraform(this._stageName),
      settings: cdktf.listMapper(apiGatewayMethodSettingsSettingsToTerraform)(this._settings),
    };
  }
}
