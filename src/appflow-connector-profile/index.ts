// https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppflowConnectorProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#connection_mode AppflowConnectorProfile#connection_mode}
  */
  readonly connectionMode: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#connector_label AppflowConnectorProfile#connector_label}
  */
  readonly connectorLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#connector_type AppflowConnectorProfile#connector_type}
  */
  readonly connectorType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#id AppflowConnectorProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#kms_arn AppflowConnectorProfile#kms_arn}
  */
  readonly kmsArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#name AppflowConnectorProfile#name}
  */
  readonly name: string;
  /**
  * connector_profile_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#connector_profile_config AppflowConnectorProfile#connector_profile_config}
  */
  readonly connectorProfileConfig: AppflowConnectorProfileConnectorProfileConfig;
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitude {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#api_key AppflowConnectorProfile#api_key}
  */
  readonly apiKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#secret_key AppflowConnectorProfile#secret_key}
  */
  readonly secretKey: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitudeToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitudeOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitude): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
  }
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitudeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitude | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._secretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitude | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiKey = undefined;
      this._secretKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiKey = value.apiKey;
      this._secretKey = value.secretKey;
    }
  }

  // api_key - computed: false, optional: false, required: true
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // secret_key - computed: false, optional: false, required: true
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorApiKey {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#api_key AppflowConnectorProfile#api_key}
  */
  readonly apiKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#api_secret_key AppflowConnectorProfile#api_secret_key}
  */
  readonly apiSecretKey?: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorApiKeyToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorApiKeyOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorApiKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
    api_secret_key: cdktf.stringToTerraform(struct!.apiSecretKey),
  }
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorApiKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorApiKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._apiSecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiSecretKey = this._apiSecretKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorApiKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiKey = undefined;
      this._apiSecretKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiKey = value.apiKey;
      this._apiSecretKey = value.apiSecretKey;
    }
  }

  // api_key - computed: false, optional: false, required: true
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // api_secret_key - computed: false, optional: true, required: false
  private _apiSecretKey?: string; 
  public get apiSecretKey() {
    return this.getStringAttribute('api_secret_key');
  }
  public set apiSecretKey(value: string) {
    this._apiSecretKey = value;
  }
  public resetApiSecretKey() {
    this._apiSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiSecretKeyInput() {
    return this._apiSecretKey;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorBasic {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#password AppflowConnectorProfile#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#username AppflowConnectorProfile#username}
  */
  readonly username: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorBasicToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorBasicOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorBasic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorBasicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorBasic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorBasic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorCustom {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#credentials_map AppflowConnectorProfile#credentials_map}
  */
  readonly credentialsMap?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#custom_authentication_type AppflowConnectorProfile#custom_authentication_type}
  */
  readonly customAuthenticationType: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorCustomToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorCustomOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials_map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.credentialsMap),
    custom_authentication_type: cdktf.stringToTerraform(struct!.customAuthenticationType),
  }
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorCustom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentialsMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsMap = this._credentialsMap;
    }
    if (this._customAuthenticationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.customAuthenticationType = this._customAuthenticationType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorCustom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._credentialsMap = undefined;
      this._customAuthenticationType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._credentialsMap = value.credentialsMap;
      this._customAuthenticationType = value.customAuthenticationType;
    }
  }

  // credentials_map - computed: false, optional: true, required: false
  private _credentialsMap?: { [key: string]: string }; 
  public get credentialsMap() {
    return this.getStringMapAttribute('credentials_map');
  }
  public set credentialsMap(value: { [key: string]: string }) {
    this._credentialsMap = value;
  }
  public resetCredentialsMap() {
    this._credentialsMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsMapInput() {
    return this._credentialsMap;
  }

  // custom_authentication_type - computed: false, optional: false, required: true
  private _customAuthenticationType?: string; 
  public get customAuthenticationType() {
    return this.getStringAttribute('custom_authentication_type');
  }
  public set customAuthenticationType(value: string) {
    this._customAuthenticationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customAuthenticationTypeInput() {
    return this._customAuthenticationType;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OauthRequest {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#auth_code AppflowConnectorProfile#auth_code}
  */
  readonly authCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#redirect_uri AppflowConnectorProfile#redirect_uri}
  */
  readonly redirectUri?: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OauthRequestToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OauthRequestOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OauthRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_code: cdktf.stringToTerraform(struct!.authCode),
    redirect_uri: cdktf.stringToTerraform(struct!.redirectUri),
  }
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OauthRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OauthRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.authCode = this._authCode;
    }
    if (this._redirectUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectUri = this._redirectUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OauthRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authCode = undefined;
      this._redirectUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authCode = value.authCode;
      this._redirectUri = value.redirectUri;
    }
  }

  // auth_code - computed: false, optional: true, required: false
  private _authCode?: string; 
  public get authCode() {
    return this.getStringAttribute('auth_code');
  }
  public set authCode(value: string) {
    this._authCode = value;
  }
  public resetAuthCode() {
    this._authCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authCodeInput() {
    return this._authCode;
  }

  // redirect_uri - computed: false, optional: true, required: false
  private _redirectUri?: string; 
  public get redirectUri() {
    return this.getStringAttribute('redirect_uri');
  }
  public set redirectUri(value: string) {
    this._redirectUri = value;
  }
  public resetRedirectUri() {
    this._redirectUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUriInput() {
    return this._redirectUri;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2 {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#access_token AppflowConnectorProfile#access_token}
  */
  readonly accessToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#client_id AppflowConnectorProfile#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#client_secret AppflowConnectorProfile#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#refresh_token AppflowConnectorProfile#refresh_token}
  */
  readonly refreshToken?: string;
  /**
  * oauth_request block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#oauth_request AppflowConnectorProfile#oauth_request}
  */
  readonly oauthRequest?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OauthRequest;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2ToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_token: cdktf.stringToTerraform(struct!.accessToken),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    refresh_token: cdktf.stringToTerraform(struct!.refreshToken),
    oauth_request: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OauthRequestToTerraform(struct!.oauthRequest),
  }
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessToken = this._accessToken;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._refreshToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshToken = this._refreshToken;
    }
    if (this._oauthRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthRequest = this._oauthRequest?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessToken = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._refreshToken = undefined;
      this._oauthRequest.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessToken = value.accessToken;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._refreshToken = value.refreshToken;
      this._oauthRequest.internalValue = value.oauthRequest;
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

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
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

  // oauth_request - computed: false, optional: true, required: false
  private _oauthRequest = new AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OauthRequestOutputReference(this, "oauth_request");
  public get oauthRequest() {
    return this._oauthRequest;
  }
  public putOauthRequest(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OauthRequest) {
    this._oauthRequest.internalValue = value;
  }
  public resetOauthRequest() {
    this._oauthRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthRequestInput() {
    return this._oauthRequest.internalValue;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnector {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#authentication_type AppflowConnectorProfile#authentication_type}
  */
  readonly authenticationType: string;
  /**
  * api_key block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#api_key AppflowConnectorProfile#api_key}
  */
  readonly apiKey?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorApiKey;
  /**
  * basic block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#basic AppflowConnectorProfile#basic}
  */
  readonly basic?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorBasic;
  /**
  * custom block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#custom AppflowConnectorProfile#custom}
  */
  readonly custom?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorCustom;
  /**
  * oauth2 block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#oauth2 AppflowConnectorProfile#oauth2}
  */
  readonly oauth2?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_type: cdktf.stringToTerraform(struct!.authenticationType),
    api_key: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorApiKeyToTerraform(struct!.apiKey),
    basic: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorBasicToTerraform(struct!.basic),
    custom: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorCustomToTerraform(struct!.custom),
    oauth2: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2ToTerraform(struct!.oauth2),
  }
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationType = this._authenticationType;
    }
    if (this._apiKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey?.internalValue;
    }
    if (this._basic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basic = this._basic?.internalValue;
    }
    if (this._custom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom = this._custom?.internalValue;
    }
    if (this._oauth2?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth2 = this._oauth2?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authenticationType = undefined;
      this._apiKey.internalValue = undefined;
      this._basic.internalValue = undefined;
      this._custom.internalValue = undefined;
      this._oauth2.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authenticationType = value.authenticationType;
      this._apiKey.internalValue = value.apiKey;
      this._basic.internalValue = value.basic;
      this._custom.internalValue = value.custom;
      this._oauth2.internalValue = value.oauth2;
    }
  }

  // authentication_type - computed: false, optional: false, required: true
  private _authenticationType?: string; 
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }
  public set authenticationType(value: string) {
    this._authenticationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypeInput() {
    return this._authenticationType;
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey = new AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorApiKeyOutputReference(this, "api_key");
  public get apiKey() {
    return this._apiKey;
  }
  public putApiKey(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorApiKey) {
    this._apiKey.internalValue = value;
  }
  public resetApiKey() {
    this._apiKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey.internalValue;
  }

  // basic - computed: false, optional: true, required: false
  private _basic = new AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorBasicOutputReference(this, "basic");
  public get basic() {
    return this._basic;
  }
  public putBasic(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorBasic) {
    this._basic.internalValue = value;
  }
  public resetBasic() {
    this._basic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicInput() {
    return this._basic.internalValue;
  }

  // custom - computed: false, optional: true, required: false
  private _custom = new AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorCustom) {
    this._custom.internalValue = value;
  }
  public resetCustom() {
    this._custom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom.internalValue;
  }

  // oauth2 - computed: false, optional: true, required: false
  private _oauth2 = new AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OutputReference(this, "oauth2");
  public get oauth2() {
    return this._oauth2;
  }
  public putOauth2(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2) {
    this._oauth2.internalValue = value;
  }
  public resetOauth2() {
    this._oauth2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2Input() {
    return this._oauth2.internalValue;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadog {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#api_key AppflowConnectorProfile#api_key}
  */
  readonly apiKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#application_key AppflowConnectorProfile#application_key}
  */
  readonly applicationKey: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadogToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadogOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
    application_key: cdktf.stringToTerraform(struct!.applicationKey),
  }
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._applicationKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationKey = this._applicationKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiKey = undefined;
      this._applicationKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiKey = value.apiKey;
      this._applicationKey = value.applicationKey;
    }
  }

  // api_key - computed: false, optional: false, required: true
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // application_key - computed: false, optional: false, required: true
  private _applicationKey?: string; 
  public get applicationKey() {
    return this.getStringAttribute('application_key');
  }
  public set applicationKey(value: string) {
    this._applicationKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationKeyInput() {
    return this._applicationKey;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatrace {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#api_token AppflowConnectorProfile#api_token}
  */
  readonly apiToken: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatraceToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatraceOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatrace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_token: cdktf.stringToTerraform(struct!.apiToken),
  }
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatraceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatrace | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiToken = this._apiToken;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatrace | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiToken = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiToken = value.apiToken;
    }
  }

  // api_token - computed: false, optional: false, required: true
  private _apiToken?: string; 
  public get apiToken() {
    return this.getStringAttribute('api_token');
  }
  public set apiToken(value: string) {
    this._apiToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsOauthRequest {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#auth_code AppflowConnectorProfile#auth_code}
  */
  readonly authCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#redirect_uri AppflowConnectorProfile#redirect_uri}
  */
  readonly redirectUri?: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsOauthRequestToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsOauthRequestOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsOauthRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_code: cdktf.stringToTerraform(struct!.authCode),
    redirect_uri: cdktf.stringToTerraform(struct!.redirectUri),
  }
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsOauthRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsOauthRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.authCode = this._authCode;
    }
    if (this._redirectUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectUri = this._redirectUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsOauthRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authCode = undefined;
      this._redirectUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authCode = value.authCode;
      this._redirectUri = value.redirectUri;
    }
  }

  // auth_code - computed: false, optional: true, required: false
  private _authCode?: string; 
  public get authCode() {
    return this.getStringAttribute('auth_code');
  }
  public set authCode(value: string) {
    this._authCode = value;
  }
  public resetAuthCode() {
    this._authCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authCodeInput() {
    return this._authCode;
  }

  // redirect_uri - computed: false, optional: true, required: false
  private _redirectUri?: string; 
  public get redirectUri() {
    return this.getStringAttribute('redirect_uri');
  }
  public set redirectUri(value: string) {
    this._redirectUri = value;
  }
  public resetRedirectUri() {
    this._redirectUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUriInput() {
    return this._redirectUri;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalytics {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#access_token AppflowConnectorProfile#access_token}
  */
  readonly accessToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#client_id AppflowConnectorProfile#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#client_secret AppflowConnectorProfile#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#refresh_token AppflowConnectorProfile#refresh_token}
  */
  readonly refreshToken?: string;
  /**
  * oauth_request block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#oauth_request AppflowConnectorProfile#oauth_request}
  */
  readonly oauthRequest?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsOauthRequest;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalytics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_token: cdktf.stringToTerraform(struct!.accessToken),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    refresh_token: cdktf.stringToTerraform(struct!.refreshToken),
    oauth_request: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsOauthRequestToTerraform(struct!.oauthRequest),
  }
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalytics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessToken = this._accessToken;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._refreshToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshToken = this._refreshToken;
    }
    if (this._oauthRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthRequest = this._oauthRequest?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalytics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessToken = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._refreshToken = undefined;
      this._oauthRequest.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessToken = value.accessToken;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._refreshToken = value.refreshToken;
      this._oauthRequest.internalValue = value.oauthRequest;
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

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
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

  // oauth_request - computed: false, optional: true, required: false
  private _oauthRequest = new AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsOauthRequestOutputReference(this, "oauth_request");
  public get oauthRequest() {
    return this._oauthRequest;
  }
  public putOauthRequest(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsOauthRequest) {
    this._oauthRequest.internalValue = value;
  }
  public resetOauthRequest() {
    this._oauthRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthRequestInput() {
    return this._oauthRequest.internalValue;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycodeOauthRequest {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#auth_code AppflowConnectorProfile#auth_code}
  */
  readonly authCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#redirect_uri AppflowConnectorProfile#redirect_uri}
  */
  readonly redirectUri?: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycodeOauthRequestToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycodeOauthRequestOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycodeOauthRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_code: cdktf.stringToTerraform(struct!.authCode),
    redirect_uri: cdktf.stringToTerraform(struct!.redirectUri),
  }
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycodeOauthRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycodeOauthRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.authCode = this._authCode;
    }
    if (this._redirectUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectUri = this._redirectUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycodeOauthRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authCode = undefined;
      this._redirectUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authCode = value.authCode;
      this._redirectUri = value.redirectUri;
    }
  }

  // auth_code - computed: false, optional: true, required: false
  private _authCode?: string; 
  public get authCode() {
    return this.getStringAttribute('auth_code');
  }
  public set authCode(value: string) {
    this._authCode = value;
  }
  public resetAuthCode() {
    this._authCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authCodeInput() {
    return this._authCode;
  }

  // redirect_uri - computed: false, optional: true, required: false
  private _redirectUri?: string; 
  public get redirectUri() {
    return this.getStringAttribute('redirect_uri');
  }
  public set redirectUri(value: string) {
    this._redirectUri = value;
  }
  public resetRedirectUri() {
    this._redirectUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUriInput() {
    return this._redirectUri;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycode {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#access_token AppflowConnectorProfile#access_token}
  */
  readonly accessToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#refresh_token AppflowConnectorProfile#refresh_token}
  */
  readonly refreshToken?: string;
  /**
  * oauth_request block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#oauth_request AppflowConnectorProfile#oauth_request}
  */
  readonly oauthRequest?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycodeOauthRequest;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycodeToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycodeOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_token: cdktf.stringToTerraform(struct!.accessToken),
    refresh_token: cdktf.stringToTerraform(struct!.refreshToken),
    oauth_request: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycodeOauthRequestToTerraform(struct!.oauthRequest),
  }
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessToken = this._accessToken;
    }
    if (this._refreshToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshToken = this._refreshToken;
    }
    if (this._oauthRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthRequest = this._oauthRequest?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessToken = undefined;
      this._refreshToken = undefined;
      this._oauthRequest.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessToken = value.accessToken;
      this._refreshToken = value.refreshToken;
      this._oauthRequest.internalValue = value.oauthRequest;
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

  // oauth_request - computed: false, optional: true, required: false
  private _oauthRequest = new AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycodeOauthRequestOutputReference(this, "oauth_request");
  public get oauthRequest() {
    return this._oauthRequest;
  }
  public putOauthRequest(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycodeOauthRequest) {
    this._oauthRequest.internalValue = value;
  }
  public resetOauthRequest() {
    this._oauthRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthRequestInput() {
    return this._oauthRequest.internalValue;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexus {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#access_key_id AppflowConnectorProfile#access_key_id}
  */
  readonly accessKeyId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#datakey AppflowConnectorProfile#datakey}
  */
  readonly datakey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#secret_access_key AppflowConnectorProfile#secret_access_key}
  */
  readonly secretAccessKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#user_id AppflowConnectorProfile#user_id}
  */
  readonly userId: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexusToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexusOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key_id: cdktf.stringToTerraform(struct!.accessKeyId),
    datakey: cdktf.stringToTerraform(struct!.datakey),
    secret_access_key: cdktf.stringToTerraform(struct!.secretAccessKey),
    user_id: cdktf.stringToTerraform(struct!.userId),
  }
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyId = this._accessKeyId;
    }
    if (this._datakey !== undefined) {
      hasAnyValues = true;
      internalValueResult.datakey = this._datakey;
    }
    if (this._secretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretAccessKey = this._secretAccessKey;
    }
    if (this._userId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userId = this._userId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKeyId = undefined;
      this._datakey = undefined;
      this._secretAccessKey = undefined;
      this._userId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKeyId = value.accessKeyId;
      this._datakey = value.datakey;
      this._secretAccessKey = value.secretAccessKey;
      this._userId = value.userId;
    }
  }

  // access_key_id - computed: false, optional: false, required: true
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }
  public set accessKeyId(value: string) {
    this._accessKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
  }

  // datakey - computed: false, optional: false, required: true
  private _datakey?: string; 
  public get datakey() {
    return this.getStringAttribute('datakey');
  }
  public set datakey(value: string) {
    this._datakey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datakeyInput() {
    return this._datakey;
  }

  // secret_access_key - computed: false, optional: false, required: true
  private _secretAccessKey?: string; 
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }
  public set secretAccessKey(value: string) {
    this._secretAccessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeyInput() {
    return this._secretAccessKey;
  }

  // user_id - computed: false, optional: false, required: true
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoOauthRequest {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#auth_code AppflowConnectorProfile#auth_code}
  */
  readonly authCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#redirect_uri AppflowConnectorProfile#redirect_uri}
  */
  readonly redirectUri?: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoOauthRequestToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoOauthRequestOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoOauthRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_code: cdktf.stringToTerraform(struct!.authCode),
    redirect_uri: cdktf.stringToTerraform(struct!.redirectUri),
  }
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoOauthRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoOauthRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.authCode = this._authCode;
    }
    if (this._redirectUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectUri = this._redirectUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoOauthRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authCode = undefined;
      this._redirectUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authCode = value.authCode;
      this._redirectUri = value.redirectUri;
    }
  }

  // auth_code - computed: false, optional: true, required: false
  private _authCode?: string; 
  public get authCode() {
    return this.getStringAttribute('auth_code');
  }
  public set authCode(value: string) {
    this._authCode = value;
  }
  public resetAuthCode() {
    this._authCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authCodeInput() {
    return this._authCode;
  }

  // redirect_uri - computed: false, optional: true, required: false
  private _redirectUri?: string; 
  public get redirectUri() {
    return this.getStringAttribute('redirect_uri');
  }
  public set redirectUri(value: string) {
    this._redirectUri = value;
  }
  public resetRedirectUri() {
    this._redirectUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUriInput() {
    return this._redirectUri;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketo {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#access_token AppflowConnectorProfile#access_token}
  */
  readonly accessToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#client_id AppflowConnectorProfile#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#client_secret AppflowConnectorProfile#client_secret}
  */
  readonly clientSecret: string;
  /**
  * oauth_request block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#oauth_request AppflowConnectorProfile#oauth_request}
  */
  readonly oauthRequest?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoOauthRequest;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_token: cdktf.stringToTerraform(struct!.accessToken),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    oauth_request: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoOauthRequestToTerraform(struct!.oauthRequest),
  }
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessToken = this._accessToken;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._oauthRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthRequest = this._oauthRequest?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessToken = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._oauthRequest.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessToken = value.accessToken;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._oauthRequest.internalValue = value.oauthRequest;
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

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // oauth_request - computed: false, optional: true, required: false
  private _oauthRequest = new AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoOauthRequestOutputReference(this, "oauth_request");
  public get oauthRequest() {
    return this._oauthRequest;
  }
  public putOauthRequest(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoOauthRequest) {
    this._oauthRequest.internalValue = value;
  }
  public resetOauthRequest() {
    this._oauthRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthRequestInput() {
    return this._oauthRequest.internalValue;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshift {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#password AppflowConnectorProfile#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#username AppflowConnectorProfile#username}
  */
  readonly username: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshiftToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshiftOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshift): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshiftOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshift | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshift | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceOauthRequest {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#auth_code AppflowConnectorProfile#auth_code}
  */
  readonly authCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#redirect_uri AppflowConnectorProfile#redirect_uri}
  */
  readonly redirectUri?: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceOauthRequestToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceOauthRequestOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceOauthRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_code: cdktf.stringToTerraform(struct!.authCode),
    redirect_uri: cdktf.stringToTerraform(struct!.redirectUri),
  }
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceOauthRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceOauthRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.authCode = this._authCode;
    }
    if (this._redirectUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectUri = this._redirectUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceOauthRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authCode = undefined;
      this._redirectUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authCode = value.authCode;
      this._redirectUri = value.redirectUri;
    }
  }

  // auth_code - computed: false, optional: true, required: false
  private _authCode?: string; 
  public get authCode() {
    return this.getStringAttribute('auth_code');
  }
  public set authCode(value: string) {
    this._authCode = value;
  }
  public resetAuthCode() {
    this._authCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authCodeInput() {
    return this._authCode;
  }

  // redirect_uri - computed: false, optional: true, required: false
  private _redirectUri?: string; 
  public get redirectUri() {
    return this.getStringAttribute('redirect_uri');
  }
  public set redirectUri(value: string) {
    this._redirectUri = value;
  }
  public resetRedirectUri() {
    this._redirectUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUriInput() {
    return this._redirectUri;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforce {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#access_token AppflowConnectorProfile#access_token}
  */
  readonly accessToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#client_credentials_arn AppflowConnectorProfile#client_credentials_arn}
  */
  readonly clientCredentialsArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#refresh_token AppflowConnectorProfile#refresh_token}
  */
  readonly refreshToken?: string;
  /**
  * oauth_request block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#oauth_request AppflowConnectorProfile#oauth_request}
  */
  readonly oauthRequest?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceOauthRequest;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforce): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_token: cdktf.stringToTerraform(struct!.accessToken),
    client_credentials_arn: cdktf.stringToTerraform(struct!.clientCredentialsArn),
    refresh_token: cdktf.stringToTerraform(struct!.refreshToken),
    oauth_request: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceOauthRequestToTerraform(struct!.oauthRequest),
  }
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforce | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessToken = this._accessToken;
    }
    if (this._clientCredentialsArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCredentialsArn = this._clientCredentialsArn;
    }
    if (this._refreshToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshToken = this._refreshToken;
    }
    if (this._oauthRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthRequest = this._oauthRequest?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforce | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessToken = undefined;
      this._clientCredentialsArn = undefined;
      this._refreshToken = undefined;
      this._oauthRequest.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessToken = value.accessToken;
      this._clientCredentialsArn = value.clientCredentialsArn;
      this._refreshToken = value.refreshToken;
      this._oauthRequest.internalValue = value.oauthRequest;
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

  // client_credentials_arn - computed: false, optional: true, required: false
  private _clientCredentialsArn?: string; 
  public get clientCredentialsArn() {
    return this.getStringAttribute('client_credentials_arn');
  }
  public set clientCredentialsArn(value: string) {
    this._clientCredentialsArn = value;
  }
  public resetClientCredentialsArn() {
    this._clientCredentialsArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCredentialsArnInput() {
    return this._clientCredentialsArn;
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

  // oauth_request - computed: false, optional: true, required: false
  private _oauthRequest = new AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceOauthRequestOutputReference(this, "oauth_request");
  public get oauthRequest() {
    return this._oauthRequest;
  }
  public putOauthRequest(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceOauthRequest) {
    this._oauthRequest.internalValue = value;
  }
  public resetOauthRequest() {
    this._oauthRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthRequestInput() {
    return this._oauthRequest.internalValue;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataBasicAuthCredentials {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#password AppflowConnectorProfile#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#username AppflowConnectorProfile#username}
  */
  readonly username: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataBasicAuthCredentialsToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataBasicAuthCredentialsOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataBasicAuthCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataBasicAuthCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataBasicAuthCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataBasicAuthCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentialsOauthRequest {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#auth_code AppflowConnectorProfile#auth_code}
  */
  readonly authCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#redirect_uri AppflowConnectorProfile#redirect_uri}
  */
  readonly redirectUri?: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentialsOauthRequestToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentialsOauthRequestOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentialsOauthRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_code: cdktf.stringToTerraform(struct!.authCode),
    redirect_uri: cdktf.stringToTerraform(struct!.redirectUri),
  }
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentialsOauthRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentialsOauthRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.authCode = this._authCode;
    }
    if (this._redirectUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectUri = this._redirectUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentialsOauthRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authCode = undefined;
      this._redirectUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authCode = value.authCode;
      this._redirectUri = value.redirectUri;
    }
  }

  // auth_code - computed: false, optional: true, required: false
  private _authCode?: string; 
  public get authCode() {
    return this.getStringAttribute('auth_code');
  }
  public set authCode(value: string) {
    this._authCode = value;
  }
  public resetAuthCode() {
    this._authCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authCodeInput() {
    return this._authCode;
  }

  // redirect_uri - computed: false, optional: true, required: false
  private _redirectUri?: string; 
  public get redirectUri() {
    return this.getStringAttribute('redirect_uri');
  }
  public set redirectUri(value: string) {
    this._redirectUri = value;
  }
  public resetRedirectUri() {
    this._redirectUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUriInput() {
    return this._redirectUri;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentials {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#access_token AppflowConnectorProfile#access_token}
  */
  readonly accessToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#client_id AppflowConnectorProfile#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#client_secret AppflowConnectorProfile#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#refresh_token AppflowConnectorProfile#refresh_token}
  */
  readonly refreshToken?: string;
  /**
  * oauth_request block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#oauth_request AppflowConnectorProfile#oauth_request}
  */
  readonly oauthRequest?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentialsOauthRequest;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentialsToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentialsOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_token: cdktf.stringToTerraform(struct!.accessToken),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    refresh_token: cdktf.stringToTerraform(struct!.refreshToken),
    oauth_request: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentialsOauthRequestToTerraform(struct!.oauthRequest),
  }
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessToken = this._accessToken;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._refreshToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshToken = this._refreshToken;
    }
    if (this._oauthRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthRequest = this._oauthRequest?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessToken = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._refreshToken = undefined;
      this._oauthRequest.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessToken = value.accessToken;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._refreshToken = value.refreshToken;
      this._oauthRequest.internalValue = value.oauthRequest;
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

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
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

  // oauth_request - computed: false, optional: true, required: false
  private _oauthRequest = new AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentialsOauthRequestOutputReference(this, "oauth_request");
  public get oauthRequest() {
    return this._oauthRequest;
  }
  public putOauthRequest(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentialsOauthRequest) {
    this._oauthRequest.internalValue = value;
  }
  public resetOauthRequest() {
    this._oauthRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthRequestInput() {
    return this._oauthRequest.internalValue;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoData {
  /**
  * basic_auth_credentials block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#basic_auth_credentials AppflowConnectorProfile#basic_auth_credentials}
  */
  readonly basicAuthCredentials?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataBasicAuthCredentials;
  /**
  * oauth_credentials block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#oauth_credentials AppflowConnectorProfile#oauth_credentials}
  */
  readonly oauthCredentials?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentials;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    basic_auth_credentials: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataBasicAuthCredentialsToTerraform(struct!.basicAuthCredentials),
    oauth_credentials: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentialsToTerraform(struct!.oauthCredentials),
  }
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basicAuthCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuthCredentials = this._basicAuthCredentials?.internalValue;
    }
    if (this._oauthCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthCredentials = this._oauthCredentials?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._basicAuthCredentials.internalValue = undefined;
      this._oauthCredentials.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._basicAuthCredentials.internalValue = value.basicAuthCredentials;
      this._oauthCredentials.internalValue = value.oauthCredentials;
    }
  }

  // basic_auth_credentials - computed: false, optional: true, required: false
  private _basicAuthCredentials = new AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataBasicAuthCredentialsOutputReference(this, "basic_auth_credentials");
  public get basicAuthCredentials() {
    return this._basicAuthCredentials;
  }
  public putBasicAuthCredentials(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataBasicAuthCredentials) {
    this._basicAuthCredentials.internalValue = value;
  }
  public resetBasicAuthCredentials() {
    this._basicAuthCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthCredentialsInput() {
    return this._basicAuthCredentials.internalValue;
  }

  // oauth_credentials - computed: false, optional: true, required: false
  private _oauthCredentials = new AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentialsOutputReference(this, "oauth_credentials");
  public get oauthCredentials() {
    return this._oauthCredentials;
  }
  public putOauthCredentials(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentials) {
    this._oauthCredentials.internalValue = value;
  }
  public resetOauthCredentials() {
    this._oauthCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthCredentialsInput() {
    return this._oauthCredentials.internalValue;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNow {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#password AppflowConnectorProfile#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#username AppflowConnectorProfile#username}
  */
  readonly username: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNowToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNowOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingular {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#api_key AppflowConnectorProfile#api_key}
  */
  readonly apiKey: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingularToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingularOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingular): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
  }
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingularOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingular | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingular | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiKey = value.apiKey;
    }
  }

  // api_key - computed: false, optional: false, required: true
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackOauthRequest {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#auth_code AppflowConnectorProfile#auth_code}
  */
  readonly authCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#redirect_uri AppflowConnectorProfile#redirect_uri}
  */
  readonly redirectUri?: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackOauthRequestToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackOauthRequestOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackOauthRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_code: cdktf.stringToTerraform(struct!.authCode),
    redirect_uri: cdktf.stringToTerraform(struct!.redirectUri),
  }
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackOauthRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackOauthRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.authCode = this._authCode;
    }
    if (this._redirectUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectUri = this._redirectUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackOauthRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authCode = undefined;
      this._redirectUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authCode = value.authCode;
      this._redirectUri = value.redirectUri;
    }
  }

  // auth_code - computed: false, optional: true, required: false
  private _authCode?: string; 
  public get authCode() {
    return this.getStringAttribute('auth_code');
  }
  public set authCode(value: string) {
    this._authCode = value;
  }
  public resetAuthCode() {
    this._authCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authCodeInput() {
    return this._authCode;
  }

  // redirect_uri - computed: false, optional: true, required: false
  private _redirectUri?: string; 
  public get redirectUri() {
    return this.getStringAttribute('redirect_uri');
  }
  public set redirectUri(value: string) {
    this._redirectUri = value;
  }
  public resetRedirectUri() {
    this._redirectUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUriInput() {
    return this._redirectUri;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlack {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#access_token AppflowConnectorProfile#access_token}
  */
  readonly accessToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#client_id AppflowConnectorProfile#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#client_secret AppflowConnectorProfile#client_secret}
  */
  readonly clientSecret: string;
  /**
  * oauth_request block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#oauth_request AppflowConnectorProfile#oauth_request}
  */
  readonly oauthRequest?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackOauthRequest;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlack): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_token: cdktf.stringToTerraform(struct!.accessToken),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    oauth_request: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackOauthRequestToTerraform(struct!.oauthRequest),
  }
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlack | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessToken = this._accessToken;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._oauthRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthRequest = this._oauthRequest?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlack | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessToken = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._oauthRequest.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessToken = value.accessToken;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._oauthRequest.internalValue = value.oauthRequest;
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

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // oauth_request - computed: false, optional: true, required: false
  private _oauthRequest = new AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackOauthRequestOutputReference(this, "oauth_request");
  public get oauthRequest() {
    return this._oauthRequest;
  }
  public putOauthRequest(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackOauthRequest) {
    this._oauthRequest.internalValue = value;
  }
  public resetOauthRequest() {
    this._oauthRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthRequestInput() {
    return this._oauthRequest.internalValue;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflake {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#password AppflowConnectorProfile#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#username AppflowConnectorProfile#username}
  */
  readonly username: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflakeToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflakeOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflake): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflakeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflake | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflake | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicro {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#api_secret_key AppflowConnectorProfile#api_secret_key}
  */
  readonly apiSecretKey: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicroToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicroOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicro): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_secret_key: cdktf.stringToTerraform(struct!.apiSecretKey),
  }
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicroOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicro | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiSecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiSecretKey = this._apiSecretKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicro | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiSecretKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiSecretKey = value.apiSecretKey;
    }
  }

  // api_secret_key - computed: false, optional: false, required: true
  private _apiSecretKey?: string; 
  public get apiSecretKey() {
    return this.getStringAttribute('api_secret_key');
  }
  public set apiSecretKey(value: string) {
    this._apiSecretKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiSecretKeyInput() {
    return this._apiSecretKey;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeeva {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#password AppflowConnectorProfile#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#username AppflowConnectorProfile#username}
  */
  readonly username: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeevaToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeevaOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeeva): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeevaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeeva | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeeva | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskOauthRequest {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#auth_code AppflowConnectorProfile#auth_code}
  */
  readonly authCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#redirect_uri AppflowConnectorProfile#redirect_uri}
  */
  readonly redirectUri?: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskOauthRequestToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskOauthRequestOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskOauthRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_code: cdktf.stringToTerraform(struct!.authCode),
    redirect_uri: cdktf.stringToTerraform(struct!.redirectUri),
  }
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskOauthRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskOauthRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.authCode = this._authCode;
    }
    if (this._redirectUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectUri = this._redirectUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskOauthRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authCode = undefined;
      this._redirectUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authCode = value.authCode;
      this._redirectUri = value.redirectUri;
    }
  }

  // auth_code - computed: false, optional: true, required: false
  private _authCode?: string; 
  public get authCode() {
    return this.getStringAttribute('auth_code');
  }
  public set authCode(value: string) {
    this._authCode = value;
  }
  public resetAuthCode() {
    this._authCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authCodeInput() {
    return this._authCode;
  }

  // redirect_uri - computed: false, optional: true, required: false
  private _redirectUri?: string; 
  public get redirectUri() {
    return this.getStringAttribute('redirect_uri');
  }
  public set redirectUri(value: string) {
    this._redirectUri = value;
  }
  public resetRedirectUri() {
    this._redirectUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUriInput() {
    return this._redirectUri;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendesk {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#access_token AppflowConnectorProfile#access_token}
  */
  readonly accessToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#client_id AppflowConnectorProfile#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#client_secret AppflowConnectorProfile#client_secret}
  */
  readonly clientSecret: string;
  /**
  * oauth_request block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#oauth_request AppflowConnectorProfile#oauth_request}
  */
  readonly oauthRequest?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskOauthRequest;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendesk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_token: cdktf.stringToTerraform(struct!.accessToken),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    oauth_request: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskOauthRequestToTerraform(struct!.oauthRequest),
  }
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendesk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessToken = this._accessToken;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._oauthRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthRequest = this._oauthRequest?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendesk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessToken = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._oauthRequest.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessToken = value.accessToken;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._oauthRequest.internalValue = value.oauthRequest;
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

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // oauth_request - computed: false, optional: true, required: false
  private _oauthRequest = new AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskOauthRequestOutputReference(this, "oauth_request");
  public get oauthRequest() {
    return this._oauthRequest;
  }
  public putOauthRequest(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskOauthRequest) {
    this._oauthRequest.internalValue = value;
  }
  public resetOauthRequest() {
    this._oauthRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthRequestInput() {
    return this._oauthRequest.internalValue;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentials {
  /**
  * amplitude block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#amplitude AppflowConnectorProfile#amplitude}
  */
  readonly amplitude?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitude;
  /**
  * custom_connector block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#custom_connector AppflowConnectorProfile#custom_connector}
  */
  readonly customConnector?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnector;
  /**
  * datadog block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#datadog AppflowConnectorProfile#datadog}
  */
  readonly datadog?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadog;
  /**
  * dynatrace block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#dynatrace AppflowConnectorProfile#dynatrace}
  */
  readonly dynatrace?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatrace;
  /**
  * google_analytics block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#google_analytics AppflowConnectorProfile#google_analytics}
  */
  readonly googleAnalytics?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalytics;
  /**
  * honeycode block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#honeycode AppflowConnectorProfile#honeycode}
  */
  readonly honeycode?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycode;
  /**
  * infor_nexus block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#infor_nexus AppflowConnectorProfile#infor_nexus}
  */
  readonly inforNexus?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexus;
  /**
  * marketo block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#marketo AppflowConnectorProfile#marketo}
  */
  readonly marketo?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketo;
  /**
  * redshift block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#redshift AppflowConnectorProfile#redshift}
  */
  readonly redshift?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshift;
  /**
  * salesforce block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#salesforce AppflowConnectorProfile#salesforce}
  */
  readonly salesforce?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforce;
  /**
  * sapo_data block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#sapo_data AppflowConnectorProfile#sapo_data}
  */
  readonly sapoData?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoData;
  /**
  * service_now block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#service_now AppflowConnectorProfile#service_now}
  */
  readonly serviceNow?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNow;
  /**
  * singular block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#singular AppflowConnectorProfile#singular}
  */
  readonly singular?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingular;
  /**
  * slack block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#slack AppflowConnectorProfile#slack}
  */
  readonly slack?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlack;
  /**
  * snowflake block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#snowflake AppflowConnectorProfile#snowflake}
  */
  readonly snowflake?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflake;
  /**
  * trendmicro block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#trendmicro AppflowConnectorProfile#trendmicro}
  */
  readonly trendmicro?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicro;
  /**
  * veeva block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#veeva AppflowConnectorProfile#veeva}
  */
  readonly veeva?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeeva;
  /**
  * zendesk block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#zendesk AppflowConnectorProfile#zendesk}
  */
  readonly zendesk?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendesk;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    amplitude: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitudeToTerraform(struct!.amplitude),
    custom_connector: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorToTerraform(struct!.customConnector),
    datadog: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadogToTerraform(struct!.datadog),
    dynatrace: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatraceToTerraform(struct!.dynatrace),
    google_analytics: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsToTerraform(struct!.googleAnalytics),
    honeycode: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycodeToTerraform(struct!.honeycode),
    infor_nexus: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexusToTerraform(struct!.inforNexus),
    marketo: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoToTerraform(struct!.marketo),
    redshift: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshiftToTerraform(struct!.redshift),
    salesforce: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceToTerraform(struct!.salesforce),
    sapo_data: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataToTerraform(struct!.sapoData),
    service_now: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNowToTerraform(struct!.serviceNow),
    singular: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingularToTerraform(struct!.singular),
    slack: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackToTerraform(struct!.slack),
    snowflake: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflakeToTerraform(struct!.snowflake),
    trendmicro: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicroToTerraform(struct!.trendmicro),
    veeva: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeevaToTerraform(struct!.veeva),
    zendesk: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskToTerraform(struct!.zendesk),
  }
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amplitude?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.amplitude = this._amplitude?.internalValue;
    }
    if (this._customConnector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customConnector = this._customConnector?.internalValue;
    }
    if (this._datadog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datadog = this._datadog?.internalValue;
    }
    if (this._dynatrace?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynatrace = this._dynatrace?.internalValue;
    }
    if (this._googleAnalytics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleAnalytics = this._googleAnalytics?.internalValue;
    }
    if (this._honeycode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.honeycode = this._honeycode?.internalValue;
    }
    if (this._inforNexus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inforNexus = this._inforNexus?.internalValue;
    }
    if (this._marketo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.marketo = this._marketo?.internalValue;
    }
    if (this._redshift?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redshift = this._redshift?.internalValue;
    }
    if (this._salesforce?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.salesforce = this._salesforce?.internalValue;
    }
    if (this._sapoData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sapoData = this._sapoData?.internalValue;
    }
    if (this._serviceNow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceNow = this._serviceNow?.internalValue;
    }
    if (this._singular?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.singular = this._singular?.internalValue;
    }
    if (this._slack?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slack = this._slack?.internalValue;
    }
    if (this._snowflake?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snowflake = this._snowflake?.internalValue;
    }
    if (this._trendmicro?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trendmicro = this._trendmicro?.internalValue;
    }
    if (this._veeva?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.veeva = this._veeva?.internalValue;
    }
    if (this._zendesk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zendesk = this._zendesk?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._amplitude.internalValue = undefined;
      this._customConnector.internalValue = undefined;
      this._datadog.internalValue = undefined;
      this._dynatrace.internalValue = undefined;
      this._googleAnalytics.internalValue = undefined;
      this._honeycode.internalValue = undefined;
      this._inforNexus.internalValue = undefined;
      this._marketo.internalValue = undefined;
      this._redshift.internalValue = undefined;
      this._salesforce.internalValue = undefined;
      this._sapoData.internalValue = undefined;
      this._serviceNow.internalValue = undefined;
      this._singular.internalValue = undefined;
      this._slack.internalValue = undefined;
      this._snowflake.internalValue = undefined;
      this._trendmicro.internalValue = undefined;
      this._veeva.internalValue = undefined;
      this._zendesk.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._amplitude.internalValue = value.amplitude;
      this._customConnector.internalValue = value.customConnector;
      this._datadog.internalValue = value.datadog;
      this._dynatrace.internalValue = value.dynatrace;
      this._googleAnalytics.internalValue = value.googleAnalytics;
      this._honeycode.internalValue = value.honeycode;
      this._inforNexus.internalValue = value.inforNexus;
      this._marketo.internalValue = value.marketo;
      this._redshift.internalValue = value.redshift;
      this._salesforce.internalValue = value.salesforce;
      this._sapoData.internalValue = value.sapoData;
      this._serviceNow.internalValue = value.serviceNow;
      this._singular.internalValue = value.singular;
      this._slack.internalValue = value.slack;
      this._snowflake.internalValue = value.snowflake;
      this._trendmicro.internalValue = value.trendmicro;
      this._veeva.internalValue = value.veeva;
      this._zendesk.internalValue = value.zendesk;
    }
  }

  // amplitude - computed: false, optional: true, required: false
  private _amplitude = new AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitudeOutputReference(this, "amplitude");
  public get amplitude() {
    return this._amplitude;
  }
  public putAmplitude(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitude) {
    this._amplitude.internalValue = value;
  }
  public resetAmplitude() {
    this._amplitude.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amplitudeInput() {
    return this._amplitude.internalValue;
  }

  // custom_connector - computed: false, optional: true, required: false
  private _customConnector = new AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOutputReference(this, "custom_connector");
  public get customConnector() {
    return this._customConnector;
  }
  public putCustomConnector(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnector) {
    this._customConnector.internalValue = value;
  }
  public resetCustomConnector() {
    this._customConnector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customConnectorInput() {
    return this._customConnector.internalValue;
  }

  // datadog - computed: false, optional: true, required: false
  private _datadog = new AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadogOutputReference(this, "datadog");
  public get datadog() {
    return this._datadog;
  }
  public putDatadog(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadog) {
    this._datadog.internalValue = value;
  }
  public resetDatadog() {
    this._datadog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datadogInput() {
    return this._datadog.internalValue;
  }

  // dynatrace - computed: false, optional: true, required: false
  private _dynatrace = new AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatraceOutputReference(this, "dynatrace");
  public get dynatrace() {
    return this._dynatrace;
  }
  public putDynatrace(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatrace) {
    this._dynatrace.internalValue = value;
  }
  public resetDynatrace() {
    this._dynatrace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceInput() {
    return this._dynatrace.internalValue;
  }

  // google_analytics - computed: false, optional: true, required: false
  private _googleAnalytics = new AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsOutputReference(this, "google_analytics");
  public get googleAnalytics() {
    return this._googleAnalytics;
  }
  public putGoogleAnalytics(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalytics) {
    this._googleAnalytics.internalValue = value;
  }
  public resetGoogleAnalytics() {
    this._googleAnalytics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleAnalyticsInput() {
    return this._googleAnalytics.internalValue;
  }

  // honeycode - computed: false, optional: true, required: false
  private _honeycode = new AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycodeOutputReference(this, "honeycode");
  public get honeycode() {
    return this._honeycode;
  }
  public putHoneycode(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycode) {
    this._honeycode.internalValue = value;
  }
  public resetHoneycode() {
    this._honeycode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get honeycodeInput() {
    return this._honeycode.internalValue;
  }

  // infor_nexus - computed: false, optional: true, required: false
  private _inforNexus = new AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexusOutputReference(this, "infor_nexus");
  public get inforNexus() {
    return this._inforNexus;
  }
  public putInforNexus(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexus) {
    this._inforNexus.internalValue = value;
  }
  public resetInforNexus() {
    this._inforNexus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inforNexusInput() {
    return this._inforNexus.internalValue;
  }

  // marketo - computed: false, optional: true, required: false
  private _marketo = new AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoOutputReference(this, "marketo");
  public get marketo() {
    return this._marketo;
  }
  public putMarketo(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketo) {
    this._marketo.internalValue = value;
  }
  public resetMarketo() {
    this._marketo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get marketoInput() {
    return this._marketo.internalValue;
  }

  // redshift - computed: false, optional: true, required: false
  private _redshift = new AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshiftOutputReference(this, "redshift");
  public get redshift() {
    return this._redshift;
  }
  public putRedshift(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshift) {
    this._redshift.internalValue = value;
  }
  public resetRedshift() {
    this._redshift.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redshiftInput() {
    return this._redshift.internalValue;
  }

  // salesforce - computed: false, optional: true, required: false
  private _salesforce = new AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceOutputReference(this, "salesforce");
  public get salesforce() {
    return this._salesforce;
  }
  public putSalesforce(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforce) {
    this._salesforce.internalValue = value;
  }
  public resetSalesforce() {
    this._salesforce.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get salesforceInput() {
    return this._salesforce.internalValue;
  }

  // sapo_data - computed: false, optional: true, required: false
  private _sapoData = new AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOutputReference(this, "sapo_data");
  public get sapoData() {
    return this._sapoData;
  }
  public putSapoData(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoData) {
    this._sapoData.internalValue = value;
  }
  public resetSapoData() {
    this._sapoData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sapoDataInput() {
    return this._sapoData.internalValue;
  }

  // service_now - computed: false, optional: true, required: false
  private _serviceNow = new AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNowOutputReference(this, "service_now");
  public get serviceNow() {
    return this._serviceNow;
  }
  public putServiceNow(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNow) {
    this._serviceNow.internalValue = value;
  }
  public resetServiceNow() {
    this._serviceNow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNowInput() {
    return this._serviceNow.internalValue;
  }

  // singular - computed: false, optional: true, required: false
  private _singular = new AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingularOutputReference(this, "singular");
  public get singular() {
    return this._singular;
  }
  public putSingular(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingular) {
    this._singular.internalValue = value;
  }
  public resetSingular() {
    this._singular.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singularInput() {
    return this._singular.internalValue;
  }

  // slack - computed: false, optional: true, required: false
  private _slack = new AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackOutputReference(this, "slack");
  public get slack() {
    return this._slack;
  }
  public putSlack(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlack) {
    this._slack.internalValue = value;
  }
  public resetSlack() {
    this._slack.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackInput() {
    return this._slack.internalValue;
  }

  // snowflake - computed: false, optional: true, required: false
  private _snowflake = new AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflakeOutputReference(this, "snowflake");
  public get snowflake() {
    return this._snowflake;
  }
  public putSnowflake(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflake) {
    this._snowflake.internalValue = value;
  }
  public resetSnowflake() {
    this._snowflake.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snowflakeInput() {
    return this._snowflake.internalValue;
  }

  // trendmicro - computed: false, optional: true, required: false
  private _trendmicro = new AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicroOutputReference(this, "trendmicro");
  public get trendmicro() {
    return this._trendmicro;
  }
  public putTrendmicro(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicro) {
    this._trendmicro.internalValue = value;
  }
  public resetTrendmicro() {
    this._trendmicro.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trendmicroInput() {
    return this._trendmicro.internalValue;
  }

  // veeva - computed: false, optional: true, required: false
  private _veeva = new AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeevaOutputReference(this, "veeva");
  public get veeva() {
    return this._veeva;
  }
  public putVeeva(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeeva) {
    this._veeva.internalValue = value;
  }
  public resetVeeva() {
    this._veeva.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get veevaInput() {
    return this._veeva.internalValue;
  }

  // zendesk - computed: false, optional: true, required: false
  private _zendesk = new AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskOutputReference(this, "zendesk");
  public get zendesk() {
    return this._zendesk;
  }
  public putZendesk(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendesk) {
    this._zendesk.internalValue = value;
  }
  public resetZendesk() {
    this._zendesk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zendeskInput() {
    return this._zendesk.internalValue;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesAmplitude {
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesAmplitudeToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesAmplitudeOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesAmplitude): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesAmplitudeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesAmplitude | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesAmplitude | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorOauth2Properties {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#oauth2_grant_type AppflowConnectorProfile#oauth2_grant_type}
  */
  readonly oauth2GrantType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#token_url AppflowConnectorProfile#token_url}
  */
  readonly tokenUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#token_url_custom_properties AppflowConnectorProfile#token_url_custom_properties}
  */
  readonly tokenUrlCustomProperties?: { [key: string]: string };
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorOauth2PropertiesToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorOauth2PropertiesOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorOauth2Properties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oauth2_grant_type: cdktf.stringToTerraform(struct!.oauth2GrantType),
    token_url: cdktf.stringToTerraform(struct!.tokenUrl),
    token_url_custom_properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tokenUrlCustomProperties),
  }
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorOauth2PropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorOauth2Properties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oauth2GrantType !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth2GrantType = this._oauth2GrantType;
    }
    if (this._tokenUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenUrl = this._tokenUrl;
    }
    if (this._tokenUrlCustomProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenUrlCustomProperties = this._tokenUrlCustomProperties;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorOauth2Properties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oauth2GrantType = undefined;
      this._tokenUrl = undefined;
      this._tokenUrlCustomProperties = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oauth2GrantType = value.oauth2GrantType;
      this._tokenUrl = value.tokenUrl;
      this._tokenUrlCustomProperties = value.tokenUrlCustomProperties;
    }
  }

  // oauth2_grant_type - computed: false, optional: false, required: true
  private _oauth2GrantType?: string; 
  public get oauth2GrantType() {
    return this.getStringAttribute('oauth2_grant_type');
  }
  public set oauth2GrantType(value: string) {
    this._oauth2GrantType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2GrantTypeInput() {
    return this._oauth2GrantType;
  }

  // token_url - computed: false, optional: false, required: true
  private _tokenUrl?: string; 
  public get tokenUrl() {
    return this.getStringAttribute('token_url');
  }
  public set tokenUrl(value: string) {
    this._tokenUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenUrlInput() {
    return this._tokenUrl;
  }

  // token_url_custom_properties - computed: false, optional: true, required: false
  private _tokenUrlCustomProperties?: { [key: string]: string }; 
  public get tokenUrlCustomProperties() {
    return this.getStringMapAttribute('token_url_custom_properties');
  }
  public set tokenUrlCustomProperties(value: { [key: string]: string }) {
    this._tokenUrlCustomProperties = value;
  }
  public resetTokenUrlCustomProperties() {
    this._tokenUrlCustomProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenUrlCustomPropertiesInput() {
    return this._tokenUrlCustomProperties;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnector {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#profile_properties AppflowConnectorProfile#profile_properties}
  */
  readonly profileProperties?: { [key: string]: string };
  /**
  * oauth2_properties block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#oauth2_properties AppflowConnectorProfile#oauth2_properties}
  */
  readonly oauth2Properties?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorOauth2Properties;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profile_properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.profileProperties),
    oauth2_properties: appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorOauth2PropertiesToTerraform(struct!.oauth2Properties),
  }
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._profileProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileProperties = this._profileProperties;
    }
    if (this._oauth2Properties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth2Properties = this._oauth2Properties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._profileProperties = undefined;
      this._oauth2Properties.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._profileProperties = value.profileProperties;
      this._oauth2Properties.internalValue = value.oauth2Properties;
    }
  }

  // profile_properties - computed: false, optional: true, required: false
  private _profileProperties?: { [key: string]: string }; 
  public get profileProperties() {
    return this.getStringMapAttribute('profile_properties');
  }
  public set profileProperties(value: { [key: string]: string }) {
    this._profileProperties = value;
  }
  public resetProfileProperties() {
    this._profileProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profilePropertiesInput() {
    return this._profileProperties;
  }

  // oauth2_properties - computed: false, optional: true, required: false
  private _oauth2Properties = new AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorOauth2PropertiesOutputReference(this, "oauth2_properties");
  public get oauth2Properties() {
    return this._oauth2Properties;
  }
  public putOauth2Properties(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorOauth2Properties) {
    this._oauth2Properties.internalValue = value;
  }
  public resetOauth2Properties() {
    this._oauth2Properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2PropertiesInput() {
    return this._oauth2Properties.internalValue;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadog {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#instance_url AppflowConnectorProfile#instance_url}
  */
  readonly instanceUrl: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadogToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadogOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_url: cdktf.stringToTerraform(struct!.instanceUrl),
  }
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceUrl = this._instanceUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceUrl = value.instanceUrl;
    }
  }

  // instance_url - computed: false, optional: false, required: true
  private _instanceUrl?: string; 
  public get instanceUrl() {
    return this.getStringAttribute('instance_url');
  }
  public set instanceUrl(value: string) {
    this._instanceUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceUrlInput() {
    return this._instanceUrl;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatrace {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#instance_url AppflowConnectorProfile#instance_url}
  */
  readonly instanceUrl: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatraceToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatraceOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatrace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_url: cdktf.stringToTerraform(struct!.instanceUrl),
  }
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatraceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatrace | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceUrl = this._instanceUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatrace | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceUrl = value.instanceUrl;
    }
  }

  // instance_url - computed: false, optional: false, required: true
  private _instanceUrl?: string; 
  public get instanceUrl() {
    return this.getStringAttribute('instance_url');
  }
  public set instanceUrl(value: string) {
    this._instanceUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceUrlInput() {
    return this._instanceUrl;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesGoogleAnalytics {
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesGoogleAnalyticsToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesGoogleAnalyticsOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesGoogleAnalytics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesGoogleAnalyticsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesGoogleAnalytics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesGoogleAnalytics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesHoneycode {
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesHoneycodeToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesHoneycodeOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesHoneycode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesHoneycodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesHoneycode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesHoneycode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexus {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#instance_url AppflowConnectorProfile#instance_url}
  */
  readonly instanceUrl: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexusToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexusOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_url: cdktf.stringToTerraform(struct!.instanceUrl),
  }
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceUrl = this._instanceUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceUrl = value.instanceUrl;
    }
  }

  // instance_url - computed: false, optional: false, required: true
  private _instanceUrl?: string; 
  public get instanceUrl() {
    return this.getStringAttribute('instance_url');
  }
  public set instanceUrl(value: string) {
    this._instanceUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceUrlInput() {
    return this._instanceUrl;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketo {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#instance_url AppflowConnectorProfile#instance_url}
  */
  readonly instanceUrl: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketoToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketoOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_url: cdktf.stringToTerraform(struct!.instanceUrl),
  }
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceUrl = this._instanceUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceUrl = value.instanceUrl;
    }
  }

  // instance_url - computed: false, optional: false, required: true
  private _instanceUrl?: string; 
  public get instanceUrl() {
    return this.getStringAttribute('instance_url');
  }
  public set instanceUrl(value: string) {
    this._instanceUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceUrlInput() {
    return this._instanceUrl;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshift {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#bucket_name AppflowConnectorProfile#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#bucket_prefix AppflowConnectorProfile#bucket_prefix}
  */
  readonly bucketPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#cluster_identifier AppflowConnectorProfile#cluster_identifier}
  */
  readonly clusterIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#data_api_role_arn AppflowConnectorProfile#data_api_role_arn}
  */
  readonly dataApiRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#database_name AppflowConnectorProfile#database_name}
  */
  readonly databaseName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#database_url AppflowConnectorProfile#database_url}
  */
  readonly databaseUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#role_arn AppflowConnectorProfile#role_arn}
  */
  readonly roleArn: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshiftToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshiftOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshift): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    bucket_prefix: cdktf.stringToTerraform(struct!.bucketPrefix),
    cluster_identifier: cdktf.stringToTerraform(struct!.clusterIdentifier),
    data_api_role_arn: cdktf.stringToTerraform(struct!.dataApiRoleArn),
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    database_url: cdktf.stringToTerraform(struct!.databaseUrl),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshiftOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshift | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._bucketPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketPrefix = this._bucketPrefix;
    }
    if (this._clusterIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterIdentifier = this._clusterIdentifier;
    }
    if (this._dataApiRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataApiRoleArn = this._dataApiRoleArn;
    }
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._databaseUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseUrl = this._databaseUrl;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshift | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketName = undefined;
      this._bucketPrefix = undefined;
      this._clusterIdentifier = undefined;
      this._dataApiRoleArn = undefined;
      this._databaseName = undefined;
      this._databaseUrl = undefined;
      this._roleArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketName = value.bucketName;
      this._bucketPrefix = value.bucketPrefix;
      this._clusterIdentifier = value.clusterIdentifier;
      this._dataApiRoleArn = value.dataApiRoleArn;
      this._databaseName = value.databaseName;
      this._databaseUrl = value.databaseUrl;
      this._roleArn = value.roleArn;
    }
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // bucket_prefix - computed: false, optional: true, required: false
  private _bucketPrefix?: string; 
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }
  public set bucketPrefix(value: string) {
    this._bucketPrefix = value;
  }
  public resetBucketPrefix() {
    this._bucketPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketPrefixInput() {
    return this._bucketPrefix;
  }

  // cluster_identifier - computed: false, optional: true, required: false
  private _clusterIdentifier?: string; 
  public get clusterIdentifier() {
    return this.getStringAttribute('cluster_identifier');
  }
  public set clusterIdentifier(value: string) {
    this._clusterIdentifier = value;
  }
  public resetClusterIdentifier() {
    this._clusterIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdentifierInput() {
    return this._clusterIdentifier;
  }

  // data_api_role_arn - computed: false, optional: true, required: false
  private _dataApiRoleArn?: string; 
  public get dataApiRoleArn() {
    return this.getStringAttribute('data_api_role_arn');
  }
  public set dataApiRoleArn(value: string) {
    this._dataApiRoleArn = value;
  }
  public resetDataApiRoleArn() {
    this._dataApiRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataApiRoleArnInput() {
    return this._dataApiRoleArn;
  }

  // database_name - computed: false, optional: true, required: false
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // database_url - computed: false, optional: true, required: false
  private _databaseUrl?: string; 
  public get databaseUrl() {
    return this.getStringAttribute('database_url');
  }
  public set databaseUrl(value: string) {
    this._databaseUrl = value;
  }
  public resetDatabaseUrl() {
    this._databaseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseUrlInput() {
    return this._databaseUrl;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforce {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#instance_url AppflowConnectorProfile#instance_url}
  */
  readonly instanceUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#is_sandbox_environment AppflowConnectorProfile#is_sandbox_environment}
  */
  readonly isSandboxEnvironment?: boolean | cdktf.IResolvable;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforceToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforceOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforce): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_url: cdktf.stringToTerraform(struct!.instanceUrl),
    is_sandbox_environment: cdktf.booleanToTerraform(struct!.isSandboxEnvironment),
  }
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforce | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceUrl = this._instanceUrl;
    }
    if (this._isSandboxEnvironment !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSandboxEnvironment = this._isSandboxEnvironment;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforce | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceUrl = undefined;
      this._isSandboxEnvironment = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceUrl = value.instanceUrl;
      this._isSandboxEnvironment = value.isSandboxEnvironment;
    }
  }

  // instance_url - computed: false, optional: true, required: false
  private _instanceUrl?: string; 
  public get instanceUrl() {
    return this.getStringAttribute('instance_url');
  }
  public set instanceUrl(value: string) {
    this._instanceUrl = value;
  }
  public resetInstanceUrl() {
    this._instanceUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceUrlInput() {
    return this._instanceUrl;
  }

  // is_sandbox_environment - computed: false, optional: true, required: false
  private _isSandboxEnvironment?: boolean | cdktf.IResolvable; 
  public get isSandboxEnvironment() {
    return this.getBooleanAttribute('is_sandbox_environment');
  }
  public set isSandboxEnvironment(value: boolean | cdktf.IResolvable) {
    this._isSandboxEnvironment = value;
  }
  public resetIsSandboxEnvironment() {
    this._isSandboxEnvironment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSandboxEnvironmentInput() {
    return this._isSandboxEnvironment;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataOauthProperties {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#auth_code_url AppflowConnectorProfile#auth_code_url}
  */
  readonly authCodeUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#oauth_scopes AppflowConnectorProfile#oauth_scopes}
  */
  readonly oauthScopes: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#token_url AppflowConnectorProfile#token_url}
  */
  readonly tokenUrl: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataOauthPropertiesToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataOauthPropertiesOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataOauthProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_code_url: cdktf.stringToTerraform(struct!.authCodeUrl),
    oauth_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.oauthScopes),
    token_url: cdktf.stringToTerraform(struct!.tokenUrl),
  }
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataOauthPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataOauthProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authCodeUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.authCodeUrl = this._authCodeUrl;
    }
    if (this._oauthScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthScopes = this._oauthScopes;
    }
    if (this._tokenUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenUrl = this._tokenUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataOauthProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authCodeUrl = undefined;
      this._oauthScopes = undefined;
      this._tokenUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authCodeUrl = value.authCodeUrl;
      this._oauthScopes = value.oauthScopes;
      this._tokenUrl = value.tokenUrl;
    }
  }

  // auth_code_url - computed: false, optional: false, required: true
  private _authCodeUrl?: string; 
  public get authCodeUrl() {
    return this.getStringAttribute('auth_code_url');
  }
  public set authCodeUrl(value: string) {
    this._authCodeUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authCodeUrlInput() {
    return this._authCodeUrl;
  }

  // oauth_scopes - computed: false, optional: false, required: true
  private _oauthScopes?: string[]; 
  public get oauthScopes() {
    return this.getListAttribute('oauth_scopes');
  }
  public set oauthScopes(value: string[]) {
    this._oauthScopes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthScopesInput() {
    return this._oauthScopes;
  }

  // token_url - computed: false, optional: false, required: true
  private _tokenUrl?: string; 
  public get tokenUrl() {
    return this.getStringAttribute('token_url');
  }
  public set tokenUrl(value: string) {
    this._tokenUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenUrlInput() {
    return this._tokenUrl;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoData {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#application_host_url AppflowConnectorProfile#application_host_url}
  */
  readonly applicationHostUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#application_service_path AppflowConnectorProfile#application_service_path}
  */
  readonly applicationServicePath: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#client_number AppflowConnectorProfile#client_number}
  */
  readonly clientNumber: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#logon_language AppflowConnectorProfile#logon_language}
  */
  readonly logonLanguage?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#port_number AppflowConnectorProfile#port_number}
  */
  readonly portNumber: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#private_link_service_name AppflowConnectorProfile#private_link_service_name}
  */
  readonly privateLinkServiceName?: string;
  /**
  * oauth_properties block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#oauth_properties AppflowConnectorProfile#oauth_properties}
  */
  readonly oauthProperties?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataOauthProperties;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_host_url: cdktf.stringToTerraform(struct!.applicationHostUrl),
    application_service_path: cdktf.stringToTerraform(struct!.applicationServicePath),
    client_number: cdktf.stringToTerraform(struct!.clientNumber),
    logon_language: cdktf.stringToTerraform(struct!.logonLanguage),
    port_number: cdktf.numberToTerraform(struct!.portNumber),
    private_link_service_name: cdktf.stringToTerraform(struct!.privateLinkServiceName),
    oauth_properties: appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataOauthPropertiesToTerraform(struct!.oauthProperties),
  }
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationHostUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationHostUrl = this._applicationHostUrl;
    }
    if (this._applicationServicePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationServicePath = this._applicationServicePath;
    }
    if (this._clientNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientNumber = this._clientNumber;
    }
    if (this._logonLanguage !== undefined) {
      hasAnyValues = true;
      internalValueResult.logonLanguage = this._logonLanguage;
    }
    if (this._portNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.portNumber = this._portNumber;
    }
    if (this._privateLinkServiceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateLinkServiceName = this._privateLinkServiceName;
    }
    if (this._oauthProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthProperties = this._oauthProperties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._applicationHostUrl = undefined;
      this._applicationServicePath = undefined;
      this._clientNumber = undefined;
      this._logonLanguage = undefined;
      this._portNumber = undefined;
      this._privateLinkServiceName = undefined;
      this._oauthProperties.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._applicationHostUrl = value.applicationHostUrl;
      this._applicationServicePath = value.applicationServicePath;
      this._clientNumber = value.clientNumber;
      this._logonLanguage = value.logonLanguage;
      this._portNumber = value.portNumber;
      this._privateLinkServiceName = value.privateLinkServiceName;
      this._oauthProperties.internalValue = value.oauthProperties;
    }
  }

  // application_host_url - computed: false, optional: false, required: true
  private _applicationHostUrl?: string; 
  public get applicationHostUrl() {
    return this.getStringAttribute('application_host_url');
  }
  public set applicationHostUrl(value: string) {
    this._applicationHostUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationHostUrlInput() {
    return this._applicationHostUrl;
  }

  // application_service_path - computed: false, optional: false, required: true
  private _applicationServicePath?: string; 
  public get applicationServicePath() {
    return this.getStringAttribute('application_service_path');
  }
  public set applicationServicePath(value: string) {
    this._applicationServicePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationServicePathInput() {
    return this._applicationServicePath;
  }

  // client_number - computed: false, optional: false, required: true
  private _clientNumber?: string; 
  public get clientNumber() {
    return this.getStringAttribute('client_number');
  }
  public set clientNumber(value: string) {
    this._clientNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientNumberInput() {
    return this._clientNumber;
  }

  // logon_language - computed: false, optional: true, required: false
  private _logonLanguage?: string; 
  public get logonLanguage() {
    return this.getStringAttribute('logon_language');
  }
  public set logonLanguage(value: string) {
    this._logonLanguage = value;
  }
  public resetLogonLanguage() {
    this._logonLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logonLanguageInput() {
    return this._logonLanguage;
  }

  // port_number - computed: false, optional: false, required: true
  private _portNumber?: number; 
  public get portNumber() {
    return this.getNumberAttribute('port_number');
  }
  public set portNumber(value: number) {
    this._portNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portNumberInput() {
    return this._portNumber;
  }

  // private_link_service_name - computed: false, optional: true, required: false
  private _privateLinkServiceName?: string; 
  public get privateLinkServiceName() {
    return this.getStringAttribute('private_link_service_name');
  }
  public set privateLinkServiceName(value: string) {
    this._privateLinkServiceName = value;
  }
  public resetPrivateLinkServiceName() {
    this._privateLinkServiceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateLinkServiceNameInput() {
    return this._privateLinkServiceName;
  }

  // oauth_properties - computed: false, optional: true, required: false
  private _oauthProperties = new AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataOauthPropertiesOutputReference(this, "oauth_properties");
  public get oauthProperties() {
    return this._oauthProperties;
  }
  public putOauthProperties(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataOauthProperties) {
    this._oauthProperties.internalValue = value;
  }
  public resetOauthProperties() {
    this._oauthProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthPropertiesInput() {
    return this._oauthProperties.internalValue;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNow {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#instance_url AppflowConnectorProfile#instance_url}
  */
  readonly instanceUrl: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNowToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNowOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_url: cdktf.stringToTerraform(struct!.instanceUrl),
  }
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceUrl = this._instanceUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceUrl = value.instanceUrl;
    }
  }

  // instance_url - computed: false, optional: false, required: true
  private _instanceUrl?: string; 
  public get instanceUrl() {
    return this.getStringAttribute('instance_url');
  }
  public set instanceUrl(value: string) {
    this._instanceUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceUrlInput() {
    return this._instanceUrl;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSingular {
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSingularToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSingularOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSingular): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSingularOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSingular | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSingular | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlack {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#instance_url AppflowConnectorProfile#instance_url}
  */
  readonly instanceUrl: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlackToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlackOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlack): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_url: cdktf.stringToTerraform(struct!.instanceUrl),
  }
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlack | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceUrl = this._instanceUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlack | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceUrl = value.instanceUrl;
    }
  }

  // instance_url - computed: false, optional: false, required: true
  private _instanceUrl?: string; 
  public get instanceUrl() {
    return this.getStringAttribute('instance_url');
  }
  public set instanceUrl(value: string) {
    this._instanceUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceUrlInput() {
    return this._instanceUrl;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflake {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#account_name AppflowConnectorProfile#account_name}
  */
  readonly accountName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#bucket_name AppflowConnectorProfile#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#bucket_prefix AppflowConnectorProfile#bucket_prefix}
  */
  readonly bucketPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#private_link_service_name AppflowConnectorProfile#private_link_service_name}
  */
  readonly privateLinkServiceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#region AppflowConnectorProfile#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#stage AppflowConnectorProfile#stage}
  */
  readonly stage: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#warehouse AppflowConnectorProfile#warehouse}
  */
  readonly warehouse: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflakeToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflakeOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflake): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_name: cdktf.stringToTerraform(struct!.accountName),
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    bucket_prefix: cdktf.stringToTerraform(struct!.bucketPrefix),
    private_link_service_name: cdktf.stringToTerraform(struct!.privateLinkServiceName),
    region: cdktf.stringToTerraform(struct!.region),
    stage: cdktf.stringToTerraform(struct!.stage),
    warehouse: cdktf.stringToTerraform(struct!.warehouse),
  }
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflakeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflake | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountName = this._accountName;
    }
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._bucketPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketPrefix = this._bucketPrefix;
    }
    if (this._privateLinkServiceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateLinkServiceName = this._privateLinkServiceName;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._stage !== undefined) {
      hasAnyValues = true;
      internalValueResult.stage = this._stage;
    }
    if (this._warehouse !== undefined) {
      hasAnyValues = true;
      internalValueResult.warehouse = this._warehouse;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflake | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountName = undefined;
      this._bucketName = undefined;
      this._bucketPrefix = undefined;
      this._privateLinkServiceName = undefined;
      this._region = undefined;
      this._stage = undefined;
      this._warehouse = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountName = value.accountName;
      this._bucketName = value.bucketName;
      this._bucketPrefix = value.bucketPrefix;
      this._privateLinkServiceName = value.privateLinkServiceName;
      this._region = value.region;
      this._stage = value.stage;
      this._warehouse = value.warehouse;
    }
  }

  // account_name - computed: false, optional: true, required: false
  private _accountName?: string; 
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  public resetAccountName() {
    this._accountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName;
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // bucket_prefix - computed: false, optional: true, required: false
  private _bucketPrefix?: string; 
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }
  public set bucketPrefix(value: string) {
    this._bucketPrefix = value;
  }
  public resetBucketPrefix() {
    this._bucketPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketPrefixInput() {
    return this._bucketPrefix;
  }

  // private_link_service_name - computed: false, optional: true, required: false
  private _privateLinkServiceName?: string; 
  public get privateLinkServiceName() {
    return this.getStringAttribute('private_link_service_name');
  }
  public set privateLinkServiceName(value: string) {
    this._privateLinkServiceName = value;
  }
  public resetPrivateLinkServiceName() {
    this._privateLinkServiceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateLinkServiceNameInput() {
    return this._privateLinkServiceName;
  }

  // region - computed: false, optional: true, required: false
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

  // stage - computed: false, optional: false, required: true
  private _stage?: string; 
  public get stage() {
    return this.getStringAttribute('stage');
  }
  public set stage(value: string) {
    this._stage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stageInput() {
    return this._stage;
  }

  // warehouse - computed: false, optional: false, required: true
  private _warehouse?: string; 
  public get warehouse() {
    return this.getStringAttribute('warehouse');
  }
  public set warehouse(value: string) {
    this._warehouse = value;
  }
  // Temporarily expose input value. Use with caution.
  public get warehouseInput() {
    return this._warehouse;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesTrendmicro {
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesTrendmicroToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesTrendmicroOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesTrendmicro): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesTrendmicroOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesTrendmicro | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesTrendmicro | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeeva {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#instance_url AppflowConnectorProfile#instance_url}
  */
  readonly instanceUrl: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeevaToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeevaOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeeva): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_url: cdktf.stringToTerraform(struct!.instanceUrl),
  }
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeevaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeeva | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceUrl = this._instanceUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeeva | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceUrl = value.instanceUrl;
    }
  }

  // instance_url - computed: false, optional: false, required: true
  private _instanceUrl?: string; 
  public get instanceUrl() {
    return this.getStringAttribute('instance_url');
  }
  public set instanceUrl(value: string) {
    this._instanceUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceUrlInput() {
    return this._instanceUrl;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendesk {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#instance_url AppflowConnectorProfile#instance_url}
  */
  readonly instanceUrl: string;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendeskToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendeskOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendesk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_url: cdktf.stringToTerraform(struct!.instanceUrl),
  }
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendeskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendesk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceUrl = this._instanceUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendesk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceUrl = value.instanceUrl;
    }
  }

  // instance_url - computed: false, optional: false, required: true
  private _instanceUrl?: string; 
  public get instanceUrl() {
    return this.getStringAttribute('instance_url');
  }
  public set instanceUrl(value: string) {
    this._instanceUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceUrlInput() {
    return this._instanceUrl;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileProperties {
  /**
  * amplitude block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#amplitude AppflowConnectorProfile#amplitude}
  */
  readonly amplitude?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesAmplitude;
  /**
  * custom_connector block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#custom_connector AppflowConnectorProfile#custom_connector}
  */
  readonly customConnector?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnector;
  /**
  * datadog block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#datadog AppflowConnectorProfile#datadog}
  */
  readonly datadog?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadog;
  /**
  * dynatrace block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#dynatrace AppflowConnectorProfile#dynatrace}
  */
  readonly dynatrace?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatrace;
  /**
  * google_analytics block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#google_analytics AppflowConnectorProfile#google_analytics}
  */
  readonly googleAnalytics?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesGoogleAnalytics;
  /**
  * honeycode block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#honeycode AppflowConnectorProfile#honeycode}
  */
  readonly honeycode?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesHoneycode;
  /**
  * infor_nexus block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#infor_nexus AppflowConnectorProfile#infor_nexus}
  */
  readonly inforNexus?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexus;
  /**
  * marketo block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#marketo AppflowConnectorProfile#marketo}
  */
  readonly marketo?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketo;
  /**
  * redshift block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#redshift AppflowConnectorProfile#redshift}
  */
  readonly redshift?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshift;
  /**
  * salesforce block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#salesforce AppflowConnectorProfile#salesforce}
  */
  readonly salesforce?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforce;
  /**
  * sapo_data block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#sapo_data AppflowConnectorProfile#sapo_data}
  */
  readonly sapoData?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoData;
  /**
  * service_now block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#service_now AppflowConnectorProfile#service_now}
  */
  readonly serviceNow?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNow;
  /**
  * singular block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#singular AppflowConnectorProfile#singular}
  */
  readonly singular?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSingular;
  /**
  * slack block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#slack AppflowConnectorProfile#slack}
  */
  readonly slack?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlack;
  /**
  * snowflake block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#snowflake AppflowConnectorProfile#snowflake}
  */
  readonly snowflake?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflake;
  /**
  * trendmicro block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#trendmicro AppflowConnectorProfile#trendmicro}
  */
  readonly trendmicro?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesTrendmicro;
  /**
  * veeva block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#veeva AppflowConnectorProfile#veeva}
  */
  readonly veeva?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeeva;
  /**
  * zendesk block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#zendesk AppflowConnectorProfile#zendesk}
  */
  readonly zendesk?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendesk;
}

export function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    amplitude: appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesAmplitudeToTerraform(struct!.amplitude),
    custom_connector: appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorToTerraform(struct!.customConnector),
    datadog: appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadogToTerraform(struct!.datadog),
    dynatrace: appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatraceToTerraform(struct!.dynatrace),
    google_analytics: appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesGoogleAnalyticsToTerraform(struct!.googleAnalytics),
    honeycode: appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesHoneycodeToTerraform(struct!.honeycode),
    infor_nexus: appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexusToTerraform(struct!.inforNexus),
    marketo: appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketoToTerraform(struct!.marketo),
    redshift: appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshiftToTerraform(struct!.redshift),
    salesforce: appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforceToTerraform(struct!.salesforce),
    sapo_data: appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataToTerraform(struct!.sapoData),
    service_now: appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNowToTerraform(struct!.serviceNow),
    singular: appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSingularToTerraform(struct!.singular),
    slack: appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlackToTerraform(struct!.slack),
    snowflake: appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflakeToTerraform(struct!.snowflake),
    trendmicro: appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesTrendmicroToTerraform(struct!.trendmicro),
    veeva: appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeevaToTerraform(struct!.veeva),
    zendesk: appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendeskToTerraform(struct!.zendesk),
  }
}

export class AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amplitude?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.amplitude = this._amplitude?.internalValue;
    }
    if (this._customConnector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customConnector = this._customConnector?.internalValue;
    }
    if (this._datadog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datadog = this._datadog?.internalValue;
    }
    if (this._dynatrace?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynatrace = this._dynatrace?.internalValue;
    }
    if (this._googleAnalytics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleAnalytics = this._googleAnalytics?.internalValue;
    }
    if (this._honeycode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.honeycode = this._honeycode?.internalValue;
    }
    if (this._inforNexus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inforNexus = this._inforNexus?.internalValue;
    }
    if (this._marketo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.marketo = this._marketo?.internalValue;
    }
    if (this._redshift?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redshift = this._redshift?.internalValue;
    }
    if (this._salesforce?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.salesforce = this._salesforce?.internalValue;
    }
    if (this._sapoData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sapoData = this._sapoData?.internalValue;
    }
    if (this._serviceNow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceNow = this._serviceNow?.internalValue;
    }
    if (this._singular?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.singular = this._singular?.internalValue;
    }
    if (this._slack?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slack = this._slack?.internalValue;
    }
    if (this._snowflake?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snowflake = this._snowflake?.internalValue;
    }
    if (this._trendmicro?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trendmicro = this._trendmicro?.internalValue;
    }
    if (this._veeva?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.veeva = this._veeva?.internalValue;
    }
    if (this._zendesk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zendesk = this._zendesk?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._amplitude.internalValue = undefined;
      this._customConnector.internalValue = undefined;
      this._datadog.internalValue = undefined;
      this._dynatrace.internalValue = undefined;
      this._googleAnalytics.internalValue = undefined;
      this._honeycode.internalValue = undefined;
      this._inforNexus.internalValue = undefined;
      this._marketo.internalValue = undefined;
      this._redshift.internalValue = undefined;
      this._salesforce.internalValue = undefined;
      this._sapoData.internalValue = undefined;
      this._serviceNow.internalValue = undefined;
      this._singular.internalValue = undefined;
      this._slack.internalValue = undefined;
      this._snowflake.internalValue = undefined;
      this._trendmicro.internalValue = undefined;
      this._veeva.internalValue = undefined;
      this._zendesk.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._amplitude.internalValue = value.amplitude;
      this._customConnector.internalValue = value.customConnector;
      this._datadog.internalValue = value.datadog;
      this._dynatrace.internalValue = value.dynatrace;
      this._googleAnalytics.internalValue = value.googleAnalytics;
      this._honeycode.internalValue = value.honeycode;
      this._inforNexus.internalValue = value.inforNexus;
      this._marketo.internalValue = value.marketo;
      this._redshift.internalValue = value.redshift;
      this._salesforce.internalValue = value.salesforce;
      this._sapoData.internalValue = value.sapoData;
      this._serviceNow.internalValue = value.serviceNow;
      this._singular.internalValue = value.singular;
      this._slack.internalValue = value.slack;
      this._snowflake.internalValue = value.snowflake;
      this._trendmicro.internalValue = value.trendmicro;
      this._veeva.internalValue = value.veeva;
      this._zendesk.internalValue = value.zendesk;
    }
  }

  // amplitude - computed: false, optional: true, required: false
  private _amplitude = new AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesAmplitudeOutputReference(this, "amplitude");
  public get amplitude() {
    return this._amplitude;
  }
  public putAmplitude(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesAmplitude) {
    this._amplitude.internalValue = value;
  }
  public resetAmplitude() {
    this._amplitude.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amplitudeInput() {
    return this._amplitude.internalValue;
  }

  // custom_connector - computed: false, optional: true, required: false
  private _customConnector = new AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorOutputReference(this, "custom_connector");
  public get customConnector() {
    return this._customConnector;
  }
  public putCustomConnector(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnector) {
    this._customConnector.internalValue = value;
  }
  public resetCustomConnector() {
    this._customConnector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customConnectorInput() {
    return this._customConnector.internalValue;
  }

  // datadog - computed: false, optional: true, required: false
  private _datadog = new AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadogOutputReference(this, "datadog");
  public get datadog() {
    return this._datadog;
  }
  public putDatadog(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadog) {
    this._datadog.internalValue = value;
  }
  public resetDatadog() {
    this._datadog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datadogInput() {
    return this._datadog.internalValue;
  }

  // dynatrace - computed: false, optional: true, required: false
  private _dynatrace = new AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatraceOutputReference(this, "dynatrace");
  public get dynatrace() {
    return this._dynatrace;
  }
  public putDynatrace(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatrace) {
    this._dynatrace.internalValue = value;
  }
  public resetDynatrace() {
    this._dynatrace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceInput() {
    return this._dynatrace.internalValue;
  }

  // google_analytics - computed: false, optional: true, required: false
  private _googleAnalytics = new AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesGoogleAnalyticsOutputReference(this, "google_analytics");
  public get googleAnalytics() {
    return this._googleAnalytics;
  }
  public putGoogleAnalytics(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesGoogleAnalytics) {
    this._googleAnalytics.internalValue = value;
  }
  public resetGoogleAnalytics() {
    this._googleAnalytics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleAnalyticsInput() {
    return this._googleAnalytics.internalValue;
  }

  // honeycode - computed: false, optional: true, required: false
  private _honeycode = new AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesHoneycodeOutputReference(this, "honeycode");
  public get honeycode() {
    return this._honeycode;
  }
  public putHoneycode(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesHoneycode) {
    this._honeycode.internalValue = value;
  }
  public resetHoneycode() {
    this._honeycode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get honeycodeInput() {
    return this._honeycode.internalValue;
  }

  // infor_nexus - computed: false, optional: true, required: false
  private _inforNexus = new AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexusOutputReference(this, "infor_nexus");
  public get inforNexus() {
    return this._inforNexus;
  }
  public putInforNexus(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexus) {
    this._inforNexus.internalValue = value;
  }
  public resetInforNexus() {
    this._inforNexus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inforNexusInput() {
    return this._inforNexus.internalValue;
  }

  // marketo - computed: false, optional: true, required: false
  private _marketo = new AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketoOutputReference(this, "marketo");
  public get marketo() {
    return this._marketo;
  }
  public putMarketo(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketo) {
    this._marketo.internalValue = value;
  }
  public resetMarketo() {
    this._marketo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get marketoInput() {
    return this._marketo.internalValue;
  }

  // redshift - computed: false, optional: true, required: false
  private _redshift = new AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshiftOutputReference(this, "redshift");
  public get redshift() {
    return this._redshift;
  }
  public putRedshift(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshift) {
    this._redshift.internalValue = value;
  }
  public resetRedshift() {
    this._redshift.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redshiftInput() {
    return this._redshift.internalValue;
  }

  // salesforce - computed: false, optional: true, required: false
  private _salesforce = new AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforceOutputReference(this, "salesforce");
  public get salesforce() {
    return this._salesforce;
  }
  public putSalesforce(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforce) {
    this._salesforce.internalValue = value;
  }
  public resetSalesforce() {
    this._salesforce.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get salesforceInput() {
    return this._salesforce.internalValue;
  }

  // sapo_data - computed: false, optional: true, required: false
  private _sapoData = new AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataOutputReference(this, "sapo_data");
  public get sapoData() {
    return this._sapoData;
  }
  public putSapoData(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoData) {
    this._sapoData.internalValue = value;
  }
  public resetSapoData() {
    this._sapoData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sapoDataInput() {
    return this._sapoData.internalValue;
  }

  // service_now - computed: false, optional: true, required: false
  private _serviceNow = new AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNowOutputReference(this, "service_now");
  public get serviceNow() {
    return this._serviceNow;
  }
  public putServiceNow(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNow) {
    this._serviceNow.internalValue = value;
  }
  public resetServiceNow() {
    this._serviceNow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNowInput() {
    return this._serviceNow.internalValue;
  }

  // singular - computed: false, optional: true, required: false
  private _singular = new AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSingularOutputReference(this, "singular");
  public get singular() {
    return this._singular;
  }
  public putSingular(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSingular) {
    this._singular.internalValue = value;
  }
  public resetSingular() {
    this._singular.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singularInput() {
    return this._singular.internalValue;
  }

  // slack - computed: false, optional: true, required: false
  private _slack = new AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlackOutputReference(this, "slack");
  public get slack() {
    return this._slack;
  }
  public putSlack(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlack) {
    this._slack.internalValue = value;
  }
  public resetSlack() {
    this._slack.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackInput() {
    return this._slack.internalValue;
  }

  // snowflake - computed: false, optional: true, required: false
  private _snowflake = new AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflakeOutputReference(this, "snowflake");
  public get snowflake() {
    return this._snowflake;
  }
  public putSnowflake(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflake) {
    this._snowflake.internalValue = value;
  }
  public resetSnowflake() {
    this._snowflake.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snowflakeInput() {
    return this._snowflake.internalValue;
  }

  // trendmicro - computed: false, optional: true, required: false
  private _trendmicro = new AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesTrendmicroOutputReference(this, "trendmicro");
  public get trendmicro() {
    return this._trendmicro;
  }
  public putTrendmicro(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesTrendmicro) {
    this._trendmicro.internalValue = value;
  }
  public resetTrendmicro() {
    this._trendmicro.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trendmicroInput() {
    return this._trendmicro.internalValue;
  }

  // veeva - computed: false, optional: true, required: false
  private _veeva = new AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeevaOutputReference(this, "veeva");
  public get veeva() {
    return this._veeva;
  }
  public putVeeva(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeeva) {
    this._veeva.internalValue = value;
  }
  public resetVeeva() {
    this._veeva.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get veevaInput() {
    return this._veeva.internalValue;
  }

  // zendesk - computed: false, optional: true, required: false
  private _zendesk = new AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendeskOutputReference(this, "zendesk");
  public get zendesk() {
    return this._zendesk;
  }
  public putZendesk(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendesk) {
    this._zendesk.internalValue = value;
  }
  public resetZendesk() {
    this._zendesk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zendeskInput() {
    return this._zendesk.internalValue;
  }
}
export interface AppflowConnectorProfileConnectorProfileConfig {
  /**
  * connector_profile_credentials block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#connector_profile_credentials AppflowConnectorProfile#connector_profile_credentials}
  */
  readonly connectorProfileCredentials: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentials;
  /**
  * connector_profile_properties block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile#connector_profile_properties AppflowConnectorProfile#connector_profile_properties}
  */
  readonly connectorProfileProperties: AppflowConnectorProfileConnectorProfileConfigConnectorProfileProperties;
}

export function appflowConnectorProfileConnectorProfileConfigToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigOutputReference | AppflowConnectorProfileConnectorProfileConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connector_profile_credentials: appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsToTerraform(struct!.connectorProfileCredentials),
    connector_profile_properties: appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesToTerraform(struct!.connectorProfileProperties),
  }
}

export class AppflowConnectorProfileConnectorProfileConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowConnectorProfileConnectorProfileConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectorProfileCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectorProfileCredentials = this._connectorProfileCredentials?.internalValue;
    }
    if (this._connectorProfileProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectorProfileProperties = this._connectorProfileProperties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowConnectorProfileConnectorProfileConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectorProfileCredentials.internalValue = undefined;
      this._connectorProfileProperties.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectorProfileCredentials.internalValue = value.connectorProfileCredentials;
      this._connectorProfileProperties.internalValue = value.connectorProfileProperties;
    }
  }

  // connector_profile_credentials - computed: false, optional: false, required: true
  private _connectorProfileCredentials = new AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsOutputReference(this, "connector_profile_credentials");
  public get connectorProfileCredentials() {
    return this._connectorProfileCredentials;
  }
  public putConnectorProfileCredentials(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentials) {
    this._connectorProfileCredentials.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorProfileCredentialsInput() {
    return this._connectorProfileCredentials.internalValue;
  }

  // connector_profile_properties - computed: false, optional: false, required: true
  private _connectorProfileProperties = new AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesOutputReference(this, "connector_profile_properties");
  public get connectorProfileProperties() {
    return this._connectorProfileProperties;
  }
  public putConnectorProfileProperties(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileProperties) {
    this._connectorProfileProperties.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorProfilePropertiesInput() {
    return this._connectorProfileProperties.internalValue;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile aws_appflow_connector_profile}
*/
export class AppflowConnectorProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_appflow_connector_profile";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appflow_connector_profile aws_appflow_connector_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppflowConnectorProfileConfig
  */
  public constructor(scope: Construct, id: string, config: AppflowConnectorProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_appflow_connector_profile',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.58.0',
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
    this._connectionMode = config.connectionMode;
    this._connectorLabel = config.connectorLabel;
    this._connectorType = config.connectorType;
    this._id = config.id;
    this._kmsArn = config.kmsArn;
    this._name = config.name;
    this._connectorProfileConfig.internalValue = config.connectorProfileConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // connection_mode - computed: false, optional: false, required: true
  private _connectionMode?: string; 
  public get connectionMode() {
    return this.getStringAttribute('connection_mode');
  }
  public set connectionMode(value: string) {
    this._connectionMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionModeInput() {
    return this._connectionMode;
  }

  // connector_label - computed: false, optional: true, required: false
  private _connectorLabel?: string; 
  public get connectorLabel() {
    return this.getStringAttribute('connector_label');
  }
  public set connectorLabel(value: string) {
    this._connectorLabel = value;
  }
  public resetConnectorLabel() {
    this._connectorLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorLabelInput() {
    return this._connectorLabel;
  }

  // connector_type - computed: false, optional: false, required: true
  private _connectorType?: string; 
  public get connectorType() {
    return this.getStringAttribute('connector_type');
  }
  public set connectorType(value: string) {
    this._connectorType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorTypeInput() {
    return this._connectorType;
  }

  // credentials_arn - computed: true, optional: false, required: false
  public get credentialsArn() {
    return this.getStringAttribute('credentials_arn');
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

  // kms_arn - computed: true, optional: true, required: false
  private _kmsArn?: string; 
  public get kmsArn() {
    return this.getStringAttribute('kms_arn');
  }
  public set kmsArn(value: string) {
    this._kmsArn = value;
  }
  public resetKmsArn() {
    this._kmsArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsArnInput() {
    return this._kmsArn;
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

  // connector_profile_config - computed: false, optional: false, required: true
  private _connectorProfileConfig = new AppflowConnectorProfileConnectorProfileConfigOutputReference(this, "connector_profile_config");
  public get connectorProfileConfig() {
    return this._connectorProfileConfig;
  }
  public putConnectorProfileConfig(value: AppflowConnectorProfileConnectorProfileConfig) {
    this._connectorProfileConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorProfileConfigInput() {
    return this._connectorProfileConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connection_mode: cdktf.stringToTerraform(this._connectionMode),
      connector_label: cdktf.stringToTerraform(this._connectorLabel),
      connector_type: cdktf.stringToTerraform(this._connectorType),
      id: cdktf.stringToTerraform(this._id),
      kms_arn: cdktf.stringToTerraform(this._kmsArn),
      name: cdktf.stringToTerraform(this._name),
      connector_profile_config: appflowConnectorProfileConnectorProfileConfigToTerraform(this._connectorProfileConfig.internalValue),
    };
  }
}
