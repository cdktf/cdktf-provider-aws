// https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route_response.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Apigatewayv2RouteResponseConfig extends cdktf.TerraformMetaArguments {
  readonly apiId: string;
  readonly modelSelectionExpression?: string;
  readonly responseModels?: { [key: string]: string };
  readonly routeId: string;
  readonly routeResponseKey: string;
}

// Resource

export class Apigatewayv2RouteResponse extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: Apigatewayv2RouteResponseConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_apigatewayv2_route_response',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._apiId = config.apiId;
    this._modelSelectionExpression = config.modelSelectionExpression;
    this._responseModels = config.responseModels;
    this._routeId = config.routeId;
    this._routeResponseKey = config.routeResponseKey;
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

  // response_models - computed: false, optional: true, required: false
  private _responseModels?: { [key: string]: string };
  public get responseModels() {
    return this.interpolationForAttribute('response_models') as any;
  }
  public set responseModels(value: { [key: string]: string } ) {
    this._responseModels = value;
  }
  public resetResponseModels() {
    this._responseModels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseModelsInput() {
    return this._responseModels
  }

  // route_id - computed: false, optional: false, required: true
  private _routeId: string;
  public get routeId() {
    return this.getStringAttribute('route_id');
  }
  public set routeId(value: string) {
    this._routeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeIdInput() {
    return this._routeId
  }

  // route_response_key - computed: false, optional: false, required: true
  private _routeResponseKey: string;
  public get routeResponseKey() {
    return this.getStringAttribute('route_response_key');
  }
  public set routeResponseKey(value: string) {
    this._routeResponseKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeResponseKeyInput() {
    return this._routeResponseKey
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_id: cdktf.stringToTerraform(this._apiId),
      model_selection_expression: cdktf.stringToTerraform(this._modelSelectionExpression),
      response_models: cdktf.hashMapper(cdktf.anyToTerraform)(this._responseModels),
      route_id: cdktf.stringToTerraform(this._routeId),
      route_response_key: cdktf.stringToTerraform(this._routeResponseKey),
    };
  }
}
