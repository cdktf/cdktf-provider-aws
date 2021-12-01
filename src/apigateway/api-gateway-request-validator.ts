// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* API Gateway
*/
export interface ApiGatewayRequestValidatorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_request_validator.html#name ApiGatewayRequestValidator#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_request_validator.html#rest_api_id ApiGatewayRequestValidator#rest_api_id}
  */
  readonly restApiId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_request_validator.html#validate_request_body ApiGatewayRequestValidator#validate_request_body}
  */
  readonly validateRequestBody?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_request_validator.html#validate_request_parameters ApiGatewayRequestValidator#validate_request_parameters}
  */
  readonly validateRequestParameters?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_request_validator.html aws_api_gateway_request_validator}
*/
export class ApiGatewayRequestValidator extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_api_gateway_request_validator";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_request_validator.html aws_api_gateway_request_validator} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiGatewayRequestValidatorConfig
  */
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
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // rest_api_id - computed: false, optional: false, required: true
  private _restApiId?: string; 
  public get restApiId() {
    return this.getStringAttribute('rest_api_id');
  }
  public set restApiId(value: string) {
    this._restApiId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restApiIdInput() {
    return this._restApiId;
  }

  // validate_request_body - computed: false, optional: true, required: false
  private _validateRequestBody?: boolean | cdktf.IResolvable; 
  public get validateRequestBody() {
    return this.getBooleanAttribute('validate_request_body') as any;
  }
  public set validateRequestBody(value: boolean | cdktf.IResolvable) {
    this._validateRequestBody = value;
  }
  public resetValidateRequestBody() {
    this._validateRequestBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateRequestBodyInput() {
    return this._validateRequestBody;
  }

  // validate_request_parameters - computed: false, optional: true, required: false
  private _validateRequestParameters?: boolean | cdktf.IResolvable; 
  public get validateRequestParameters() {
    return this.getBooleanAttribute('validate_request_parameters') as any;
  }
  public set validateRequestParameters(value: boolean | cdktf.IResolvable) {
    this._validateRequestParameters = value;
  }
  public resetValidateRequestParameters() {
    this._validateRequestParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateRequestParametersInput() {
    return this._validateRequestParameters;
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
