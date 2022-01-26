// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* Amazon API Gateway Websocket and HTTP APIs
*/
export interface Apigatewayv2RouteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#api_id Apigatewayv2Route#api_id}
  */
  readonly apiId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#api_key_required Apigatewayv2Route#api_key_required}
  */
  readonly apiKeyRequired?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#authorization_scopes Apigatewayv2Route#authorization_scopes}
  */
  readonly authorizationScopes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#authorization_type Apigatewayv2Route#authorization_type}
  */
  readonly authorizationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#authorizer_id Apigatewayv2Route#authorizer_id}
  */
  readonly authorizerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#model_selection_expression Apigatewayv2Route#model_selection_expression}
  */
  readonly modelSelectionExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#operation_name Apigatewayv2Route#operation_name}
  */
  readonly operationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#request_models Apigatewayv2Route#request_models}
  */
  readonly requestModels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#route_key Apigatewayv2Route#route_key}
  */
  readonly routeKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#route_response_selection_expression Apigatewayv2Route#route_response_selection_expression}
  */
  readonly routeResponseSelectionExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#target Apigatewayv2Route#target}
  */
  readonly target?: string;
  /**
  * request_parameter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#request_parameter Apigatewayv2Route#request_parameter}
  */
  readonly requestParameter?: Apigatewayv2RouteRequestParameter[] | cdktf.IResolvable;
}
export interface Apigatewayv2RouteRequestParameter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#request_parameter_key Apigatewayv2Route#request_parameter_key}
  */
  readonly requestParameterKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#required Apigatewayv2Route#required}
  */
  readonly required: boolean | cdktf.IResolvable;
}

export function apigatewayv2RouteRequestParameterToTerraform(struct?: Apigatewayv2RouteRequestParameter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request_parameter_key: cdktf.stringToTerraform(struct!.requestParameterKey),
    required: cdktf.booleanToTerraform(struct!.required),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route aws_apigatewayv2_route}
*/
export class Apigatewayv2Route extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_apigatewayv2_route";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route aws_apigatewayv2_route} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Apigatewayv2RouteConfig
  */
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
    this._requestParameter = config.requestParameter;
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

  // api_key_required - computed: false, optional: true, required: false
  private _apiKeyRequired?: boolean | cdktf.IResolvable; 
  public get apiKeyRequired() {
    return this.getBooleanAttribute('api_key_required');
  }
  public set apiKeyRequired(value: boolean | cdktf.IResolvable) {
    this._apiKeyRequired = value;
  }
  public resetApiKeyRequired() {
    this._apiKeyRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyRequiredInput() {
    return this._apiKeyRequired;
  }

  // authorization_scopes - computed: false, optional: true, required: false
  private _authorizationScopes?: string[]; 
  public get authorizationScopes() {
    return cdktf.Fn.tolist(this.getListAttribute('authorization_scopes'));
  }
  public set authorizationScopes(value: string[]) {
    this._authorizationScopes = value;
  }
  public resetAuthorizationScopes() {
    this._authorizationScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationScopesInput() {
    return this._authorizationScopes;
  }

  // authorization_type - computed: false, optional: true, required: false
  private _authorizationType?: string; 
  public get authorizationType() {
    return this.getStringAttribute('authorization_type');
  }
  public set authorizationType(value: string) {
    this._authorizationType = value;
  }
  public resetAuthorizationType() {
    this._authorizationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationTypeInput() {
    return this._authorizationType;
  }

  // authorizer_id - computed: false, optional: true, required: false
  private _authorizerId?: string; 
  public get authorizerId() {
    return this.getStringAttribute('authorizer_id');
  }
  public set authorizerId(value: string) {
    this._authorizerId = value;
  }
  public resetAuthorizerId() {
    this._authorizerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerIdInput() {
    return this._authorizerId;
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
  public set modelSelectionExpression(value: string) {
    this._modelSelectionExpression = value;
  }
  public resetModelSelectionExpression() {
    this._modelSelectionExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelSelectionExpressionInput() {
    return this._modelSelectionExpression;
  }

  // operation_name - computed: false, optional: true, required: false
  private _operationName?: string; 
  public get operationName() {
    return this.getStringAttribute('operation_name');
  }
  public set operationName(value: string) {
    this._operationName = value;
  }
  public resetOperationName() {
    this._operationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationNameInput() {
    return this._operationName;
  }

  // request_models - computed: false, optional: true, required: false
  private _requestModels?: { [key: string]: string }; 
  public get requestModels() {
    return this.getStringMapAttribute('request_models');
  }
  public set requestModels(value: { [key: string]: string }) {
    this._requestModels = value;
  }
  public resetRequestModels() {
    this._requestModels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestModelsInput() {
    return this._requestModels;
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

  // route_response_selection_expression - computed: false, optional: true, required: false
  private _routeResponseSelectionExpression?: string; 
  public get routeResponseSelectionExpression() {
    return this.getStringAttribute('route_response_selection_expression');
  }
  public set routeResponseSelectionExpression(value: string) {
    this._routeResponseSelectionExpression = value;
  }
  public resetRouteResponseSelectionExpression() {
    this._routeResponseSelectionExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeResponseSelectionExpressionInput() {
    return this._routeResponseSelectionExpression;
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // request_parameter - computed: false, optional: true, required: false
  private _requestParameter?: Apigatewayv2RouteRequestParameter[] | cdktf.IResolvable; 
  public get requestParameter() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('request_parameter')));
  }
  public set requestParameter(value: Apigatewayv2RouteRequestParameter[] | cdktf.IResolvable) {
    this._requestParameter = value;
  }
  public resetRequestParameter() {
    this._requestParameter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestParameterInput() {
    return this._requestParameter;
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
      request_models: cdktf.hashMapper(cdktf.stringToTerraform)(this._requestModels),
      route_key: cdktf.stringToTerraform(this._routeKey),
      route_response_selection_expression: cdktf.stringToTerraform(this._routeResponseSelectionExpression),
      target: cdktf.stringToTerraform(this._target),
      request_parameter: cdktf.listMapper(apigatewayv2RouteRequestParameterToTerraform)(this._requestParameter),
    };
  }
}
