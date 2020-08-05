// https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "api_id": {
        "type": "string",
        "required": true
      },
      "api_key_required": {
        "type": "bool",
        "optional": true
      },
      "authorization_scopes": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      },
      "authorization_type": {
        "type": "string",
        "optional": true
      },
      "authorizer_id": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "model_selection_expression": {
        "type": "string",
        "optional": true
      },
      "operation_name": {
        "type": "string",
        "optional": true
      },
      "request_models": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "route_key": {
        "type": "string",
        "required": true
      },
      "route_response_selection_expression": {
        "type": "string",
        "optional": true
      },
      "target": {
        "type": "string",
        "optional": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface Apigatewayv2RouteConfig extends TerraformMetaArguments {
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

export class Apigatewayv2Route extends TerraformResource {

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
    return this._apiId;
  }
  public set apiId(value: string) {
    this._apiId = value;
  }

  // api_key_required - computed: false, optional: true, required: false
  private _apiKeyRequired?: boolean;
  public get apiKeyRequired() {
    return this._apiKeyRequired;
  }
  public set apiKeyRequired(value: boolean | undefined) {
    this._apiKeyRequired = value;
  }

  // authorization_scopes - computed: false, optional: true, required: false
  private _authorizationScopes?: string[];
  public get authorizationScopes() {
    return this._authorizationScopes;
  }
  public set authorizationScopes(value: string[] | undefined) {
    this._authorizationScopes = value;
  }

  // authorization_type - computed: false, optional: true, required: false
  private _authorizationType?: string;
  public get authorizationType() {
    return this._authorizationType;
  }
  public set authorizationType(value: string | undefined) {
    this._authorizationType = value;
  }

  // authorizer_id - computed: false, optional: true, required: false
  private _authorizerId?: string;
  public get authorizerId() {
    return this._authorizerId;
  }
  public set authorizerId(value: string | undefined) {
    this._authorizerId = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // model_selection_expression - computed: false, optional: true, required: false
  private _modelSelectionExpression?: string;
  public get modelSelectionExpression() {
    return this._modelSelectionExpression;
  }
  public set modelSelectionExpression(value: string | undefined) {
    this._modelSelectionExpression = value;
  }

  // operation_name - computed: false, optional: true, required: false
  private _operationName?: string;
  public get operationName() {
    return this._operationName;
  }
  public set operationName(value: string | undefined) {
    this._operationName = value;
  }

  // request_models - computed: false, optional: true, required: false
  private _requestModels?: { [key: string]: string };
  public get requestModels() {
    return this._requestModels;
  }
  public set requestModels(value: { [key: string]: string } | undefined) {
    this._requestModels = value;
  }

  // route_key - computed: false, optional: false, required: true
  private _routeKey: string;
  public get routeKey() {
    return this._routeKey;
  }
  public set routeKey(value: string) {
    this._routeKey = value;
  }

  // route_response_selection_expression - computed: false, optional: true, required: false
  private _routeResponseSelectionExpression?: string;
  public get routeResponseSelectionExpression() {
    return this._routeResponseSelectionExpression;
  }
  public set routeResponseSelectionExpression(value: string | undefined) {
    this._routeResponseSelectionExpression = value;
  }

  // target - computed: false, optional: true, required: false
  private _target?: string;
  public get target() {
    return this._target;
  }
  public set target(value: string | undefined) {
    this._target = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      api_id: this._apiId,
      api_key_required: this._apiKeyRequired,
      authorization_scopes: this._authorizationScopes,
      authorization_type: this._authorizationType,
      authorizer_id: this._authorizerId,
      model_selection_expression: this._modelSelectionExpression,
      operation_name: this._operationName,
      request_models: this._requestModels,
      route_key: this._routeKey,
      route_response_selection_expression: this._routeResponseSelectionExpression,
      target: this._target,
    };
  }
}
