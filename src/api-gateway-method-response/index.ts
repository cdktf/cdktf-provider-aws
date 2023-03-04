// https://www.terraform.io/docs/providers/aws/r/api_gateway_method_response
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiGatewayMethodResponseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_response#http_method ApiGatewayMethodResponse#http_method}
  */
  readonly httpMethod: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_response#id ApiGatewayMethodResponse#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_response#resource_id ApiGatewayMethodResponse#resource_id}
  */
  readonly resourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_response#response_models ApiGatewayMethodResponse#response_models}
  */
  readonly responseModels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_response#response_parameters ApiGatewayMethodResponse#response_parameters}
  */
  readonly responseParameters?: { [key: string]: (boolean | cdktf.IResolvable) };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_response#rest_api_id ApiGatewayMethodResponse#rest_api_id}
  */
  readonly restApiId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_response#status_code ApiGatewayMethodResponse#status_code}
  */
  readonly statusCode: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_response aws_api_gateway_method_response}
*/
export class ApiGatewayMethodResponse extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_api_gateway_method_response";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_response aws_api_gateway_method_response} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiGatewayMethodResponseConfig
  */
  public constructor(scope: Construct, id: string, config: ApiGatewayMethodResponseConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_api_gateway_method_response',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._httpMethod = config.httpMethod;
    this._id = config.id;
    this._resourceId = config.resourceId;
    this._responseModels = config.responseModels;
    this._responseParameters = config.responseParameters;
    this._restApiId = config.restApiId;
    this._statusCode = config.statusCode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // http_method - computed: false, optional: false, required: true
  private _httpMethod?: string; 
  public get httpMethod() {
    return this.getStringAttribute('http_method');
  }
  public set httpMethod(value: string) {
    this._httpMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodInput() {
    return this._httpMethod;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // response_models - computed: false, optional: true, required: false
  private _responseModels?: { [key: string]: string }; 
  public get responseModels() {
    return this.getStringMapAttribute('response_models');
  }
  public set responseModels(value: { [key: string]: string }) {
    this._responseModels = value;
  }
  public resetResponseModels() {
    this._responseModels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseModelsInput() {
    return this._responseModels;
  }

  // response_parameters - computed: false, optional: true, required: false
  private _responseParameters?: { [key: string]: (boolean | cdktf.IResolvable) }; 
  public get responseParameters() {
    return this.getBooleanMapAttribute('response_parameters');
  }
  public set responseParameters(value: { [key: string]: (boolean | cdktf.IResolvable) }) {
    this._responseParameters = value;
  }
  public resetResponseParameters() {
    this._responseParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseParametersInput() {
    return this._responseParameters;
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

  // status_code - computed: false, optional: false, required: true
  private _statusCode?: string; 
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }
  public set statusCode(value: string) {
    this._statusCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      http_method: cdktf.stringToTerraform(this._httpMethod),
      id: cdktf.stringToTerraform(this._id),
      resource_id: cdktf.stringToTerraform(this._resourceId),
      response_models: cdktf.hashMapper(cdktf.stringToTerraform)(this._responseModels),
      response_parameters: cdktf.hashMapper(cdktf.booleanToTerraform)(this._responseParameters),
      rest_api_id: cdktf.stringToTerraform(this._restApiId),
      status_code: cdktf.stringToTerraform(this._statusCode),
    };
  }
}
