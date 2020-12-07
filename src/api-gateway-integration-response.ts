// https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiGatewayIntegrationResponseConfig extends cdktf.TerraformMetaArguments {
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

export class ApiGatewayIntegrationResponse extends cdktf.TerraformResource {

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
    return this.getStringAttribute('content_handling');
  }
  public set contentHandling(value: string ) {
    this._contentHandling = value;
  }
  public resetContentHandling() {
    this._contentHandling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentHandlingInput() {
    return this._contentHandling
  }

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

  // response_parameters - computed: false, optional: true, required: false
  private _responseParameters?: { [key: string]: string };
  public get responseParameters() {
    return this.interpolationForAttribute('response_parameters') as any;
  }
  public set responseParameters(value: { [key: string]: string } ) {
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

  // response_templates - computed: false, optional: true, required: false
  private _responseTemplates?: { [key: string]: string };
  public get responseTemplates() {
    return this.interpolationForAttribute('response_templates') as any;
  }
  public set responseTemplates(value: { [key: string]: string } ) {
    this._responseTemplates = value;
  }
  public resetResponseTemplates() {
    this._responseTemplates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTemplatesInput() {
    return this._responseTemplates
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

  // selection_pattern - computed: false, optional: true, required: false
  private _selectionPattern?: string;
  public get selectionPattern() {
    return this.getStringAttribute('selection_pattern');
  }
  public set selectionPattern(value: string ) {
    this._selectionPattern = value;
  }
  public resetSelectionPattern() {
    this._selectionPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectionPatternInput() {
    return this._selectionPattern
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
      content_handling: cdktf.stringToTerraform(this._contentHandling),
      http_method: cdktf.stringToTerraform(this._httpMethod),
      resource_id: cdktf.stringToTerraform(this._resourceId),
      response_parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._responseParameters),
      response_parameters_in_json: cdktf.stringToTerraform(this._responseParametersInJson),
      response_templates: cdktf.hashMapper(cdktf.anyToTerraform)(this._responseTemplates),
      rest_api_id: cdktf.stringToTerraform(this._restApiId),
      selection_pattern: cdktf.stringToTerraform(this._selectionPattern),
      status_code: cdktf.stringToTerraform(this._statusCode),
    };
  }
}
