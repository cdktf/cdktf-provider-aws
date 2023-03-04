// https://www.terraform.io/docs/providers/aws/r/api_gateway_stage
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiGatewayStageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#cache_cluster_enabled ApiGatewayStage#cache_cluster_enabled}
  */
  readonly cacheClusterEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#cache_cluster_size ApiGatewayStage#cache_cluster_size}
  */
  readonly cacheClusterSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#client_certificate_id ApiGatewayStage#client_certificate_id}
  */
  readonly clientCertificateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#deployment_id ApiGatewayStage#deployment_id}
  */
  readonly deploymentId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#description ApiGatewayStage#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#documentation_version ApiGatewayStage#documentation_version}
  */
  readonly documentationVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#id ApiGatewayStage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#rest_api_id ApiGatewayStage#rest_api_id}
  */
  readonly restApiId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#stage_name ApiGatewayStage#stage_name}
  */
  readonly stageName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#tags ApiGatewayStage#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#tags_all ApiGatewayStage#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#variables ApiGatewayStage#variables}
  */
  readonly variables?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#xray_tracing_enabled ApiGatewayStage#xray_tracing_enabled}
  */
  readonly xrayTracingEnabled?: boolean | cdktf.IResolvable;
  /**
  * access_log_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#access_log_settings ApiGatewayStage#access_log_settings}
  */
  readonly accessLogSettings?: ApiGatewayStageAccessLogSettings;
  /**
  * canary_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#canary_settings ApiGatewayStage#canary_settings}
  */
  readonly canarySettings?: ApiGatewayStageCanarySettings;
}
export interface ApiGatewayStageAccessLogSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#destination_arn ApiGatewayStage#destination_arn}
  */
  readonly destinationArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#format ApiGatewayStage#format}
  */
  readonly format: string;
}

export function apiGatewayStageAccessLogSettingsToTerraform(struct?: ApiGatewayStageAccessLogSettingsOutputReference | ApiGatewayStageAccessLogSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_arn: cdktf.stringToTerraform(struct!.destinationArn),
    format: cdktf.stringToTerraform(struct!.format),
  }
}

export class ApiGatewayStageAccessLogSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiGatewayStageAccessLogSettings | undefined {
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

  public set internalValue(value: ApiGatewayStageAccessLogSettings | undefined) {
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
export interface ApiGatewayStageCanarySettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#percent_traffic ApiGatewayStage#percent_traffic}
  */
  readonly percentTraffic?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#stage_variable_overrides ApiGatewayStage#stage_variable_overrides}
  */
  readonly stageVariableOverrides?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#use_stage_cache ApiGatewayStage#use_stage_cache}
  */
  readonly useStageCache?: boolean | cdktf.IResolvable;
}

export function apiGatewayStageCanarySettingsToTerraform(struct?: ApiGatewayStageCanarySettingsOutputReference | ApiGatewayStageCanarySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    percent_traffic: cdktf.numberToTerraform(struct!.percentTraffic),
    stage_variable_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.stageVariableOverrides),
    use_stage_cache: cdktf.booleanToTerraform(struct!.useStageCache),
  }
}

export class ApiGatewayStageCanarySettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiGatewayStageCanarySettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._percentTraffic !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentTraffic = this._percentTraffic;
    }
    if (this._stageVariableOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.stageVariableOverrides = this._stageVariableOverrides;
    }
    if (this._useStageCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.useStageCache = this._useStageCache;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayStageCanarySettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._percentTraffic = undefined;
      this._stageVariableOverrides = undefined;
      this._useStageCache = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._percentTraffic = value.percentTraffic;
      this._stageVariableOverrides = value.stageVariableOverrides;
      this._useStageCache = value.useStageCache;
    }
  }

  // percent_traffic - computed: false, optional: true, required: false
  private _percentTraffic?: number; 
  public get percentTraffic() {
    return this.getNumberAttribute('percent_traffic');
  }
  public set percentTraffic(value: number) {
    this._percentTraffic = value;
  }
  public resetPercentTraffic() {
    this._percentTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentTrafficInput() {
    return this._percentTraffic;
  }

  // stage_variable_overrides - computed: false, optional: true, required: false
  private _stageVariableOverrides?: { [key: string]: string }; 
  public get stageVariableOverrides() {
    return this.getStringMapAttribute('stage_variable_overrides');
  }
  public set stageVariableOverrides(value: { [key: string]: string }) {
    this._stageVariableOverrides = value;
  }
  public resetStageVariableOverrides() {
    this._stageVariableOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stageVariableOverridesInput() {
    return this._stageVariableOverrides;
  }

  // use_stage_cache - computed: false, optional: true, required: false
  private _useStageCache?: boolean | cdktf.IResolvable; 
  public get useStageCache() {
    return this.getBooleanAttribute('use_stage_cache');
  }
  public set useStageCache(value: boolean | cdktf.IResolvable) {
    this._useStageCache = value;
  }
  public resetUseStageCache() {
    this._useStageCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useStageCacheInput() {
    return this._useStageCache;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage aws_api_gateway_stage}
*/
export class ApiGatewayStage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_api_gateway_stage";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage aws_api_gateway_stage} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiGatewayStageConfig
  */
  public constructor(scope: Construct, id: string, config: ApiGatewayStageConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_api_gateway_stage',
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
    this._cacheClusterEnabled = config.cacheClusterEnabled;
    this._cacheClusterSize = config.cacheClusterSize;
    this._clientCertificateId = config.clientCertificateId;
    this._deploymentId = config.deploymentId;
    this._description = config.description;
    this._documentationVersion = config.documentationVersion;
    this._id = config.id;
    this._restApiId = config.restApiId;
    this._stageName = config.stageName;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._variables = config.variables;
    this._xrayTracingEnabled = config.xrayTracingEnabled;
    this._accessLogSettings.internalValue = config.accessLogSettings;
    this._canarySettings.internalValue = config.canarySettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // cache_cluster_enabled - computed: false, optional: true, required: false
  private _cacheClusterEnabled?: boolean | cdktf.IResolvable; 
  public get cacheClusterEnabled() {
    return this.getBooleanAttribute('cache_cluster_enabled');
  }
  public set cacheClusterEnabled(value: boolean | cdktf.IResolvable) {
    this._cacheClusterEnabled = value;
  }
  public resetCacheClusterEnabled() {
    this._cacheClusterEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheClusterEnabledInput() {
    return this._cacheClusterEnabled;
  }

  // cache_cluster_size - computed: false, optional: true, required: false
  private _cacheClusterSize?: string; 
  public get cacheClusterSize() {
    return this.getStringAttribute('cache_cluster_size');
  }
  public set cacheClusterSize(value: string) {
    this._cacheClusterSize = value;
  }
  public resetCacheClusterSize() {
    this._cacheClusterSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheClusterSizeInput() {
    return this._cacheClusterSize;
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

  // deployment_id - computed: false, optional: false, required: true
  private _deploymentId?: string; 
  public get deploymentId() {
    return this.getStringAttribute('deployment_id');
  }
  public set deploymentId(value: string) {
    this._deploymentId = value;
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

  // documentation_version - computed: false, optional: true, required: false
  private _documentationVersion?: string; 
  public get documentationVersion() {
    return this.getStringAttribute('documentation_version');
  }
  public set documentationVersion(value: string) {
    this._documentationVersion = value;
  }
  public resetDocumentationVersion() {
    this._documentationVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentationVersionInput() {
    return this._documentationVersion;
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

  // variables - computed: false, optional: true, required: false
  private _variables?: { [key: string]: string }; 
  public get variables() {
    return this.getStringMapAttribute('variables');
  }
  public set variables(value: { [key: string]: string }) {
    this._variables = value;
  }
  public resetVariables() {
    this._variables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables;
  }

  // web_acl_arn - computed: true, optional: false, required: false
  public get webAclArn() {
    return this.getStringAttribute('web_acl_arn');
  }

  // xray_tracing_enabled - computed: false, optional: true, required: false
  private _xrayTracingEnabled?: boolean | cdktf.IResolvable; 
  public get xrayTracingEnabled() {
    return this.getBooleanAttribute('xray_tracing_enabled');
  }
  public set xrayTracingEnabled(value: boolean | cdktf.IResolvable) {
    this._xrayTracingEnabled = value;
  }
  public resetXrayTracingEnabled() {
    this._xrayTracingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xrayTracingEnabledInput() {
    return this._xrayTracingEnabled;
  }

  // access_log_settings - computed: false, optional: true, required: false
  private _accessLogSettings = new ApiGatewayStageAccessLogSettingsOutputReference(this, "access_log_settings");
  public get accessLogSettings() {
    return this._accessLogSettings;
  }
  public putAccessLogSettings(value: ApiGatewayStageAccessLogSettings) {
    this._accessLogSettings.internalValue = value;
  }
  public resetAccessLogSettings() {
    this._accessLogSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLogSettingsInput() {
    return this._accessLogSettings.internalValue;
  }

  // canary_settings - computed: false, optional: true, required: false
  private _canarySettings = new ApiGatewayStageCanarySettingsOutputReference(this, "canary_settings");
  public get canarySettings() {
    return this._canarySettings;
  }
  public putCanarySettings(value: ApiGatewayStageCanarySettings) {
    this._canarySettings.internalValue = value;
  }
  public resetCanarySettings() {
    this._canarySettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canarySettingsInput() {
    return this._canarySettings.internalValue;
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
      id: cdktf.stringToTerraform(this._id),
      rest_api_id: cdktf.stringToTerraform(this._restApiId),
      stage_name: cdktf.stringToTerraform(this._stageName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      variables: cdktf.hashMapper(cdktf.stringToTerraform)(this._variables),
      xray_tracing_enabled: cdktf.booleanToTerraform(this._xrayTracingEnabled),
      access_log_settings: apiGatewayStageAccessLogSettingsToTerraform(this._accessLogSettings.internalValue),
      canary_settings: apiGatewayStageCanarySettingsToTerraform(this._canarySettings.internalValue),
    };
  }
}
