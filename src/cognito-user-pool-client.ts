// https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CognitoUserPoolClientConfig extends cdktf.TerraformMetaArguments {
  readonly allowedOauthFlows?: string[];
  readonly allowedOauthFlowsUserPoolClient?: boolean;
  readonly allowedOauthScopes?: string[];
  readonly callbackUrls?: string[];
  readonly defaultRedirectUri?: string;
  readonly explicitAuthFlows?: string[];
  readonly generateSecret?: boolean;
  readonly logoutUrls?: string[];
  readonly name: string;
  readonly preventUserExistenceErrors?: string;
  readonly readAttributes?: string[];
  readonly refreshTokenValidity?: number;
  readonly supportedIdentityProviders?: string[];
  readonly userPoolId: string;
  readonly writeAttributes?: string[];
  /** analytics_configuration block */
  readonly analyticsConfiguration?: CognitoUserPoolClientAnalyticsConfiguration[];
}
export interface CognitoUserPoolClientAnalyticsConfiguration {
  readonly applicationId: string;
  readonly externalId: string;
  readonly roleArn: string;
  readonly userDataShared?: boolean;
}

function cognitoUserPoolClientAnalyticsConfigurationToTerraform(struct?: CognitoUserPoolClientAnalyticsConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    application_id: cdktf.stringToTerraform(struct!.applicationId),
    external_id: cdktf.stringToTerraform(struct!.externalId),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    user_data_shared: cdktf.booleanToTerraform(struct!.userDataShared),
  }
}


// Resource

export class CognitoUserPoolClient extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CognitoUserPoolClientConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cognito_user_pool_client',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._allowedOauthFlows = config.allowedOauthFlows;
    this._allowedOauthFlowsUserPoolClient = config.allowedOauthFlowsUserPoolClient;
    this._allowedOauthScopes = config.allowedOauthScopes;
    this._callbackUrls = config.callbackUrls;
    this._defaultRedirectUri = config.defaultRedirectUri;
    this._explicitAuthFlows = config.explicitAuthFlows;
    this._generateSecret = config.generateSecret;
    this._logoutUrls = config.logoutUrls;
    this._name = config.name;
    this._preventUserExistenceErrors = config.preventUserExistenceErrors;
    this._readAttributes = config.readAttributes;
    this._refreshTokenValidity = config.refreshTokenValidity;
    this._supportedIdentityProviders = config.supportedIdentityProviders;
    this._userPoolId = config.userPoolId;
    this._writeAttributes = config.writeAttributes;
    this._analyticsConfiguration = config.analyticsConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_oauth_flows - computed: false, optional: true, required: false
  private _allowedOauthFlows?: string[];
  public get allowedOauthFlows() {
    return this.getListAttribute('allowed_oauth_flows');
  }
  public set allowedOauthFlows(value: string[] ) {
    this._allowedOauthFlows = value;
  }
  public resetAllowedOauthFlows() {
    this._allowedOauthFlows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedOauthFlowsInput() {
    return this._allowedOauthFlows
  }

  // allowed_oauth_flows_user_pool_client - computed: false, optional: true, required: false
  private _allowedOauthFlowsUserPoolClient?: boolean;
  public get allowedOauthFlowsUserPoolClient() {
    return this.getBooleanAttribute('allowed_oauth_flows_user_pool_client');
  }
  public set allowedOauthFlowsUserPoolClient(value: boolean ) {
    this._allowedOauthFlowsUserPoolClient = value;
  }
  public resetAllowedOauthFlowsUserPoolClient() {
    this._allowedOauthFlowsUserPoolClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedOauthFlowsUserPoolClientInput() {
    return this._allowedOauthFlowsUserPoolClient
  }

  // allowed_oauth_scopes - computed: false, optional: true, required: false
  private _allowedOauthScopes?: string[];
  public get allowedOauthScopes() {
    return this.getListAttribute('allowed_oauth_scopes');
  }
  public set allowedOauthScopes(value: string[] ) {
    this._allowedOauthScopes = value;
  }
  public resetAllowedOauthScopes() {
    this._allowedOauthScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedOauthScopesInput() {
    return this._allowedOauthScopes
  }

  // callback_urls - computed: false, optional: true, required: false
  private _callbackUrls?: string[];
  public get callbackUrls() {
    return this.getListAttribute('callback_urls');
  }
  public set callbackUrls(value: string[] ) {
    this._callbackUrls = value;
  }
  public resetCallbackUrls() {
    this._callbackUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callbackUrlsInput() {
    return this._callbackUrls
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // default_redirect_uri - computed: false, optional: true, required: false
  private _defaultRedirectUri?: string;
  public get defaultRedirectUri() {
    return this.getStringAttribute('default_redirect_uri');
  }
  public set defaultRedirectUri(value: string ) {
    this._defaultRedirectUri = value;
  }
  public resetDefaultRedirectUri() {
    this._defaultRedirectUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRedirectUriInput() {
    return this._defaultRedirectUri
  }

  // explicit_auth_flows - computed: false, optional: true, required: false
  private _explicitAuthFlows?: string[];
  public get explicitAuthFlows() {
    return this.getListAttribute('explicit_auth_flows');
  }
  public set explicitAuthFlows(value: string[] ) {
    this._explicitAuthFlows = value;
  }
  public resetExplicitAuthFlows() {
    this._explicitAuthFlows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get explicitAuthFlowsInput() {
    return this._explicitAuthFlows
  }

  // generate_secret - computed: false, optional: true, required: false
  private _generateSecret?: boolean;
  public get generateSecret() {
    return this.getBooleanAttribute('generate_secret');
  }
  public set generateSecret(value: boolean ) {
    this._generateSecret = value;
  }
  public resetGenerateSecret() {
    this._generateSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateSecretInput() {
    return this._generateSecret
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // logout_urls - computed: false, optional: true, required: false
  private _logoutUrls?: string[];
  public get logoutUrls() {
    return this.getListAttribute('logout_urls');
  }
  public set logoutUrls(value: string[] ) {
    this._logoutUrls = value;
  }
  public resetLogoutUrls() {
    this._logoutUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutUrlsInput() {
    return this._logoutUrls
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

  // prevent_user_existence_errors - computed: true, optional: true, required: false
  private _preventUserExistenceErrors?: string;
  public get preventUserExistenceErrors() {
    return this.getStringAttribute('prevent_user_existence_errors');
  }
  public set preventUserExistenceErrors(value: string) {
    this._preventUserExistenceErrors = value;
  }
  public resetPreventUserExistenceErrors() {
    this._preventUserExistenceErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preventUserExistenceErrorsInput() {
    return this._preventUserExistenceErrors
  }

  // read_attributes - computed: false, optional: true, required: false
  private _readAttributes?: string[];
  public get readAttributes() {
    return this.getListAttribute('read_attributes');
  }
  public set readAttributes(value: string[] ) {
    this._readAttributes = value;
  }
  public resetReadAttributes() {
    this._readAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readAttributesInput() {
    return this._readAttributes
  }

  // refresh_token_validity - computed: false, optional: true, required: false
  private _refreshTokenValidity?: number;
  public get refreshTokenValidity() {
    return this.getNumberAttribute('refresh_token_validity');
  }
  public set refreshTokenValidity(value: number ) {
    this._refreshTokenValidity = value;
  }
  public resetRefreshTokenValidity() {
    this._refreshTokenValidity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenValidityInput() {
    return this._refreshTokenValidity
  }

  // supported_identity_providers - computed: false, optional: true, required: false
  private _supportedIdentityProviders?: string[];
  public get supportedIdentityProviders() {
    return this.getListAttribute('supported_identity_providers');
  }
  public set supportedIdentityProviders(value: string[] ) {
    this._supportedIdentityProviders = value;
  }
  public resetSupportedIdentityProviders() {
    this._supportedIdentityProviders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedIdentityProvidersInput() {
    return this._supportedIdentityProviders
  }

  // user_pool_id - computed: false, optional: false, required: true
  private _userPoolId: string;
  public get userPoolId() {
    return this.getStringAttribute('user_pool_id');
  }
  public set userPoolId(value: string) {
    this._userPoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userPoolIdInput() {
    return this._userPoolId
  }

  // write_attributes - computed: false, optional: true, required: false
  private _writeAttributes?: string[];
  public get writeAttributes() {
    return this.getListAttribute('write_attributes');
  }
  public set writeAttributes(value: string[] ) {
    this._writeAttributes = value;
  }
  public resetWriteAttributes() {
    this._writeAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeAttributesInput() {
    return this._writeAttributes
  }

  // analytics_configuration - computed: false, optional: true, required: false
  private _analyticsConfiguration?: CognitoUserPoolClientAnalyticsConfiguration[];
  public get analyticsConfiguration() {
    return this.interpolationForAttribute('analytics_configuration') as any;
  }
  public set analyticsConfiguration(value: CognitoUserPoolClientAnalyticsConfiguration[] ) {
    this._analyticsConfiguration = value;
  }
  public resetAnalyticsConfiguration() {
    this._analyticsConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyticsConfigurationInput() {
    return this._analyticsConfiguration
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_oauth_flows: cdktf.listMapper(cdktf.stringToTerraform)(this._allowedOauthFlows),
      allowed_oauth_flows_user_pool_client: cdktf.booleanToTerraform(this._allowedOauthFlowsUserPoolClient),
      allowed_oauth_scopes: cdktf.listMapper(cdktf.stringToTerraform)(this._allowedOauthScopes),
      callback_urls: cdktf.listMapper(cdktf.stringToTerraform)(this._callbackUrls),
      default_redirect_uri: cdktf.stringToTerraform(this._defaultRedirectUri),
      explicit_auth_flows: cdktf.listMapper(cdktf.stringToTerraform)(this._explicitAuthFlows),
      generate_secret: cdktf.booleanToTerraform(this._generateSecret),
      logout_urls: cdktf.listMapper(cdktf.stringToTerraform)(this._logoutUrls),
      name: cdktf.stringToTerraform(this._name),
      prevent_user_existence_errors: cdktf.stringToTerraform(this._preventUserExistenceErrors),
      read_attributes: cdktf.listMapper(cdktf.stringToTerraform)(this._readAttributes),
      refresh_token_validity: cdktf.numberToTerraform(this._refreshTokenValidity),
      supported_identity_providers: cdktf.listMapper(cdktf.stringToTerraform)(this._supportedIdentityProviders),
      user_pool_id: cdktf.stringToTerraform(this._userPoolId),
      write_attributes: cdktf.listMapper(cdktf.stringToTerraform)(this._writeAttributes),
      analytics_configuration: cdktf.listMapper(cognitoUserPoolClientAnalyticsConfigurationToTerraform)(this._analyticsConfiguration),
    };
  }
}
