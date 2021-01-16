// https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Apigatewayv2AuthorizerConfig extends cdktf.TerraformMetaArguments {
  readonly apiId: string;
  readonly authorizerCredentialsArn?: string;
  readonly authorizerPayloadFormatVersion?: string;
  readonly authorizerResultTtlInSeconds?: number;
  readonly authorizerType: string;
  readonly authorizerUri?: string;
  readonly enableSimpleResponses?: boolean;
  readonly identitySources?: string[];
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
    this._authorizerPayloadFormatVersion = config.authorizerPayloadFormatVersion;
    this._authorizerResultTtlInSeconds = config.authorizerResultTtlInSeconds;
    this._authorizerType = config.authorizerType;
    this._authorizerUri = config.authorizerUri;
    this._enableSimpleResponses = config.enableSimpleResponses;
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

  // authorizer_payload_format_version - computed: false, optional: true, required: false
  private _authorizerPayloadFormatVersion?: string;
  public get authorizerPayloadFormatVersion() {
    return this.getStringAttribute('authorizer_payload_format_version');
  }
  public set authorizerPayloadFormatVersion(value: string ) {
    this._authorizerPayloadFormatVersion = value;
  }
  public resetAuthorizerPayloadFormatVersion() {
    this._authorizerPayloadFormatVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerPayloadFormatVersionInput() {
    return this._authorizerPayloadFormatVersion
  }

  // authorizer_result_ttl_in_seconds - computed: true, optional: true, required: false
  private _authorizerResultTtlInSeconds?: number;
  public get authorizerResultTtlInSeconds() {
    return this.getNumberAttribute('authorizer_result_ttl_in_seconds');
  }
  public set authorizerResultTtlInSeconds(value: number) {
    this._authorizerResultTtlInSeconds = value;
  }
  public resetAuthorizerResultTtlInSeconds() {
    this._authorizerResultTtlInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerResultTtlInSecondsInput() {
    return this._authorizerResultTtlInSeconds
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

  // enable_simple_responses - computed: false, optional: true, required: false
  private _enableSimpleResponses?: boolean;
  public get enableSimpleResponses() {
    return this.getBooleanAttribute('enable_simple_responses');
  }
  public set enableSimpleResponses(value: boolean ) {
    this._enableSimpleResponses = value;
  }
  public resetEnableSimpleResponses() {
    this._enableSimpleResponses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSimpleResponsesInput() {
    return this._enableSimpleResponses
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity_sources - computed: false, optional: true, required: false
  private _identitySources?: string[];
  public get identitySources() {
    return this.getListAttribute('identity_sources');
  }
  public set identitySources(value: string[] ) {
    this._identitySources = value;
  }
  public resetIdentitySources() {
    this._identitySources = undefined;
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
      authorizer_payload_format_version: cdktf.stringToTerraform(this._authorizerPayloadFormatVersion),
      authorizer_result_ttl_in_seconds: cdktf.numberToTerraform(this._authorizerResultTtlInSeconds),
      authorizer_type: cdktf.stringToTerraform(this._authorizerType),
      authorizer_uri: cdktf.stringToTerraform(this._authorizerUri),
      enable_simple_responses: cdktf.booleanToTerraform(this._enableSimpleResponses),
      identity_sources: cdktf.listMapper(cdktf.stringToTerraform)(this._identitySources),
      name: cdktf.stringToTerraform(this._name),
      jwt_configuration: cdktf.listMapper(apigatewayv2AuthorizerJwtConfigurationToTerraform)(this._jwtConfiguration),
    };
  }
}
