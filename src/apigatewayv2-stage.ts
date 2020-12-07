// https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Apigatewayv2StageConfig extends cdktf.TerraformMetaArguments {
  readonly apiId: string;
  readonly autoDeploy?: boolean;
  readonly clientCertificateId?: string;
  readonly deploymentId?: string;
  readonly description?: string;
  readonly name: string;
  readonly stageVariables?: { [key: string]: string };
  readonly tags?: { [key: string]: string };
  /** access_log_settings block */
  readonly accessLogSettings?: Apigatewayv2StageAccessLogSettings[];
  /** default_route_settings block */
  readonly defaultRouteSettings?: Apigatewayv2StageDefaultRouteSettings[];
  /** route_settings block */
  readonly routeSettings?: Apigatewayv2StageRouteSettings[];
}
export interface Apigatewayv2StageAccessLogSettings {
  readonly destinationArn: string;
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
  readonly dataTraceEnabled?: boolean;
  readonly detailedMetricsEnabled?: boolean;
  readonly loggingLevel?: string;
  readonly throttlingBurstLimit?: number;
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
  readonly dataTraceEnabled?: boolean;
  readonly detailedMetricsEnabled?: boolean;
  readonly loggingLevel?: string;
  readonly routeKey: string;
  readonly throttlingBurstLimit?: number;
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


// Resource

export class Apigatewayv2Stage extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _autoDeploy?: boolean;
  public get autoDeploy() {
    return this.getBooleanAttribute('auto_deploy');
  }
  public set autoDeploy(value: boolean ) {
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

  // deployment_id - computed: false, optional: true, required: false
  private _deploymentId?: string;
  public get deploymentId() {
    return this.getStringAttribute('deployment_id');
  }
  public set deploymentId(value: string ) {
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
  private _stageVariables?: { [key: string]: string };
  public get stageVariables() {
    return this.interpolationForAttribute('stage_variables') as any;
  }
  public set stageVariables(value: { [key: string]: string } ) {
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
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
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
      access_log_settings: cdktf.listMapper(apigatewayv2StageAccessLogSettingsToTerraform)(this._accessLogSettings),
      default_route_settings: cdktf.listMapper(apigatewayv2StageDefaultRouteSettingsToTerraform)(this._defaultRouteSettings),
      route_settings: cdktf.listMapper(apigatewayv2StageRouteSettingsToTerraform)(this._routeSettings),
    };
  }
}
