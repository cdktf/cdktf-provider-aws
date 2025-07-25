/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/api_gateway_method
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiGatewayMethodConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/api_gateway_method#api_key_required ApiGatewayMethod#api_key_required}
  */
  readonly apiKeyRequired?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/api_gateway_method#authorization ApiGatewayMethod#authorization}
  */
  readonly authorization: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/api_gateway_method#authorization_scopes ApiGatewayMethod#authorization_scopes}
  */
  readonly authorizationScopes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/api_gateway_method#authorizer_id ApiGatewayMethod#authorizer_id}
  */
  readonly authorizerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/api_gateway_method#http_method ApiGatewayMethod#http_method}
  */
  readonly httpMethod: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/api_gateway_method#id ApiGatewayMethod#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/api_gateway_method#operation_name ApiGatewayMethod#operation_name}
  */
  readonly operationName?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/api_gateway_method#region ApiGatewayMethod#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/api_gateway_method#request_models ApiGatewayMethod#request_models}
  */
  readonly requestModels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/api_gateway_method#request_parameters ApiGatewayMethod#request_parameters}
  */
  readonly requestParameters?: { [key: string]: (boolean | cdktf.IResolvable) };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/api_gateway_method#request_validator_id ApiGatewayMethod#request_validator_id}
  */
  readonly requestValidatorId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/api_gateway_method#resource_id ApiGatewayMethod#resource_id}
  */
  readonly resourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/api_gateway_method#rest_api_id ApiGatewayMethod#rest_api_id}
  */
  readonly restApiId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/api_gateway_method aws_api_gateway_method}
*/
export class ApiGatewayMethod extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_api_gateway_method";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiGatewayMethod resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiGatewayMethod to import
  * @param importFromId The id of the existing ApiGatewayMethod that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/api_gateway_method#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiGatewayMethod to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_api_gateway_method", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/api_gateway_method aws_api_gateway_method} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiGatewayMethodConfig
  */
  public constructor(scope: Construct, id: string, config: ApiGatewayMethodConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_api_gateway_method',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.5.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiKeyRequired = config.apiKeyRequired;
    this._authorization = config.authorization;
    this._authorizationScopes = config.authorizationScopes;
    this._authorizerId = config.authorizerId;
    this._httpMethod = config.httpMethod;
    this._id = config.id;
    this._operationName = config.operationName;
    this._region = config.region;
    this._requestModels = config.requestModels;
    this._requestParameters = config.requestParameters;
    this._requestValidatorId = config.requestValidatorId;
    this._resourceId = config.resourceId;
    this._restApiId = config.restApiId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key_required - computed: false, optional: true, required: false
  private _apiKeyRequired?: boolean | cdktf.IResolvable; 
  public get apiKeyRequired() {
    return this.getBooleanAttribute('api_key_required');
  }
  public set apiKeyRequired(value: boolean | cdktf.IResolvable) {
    this._apiKeyRequired = value;
  }
  public resetApiKeyRequired() {
    this._apiKeyRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyRequiredInput() {
    return this._apiKeyRequired;
  }

  // authorization - computed: false, optional: false, required: true
  private _authorization?: string; 
  public get authorization() {
    return this.getStringAttribute('authorization');
  }
  public set authorization(value: string) {
    this._authorization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationInput() {
    return this._authorization;
  }

  // authorization_scopes - computed: false, optional: true, required: false
  private _authorizationScopes?: string[]; 
  public get authorizationScopes() {
    return cdktf.Fn.tolist(this.getListAttribute('authorization_scopes'));
  }
  public set authorizationScopes(value: string[]) {
    this._authorizationScopes = value;
  }
  public resetAuthorizationScopes() {
    this._authorizationScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationScopesInput() {
    return this._authorizationScopes;
  }

  // authorizer_id - computed: false, optional: true, required: false
  private _authorizerId?: string; 
  public get authorizerId() {
    return this.getStringAttribute('authorizer_id');
  }
  public set authorizerId(value: string) {
    this._authorizerId = value;
  }
  public resetAuthorizerId() {
    this._authorizerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerIdInput() {
    return this._authorizerId;
  }

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

  // operation_name - computed: false, optional: true, required: false
  private _operationName?: string; 
  public get operationName() {
    return this.getStringAttribute('operation_name');
  }
  public set operationName(value: string) {
    this._operationName = value;
  }
  public resetOperationName() {
    this._operationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationNameInput() {
    return this._operationName;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // request_models - computed: false, optional: true, required: false
  private _requestModels?: { [key: string]: string }; 
  public get requestModels() {
    return this.getStringMapAttribute('request_models');
  }
  public set requestModels(value: { [key: string]: string }) {
    this._requestModels = value;
  }
  public resetRequestModels() {
    this._requestModels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestModelsInput() {
    return this._requestModels;
  }

  // request_parameters - computed: false, optional: true, required: false
  private _requestParameters?: { [key: string]: (boolean | cdktf.IResolvable) }; 
  public get requestParameters() {
    return this.getBooleanMapAttribute('request_parameters');
  }
  public set requestParameters(value: { [key: string]: (boolean | cdktf.IResolvable) }) {
    this._requestParameters = value;
  }
  public resetRequestParameters() {
    this._requestParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestParametersInput() {
    return this._requestParameters;
  }

  // request_validator_id - computed: false, optional: true, required: false
  private _requestValidatorId?: string; 
  public get requestValidatorId() {
    return this.getStringAttribute('request_validator_id');
  }
  public set requestValidatorId(value: string) {
    this._requestValidatorId = value;
  }
  public resetRequestValidatorId() {
    this._requestValidatorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestValidatorIdInput() {
    return this._requestValidatorId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_key_required: cdktf.booleanToTerraform(this._apiKeyRequired),
      authorization: cdktf.stringToTerraform(this._authorization),
      authorization_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authorizationScopes),
      authorizer_id: cdktf.stringToTerraform(this._authorizerId),
      http_method: cdktf.stringToTerraform(this._httpMethod),
      id: cdktf.stringToTerraform(this._id),
      operation_name: cdktf.stringToTerraform(this._operationName),
      region: cdktf.stringToTerraform(this._region),
      request_models: cdktf.hashMapper(cdktf.stringToTerraform)(this._requestModels),
      request_parameters: cdktf.hashMapper(cdktf.booleanToTerraform)(this._requestParameters),
      request_validator_id: cdktf.stringToTerraform(this._requestValidatorId),
      resource_id: cdktf.stringToTerraform(this._resourceId),
      rest_api_id: cdktf.stringToTerraform(this._restApiId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_key_required: {
        value: cdktf.booleanToHclTerraform(this._apiKeyRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authorization: {
        value: cdktf.stringToHclTerraform(this._authorization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorization_scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authorizationScopes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      authorizer_id: {
        value: cdktf.stringToHclTerraform(this._authorizerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_method: {
        value: cdktf.stringToHclTerraform(this._httpMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      operation_name: {
        value: cdktf.stringToHclTerraform(this._operationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_models: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._requestModels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      request_parameters: {
        value: cdktf.hashMapperHcl(cdktf.booleanToHclTerraform)(this._requestParameters),
        isBlock: false,
        type: "map",
        storageClassType: "booleanMap",
      },
      request_validator_id: {
        value: cdktf.stringToHclTerraform(this._requestValidatorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_id: {
        value: cdktf.stringToHclTerraform(this._resourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rest_api_id: {
        value: cdktf.stringToHclTerraform(this._restApiId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
