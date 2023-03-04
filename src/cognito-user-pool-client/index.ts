// https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CognitoUserPoolClientConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#access_token_validity CognitoUserPoolClient#access_token_validity}
  */
  readonly accessTokenValidity?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#allowed_oauth_flows CognitoUserPoolClient#allowed_oauth_flows}
  */
  readonly allowedOauthFlows?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#allowed_oauth_flows_user_pool_client CognitoUserPoolClient#allowed_oauth_flows_user_pool_client}
  */
  readonly allowedOauthFlowsUserPoolClient?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#allowed_oauth_scopes CognitoUserPoolClient#allowed_oauth_scopes}
  */
  readonly allowedOauthScopes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#auth_session_validity CognitoUserPoolClient#auth_session_validity}
  */
  readonly authSessionValidity?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#callback_urls CognitoUserPoolClient#callback_urls}
  */
  readonly callbackUrls?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#default_redirect_uri CognitoUserPoolClient#default_redirect_uri}
  */
  readonly defaultRedirectUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#enable_propagate_additional_user_context_data CognitoUserPoolClient#enable_propagate_additional_user_context_data}
  */
  readonly enablePropagateAdditionalUserContextData?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#enable_token_revocation CognitoUserPoolClient#enable_token_revocation}
  */
  readonly enableTokenRevocation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#explicit_auth_flows CognitoUserPoolClient#explicit_auth_flows}
  */
  readonly explicitAuthFlows?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#generate_secret CognitoUserPoolClient#generate_secret}
  */
  readonly generateSecret?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#id CognitoUserPoolClient#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#id_token_validity CognitoUserPoolClient#id_token_validity}
  */
  readonly idTokenValidity?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#logout_urls CognitoUserPoolClient#logout_urls}
  */
  readonly logoutUrls?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#name CognitoUserPoolClient#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#prevent_user_existence_errors CognitoUserPoolClient#prevent_user_existence_errors}
  */
  readonly preventUserExistenceErrors?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#read_attributes CognitoUserPoolClient#read_attributes}
  */
  readonly readAttributes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#refresh_token_validity CognitoUserPoolClient#refresh_token_validity}
  */
  readonly refreshTokenValidity?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#supported_identity_providers CognitoUserPoolClient#supported_identity_providers}
  */
  readonly supportedIdentityProviders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#user_pool_id CognitoUserPoolClient#user_pool_id}
  */
  readonly userPoolId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#write_attributes CognitoUserPoolClient#write_attributes}
  */
  readonly writeAttributes?: string[];
  /**
  * analytics_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#analytics_configuration CognitoUserPoolClient#analytics_configuration}
  */
  readonly analyticsConfiguration?: CognitoUserPoolClientAnalyticsConfiguration;
  /**
  * token_validity_units block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#token_validity_units CognitoUserPoolClient#token_validity_units}
  */
  readonly tokenValidityUnits?: CognitoUserPoolClientTokenValidityUnits;
}
export interface CognitoUserPoolClientAnalyticsConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#application_arn CognitoUserPoolClient#application_arn}
  */
  readonly applicationArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#application_id CognitoUserPoolClient#application_id}
  */
  readonly applicationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#external_id CognitoUserPoolClient#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#role_arn CognitoUserPoolClient#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#user_data_shared CognitoUserPoolClient#user_data_shared}
  */
  readonly userDataShared?: boolean | cdktf.IResolvable;
}

export function cognitoUserPoolClientAnalyticsConfigurationToTerraform(struct?: CognitoUserPoolClientAnalyticsConfigurationOutputReference | CognitoUserPoolClientAnalyticsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_arn: cdktf.stringToTerraform(struct!.applicationArn),
    application_id: cdktf.stringToTerraform(struct!.applicationId),
    external_id: cdktf.stringToTerraform(struct!.externalId),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    user_data_shared: cdktf.booleanToTerraform(struct!.userDataShared),
  }
}

export class CognitoUserPoolClientAnalyticsConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CognitoUserPoolClientAnalyticsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationArn = this._applicationArn;
    }
    if (this._applicationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationId = this._applicationId;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._userDataShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.userDataShared = this._userDataShared;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CognitoUserPoolClientAnalyticsConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._applicationArn = undefined;
      this._applicationId = undefined;
      this._externalId = undefined;
      this._roleArn = undefined;
      this._userDataShared = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._applicationArn = value.applicationArn;
      this._applicationId = value.applicationId;
      this._externalId = value.externalId;
      this._roleArn = value.roleArn;
      this._userDataShared = value.userDataShared;
    }
  }

  // application_arn - computed: false, optional: true, required: false
  private _applicationArn?: string; 
  public get applicationArn() {
    return this.getStringAttribute('application_arn');
  }
  public set applicationArn(value: string) {
    this._applicationArn = value;
  }
  public resetApplicationArn() {
    this._applicationArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationArnInput() {
    return this._applicationArn;
  }

  // application_id - computed: false, optional: true, required: false
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  public resetApplicationId() {
    this._applicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // user_data_shared - computed: false, optional: true, required: false
  private _userDataShared?: boolean | cdktf.IResolvable; 
  public get userDataShared() {
    return this.getBooleanAttribute('user_data_shared');
  }
  public set userDataShared(value: boolean | cdktf.IResolvable) {
    this._userDataShared = value;
  }
  public resetUserDataShared() {
    this._userDataShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataSharedInput() {
    return this._userDataShared;
  }
}
export interface CognitoUserPoolClientTokenValidityUnits {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#access_token CognitoUserPoolClient#access_token}
  */
  readonly accessToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#id_token CognitoUserPoolClient#id_token}
  */
  readonly idToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client#refresh_token CognitoUserPoolClient#refresh_token}
  */
  readonly refreshToken?: string;
}

export function cognitoUserPoolClientTokenValidityUnitsToTerraform(struct?: CognitoUserPoolClientTokenValidityUnitsOutputReference | CognitoUserPoolClientTokenValidityUnits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_token: cdktf.stringToTerraform(struct!.accessToken),
    id_token: cdktf.stringToTerraform(struct!.idToken),
    refresh_token: cdktf.stringToTerraform(struct!.refreshToken),
  }
}

export class CognitoUserPoolClientTokenValidityUnitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CognitoUserPoolClientTokenValidityUnits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessToken = this._accessToken;
    }
    if (this._idToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.idToken = this._idToken;
    }
    if (this._refreshToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshToken = this._refreshToken;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CognitoUserPoolClientTokenValidityUnits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessToken = undefined;
      this._idToken = undefined;
      this._refreshToken = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessToken = value.accessToken;
      this._idToken = value.idToken;
      this._refreshToken = value.refreshToken;
    }
  }

  // access_token - computed: false, optional: true, required: false
  private _accessToken?: string; 
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }
  public set accessToken(value: string) {
    this._accessToken = value;
  }
  public resetAccessToken() {
    this._accessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken;
  }

  // id_token - computed: false, optional: true, required: false
  private _idToken?: string; 
  public get idToken() {
    return this.getStringAttribute('id_token');
  }
  public set idToken(value: string) {
    this._idToken = value;
  }
  public resetIdToken() {
    this._idToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idTokenInput() {
    return this._idToken;
  }

  // refresh_token - computed: false, optional: true, required: false
  private _refreshToken?: string; 
  public get refreshToken() {
    return this.getStringAttribute('refresh_token');
  }
  public set refreshToken(value: string) {
    this._refreshToken = value;
  }
  public resetRefreshToken() {
    this._refreshToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenInput() {
    return this._refreshToken;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client aws_cognito_user_pool_client}
*/
export class CognitoUserPoolClient extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cognito_user_pool_client";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client aws_cognito_user_pool_client} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CognitoUserPoolClientConfig
  */
  public constructor(scope: Construct, id: string, config: CognitoUserPoolClientConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cognito_user_pool_client',
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
    this._accessTokenValidity = config.accessTokenValidity;
    this._allowedOauthFlows = config.allowedOauthFlows;
    this._allowedOauthFlowsUserPoolClient = config.allowedOauthFlowsUserPoolClient;
    this._allowedOauthScopes = config.allowedOauthScopes;
    this._authSessionValidity = config.authSessionValidity;
    this._callbackUrls = config.callbackUrls;
    this._defaultRedirectUri = config.defaultRedirectUri;
    this._enablePropagateAdditionalUserContextData = config.enablePropagateAdditionalUserContextData;
    this._enableTokenRevocation = config.enableTokenRevocation;
    this._explicitAuthFlows = config.explicitAuthFlows;
    this._generateSecret = config.generateSecret;
    this._id = config.id;
    this._idTokenValidity = config.idTokenValidity;
    this._logoutUrls = config.logoutUrls;
    this._name = config.name;
    this._preventUserExistenceErrors = config.preventUserExistenceErrors;
    this._readAttributes = config.readAttributes;
    this._refreshTokenValidity = config.refreshTokenValidity;
    this._supportedIdentityProviders = config.supportedIdentityProviders;
    this._userPoolId = config.userPoolId;
    this._writeAttributes = config.writeAttributes;
    this._analyticsConfiguration.internalValue = config.analyticsConfiguration;
    this._tokenValidityUnits.internalValue = config.tokenValidityUnits;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_token_validity - computed: false, optional: true, required: false
  private _accessTokenValidity?: number; 
  public get accessTokenValidity() {
    return this.getNumberAttribute('access_token_validity');
  }
  public set accessTokenValidity(value: number) {
    this._accessTokenValidity = value;
  }
  public resetAccessTokenValidity() {
    this._accessTokenValidity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenValidityInput() {
    return this._accessTokenValidity;
  }

  // allowed_oauth_flows - computed: false, optional: true, required: false
  private _allowedOauthFlows?: string[]; 
  public get allowedOauthFlows() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_oauth_flows'));
  }
  public set allowedOauthFlows(value: string[]) {
    this._allowedOauthFlows = value;
  }
  public resetAllowedOauthFlows() {
    this._allowedOauthFlows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedOauthFlowsInput() {
    return this._allowedOauthFlows;
  }

  // allowed_oauth_flows_user_pool_client - computed: false, optional: true, required: false
  private _allowedOauthFlowsUserPoolClient?: boolean | cdktf.IResolvable; 
  public get allowedOauthFlowsUserPoolClient() {
    return this.getBooleanAttribute('allowed_oauth_flows_user_pool_client');
  }
  public set allowedOauthFlowsUserPoolClient(value: boolean | cdktf.IResolvable) {
    this._allowedOauthFlowsUserPoolClient = value;
  }
  public resetAllowedOauthFlowsUserPoolClient() {
    this._allowedOauthFlowsUserPoolClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedOauthFlowsUserPoolClientInput() {
    return this._allowedOauthFlowsUserPoolClient;
  }

  // allowed_oauth_scopes - computed: false, optional: true, required: false
  private _allowedOauthScopes?: string[]; 
  public get allowedOauthScopes() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_oauth_scopes'));
  }
  public set allowedOauthScopes(value: string[]) {
    this._allowedOauthScopes = value;
  }
  public resetAllowedOauthScopes() {
    this._allowedOauthScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedOauthScopesInput() {
    return this._allowedOauthScopes;
  }

  // auth_session_validity - computed: false, optional: true, required: false
  private _authSessionValidity?: number; 
  public get authSessionValidity() {
    return this.getNumberAttribute('auth_session_validity');
  }
  public set authSessionValidity(value: number) {
    this._authSessionValidity = value;
  }
  public resetAuthSessionValidity() {
    this._authSessionValidity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authSessionValidityInput() {
    return this._authSessionValidity;
  }

  // callback_urls - computed: true, optional: true, required: false
  private _callbackUrls?: string[]; 
  public get callbackUrls() {
    return cdktf.Fn.tolist(this.getListAttribute('callback_urls'));
  }
  public set callbackUrls(value: string[]) {
    this._callbackUrls = value;
  }
  public resetCallbackUrls() {
    this._callbackUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callbackUrlsInput() {
    return this._callbackUrls;
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
  public set defaultRedirectUri(value: string) {
    this._defaultRedirectUri = value;
  }
  public resetDefaultRedirectUri() {
    this._defaultRedirectUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRedirectUriInput() {
    return this._defaultRedirectUri;
  }

  // enable_propagate_additional_user_context_data - computed: false, optional: true, required: false
  private _enablePropagateAdditionalUserContextData?: boolean | cdktf.IResolvable; 
  public get enablePropagateAdditionalUserContextData() {
    return this.getBooleanAttribute('enable_propagate_additional_user_context_data');
  }
  public set enablePropagateAdditionalUserContextData(value: boolean | cdktf.IResolvable) {
    this._enablePropagateAdditionalUserContextData = value;
  }
  public resetEnablePropagateAdditionalUserContextData() {
    this._enablePropagateAdditionalUserContextData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePropagateAdditionalUserContextDataInput() {
    return this._enablePropagateAdditionalUserContextData;
  }

  // enable_token_revocation - computed: true, optional: true, required: false
  private _enableTokenRevocation?: boolean | cdktf.IResolvable; 
  public get enableTokenRevocation() {
    return this.getBooleanAttribute('enable_token_revocation');
  }
  public set enableTokenRevocation(value: boolean | cdktf.IResolvable) {
    this._enableTokenRevocation = value;
  }
  public resetEnableTokenRevocation() {
    this._enableTokenRevocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTokenRevocationInput() {
    return this._enableTokenRevocation;
  }

  // explicit_auth_flows - computed: false, optional: true, required: false
  private _explicitAuthFlows?: string[]; 
  public get explicitAuthFlows() {
    return cdktf.Fn.tolist(this.getListAttribute('explicit_auth_flows'));
  }
  public set explicitAuthFlows(value: string[]) {
    this._explicitAuthFlows = value;
  }
  public resetExplicitAuthFlows() {
    this._explicitAuthFlows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get explicitAuthFlowsInput() {
    return this._explicitAuthFlows;
  }

  // generate_secret - computed: false, optional: true, required: false
  private _generateSecret?: boolean | cdktf.IResolvable; 
  public get generateSecret() {
    return this.getBooleanAttribute('generate_secret');
  }
  public set generateSecret(value: boolean | cdktf.IResolvable) {
    this._generateSecret = value;
  }
  public resetGenerateSecret() {
    this._generateSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateSecretInput() {
    return this._generateSecret;
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

  // id_token_validity - computed: false, optional: true, required: false
  private _idTokenValidity?: number; 
  public get idTokenValidity() {
    return this.getNumberAttribute('id_token_validity');
  }
  public set idTokenValidity(value: number) {
    this._idTokenValidity = value;
  }
  public resetIdTokenValidity() {
    this._idTokenValidity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idTokenValidityInput() {
    return this._idTokenValidity;
  }

  // logout_urls - computed: true, optional: true, required: false
  private _logoutUrls?: string[]; 
  public get logoutUrls() {
    return cdktf.Fn.tolist(this.getListAttribute('logout_urls'));
  }
  public set logoutUrls(value: string[]) {
    this._logoutUrls = value;
  }
  public resetLogoutUrls() {
    this._logoutUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutUrlsInput() {
    return this._logoutUrls;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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
    return this._preventUserExistenceErrors;
  }

  // read_attributes - computed: false, optional: true, required: false
  private _readAttributes?: string[]; 
  public get readAttributes() {
    return cdktf.Fn.tolist(this.getListAttribute('read_attributes'));
  }
  public set readAttributes(value: string[]) {
    this._readAttributes = value;
  }
  public resetReadAttributes() {
    this._readAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readAttributesInput() {
    return this._readAttributes;
  }

  // refresh_token_validity - computed: false, optional: true, required: false
  private _refreshTokenValidity?: number; 
  public get refreshTokenValidity() {
    return this.getNumberAttribute('refresh_token_validity');
  }
  public set refreshTokenValidity(value: number) {
    this._refreshTokenValidity = value;
  }
  public resetRefreshTokenValidity() {
    this._refreshTokenValidity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenValidityInput() {
    return this._refreshTokenValidity;
  }

  // supported_identity_providers - computed: false, optional: true, required: false
  private _supportedIdentityProviders?: string[]; 
  public get supportedIdentityProviders() {
    return cdktf.Fn.tolist(this.getListAttribute('supported_identity_providers'));
  }
  public set supportedIdentityProviders(value: string[]) {
    this._supportedIdentityProviders = value;
  }
  public resetSupportedIdentityProviders() {
    this._supportedIdentityProviders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedIdentityProvidersInput() {
    return this._supportedIdentityProviders;
  }

  // user_pool_id - computed: false, optional: false, required: true
  private _userPoolId?: string; 
  public get userPoolId() {
    return this.getStringAttribute('user_pool_id');
  }
  public set userPoolId(value: string) {
    this._userPoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userPoolIdInput() {
    return this._userPoolId;
  }

  // write_attributes - computed: false, optional: true, required: false
  private _writeAttributes?: string[]; 
  public get writeAttributes() {
    return cdktf.Fn.tolist(this.getListAttribute('write_attributes'));
  }
  public set writeAttributes(value: string[]) {
    this._writeAttributes = value;
  }
  public resetWriteAttributes() {
    this._writeAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeAttributesInput() {
    return this._writeAttributes;
  }

  // analytics_configuration - computed: false, optional: true, required: false
  private _analyticsConfiguration = new CognitoUserPoolClientAnalyticsConfigurationOutputReference(this, "analytics_configuration");
  public get analyticsConfiguration() {
    return this._analyticsConfiguration;
  }
  public putAnalyticsConfiguration(value: CognitoUserPoolClientAnalyticsConfiguration) {
    this._analyticsConfiguration.internalValue = value;
  }
  public resetAnalyticsConfiguration() {
    this._analyticsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyticsConfigurationInput() {
    return this._analyticsConfiguration.internalValue;
  }

  // token_validity_units - computed: false, optional: true, required: false
  private _tokenValidityUnits = new CognitoUserPoolClientTokenValidityUnitsOutputReference(this, "token_validity_units");
  public get tokenValidityUnits() {
    return this._tokenValidityUnits;
  }
  public putTokenValidityUnits(value: CognitoUserPoolClientTokenValidityUnits) {
    this._tokenValidityUnits.internalValue = value;
  }
  public resetTokenValidityUnits() {
    this._tokenValidityUnits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenValidityUnitsInput() {
    return this._tokenValidityUnits.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_token_validity: cdktf.numberToTerraform(this._accessTokenValidity),
      allowed_oauth_flows: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedOauthFlows),
      allowed_oauth_flows_user_pool_client: cdktf.booleanToTerraform(this._allowedOauthFlowsUserPoolClient),
      allowed_oauth_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedOauthScopes),
      auth_session_validity: cdktf.numberToTerraform(this._authSessionValidity),
      callback_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(this._callbackUrls),
      default_redirect_uri: cdktf.stringToTerraform(this._defaultRedirectUri),
      enable_propagate_additional_user_context_data: cdktf.booleanToTerraform(this._enablePropagateAdditionalUserContextData),
      enable_token_revocation: cdktf.booleanToTerraform(this._enableTokenRevocation),
      explicit_auth_flows: cdktf.listMapper(cdktf.stringToTerraform, false)(this._explicitAuthFlows),
      generate_secret: cdktf.booleanToTerraform(this._generateSecret),
      id: cdktf.stringToTerraform(this._id),
      id_token_validity: cdktf.numberToTerraform(this._idTokenValidity),
      logout_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(this._logoutUrls),
      name: cdktf.stringToTerraform(this._name),
      prevent_user_existence_errors: cdktf.stringToTerraform(this._preventUserExistenceErrors),
      read_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._readAttributes),
      refresh_token_validity: cdktf.numberToTerraform(this._refreshTokenValidity),
      supported_identity_providers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._supportedIdentityProviders),
      user_pool_id: cdktf.stringToTerraform(this._userPoolId),
      write_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._writeAttributes),
      analytics_configuration: cognitoUserPoolClientAnalyticsConfigurationToTerraform(this._analyticsConfiguration.internalValue),
      token_validity_units: cognitoUserPoolClientTokenValidityUnitsToTerraform(this._tokenValidityUnits.internalValue),
    };
  }
}
