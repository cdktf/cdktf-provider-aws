// https://www.terraform.io/docs/providers/aws/r/api_gateway_method.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiGatewayMethodConfig extends cdktf.TerraformMetaArguments {
  readonly apiKeyRequired?: boolean;
  readonly authorization: string;
  readonly authorizationScopes?: string[];
  readonly authorizerId?: string;
  readonly httpMethod: string;
  readonly requestModels?: { [key: string]: string };
  readonly requestParameters?: { [key: string]: boolean };
  readonly requestParametersInJson?: string;
  readonly requestValidatorId?: string;
  readonly resourceId: string;
  readonly restApiId: string;
}

// Resource

export class ApiGatewayMethod extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ApiGatewayMethodConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_api_gateway_method',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._apiKeyRequired = config.apiKeyRequired;
    this._authorization = config.authorization;
    this._authorizationScopes = config.authorizationScopes;
    this._authorizerId = config.authorizerId;
    this._httpMethod = config.httpMethod;
    this._requestModels = config.requestModels;
    this._requestParameters = config.requestParameters;
    this._requestParametersInJson = config.requestParametersInJson;
    this._requestValidatorId = config.requestValidatorId;
    this._resourceId = config.resourceId;
    this._restApiId = config.restApiId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key_required - computed: false, optional: true, required: false
  private _apiKeyRequired?: boolean;
  public get apiKeyRequired() {
    return this.getBooleanAttribute('api_key_required');
  }
  public set apiKeyRequired(value: boolean ) {
    this._apiKeyRequired = value;
  }
  public resetApiKeyRequired() {
    this._apiKeyRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyRequiredInput() {
    return this._apiKeyRequired
  }

  // authorization - computed: false, optional: false, required: true
  private _authorization: string;
  public get authorization() {
    return this.getStringAttribute('authorization');
  }
  public set authorization(value: string) {
    this._authorization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationInput() {
    return this._authorization
  }

  // authorization_scopes - computed: false, optional: true, required: false
  private _authorizationScopes?: string[];
  public get authorizationScopes() {
    return this.getListAttribute('authorization_scopes');
  }
  public set authorizationScopes(value: string[] ) {
    this._authorizationScopes = value;
  }
  public resetAuthorizationScopes() {
    this._authorizationScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationScopesInput() {
    return this._authorizationScopes
  }

  // authorizer_id - computed: false, optional: true, required: false
  private _authorizerId?: string;
  public get authorizerId() {
    return this.getStringAttribute('authorizer_id');
  }
  public set authorizerId(value: string ) {
    this._authorizerId = value;
  }
  public resetAuthorizerId() {
    this._authorizerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerIdInput() {
    return this._authorizerId
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

  // request_models - computed: false, optional: true, required: false
  private _requestModels?: { [key: string]: string };
  public get requestModels() {
    return this.interpolationForAttribute('request_models') as any;
  }
  public set requestModels(value: { [key: string]: string } ) {
    this._requestModels = value;
  }
  public resetRequestModels() {
    this._requestModels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestModelsInput() {
    return this._requestModels
  }

  // request_parameters - computed: false, optional: true, required: false
  private _requestParameters?: { [key: string]: boolean };
  public get requestParameters() {
    return this.interpolationForAttribute('request_parameters') as any;
  }
  public set requestParameters(value: { [key: string]: boolean } ) {
    this._requestParameters = value;
  }
  public resetRequestParameters() {
    this._requestParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestParametersInput() {
    return this._requestParameters
  }

  // request_parameters_in_json - computed: false, optional: true, required: false
  private _requestParametersInJson?: string;
  public get requestParametersInJson() {
    return this.getStringAttribute('request_parameters_in_json');
  }
  public set requestParametersInJson(value: string ) {
    this._requestParametersInJson = value;
  }
  public resetRequestParametersInJson() {
    this._requestParametersInJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestParametersInJsonInput() {
    return this._requestParametersInJson
  }

  // request_validator_id - computed: false, optional: true, required: false
  private _requestValidatorId?: string;
  public get requestValidatorId() {
    return this.getStringAttribute('request_validator_id');
  }
  public set requestValidatorId(value: string ) {
    this._requestValidatorId = value;
  }
  public resetRequestValidatorId() {
    this._requestValidatorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestValidatorIdInput() {
    return this._requestValidatorId
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_key_required: cdktf.booleanToTerraform(this._apiKeyRequired),
      authorization: cdktf.stringToTerraform(this._authorization),
      authorization_scopes: cdktf.listMapper(cdktf.stringToTerraform)(this._authorizationScopes),
      authorizer_id: cdktf.stringToTerraform(this._authorizerId),
      http_method: cdktf.stringToTerraform(this._httpMethod),
      request_models: cdktf.hashMapper(cdktf.anyToTerraform)(this._requestModels),
      request_parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._requestParameters),
      request_parameters_in_json: cdktf.stringToTerraform(this._requestParametersInJson),
      request_validator_id: cdktf.stringToTerraform(this._requestValidatorId),
      resource_id: cdktf.stringToTerraform(this._resourceId),
      rest_api_id: cdktf.stringToTerraform(this._restApiId),
    };
  }
}
