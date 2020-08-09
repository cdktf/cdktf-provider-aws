// https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "response_parameters": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "response_templates": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "response_type": {
        "type": "string",
        "required": true
      },
      "rest_api_id": {
        "type": "string",
        "required": true
      },
      "status_code": {
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

export interface ApiGatewayGatewayResponseConfig extends TerraformMetaArguments {
  readonly responseParameters?: { [key: string]: string };
  readonly responseTemplates?: { [key: string]: string };
  readonly responseType: string;
  readonly restApiId: string;
  readonly statusCode?: string;
}

// Resource

export class ApiGatewayGatewayResponse extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ApiGatewayGatewayResponseConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_api_gateway_gateway_response',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._responseParameters = config.responseParameters;
    this._responseTemplates = config.responseTemplates;
    this._responseType = config.responseType;
    this._restApiId = config.restApiId;
    this._statusCode = config.statusCode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // response_parameters - computed: false, optional: true, required: false
  private _responseParameters?: { [key: string]: string };
  public get responseParameters() {
    return this._responseParameters;
  }
  public set responseParameters(value: { [key: string]: string } | undefined) {
    this._responseParameters = value;
  }

  // response_templates - computed: false, optional: true, required: false
  private _responseTemplates?: { [key: string]: string };
  public get responseTemplates() {
    return this._responseTemplates;
  }
  public set responseTemplates(value: { [key: string]: string } | undefined) {
    this._responseTemplates = value;
  }

  // response_type - computed: false, optional: false, required: true
  private _responseType: string;
  public get responseType() {
    return this._responseType;
  }
  public set responseType(value: string) {
    this._responseType = value;
  }

  // rest_api_id - computed: false, optional: false, required: true
  private _restApiId: string;
  public get restApiId() {
    return this._restApiId;
  }
  public set restApiId(value: string) {
    this._restApiId = value;
  }

  // status_code - computed: false, optional: true, required: false
  private _statusCode?: string;
  public get statusCode() {
    return this._statusCode;
  }
  public set statusCode(value: string | undefined) {
    this._statusCode = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      response_parameters: this._responseParameters,
      response_templates: this._responseTemplates,
      response_type: this._responseType,
      rest_api_id: this._restApiId,
      status_code: this._statusCode,
    };
  }
}
