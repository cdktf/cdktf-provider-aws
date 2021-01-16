// https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface Apigatewayv2AuthorizerConfig extends TerraformMetaArguments {
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

// Resource

export class Apigatewayv2Authorizer extends TerraformResource {

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
    return this._apiId;
  }
  public set apiId(value: string) {
    this._apiId = value;
  }

  // authorizer_credentials_arn - computed: false, optional: true, required: false
  private _authorizerCredentialsArn?: string;
  public get authorizerCredentialsArn() {
    return this._authorizerCredentialsArn;
  }
  public set authorizerCredentialsArn(value: string | undefined) {
    this._authorizerCredentialsArn = value;
  }

  // authorizer_payload_format_version - computed: false, optional: true, required: false
  private _authorizerPayloadFormatVersion?: string;
  public get authorizerPayloadFormatVersion() {
    return this._authorizerPayloadFormatVersion;
  }
  public set authorizerPayloadFormatVersion(value: string | undefined) {
    this._authorizerPayloadFormatVersion = value;
  }

  // authorizer_result_ttl_in_seconds - computed: true, optional: true, required: false
  private _authorizerResultTtlInSeconds?: number;
  public get authorizerResultTtlInSeconds() {
    return this._authorizerResultTtlInSeconds ?? this.getNumberAttribute('authorizer_result_ttl_in_seconds');
  }
  public set authorizerResultTtlInSeconds(value: number | undefined) {
    this._authorizerResultTtlInSeconds = value;
  }

  // authorizer_type - computed: false, optional: false, required: true
  private _authorizerType: string;
  public get authorizerType() {
    return this._authorizerType;
  }
  public set authorizerType(value: string) {
    this._authorizerType = value;
  }

  // authorizer_uri - computed: false, optional: true, required: false
  private _authorizerUri?: string;
  public get authorizerUri() {
    return this._authorizerUri;
  }
  public set authorizerUri(value: string | undefined) {
    this._authorizerUri = value;
  }

  // enable_simple_responses - computed: false, optional: true, required: false
  private _enableSimpleResponses?: boolean;
  public get enableSimpleResponses() {
    return this._enableSimpleResponses;
  }
  public set enableSimpleResponses(value: boolean | undefined) {
    this._enableSimpleResponses = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // identity_sources - computed: false, optional: true, required: false
  private _identitySources?: string[];
  public get identitySources() {
    return this._identitySources;
  }
  public set identitySources(value: string[] | undefined) {
    this._identitySources = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // jwt_configuration - computed: false, optional: true, required: false
  private _jwtConfiguration?: Apigatewayv2AuthorizerJwtConfiguration[];
  public get jwtConfiguration() {
    return this._jwtConfiguration;
  }
  public set jwtConfiguration(value: Apigatewayv2AuthorizerJwtConfiguration[] | undefined) {
    this._jwtConfiguration = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_id: this._apiId,
      authorizer_credentials_arn: this._authorizerCredentialsArn,
      authorizer_payload_format_version: this._authorizerPayloadFormatVersion,
      authorizer_result_ttl_in_seconds: this._authorizerResultTtlInSeconds,
      authorizer_type: this._authorizerType,
      authorizer_uri: this._authorizerUri,
      enable_simple_responses: this._enableSimpleResponses,
      identity_sources: this._identitySources,
      name: this._name,
      jwt_configuration: this._jwtConfiguration,
    };
  }
}
