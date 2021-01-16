// https://www.terraform.io/docs/providers/aws/r/api_gateway_method.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ApiGatewayMethodConfig extends TerraformMetaArguments {
  readonly apiKeyRequired?: boolean;
  readonly authorization: string;
  readonly authorizationScopes?: string[];
  readonly authorizerId?: string;
  readonly httpMethod: string;
  readonly operationName?: string;
  readonly requestModels?: { [key: string]: string };
  readonly requestParameters?: { [key: string]: boolean };
  readonly requestValidatorId?: string;
  readonly resourceId: string;
  readonly restApiId: string;
}

// Resource

export class ApiGatewayMethod extends TerraformResource {

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
    this._operationName = config.operationName;
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
  private _apiKeyRequired?: boolean;
  public get apiKeyRequired() {
    return this._apiKeyRequired;
  }
  public set apiKeyRequired(value: boolean | undefined) {
    this._apiKeyRequired = value;
  }

  // authorization - computed: false, optional: false, required: true
  private _authorization: string;
  public get authorization() {
    return this._authorization;
  }
  public set authorization(value: string) {
    this._authorization = value;
  }

  // authorization_scopes - computed: false, optional: true, required: false
  private _authorizationScopes?: string[];
  public get authorizationScopes() {
    return this._authorizationScopes;
  }
  public set authorizationScopes(value: string[] | undefined) {
    this._authorizationScopes = value;
  }

  // authorizer_id - computed: false, optional: true, required: false
  private _authorizerId?: string;
  public get authorizerId() {
    return this._authorizerId;
  }
  public set authorizerId(value: string | undefined) {
    this._authorizerId = value;
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

  // operation_name - computed: false, optional: true, required: false
  private _operationName?: string;
  public get operationName() {
    return this._operationName;
  }
  public set operationName(value: string | undefined) {
    this._operationName = value;
  }

  // request_models - computed: false, optional: true, required: false
  private _requestModels?: { [key: string]: string };
  public get requestModels() {
    return this._requestModels;
  }
  public set requestModels(value: { [key: string]: string } | undefined) {
    this._requestModels = value;
  }

  // request_parameters - computed: false, optional: true, required: false
  private _requestParameters?: { [key: string]: boolean };
  public get requestParameters() {
    return this._requestParameters;
  }
  public set requestParameters(value: { [key: string]: boolean } | undefined) {
    this._requestParameters = value;
  }

  // request_validator_id - computed: false, optional: true, required: false
  private _requestValidatorId?: string;
  public get requestValidatorId() {
    return this._requestValidatorId;
  }
  public set requestValidatorId(value: string | undefined) {
    this._requestValidatorId = value;
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId: string;
  public get resourceId() {
    return this._resourceId;
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }

  // rest_api_id - computed: false, optional: false, required: true
  private _restApiId: string;
  public get restApiId() {
    return this._restApiId;
  }
  public set restApiId(value: string) {
    this._restApiId = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_key_required: this._apiKeyRequired,
      authorization: this._authorization,
      authorization_scopes: this._authorizationScopes,
      authorizer_id: this._authorizerId,
      http_method: this._httpMethod,
      operation_name: this._operationName,
      request_models: this._requestModels,
      request_parameters: this._requestParameters,
      request_validator_id: this._requestValidatorId,
      resource_id: this._resourceId,
      rest_api_id: this._restApiId,
    };
  }
}
