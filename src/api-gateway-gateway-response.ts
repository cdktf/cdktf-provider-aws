// https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiGatewayGatewayResponseConfig extends cdktf.TerraformMetaArguments {
  readonly responseParameters?: { [key: string]: string };
  readonly responseTemplates?: { [key: string]: string };
  readonly responseType: string;
  readonly restApiId: string;
  readonly statusCode?: string;
}

// Resource

export class ApiGatewayGatewayResponse extends cdktf.TerraformResource {

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
  public get id() {
    return this.getStringAttribute('id');
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

  // response_type - computed: false, optional: false, required: true
  private _responseType: string;
  public get responseType() {
    return this.getStringAttribute('response_type');
  }
  public set responseType(value: string) {
    this._responseType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTypeInput() {
    return this._responseType
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

  // status_code - computed: false, optional: true, required: false
  private _statusCode?: string;
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }
  public set statusCode(value: string ) {
    this._statusCode = value;
  }
  public resetStatusCode() {
    this._statusCode = undefined;
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
      response_parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._responseParameters),
      response_templates: cdktf.hashMapper(cdktf.anyToTerraform)(this._responseTemplates),
      response_type: cdktf.stringToTerraform(this._responseType),
      rest_api_id: cdktf.stringToTerraform(this._restApiId),
      status_code: cdktf.stringToTerraform(this._statusCode),
    };
  }
}
