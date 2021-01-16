// https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiGatewayAuthorizerConfig extends cdktf.TerraformMetaArguments {
  readonly authorizerCredentials?: string;
  readonly authorizerResultTtlInSeconds?: number;
  readonly authorizerUri?: string;
  readonly identitySource?: string;
  readonly identityValidationExpression?: string;
  readonly name: string;
  readonly providerArns?: string[];
  readonly restApiId: string;
  readonly type?: string;
}

// Resource

export class ApiGatewayAuthorizer extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ApiGatewayAuthorizerConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_api_gateway_authorizer',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._authorizerCredentials = config.authorizerCredentials;
    this._authorizerResultTtlInSeconds = config.authorizerResultTtlInSeconds;
    this._authorizerUri = config.authorizerUri;
    this._identitySource = config.identitySource;
    this._identityValidationExpression = config.identityValidationExpression;
    this._name = config.name;
    this._providerArns = config.providerArns;
    this._restApiId = config.restApiId;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorizer_credentials - computed: false, optional: true, required: false
  private _authorizerCredentials?: string;
  public get authorizerCredentials() {
    return this.getStringAttribute('authorizer_credentials');
  }
  public set authorizerCredentials(value: string ) {
    this._authorizerCredentials = value;
  }
  public resetAuthorizerCredentials() {
    this._authorizerCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerCredentialsInput() {
    return this._authorizerCredentials
  }

  // authorizer_result_ttl_in_seconds - computed: false, optional: true, required: false
  private _authorizerResultTtlInSeconds?: number;
  public get authorizerResultTtlInSeconds() {
    return this.getNumberAttribute('authorizer_result_ttl_in_seconds');
  }
  public set authorizerResultTtlInSeconds(value: number ) {
    this._authorizerResultTtlInSeconds = value;
  }
  public resetAuthorizerResultTtlInSeconds() {
    this._authorizerResultTtlInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerResultTtlInSecondsInput() {
    return this._authorizerResultTtlInSeconds
  }

  // authorizer_uri - computed: false, optional: true, required: false
  private _authorizerUri?: string;
  public get authorizerUri() {
    return this.getStringAttribute('authorizer_uri');
  }
  public set authorizerUri(value: string ) {
    this._authorizerUri = value;
  }
  public resetAuthorizerUri() {
    this._authorizerUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerUriInput() {
    return this._authorizerUri
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity_source - computed: false, optional: true, required: false
  private _identitySource?: string;
  public get identitySource() {
    return this.getStringAttribute('identity_source');
  }
  public set identitySource(value: string ) {
    this._identitySource = value;
  }
  public resetIdentitySource() {
    this._identitySource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identitySourceInput() {
    return this._identitySource
  }

  // identity_validation_expression - computed: false, optional: true, required: false
  private _identityValidationExpression?: string;
  public get identityValidationExpression() {
    return this.getStringAttribute('identity_validation_expression');
  }
  public set identityValidationExpression(value: string ) {
    this._identityValidationExpression = value;
  }
  public resetIdentityValidationExpression() {
    this._identityValidationExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityValidationExpressionInput() {
    return this._identityValidationExpression
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

  // provider_arns - computed: false, optional: true, required: false
  private _providerArns?: string[];
  public get providerArns() {
    return this.getListAttribute('provider_arns');
  }
  public set providerArns(value: string[] ) {
    this._providerArns = value;
  }
  public resetProviderArns() {
    this._providerArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerArnsInput() {
    return this._providerArns
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

  // type - computed: false, optional: true, required: false
  private _type?: string;
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string ) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authorizer_credentials: cdktf.stringToTerraform(this._authorizerCredentials),
      authorizer_result_ttl_in_seconds: cdktf.numberToTerraform(this._authorizerResultTtlInSeconds),
      authorizer_uri: cdktf.stringToTerraform(this._authorizerUri),
      identity_source: cdktf.stringToTerraform(this._identitySource),
      identity_validation_expression: cdktf.stringToTerraform(this._identityValidationExpression),
      name: cdktf.stringToTerraform(this._name),
      provider_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._providerArns),
      rest_api_id: cdktf.stringToTerraform(this._restApiId),
      type: cdktf.stringToTerraform(this._type),
    };
  }
}
