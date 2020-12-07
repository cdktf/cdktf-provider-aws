// https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Apigatewayv2ApiConfig extends cdktf.TerraformMetaArguments {
  readonly apiKeySelectionExpression?: string;
  readonly credentialsArn?: string;
  readonly description?: string;
  readonly name: string;
  readonly protocolType: string;
  readonly routeKey?: string;
  readonly routeSelectionExpression?: string;
  readonly tags?: { [key: string]: string };
  readonly target?: string;
  readonly version?: string;
  /** cors_configuration block */
  readonly corsConfiguration?: Apigatewayv2ApiCorsConfiguration[];
}
export interface Apigatewayv2ApiCorsConfiguration {
  readonly allowCredentials?: boolean;
  readonly allowHeaders?: string[];
  readonly allowMethods?: string[];
  readonly allowOrigins?: string[];
  readonly exposeHeaders?: string[];
  readonly maxAge?: number;
}

function apigatewayv2ApiCorsConfigurationToTerraform(struct?: Apigatewayv2ApiCorsConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allow_credentials: cdktf.booleanToTerraform(struct!.allowCredentials),
    allow_headers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowHeaders),
    allow_methods: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowMethods),
    allow_origins: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowOrigins),
    expose_headers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.exposeHeaders),
    max_age: cdktf.numberToTerraform(struct!.maxAge),
  }
}


// Resource

export class Apigatewayv2Api extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: Apigatewayv2ApiConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_apigatewayv2_api',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._apiKeySelectionExpression = config.apiKeySelectionExpression;
    this._credentialsArn = config.credentialsArn;
    this._description = config.description;
    this._name = config.name;
    this._protocolType = config.protocolType;
    this._routeKey = config.routeKey;
    this._routeSelectionExpression = config.routeSelectionExpression;
    this._tags = config.tags;
    this._target = config.target;
    this._version = config.version;
    this._corsConfiguration = config.corsConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_endpoint - computed: true, optional: false, required: false
  public get apiEndpoint() {
    return this.getStringAttribute('api_endpoint');
  }

  // api_key_selection_expression - computed: false, optional: true, required: false
  private _apiKeySelectionExpression?: string;
  public get apiKeySelectionExpression() {
    return this.getStringAttribute('api_key_selection_expression');
  }
  public set apiKeySelectionExpression(value: string ) {
    this._apiKeySelectionExpression = value;
  }
  public resetApiKeySelectionExpression() {
    this._apiKeySelectionExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeySelectionExpressionInput() {
    return this._apiKeySelectionExpression
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // credentials_arn - computed: false, optional: true, required: false
  private _credentialsArn?: string;
  public get credentialsArn() {
    return this.getStringAttribute('credentials_arn');
  }
  public set credentialsArn(value: string ) {
    this._credentialsArn = value;
  }
  public resetCredentialsArn() {
    this._credentialsArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsArnInput() {
    return this._credentialsArn
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

  // protocol_type - computed: false, optional: false, required: true
  private _protocolType: string;
  public get protocolType() {
    return this.getStringAttribute('protocol_type');
  }
  public set protocolType(value: string) {
    this._protocolType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolTypeInput() {
    return this._protocolType
  }

  // route_key - computed: false, optional: true, required: false
  private _routeKey?: string;
  public get routeKey() {
    return this.getStringAttribute('route_key');
  }
  public set routeKey(value: string ) {
    this._routeKey = value;
  }
  public resetRouteKey() {
    this._routeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeKeyInput() {
    return this._routeKey
  }

  // route_selection_expression - computed: false, optional: true, required: false
  private _routeSelectionExpression?: string;
  public get routeSelectionExpression() {
    return this.getStringAttribute('route_selection_expression');
  }
  public set routeSelectionExpression(value: string ) {
    this._routeSelectionExpression = value;
  }
  public resetRouteSelectionExpression() {
    this._routeSelectionExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeSelectionExpressionInput() {
    return this._routeSelectionExpression
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

  // target - computed: false, optional: true, required: false
  private _target?: string;
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string ) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target
  }

  // version - computed: false, optional: true, required: false
  private _version?: string;
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string ) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version
  }

  // cors_configuration - computed: false, optional: true, required: false
  private _corsConfiguration?: Apigatewayv2ApiCorsConfiguration[];
  public get corsConfiguration() {
    return this.interpolationForAttribute('cors_configuration') as any;
  }
  public set corsConfiguration(value: Apigatewayv2ApiCorsConfiguration[] ) {
    this._corsConfiguration = value;
  }
  public resetCorsConfiguration() {
    this._corsConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsConfigurationInput() {
    return this._corsConfiguration
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_key_selection_expression: cdktf.stringToTerraform(this._apiKeySelectionExpression),
      credentials_arn: cdktf.stringToTerraform(this._credentialsArn),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      protocol_type: cdktf.stringToTerraform(this._protocolType),
      route_key: cdktf.stringToTerraform(this._routeKey),
      route_selection_expression: cdktf.stringToTerraform(this._routeSelectionExpression),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      target: cdktf.stringToTerraform(this._target),
      version: cdktf.stringToTerraform(this._version),
      cors_configuration: cdktf.listMapper(apigatewayv2ApiCorsConfigurationToTerraform)(this._corsConfiguration),
    };
  }
}
