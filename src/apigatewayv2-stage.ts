// https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Apigatewayv2StageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#api_id Apigatewayv2Stage#api_id}
  */
  readonly apiId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#auto_deploy Apigatewayv2Stage#auto_deploy}
  */
  readonly autoDeploy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#client_certificate_id Apigatewayv2Stage#client_certificate_id}
  */
  readonly clientCertificateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#deployment_id Apigatewayv2Stage#deployment_id}
  */
  readonly deploymentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#description Apigatewayv2Stage#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#name Apigatewayv2Stage#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#stage_variables Apigatewayv2Stage#stage_variables}
  */
  readonly stageVariables?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#tags Apigatewayv2Stage#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#tags_all Apigatewayv2Stage#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * access_log_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#access_log_settings Apigatewayv2Stage#access_log_settings}
  */
  readonly accessLogSettings?: Apigatewayv2StageAccessLogSettings[];
  /**
  * default_route_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#default_route_settings Apigatewayv2Stage#default_route_settings}
  */
  readonly defaultRouteSettings?: Apigatewayv2StageDefaultRouteSettings[];
  /**
  * route_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#route_settings Apigatewayv2Stage#route_settings}
  */
  readonly routeSettings?: Apigatewayv2StageRouteSettings[];
}
export interface Apigatewayv2StageAccessLogSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#destination_arn Apigatewayv2Stage#destination_arn}
  */
  readonly destinationArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#format Apigatewayv2Stage#format}
  */
  readonly format: string;
}

function apigatewayv2StageAccessLogSettingsToTerraform(struct?: Apigatewayv2StageAccessLogSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    destination_arn: cdktf.stringToTerraform(struct!.destinationArn),
    format: cdktf.stringToTerraform(struct!.format),
  }
}

export interface Apigatewayv2StageDefaultRouteSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#data_trace_enabled Apigatewayv2Stage#data_trace_enabled}
  */
  readonly dataTraceEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#detailed_metrics_enabled Apigatewayv2Stage#detailed_metrics_enabled}
  */
  readonly detailedMetricsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#logging_level Apigatewayv2Stage#logging_level}
  */
  readonly loggingLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#throttling_burst_limit Apigatewayv2Stage#throttling_burst_limit}
  */
  readonly throttlingBurstLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#throttling_rate_limit Apigatewayv2Stage#throttling_rate_limit}
  */
  readonly throttlingRateLimit?: number;
}

function apigatewayv2StageDefaultRouteSettingsToTerraform(struct?: Apigatewayv2StageDefaultRouteSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data_trace_enabled: cdktf.booleanToTerraform(struct!.dataTraceEnabled),
    detailed_metrics_enabled: cdktf.booleanToTerraform(struct!.detailedMetricsEnabled),
    logging_level: cdktf.stringToTerraform(struct!.loggingLevel),
    throttling_burst_limit: cdktf.numberToTerraform(struct!.throttlingBurstLimit),
    throttling_rate_limit: cdktf.numberToTerraform(struct!.throttlingRateLimit),
  }
}

export interface Apigatewayv2StageRouteSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#data_trace_enabled Apigatewayv2Stage#data_trace_enabled}
  */
  readonly dataTraceEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#detailed_metrics_enabled Apigatewayv2Stage#detailed_metrics_enabled}
  */
  readonly detailedMetricsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#logging_level Apigatewayv2Stage#logging_level}
  */
  readonly loggingLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#route_key Apigatewayv2Stage#route_key}
  */
  readonly routeKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#throttling_burst_limit Apigatewayv2Stage#throttling_burst_limit}
  */
  readonly throttlingBurstLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#throttling_rate_limit Apigatewayv2Stage#throttling_rate_limit}
  */
  readonly throttlingRateLimit?: number;
}

function apigatewayv2StageRouteSettingsToTerraform(struct?: Apigatewayv2StageRouteSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data_trace_enabled: cdktf.booleanToTerraform(struct!.dataTraceEnabled),
    detailed_metrics_enabled: cdktf.booleanToTerraform(struct!.detailedMetricsEnabled),
    logging_level: cdktf.stringToTerraform(struct!.loggingLevel),
    route_key: cdktf.stringToTerraform(struct!.routeKey),
    throttling_burst_limit: cdktf.numberToTerraform(struct!.throttlingBurstLimit),
    throttling_rate_limit: cdktf.numberToTerraform(struct!.throttlingRateLimit),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html aws_apigatewayv2_stage}
*/
export class Apigatewayv2Stage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_apigatewayv2_stage";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html aws_apigatewayv2_stage} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Apigatewayv2StageConfig
  */
  public constructor(scope: Construct, id: string, config: Apigatewayv2StageConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_apigatewayv2_stage',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._apiId = config.apiId;
    this._autoDeploy = config.autoDeploy;
    this._clientCertificateId = config.clientCertificateId;
    this._deploymentId = config.deploymentId;
    this._description = config.description;
    this._name = config.name;
    this._stageVariables = config.stageVariables;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._accessLogSettings = config.accessLogSettings;
    this._defaultRouteSettings = config.defaultRouteSettings;
    this._routeSettings = config.routeSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_id - computed: false, optional: false, required: true
  private _apiId: string;
  public get apiId() {
    return this.getStringAttribute('api_id');
  }
  public set apiId(value: string) {
    this._apiId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiIdInput() {
    return this._apiId
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
  public set autoDeploy(value: boolean | cdktf.IResolvable ) {
    this._autoDeploy = value;
  }
  public resetAutoDeploy() {
    this._autoDeploy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDeployInput() {
    return this._autoDeploy
  }

  // client_certificate_id - computed: false, optional: true, required: false
  private _clientCertificateId?: string;
  public get clientCertificateId() {
    return this.getStringAttribute('client_certificate_id');
  }
  public set clientCertificateId(value: string ) {
    this._clientCertificateId = value;
  }
  public resetClientCertificateId() {
    this._clientCertificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateIdInput() {
    return this._clientCertificateId
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
    return this._deploymentId
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // execution_arn - computed: true, optional: false, required: false
  public get executionArn() {
    return this.getStringAttribute('execution_arn');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // invoke_url - computed: true, optional: false, required: false
  public get invokeUrl() {
    return this.getStringAttribute('invoke_url');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // stage_variables - computed: false, optional: true, required: false
  private _stageVariables?: { [key: string]: string } | cdktf.IResolvable;
  public get stageVariables() {
    return this.interpolationForAttribute('stage_variables') as any;
  }
  public set stageVariables(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._stageVariables = value;
  }
  public resetStageVariables() {
    this._stageVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stageVariablesInput() {
    return this._stageVariables
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
  public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
  }

  // access_log_settings - computed: false, optional: true, required: false
  private _accessLogSettings?: Apigatewayv2StageAccessLogSettings[];
  public get accessLogSettings() {
    return this.interpolationForAttribute('access_log_settings') as any;
  }
  public set accessLogSettings(value: Apigatewayv2StageAccessLogSettings[] ) {
    this._accessLogSettings = value;
  }
  public resetAccessLogSettings() {
    this._accessLogSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLogSettingsInput() {
    return this._accessLogSettings
  }

  // default_route_settings - computed: false, optional: true, required: false
  private _defaultRouteSettings?: Apigatewayv2StageDefaultRouteSettings[];
  public get defaultRouteSettings() {
    return this.interpolationForAttribute('default_route_settings') as any;
  }
  public set defaultRouteSettings(value: Apigatewayv2StageDefaultRouteSettings[] ) {
    this._defaultRouteSettings = value;
  }
  public resetDefaultRouteSettings() {
    this._defaultRouteSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRouteSettingsInput() {
    return this._defaultRouteSettings
  }

  // route_settings - computed: false, optional: true, required: false
  private _routeSettings?: Apigatewayv2StageRouteSettings[];
  public get routeSettings() {
    return this.interpolationForAttribute('route_settings') as any;
  }
  public set routeSettings(value: Apigatewayv2StageRouteSettings[] ) {
    this._routeSettings = value;
  }
  public resetRouteSettings() {
    this._routeSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeSettingsInput() {
    return this._routeSettings
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
      name: cdktf.stringToTerraform(this._name),
      stage_variables: cdktf.hashMapper(cdktf.anyToTerraform)(this._stageVariables),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      access_log_settings: cdktf.listMapper(apigatewayv2StageAccessLogSettingsToTerraform)(this._accessLogSettings),
      default_route_settings: cdktf.listMapper(apigatewayv2StageDefaultRouteSettingsToTerraform)(this._defaultRouteSettings),
      route_settings: cdktf.listMapper(apigatewayv2StageRouteSettingsToTerraform)(this._routeSettings),
    };
  }
}
