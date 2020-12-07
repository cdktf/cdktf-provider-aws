// https://www.terraform.io/docs/providers/aws/r/api_gateway_method_response.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiGatewayMethodResponseConfig extends cdktf.TerraformMetaArguments {
  readonly httpMethod: string;
  readonly resourceId: string;
  readonly responseModels?: { [key: string]: string };
  readonly responseParameters?: { [key: string]: boolean };
  readonly responseParametersInJson?: string;
  readonly restApiId: string;
  readonly statusCode: string;
}

// Resource

export class ApiGatewayMethodResponse extends cdktf.TerraformResource {

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
    return this.getStringAttribute('http_method');
  }
  public set httpMethod(value: string) {
    this._httpMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodInput() {
    return this._httpMethod
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId: string;
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId
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

  // response_parameters - computed: false, optional: true, required: false
  private _responseParameters?: { [key: string]: boolean };
  public get responseParameters() {
    return this.interpolationForAttribute('response_parameters') as any;
  }
  public set responseParameters(value: { [key: string]: boolean } ) {
    this._responseParameters = value;
  }
  public resetResponseParameters() {
    this._responseParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseParametersInput() {
    return this._responseParameters
  }

  // response_parameters_in_json - computed: false, optional: true, required: false
  private _responseParametersInJson?: string;
  public get responseParametersInJson() {
    return this.getStringAttribute('response_parameters_in_json');
  }
  public set responseParametersInJson(value: string ) {
    this._responseParametersInJson = value;
  }
  public resetResponseParametersInJson() {
    this._responseParametersInJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseParametersInJsonInput() {
    return this._responseParametersInJson
  }

  // rest_api_id - computed: false, optional: false, required: true
  private _restApiId: string;
  public get restApiId() {
    return this.getStringAttribute('rest_api_id');
  }
  public set restApiId(value: string) {
    this._restApiId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restApiIdInput() {
    return this._restApiId
  }

  // status_code - computed: false, optional: false, required: true
  private _statusCode: string;
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }
  public set statusCode(value: string) {
    this._statusCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      http_method: cdktf.stringToTerraform(this._httpMethod),
      resource_id: cdktf.stringToTerraform(this._resourceId),
      response_models: cdktf.hashMapper(cdktf.anyToTerraform)(this._responseModels),
      response_parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._responseParameters),
      response_parameters_in_json: cdktf.stringToTerraform(this._responseParametersInJson),
      rest_api_id: cdktf.stringToTerraform(this._restApiId),
      status_code: cdktf.stringToTerraform(this._statusCode),
    };
  }
}
