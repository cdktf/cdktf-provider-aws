// https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Apigatewayv2RouteConfig extends cdktf.TerraformMetaArguments {
  readonly apiId: string;
  readonly apiKeyRequired?: boolean;
  readonly authorizationScopes?: string[];
  readonly authorizationType?: string;
  readonly authorizerId?: string;
  readonly modelSelectionExpression?: string;
  readonly operationName?: string;
  readonly requestModels?: { [key: string]: string };
  readonly routeKey: string;
  readonly routeResponseSelectionExpression?: string;
  readonly target?: string;
}

// Resource

export class Apigatewayv2Route extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: Apigatewayv2RouteConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_apigatewayv2_route',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._apiId = config.apiId;
    this._apiKeyRequired = config.apiKeyRequired;
    this._authorizationScopes = config.authorizationScopes;
    this._authorizationType = config.authorizationType;
    this._authorizerId = config.authorizerId;
    this._modelSelectionExpression = config.modelSelectionExpression;
    this._operationName = config.operationName;
    this._requestModels = config.requestModels;
    this._routeKey = config.routeKey;
    this._routeResponseSelectionExpression = config.routeResponseSelectionExpression;
    this._target = config.target;
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

  // api_key_required - computed: false, optional: true, required: false
  private _apiKeyRequired?: boolean;
  public get apiKeyRequired() {
    return this.getBooleanAttribute('api_key_required');
  }
  public set apiKeyRequired(value: boolean ) {
    this._apiKeyRequired = value;
  }
  public resetApiKeyRequired() {
    this._apiKeyRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyRequiredInput() {
    return this._apiKeyRequired
  }

  // authorization_scopes - computed: false, optional: true, required: false
  private _authorizationScopes?: string[];
  public get authorizationScopes() {
    return this.getListAttribute('authorization_scopes');
  }
  public set authorizationScopes(value: string[] ) {
    this._authorizationScopes = value;
  }
  public resetAuthorizationScopes() {
    this._authorizationScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationScopesInput() {
    return this._authorizationScopes
  }

  // authorization_type - computed: false, optional: true, required: false
  private _authorizationType?: string;
  public get authorizationType() {
    return this.getStringAttribute('authorization_type');
  }
  public set authorizationType(value: string ) {
    this._authorizationType = value;
  }
  public resetAuthorizationType() {
    this._authorizationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationTypeInput() {
    return this._authorizationType
  }

  // authorizer_id - computed: false, optional: true, required: false
  private _authorizerId?: string;
  public get authorizerId() {
    return this.getStringAttribute('authorizer_id');
  }
  public set authorizerId(value: string ) {
    this._authorizerId = value;
  }
  public resetAuthorizerId() {
    this._authorizerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerIdInput() {
    return this._authorizerId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // model_selection_expression - computed: false, optional: true, required: false
  private _modelSelectionExpression?: string;
  public get modelSelectionExpression() {
    return this.getStringAttribute('model_selection_expression');
  }
  public set modelSelectionExpression(value: string ) {
    this._modelSelectionExpression = value;
  }
  public resetModelSelectionExpression() {
    this._modelSelectionExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelSelectionExpressionInput() {
    return this._modelSelectionExpression
  }

  // operation_name - computed: false, optional: true, required: false
  private _operationName?: string;
  public get operationName() {
    return this.getStringAttribute('operation_name');
  }
  public set operationName(value: string ) {
    this._operationName = value;
  }
  public resetOperationName() {
    this._operationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationNameInput() {
    return this._operationName
  }

  // request_models - computed: false, optional: true, required: false
  private _requestModels?: { [key: string]: string };
  public get requestModels() {
    return this.interpolationForAttribute('request_models') as any;
  }
  public set requestModels(value: { [key: string]: string } ) {
    this._requestModels = value;
  }
  public resetRequestModels() {
    this._requestModels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestModelsInput() {
    return this._requestModels
  }

  // route_key - computed: false, optional: false, required: true
  private _routeKey: string;
  public get routeKey() {
    return this.getStringAttribute('route_key');
  }
  public set routeKey(value: string) {
    this._routeKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeKeyInput() {
    return this._routeKey
  }

  // route_response_selection_expression - computed: false, optional: true, required: false
  private _routeResponseSelectionExpression?: string;
  public get routeResponseSelectionExpression() {
    return this.getStringAttribute('route_response_selection_expression');
  }
  public set routeResponseSelectionExpression(value: string ) {
    this._routeResponseSelectionExpression = value;
  }
  public resetRouteResponseSelectionExpression() {
    this._routeResponseSelectionExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeResponseSelectionExpressionInput() {
    return this._routeResponseSelectionExpression
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_id: cdktf.stringToTerraform(this._apiId),
      api_key_required: cdktf.booleanToTerraform(this._apiKeyRequired),
      authorization_scopes: cdktf.listMapper(cdktf.stringToTerraform)(this._authorizationScopes),
      authorization_type: cdktf.stringToTerraform(this._authorizationType),
      authorizer_id: cdktf.stringToTerraform(this._authorizerId),
      model_selection_expression: cdktf.stringToTerraform(this._modelSelectionExpression),
      operation_name: cdktf.stringToTerraform(this._operationName),
      request_models: cdktf.hashMapper(cdktf.anyToTerraform)(this._requestModels),
      route_key: cdktf.stringToTerraform(this._routeKey),
      route_response_selection_expression: cdktf.stringToTerraform(this._routeResponseSelectionExpression),
      target: cdktf.stringToTerraform(this._target),
    };
  }
}
