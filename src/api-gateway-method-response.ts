// https://www.terraform.io/docs/providers/aws/r/api_gateway_method_response.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "http_method": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "resource_id": {
        "type": "string",
        "required": true
      },
      "response_models": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "response_parameters": {
        "type": [
          "map",
          "bool"
        ],
        "optional": true
      },
      "response_parameters_in_json": {
        "type": "string",
        "optional": true
      },
      "rest_api_id": {
        "type": "string",
        "required": true
      },
      "status_code": {
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

export interface ApiGatewayMethodResponseConfig extends TerraformMetaArguments {
  readonly httpMethod: string;
  readonly resourceId: string;
  readonly responseModels?: { [key: string]: string };
  readonly responseParameters?: { [key: string]: boolean };
  readonly responseParametersInJson?: string;
  readonly restApiId: string;
  readonly statusCode: string;
}

// Resource

export class ApiGatewayMethodResponse extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ApiGatewayMethodResponseConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_api_gateway_method_response',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._httpMethod = config.httpMethod;
    this._resourceId = config.resourceId;
    this._responseModels = config.responseModels;
    this._responseParameters = config.responseParameters;
    this._responseParametersInJson = config.responseParametersInJson;
    this._restApiId = config.restApiId;
    this._statusCode = config.statusCode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // http_method - computed: false, optional: false, required: true
  private _httpMethod: string;
  public get httpMethod() {
    return this._httpMethod;
  }
  public set httpMethod(value: string) {
    this._httpMethod = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId: string;
  public get resourceId() {
    return this._resourceId;
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }

  // response_models - computed: false, optional: true, required: false
  private _responseModels?: { [key: string]: string };
  public get responseModels() {
    return this._responseModels;
  }
  public set responseModels(value: { [key: string]: string } | undefined) {
    this._responseModels = value;
  }

  // response_parameters - computed: false, optional: true, required: false
  private _responseParameters?: { [key: string]: boolean };
  public get responseParameters() {
    return this._responseParameters;
  }
  public set responseParameters(value: { [key: string]: boolean } | undefined) {
    this._responseParameters = value;
  }

  // response_parameters_in_json - computed: false, optional: true, required: false
  private _responseParametersInJson?: string;
  public get responseParametersInJson() {
    return this._responseParametersInJson;
  }
  public set responseParametersInJson(value: string | undefined) {
    this._responseParametersInJson = value;
  }

  // rest_api_id - computed: false, optional: false, required: true
  private _restApiId: string;
  public get restApiId() {
    return this._restApiId;
  }
  public set restApiId(value: string) {
    this._restApiId = value;
  }

  // status_code - computed: false, optional: false, required: true
  private _statusCode: string;
  public get statusCode() {
    return this._statusCode;
  }
  public set statusCode(value: string) {
    this._statusCode = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      http_method: this._httpMethod,
      resource_id: this._resourceId,
      response_models: this._responseModels,
      response_parameters: this._responseParameters,
      response_parameters_in_json: this._responseParametersInJson,
      rest_api_id: this._restApiId,
      status_code: this._statusCode,
    };
  }
}
