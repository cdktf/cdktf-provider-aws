// https://www.terraform.io/docs/providers/aws/r/api_gateway_request_validator.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiGatewayRequestValidatorConfig extends cdktf.TerraformMetaArguments {
  readonly name: string;
  readonly restApiId: string;
  readonly validateRequestBody?: boolean;
  readonly validateRequestParameters?: boolean;
}

// Resource

export class ApiGatewayRequestValidator extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ApiGatewayRequestValidatorConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_api_gateway_request_validator',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._restApiId = config.restApiId;
    this._validateRequestBody = config.validateRequestBody;
    this._validateRequestParameters = config.validateRequestParameters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
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

  // validate_request_body - computed: false, optional: true, required: false
  private _validateRequestBody?: boolean;
  public get validateRequestBody() {
    return this.getBooleanAttribute('validate_request_body');
  }
  public set validateRequestBody(value: boolean ) {
    this._validateRequestBody = value;
  }
  public resetValidateRequestBody() {
    this._validateRequestBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateRequestBodyInput() {
    return this._validateRequestBody
  }

  // validate_request_parameters - computed: false, optional: true, required: false
  private _validateRequestParameters?: boolean;
  public get validateRequestParameters() {
    return this.getBooleanAttribute('validate_request_parameters');
  }
  public set validateRequestParameters(value: boolean ) {
    this._validateRequestParameters = value;
  }
  public resetValidateRequestParameters() {
    this._validateRequestParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateRequestParametersInput() {
    return this._validateRequestParameters
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      rest_api_id: cdktf.stringToTerraform(this._restApiId),
      validate_request_body: cdktf.booleanToTerraform(this._validateRequestBody),
      validate_request_parameters: cdktf.booleanToTerraform(this._validateRequestParameters),
    };
  }
}
