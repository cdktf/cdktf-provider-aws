// https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route_response.html
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
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "model_selection_expression": {
        "type": "string",
        "optional": true
      },
      "response_models": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "route_id": {
        "type": "string",
        "required": true
      },
      "route_response_key": {
        "type": "string",
        "required": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface Apigatewayv2RouteResponseConfig extends TerraformMetaArguments {
  readonly apiId: string;
  readonly modelSelectionExpression?: string;
  readonly responseModels?: { [key: string]: string };
  readonly routeId: string;
  readonly routeResponseKey: string;
}

// Resource

export class Apigatewayv2RouteResponse extends TerraformResource {

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
    return this._apiId;
  }
  public set apiId(value: string) {
    this._apiId = value;
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

  // response_models - computed: false, optional: true, required: false
  private _responseModels?: { [key: string]: string };
  public get responseModels() {
    return this._responseModels;
  }
  public set responseModels(value: { [key: string]: string } | undefined) {
    this._responseModels = value;
  }

  // route_id - computed: false, optional: false, required: true
  private _routeId: string;
  public get routeId() {
    return this._routeId;
  }
  public set routeId(value: string) {
    this._routeId = value;
  }

  // route_response_key - computed: false, optional: false, required: true
  private _routeResponseKey: string;
  public get routeResponseKey() {
    return this._routeResponseKey;
  }
  public set routeResponseKey(value: string) {
    this._routeResponseKey = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      api_id: this._apiId,
      model_selection_expression: this._modelSelectionExpression,
      response_models: this._responseModels,
      route_id: this._routeId,
      route_response_key: this._routeResponseKey,
    };
  }
}
