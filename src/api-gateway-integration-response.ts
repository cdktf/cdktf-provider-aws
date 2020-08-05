// https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "content_handling": {
        "type": "string",
        "optional": true
      },
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
      "response_parameters": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "response_parameters_in_json": {
        "type": "string",
        "optional": true
      },
      "response_templates": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "rest_api_id": {
        "type": "string",
        "required": true
      },
      "selection_pattern": {
        "type": "string",
        "optional": true
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

export interface ApiGatewayIntegrationResponseConfig extends TerraformMetaArguments {
  readonly contentHandling?: string;
  readonly httpMethod: string;
  readonly resourceId: string;
  readonly responseParameters?: { [key: string]: string };
  readonly responseParametersInJson?: string;
  readonly responseTemplates?: { [key: string]: string };
  readonly restApiId: string;
  readonly selectionPattern?: string;
  readonly statusCode: string;
}

// Resource

export class ApiGatewayIntegrationResponse extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ApiGatewayIntegrationResponseConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_api_gateway_integration_response',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._contentHandling = config.contentHandling;
    this._httpMethod = config.httpMethod;
    this._resourceId = config.resourceId;
    this._responseParameters = config.responseParameters;
    this._responseParametersInJson = config.responseParametersInJson;
    this._responseTemplates = config.responseTemplates;
    this._restApiId = config.restApiId;
    this._selectionPattern = config.selectionPattern;
    this._statusCode = config.statusCode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // content_handling - computed: false, optional: true, required: false
  private _contentHandling?: string;
  public get contentHandling() {
    return this._contentHandling;
  }
  public set contentHandling(value: string | undefined) {
    this._contentHandling = value;
  }

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

  // response_parameters - computed: false, optional: true, required: false
  private _responseParameters?: { [key: string]: string };
  public get responseParameters() {
    return this._responseParameters;
  }
  public set responseParameters(value: { [key: string]: string } | undefined) {
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

  // response_templates - computed: false, optional: true, required: false
  private _responseTemplates?: { [key: string]: string };
  public get responseTemplates() {
    return this._responseTemplates;
  }
  public set responseTemplates(value: { [key: string]: string } | undefined) {
    this._responseTemplates = value;
  }

  // rest_api_id - computed: false, optional: false, required: true
  private _restApiId: string;
  public get restApiId() {
    return this._restApiId;
  }
  public set restApiId(value: string) {
    this._restApiId = value;
  }

  // selection_pattern - computed: false, optional: true, required: false
  private _selectionPattern?: string;
  public get selectionPattern() {
    return this._selectionPattern;
  }
  public set selectionPattern(value: string | undefined) {
    this._selectionPattern = value;
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
      content_handling: this._contentHandling,
      http_method: this._httpMethod,
      resource_id: this._resourceId,
      response_parameters: this._responseParameters,
      response_parameters_in_json: this._responseParametersInJson,
      response_templates: this._responseTemplates,
      rest_api_id: this._restApiId,
      selection_pattern: this._selectionPattern,
      status_code: this._statusCode,
    };
  }
}
