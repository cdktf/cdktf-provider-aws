// https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Apigatewayv2AuthorizerConfig extends cdktf.TerraformMetaArguments {
  readonly apiId: string;
  readonly authorizerCredentialsArn?: string;
  readonly authorizerType: string;
  readonly authorizerUri?: string;
  readonly identitySources: string[];
  readonly name: string;
  /** jwt_configuration block */
  readonly jwtConfiguration?: Apigatewayv2AuthorizerJwtConfiguration[];
}
export interface Apigatewayv2AuthorizerJwtConfiguration {
  readonly audience?: string[];
  readonly issuer?: string;
}

function apigatewayv2AuthorizerJwtConfigurationToTerraform(struct?: Apigatewayv2AuthorizerJwtConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    audience: cdktf.listMapper(cdktf.stringToTerraform)(struct!.audience),
    issuer: cdktf.stringToTerraform(struct!.issuer),
  }
}


// Resource

export class Apigatewayv2Authorizer extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: Apigatewayv2AuthorizerConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_apigatewayv2_authorizer',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._apiId = config.apiId;
    this._authorizerCredentialsArn = config.authorizerCredentialsArn;
    this._authorizerType = config.authorizerType;
    this._authorizerUri = config.authorizerUri;
    this._identitySources = config.identitySources;
    this._name = config.name;
    this._jwtConfiguration = config.jwtConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_id - computed: false, optional: false, required: true
  private _apiId: string;
  public get apiId() {
    return this.getStringAttribute('api_id');
  }
  public set apiId(value: string) {
    this._apiId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiIdInput() {
    return this._apiId
  }

  // authorizer_credentials_arn - computed: false, optional: true, required: false
  private _authorizerCredentialsArn?: string;
  public get authorizerCredentialsArn() {
    return this.getStringAttribute('authorizer_credentials_arn');
  }
  public set authorizerCredentialsArn(value: string ) {
    this._authorizerCredentialsArn = value;
  }
  public resetAuthorizerCredentialsArn() {
    this._authorizerCredentialsArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerCredentialsArnInput() {
    return this._authorizerCredentialsArn
  }

  // authorizer_type - computed: false, optional: false, required: true
  private _authorizerType: string;
  public get authorizerType() {
    return this.getStringAttribute('authorizer_type');
  }
  public set authorizerType(value: string) {
    this._authorizerType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerTypeInput() {
    return this._authorizerType
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

  // identity_sources - computed: false, optional: false, required: true
  private _identitySources: string[];
  public get identitySources() {
    return this.getListAttribute('identity_sources');
  }
  public set identitySources(value: string[]) {
    this._identitySources = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identitySourcesInput() {
    return this._identitySources
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

  // jwt_configuration - computed: false, optional: true, required: false
  private _jwtConfiguration?: Apigatewayv2AuthorizerJwtConfiguration[];
  public get jwtConfiguration() {
    return this.interpolationForAttribute('jwt_configuration') as any;
  }
  public set jwtConfiguration(value: Apigatewayv2AuthorizerJwtConfiguration[] ) {
    this._jwtConfiguration = value;
  }
  public resetJwtConfiguration() {
    this._jwtConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtConfigurationInput() {
    return this._jwtConfiguration
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_id: cdktf.stringToTerraform(this._apiId),
      authorizer_credentials_arn: cdktf.stringToTerraform(this._authorizerCredentialsArn),
      authorizer_type: cdktf.stringToTerraform(this._authorizerType),
      authorizer_uri: cdktf.stringToTerraform(this._authorizerUri),
      identity_sources: cdktf.listMapper(cdktf.stringToTerraform)(this._identitySources),
      name: cdktf.stringToTerraform(this._name),
      jwt_configuration: cdktf.listMapper(apigatewayv2AuthorizerJwtConfigurationToTerraform)(this._jwtConfiguration),
    };
  }
}
