// https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "allowed_oauth_flows": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      },
      "allowed_oauth_flows_user_pool_client": {
        "type": "bool",
        "optional": true
      },
      "allowed_oauth_scopes": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      },
      "callback_urls": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      },
      "client_secret": {
        "type": "string",
        "computed": true,
        "sensitive": true
      },
      "default_redirect_uri": {
        "type": "string",
        "optional": true
      },
      "explicit_auth_flows": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      },
      "generate_secret": {
        "type": "bool",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "logout_urls": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "prevent_user_existence_errors": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "read_attributes": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      },
      "refresh_token_validity": {
        "type": "number",
        "optional": true
      },
      "supported_identity_providers": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      },
      "user_pool_id": {
        "type": "string",
        "required": true
      },
      "write_attributes": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      }
    },
    "block_types": {
      "analytics_configuration": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "application_id": {
              "type": "string",
              "required": true
            },
            "external_id": {
              "type": "string",
              "required": true
            },
            "role_arn": {
              "type": "string",
              "required": true
            },
            "user_data_shared": {
              "type": "bool",
              "optional": true
            }
          }
        },
        "max_items": 1
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface CognitoUserPoolClientConfig extends TerraformMetaArguments {
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

// Resource

export class CognitoUserPoolClient extends TerraformResource {

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
    return this._allowedOauthFlows;
  }
  public set allowedOauthFlows(value: string[] | undefined) {
    this._allowedOauthFlows = value;
  }

  // allowed_oauth_flows_user_pool_client - computed: false, optional: true, required: false
  private _allowedOauthFlowsUserPoolClient?: boolean;
  public get allowedOauthFlowsUserPoolClient() {
    return this._allowedOauthFlowsUserPoolClient;
  }
  public set allowedOauthFlowsUserPoolClient(value: boolean | undefined) {
    this._allowedOauthFlowsUserPoolClient = value;
  }

  // allowed_oauth_scopes - computed: false, optional: true, required: false
  private _allowedOauthScopes?: string[];
  public get allowedOauthScopes() {
    return this._allowedOauthScopes;
  }
  public set allowedOauthScopes(value: string[] | undefined) {
    this._allowedOauthScopes = value;
  }

  // callback_urls - computed: false, optional: true, required: false
  private _callbackUrls?: string[];
  public get callbackUrls() {
    return this._callbackUrls;
  }
  public set callbackUrls(value: string[] | undefined) {
    this._callbackUrls = value;
  }

  // client_secret - computed: true, optional: false, required: true
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // default_redirect_uri - computed: false, optional: true, required: false
  private _defaultRedirectUri?: string;
  public get defaultRedirectUri() {
    return this._defaultRedirectUri;
  }
  public set defaultRedirectUri(value: string | undefined) {
    this._defaultRedirectUri = value;
  }

  // explicit_auth_flows - computed: false, optional: true, required: false
  private _explicitAuthFlows?: string[];
  public get explicitAuthFlows() {
    return this._explicitAuthFlows;
  }
  public set explicitAuthFlows(value: string[] | undefined) {
    this._explicitAuthFlows = value;
  }

  // generate_secret - computed: false, optional: true, required: false
  private _generateSecret?: boolean;
  public get generateSecret() {
    return this._generateSecret;
  }
  public set generateSecret(value: boolean | undefined) {
    this._generateSecret = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // logout_urls - computed: false, optional: true, required: false
  private _logoutUrls?: string[];
  public get logoutUrls() {
    return this._logoutUrls;
  }
  public set logoutUrls(value: string[] | undefined) {
    this._logoutUrls = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // prevent_user_existence_errors - computed: true, optional: true, required: false
  private _preventUserExistenceErrors?: string;
  public get preventUserExistenceErrors() {
    return this._preventUserExistenceErrors ?? this.getStringAttribute('prevent_user_existence_errors');
  }
  public set preventUserExistenceErrors(value: string | undefined) {
    this._preventUserExistenceErrors = value;
  }

  // read_attributes - computed: false, optional: true, required: false
  private _readAttributes?: string[];
  public get readAttributes() {
    return this._readAttributes;
  }
  public set readAttributes(value: string[] | undefined) {
    this._readAttributes = value;
  }

  // refresh_token_validity - computed: false, optional: true, required: false
  private _refreshTokenValidity?: number;
  public get refreshTokenValidity() {
    return this._refreshTokenValidity;
  }
  public set refreshTokenValidity(value: number | undefined) {
    this._refreshTokenValidity = value;
  }

  // supported_identity_providers - computed: false, optional: true, required: false
  private _supportedIdentityProviders?: string[];
  public get supportedIdentityProviders() {
    return this._supportedIdentityProviders;
  }
  public set supportedIdentityProviders(value: string[] | undefined) {
    this._supportedIdentityProviders = value;
  }

  // user_pool_id - computed: false, optional: false, required: true
  private _userPoolId: string;
  public get userPoolId() {
    return this._userPoolId;
  }
  public set userPoolId(value: string) {
    this._userPoolId = value;
  }

  // write_attributes - computed: false, optional: true, required: false
  private _writeAttributes?: string[];
  public get writeAttributes() {
    return this._writeAttributes;
  }
  public set writeAttributes(value: string[] | undefined) {
    this._writeAttributes = value;
  }

  // analytics_configuration - computed: false, optional: true, required: false
  private _analyticsConfiguration?: CognitoUserPoolClientAnalyticsConfiguration[];
  public get analyticsConfiguration() {
    return this._analyticsConfiguration;
  }
  public set analyticsConfiguration(value: CognitoUserPoolClientAnalyticsConfiguration[] | undefined) {
    this._analyticsConfiguration = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_oauth_flows: this._allowedOauthFlows,
      allowed_oauth_flows_user_pool_client: this._allowedOauthFlowsUserPoolClient,
      allowed_oauth_scopes: this._allowedOauthScopes,
      callback_urls: this._callbackUrls,
      default_redirect_uri: this._defaultRedirectUri,
      explicit_auth_flows: this._explicitAuthFlows,
      generate_secret: this._generateSecret,
      logout_urls: this._logoutUrls,
      name: this._name,
      prevent_user_existence_errors: this._preventUserExistenceErrors,
      read_attributes: this._readAttributes,
      refresh_token_validity: this._refreshTokenValidity,
      supported_identity_providers: this._supportedIdentityProviders,
      user_pool_id: this._userPoolId,
      write_attributes: this._writeAttributes,
      analytics_configuration: this._analyticsConfiguration,
    };
  }
}
