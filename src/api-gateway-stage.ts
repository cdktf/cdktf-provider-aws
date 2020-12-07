// https://www.terraform.io/docs/providers/aws/r/api_gateway_stage.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiGatewayStageConfig extends cdktf.TerraformMetaArguments {
  readonly cacheClusterEnabled?: boolean;
  readonly cacheClusterSize?: string;
  readonly clientCertificateId?: string;
  readonly deploymentId: string;
  readonly description?: string;
  readonly documentationVersion?: string;
  readonly restApiId: string;
  readonly stageName: string;
  readonly tags?: { [key: string]: string };
  readonly variables?: { [key: string]: string };
  readonly xrayTracingEnabled?: boolean;
  /** access_log_settings block */
  readonly accessLogSettings?: ApiGatewayStageAccessLogSettings[];
}
export interface ApiGatewayStageAccessLogSettings {
  readonly destinationArn: string;
  readonly format: string;
}

function apiGatewayStageAccessLogSettingsToTerraform(struct?: ApiGatewayStageAccessLogSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    destination_arn: cdktf.stringToTerraform(struct!.destinationArn),
    format: cdktf.stringToTerraform(struct!.format),
  }
}


// Resource

export class ApiGatewayStage extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ApiGatewayStageConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_api_gateway_stage',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._cacheClusterEnabled = config.cacheClusterEnabled;
    this._cacheClusterSize = config.cacheClusterSize;
    this._clientCertificateId = config.clientCertificateId;
    this._deploymentId = config.deploymentId;
    this._description = config.description;
    this._documentationVersion = config.documentationVersion;
    this._restApiId = config.restApiId;
    this._stageName = config.stageName;
    this._tags = config.tags;
    this._variables = config.variables;
    this._xrayTracingEnabled = config.xrayTracingEnabled;
    this._accessLogSettings = config.accessLogSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // cache_cluster_enabled - computed: false, optional: true, required: false
  private _cacheClusterEnabled?: boolean;
  public get cacheClusterEnabled() {
    return this.getBooleanAttribute('cache_cluster_enabled');
  }
  public set cacheClusterEnabled(value: boolean ) {
    this._cacheClusterEnabled = value;
  }
  public resetCacheClusterEnabled() {
    this._cacheClusterEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheClusterEnabledInput() {
    return this._cacheClusterEnabled
  }

  // cache_cluster_size - computed: false, optional: true, required: false
  private _cacheClusterSize?: string;
  public get cacheClusterSize() {
    return this.getStringAttribute('cache_cluster_size');
  }
  public set cacheClusterSize(value: string ) {
    this._cacheClusterSize = value;
  }
  public resetCacheClusterSize() {
    this._cacheClusterSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheClusterSizeInput() {
    return this._cacheClusterSize
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

  // deployment_id - computed: false, optional: false, required: true
  private _deploymentId: string;
  public get deploymentId() {
    return this.getStringAttribute('deployment_id');
  }
  public set deploymentId(value: string) {
    this._deploymentId = value;
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

  // documentation_version - computed: false, optional: true, required: false
  private _documentationVersion?: string;
  public get documentationVersion() {
    return this.getStringAttribute('documentation_version');
  }
  public set documentationVersion(value: string ) {
    this._documentationVersion = value;
  }
  public resetDocumentationVersion() {
    this._documentationVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentationVersionInput() {
    return this._documentationVersion
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

  // variables - computed: false, optional: true, required: false
  private _variables?: { [key: string]: string };
  public get variables() {
    return this.interpolationForAttribute('variables') as any;
  }
  public set variables(value: { [key: string]: string } ) {
    this._variables = value;
  }
  public resetVariables() {
    this._variables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables
  }

  // xray_tracing_enabled - computed: false, optional: true, required: false
  private _xrayTracingEnabled?: boolean;
  public get xrayTracingEnabled() {
    return this.getBooleanAttribute('xray_tracing_enabled');
  }
  public set xrayTracingEnabled(value: boolean ) {
    this._xrayTracingEnabled = value;
  }
  public resetXrayTracingEnabled() {
    this._xrayTracingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xrayTracingEnabledInput() {
    return this._xrayTracingEnabled
  }

  // access_log_settings - computed: false, optional: true, required: false
  private _accessLogSettings?: ApiGatewayStageAccessLogSettings[];
  public get accessLogSettings() {
    return this.interpolationForAttribute('access_log_settings') as any;
  }
  public set accessLogSettings(value: ApiGatewayStageAccessLogSettings[] ) {
    this._accessLogSettings = value;
  }
  public resetAccessLogSettings() {
    this._accessLogSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLogSettingsInput() {
    return this._accessLogSettings
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cache_cluster_enabled: cdktf.booleanToTerraform(this._cacheClusterEnabled),
      cache_cluster_size: cdktf.stringToTerraform(this._cacheClusterSize),
      client_certificate_id: cdktf.stringToTerraform(this._clientCertificateId),
      deployment_id: cdktf.stringToTerraform(this._deploymentId),
      description: cdktf.stringToTerraform(this._description),
      documentation_version: cdktf.stringToTerraform(this._documentationVersion),
      rest_api_id: cdktf.stringToTerraform(this._restApiId),
      stage_name: cdktf.stringToTerraform(this._stageName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      variables: cdktf.hashMapper(cdktf.anyToTerraform)(this._variables),
      xray_tracing_enabled: cdktf.booleanToTerraform(this._xrayTracingEnabled),
      access_log_settings: cdktf.listMapper(apiGatewayStageAccessLogSettingsToTerraform)(this._accessLogSettings),
    };
  }
}
