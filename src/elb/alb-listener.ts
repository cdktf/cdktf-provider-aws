// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Elastic Load Balancer
*/
export interface AlbListenerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#alpn_policy AlbListener#alpn_policy}
  */
  readonly alpnPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#certificate_arn AlbListener#certificate_arn}
  */
  readonly certificateArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#load_balancer_arn AlbListener#load_balancer_arn}
  */
  readonly loadBalancerArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#port AlbListener#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#protocol AlbListener#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#ssl_policy AlbListener#ssl_policy}
  */
  readonly sslPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#tags AlbListener#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#tags_all AlbListener#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * default_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#default_action AlbListener#default_action}
  */
  readonly defaultAction: AlbListenerDefaultAction[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#timeouts AlbListener#timeouts}
  */
  readonly timeouts?: AlbListenerTimeouts;
}
export interface AlbListenerDefaultActionAuthenticateCognito {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#authentication_request_extra_params AlbListener#authentication_request_extra_params}
  */
  readonly authenticationRequestExtraParams?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#on_unauthenticated_request AlbListener#on_unauthenticated_request}
  */
  readonly onUnauthenticatedRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#scope AlbListener#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#session_cookie_name AlbListener#session_cookie_name}
  */
  readonly sessionCookieName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#session_timeout AlbListener#session_timeout}
  */
  readonly sessionTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#user_pool_arn AlbListener#user_pool_arn}
  */
  readonly userPoolArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#user_pool_client_id AlbListener#user_pool_client_id}
  */
  readonly userPoolClientId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#user_pool_domain AlbListener#user_pool_domain}
  */
  readonly userPoolDomain: string;
}

export function albListenerDefaultActionAuthenticateCognitoToTerraform(struct?: AlbListenerDefaultActionAuthenticateCognitoOutputReference | AlbListenerDefaultActionAuthenticateCognito): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_request_extra_params: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.authenticationRequestExtraParams),
    on_unauthenticated_request: cdktf.stringToTerraform(struct!.onUnauthenticatedRequest),
    scope: cdktf.stringToTerraform(struct!.scope),
    session_cookie_name: cdktf.stringToTerraform(struct!.sessionCookieName),
    session_timeout: cdktf.numberToTerraform(struct!.sessionTimeout),
    user_pool_arn: cdktf.stringToTerraform(struct!.userPoolArn),
    user_pool_client_id: cdktf.stringToTerraform(struct!.userPoolClientId),
    user_pool_domain: cdktf.stringToTerraform(struct!.userPoolDomain),
  }
}

export class AlbListenerDefaultActionAuthenticateCognitoOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): AlbListenerDefaultActionAuthenticateCognito | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._authenticationRequestExtraParams) {
      hasAnyValues = true;
      internalValueResult.authenticationRequestExtraParams = this._authenticationRequestExtraParams;
    }
    if (this._onUnauthenticatedRequest) {
      hasAnyValues = true;
      internalValueResult.onUnauthenticatedRequest = this._onUnauthenticatedRequest;
    }
    if (this._scope) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._sessionCookieName) {
      hasAnyValues = true;
      internalValueResult.sessionCookieName = this._sessionCookieName;
    }
    if (this._sessionTimeout) {
      hasAnyValues = true;
      internalValueResult.sessionTimeout = this._sessionTimeout;
    }
    if (this._userPoolArn) {
      hasAnyValues = true;
      internalValueResult.userPoolArn = this._userPoolArn;
    }
    if (this._userPoolClientId) {
      hasAnyValues = true;
      internalValueResult.userPoolClientId = this._userPoolClientId;
    }
    if (this._userPoolDomain) {
      hasAnyValues = true;
      internalValueResult.userPoolDomain = this._userPoolDomain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbListenerDefaultActionAuthenticateCognito | undefined) {
    if (value === undefined) {
      this._authenticationRequestExtraParams = undefined;
      this._onUnauthenticatedRequest = undefined;
      this._scope = undefined;
      this._sessionCookieName = undefined;
      this._sessionTimeout = undefined;
      this._userPoolArn = undefined;
      this._userPoolClientId = undefined;
      this._userPoolDomain = undefined;
    }
    else {
      this._authenticationRequestExtraParams = value.authenticationRequestExtraParams;
      this._onUnauthenticatedRequest = value.onUnauthenticatedRequest;
      this._scope = value.scope;
      this._sessionCookieName = value.sessionCookieName;
      this._sessionTimeout = value.sessionTimeout;
      this._userPoolArn = value.userPoolArn;
      this._userPoolClientId = value.userPoolClientId;
      this._userPoolDomain = value.userPoolDomain;
    }
  }

  // authentication_request_extra_params - computed: false, optional: true, required: false
  private _authenticationRequestExtraParams?: { [key: string]: string } | cdktf.IResolvable; 
  public get authenticationRequestExtraParams() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('authentication_request_extra_params') as any;
  }
  public set authenticationRequestExtraParams(value: { [key: string]: string } | cdktf.IResolvable) {
    this._authenticationRequestExtraParams = value;
  }
  public resetAuthenticationRequestExtraParams() {
    this._authenticationRequestExtraParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationRequestExtraParamsInput() {
    return this._authenticationRequestExtraParams;
  }

  // on_unauthenticated_request - computed: true, optional: true, required: false
  private _onUnauthenticatedRequest?: string; 
  public get onUnauthenticatedRequest() {
    return this.getStringAttribute('on_unauthenticated_request');
  }
  public set onUnauthenticatedRequest(value: string) {
    this._onUnauthenticatedRequest = value;
  }
  public resetOnUnauthenticatedRequest() {
    this._onUnauthenticatedRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onUnauthenticatedRequestInput() {
    return this._onUnauthenticatedRequest;
  }

  // scope - computed: true, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // session_cookie_name - computed: true, optional: true, required: false
  private _sessionCookieName?: string; 
  public get sessionCookieName() {
    return this.getStringAttribute('session_cookie_name');
  }
  public set sessionCookieName(value: string) {
    this._sessionCookieName = value;
  }
  public resetSessionCookieName() {
    this._sessionCookieName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionCookieNameInput() {
    return this._sessionCookieName;
  }

  // session_timeout - computed: true, optional: true, required: false
  private _sessionTimeout?: number; 
  public get sessionTimeout() {
    return this.getNumberAttribute('session_timeout');
  }
  public set sessionTimeout(value: number) {
    this._sessionTimeout = value;
  }
  public resetSessionTimeout() {
    this._sessionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTimeoutInput() {
    return this._sessionTimeout;
  }

  // user_pool_arn - computed: false, optional: false, required: true
  private _userPoolArn?: string; 
  public get userPoolArn() {
    return this.getStringAttribute('user_pool_arn');
  }
  public set userPoolArn(value: string) {
    this._userPoolArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userPoolArnInput() {
    return this._userPoolArn;
  }

  // user_pool_client_id - computed: false, optional: false, required: true
  private _userPoolClientId?: string; 
  public get userPoolClientId() {
    return this.getStringAttribute('user_pool_client_id');
  }
  public set userPoolClientId(value: string) {
    this._userPoolClientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userPoolClientIdInput() {
    return this._userPoolClientId;
  }

  // user_pool_domain - computed: false, optional: false, required: true
  private _userPoolDomain?: string; 
  public get userPoolDomain() {
    return this.getStringAttribute('user_pool_domain');
  }
  public set userPoolDomain(value: string) {
    this._userPoolDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userPoolDomainInput() {
    return this._userPoolDomain;
  }
}
export interface AlbListenerDefaultActionAuthenticateOidc {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#authentication_request_extra_params AlbListener#authentication_request_extra_params}
  */
  readonly authenticationRequestExtraParams?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#authorization_endpoint AlbListener#authorization_endpoint}
  */
  readonly authorizationEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#client_id AlbListener#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#client_secret AlbListener#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#issuer AlbListener#issuer}
  */
  readonly issuer: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#on_unauthenticated_request AlbListener#on_unauthenticated_request}
  */
  readonly onUnauthenticatedRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#scope AlbListener#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#session_cookie_name AlbListener#session_cookie_name}
  */
  readonly sessionCookieName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#session_timeout AlbListener#session_timeout}
  */
  readonly sessionTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#token_endpoint AlbListener#token_endpoint}
  */
  readonly tokenEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#user_info_endpoint AlbListener#user_info_endpoint}
  */
  readonly userInfoEndpoint: string;
}

export function albListenerDefaultActionAuthenticateOidcToTerraform(struct?: AlbListenerDefaultActionAuthenticateOidcOutputReference | AlbListenerDefaultActionAuthenticateOidc): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_request_extra_params: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.authenticationRequestExtraParams),
    authorization_endpoint: cdktf.stringToTerraform(struct!.authorizationEndpoint),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    issuer: cdktf.stringToTerraform(struct!.issuer),
    on_unauthenticated_request: cdktf.stringToTerraform(struct!.onUnauthenticatedRequest),
    scope: cdktf.stringToTerraform(struct!.scope),
    session_cookie_name: cdktf.stringToTerraform(struct!.sessionCookieName),
    session_timeout: cdktf.numberToTerraform(struct!.sessionTimeout),
    token_endpoint: cdktf.stringToTerraform(struct!.tokenEndpoint),
    user_info_endpoint: cdktf.stringToTerraform(struct!.userInfoEndpoint),
  }
}

export class AlbListenerDefaultActionAuthenticateOidcOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): AlbListenerDefaultActionAuthenticateOidc | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._authenticationRequestExtraParams) {
      hasAnyValues = true;
      internalValueResult.authenticationRequestExtraParams = this._authenticationRequestExtraParams;
    }
    if (this._authorizationEndpoint) {
      hasAnyValues = true;
      internalValueResult.authorizationEndpoint = this._authorizationEndpoint;
    }
    if (this._clientId) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._issuer) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._onUnauthenticatedRequest) {
      hasAnyValues = true;
      internalValueResult.onUnauthenticatedRequest = this._onUnauthenticatedRequest;
    }
    if (this._scope) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._sessionCookieName) {
      hasAnyValues = true;
      internalValueResult.sessionCookieName = this._sessionCookieName;
    }
    if (this._sessionTimeout) {
      hasAnyValues = true;
      internalValueResult.sessionTimeout = this._sessionTimeout;
    }
    if (this._tokenEndpoint) {
      hasAnyValues = true;
      internalValueResult.tokenEndpoint = this._tokenEndpoint;
    }
    if (this._userInfoEndpoint) {
      hasAnyValues = true;
      internalValueResult.userInfoEndpoint = this._userInfoEndpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbListenerDefaultActionAuthenticateOidc | undefined) {
    if (value === undefined) {
      this._authenticationRequestExtraParams = undefined;
      this._authorizationEndpoint = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._issuer = undefined;
      this._onUnauthenticatedRequest = undefined;
      this._scope = undefined;
      this._sessionCookieName = undefined;
      this._sessionTimeout = undefined;
      this._tokenEndpoint = undefined;
      this._userInfoEndpoint = undefined;
    }
    else {
      this._authenticationRequestExtraParams = value.authenticationRequestExtraParams;
      this._authorizationEndpoint = value.authorizationEndpoint;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._issuer = value.issuer;
      this._onUnauthenticatedRequest = value.onUnauthenticatedRequest;
      this._scope = value.scope;
      this._sessionCookieName = value.sessionCookieName;
      this._sessionTimeout = value.sessionTimeout;
      this._tokenEndpoint = value.tokenEndpoint;
      this._userInfoEndpoint = value.userInfoEndpoint;
    }
  }

  // authentication_request_extra_params - computed: false, optional: true, required: false
  private _authenticationRequestExtraParams?: { [key: string]: string } | cdktf.IResolvable; 
  public get authenticationRequestExtraParams() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('authentication_request_extra_params') as any;
  }
  public set authenticationRequestExtraParams(value: { [key: string]: string } | cdktf.IResolvable) {
    this._authenticationRequestExtraParams = value;
  }
  public resetAuthenticationRequestExtraParams() {
    this._authenticationRequestExtraParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationRequestExtraParamsInput() {
    return this._authenticationRequestExtraParams;
  }

  // authorization_endpoint - computed: false, optional: false, required: true
  private _authorizationEndpoint?: string; 
  public get authorizationEndpoint() {
    return this.getStringAttribute('authorization_endpoint');
  }
  public set authorizationEndpoint(value: string) {
    this._authorizationEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationEndpointInput() {
    return this._authorizationEndpoint;
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

  // issuer - computed: false, optional: false, required: true
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // on_unauthenticated_request - computed: true, optional: true, required: false
  private _onUnauthenticatedRequest?: string; 
  public get onUnauthenticatedRequest() {
    return this.getStringAttribute('on_unauthenticated_request');
  }
  public set onUnauthenticatedRequest(value: string) {
    this._onUnauthenticatedRequest = value;
  }
  public resetOnUnauthenticatedRequest() {
    this._onUnauthenticatedRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onUnauthenticatedRequestInput() {
    return this._onUnauthenticatedRequest;
  }

  // scope - computed: true, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // session_cookie_name - computed: true, optional: true, required: false
  private _sessionCookieName?: string; 
  public get sessionCookieName() {
    return this.getStringAttribute('session_cookie_name');
  }
  public set sessionCookieName(value: string) {
    this._sessionCookieName = value;
  }
  public resetSessionCookieName() {
    this._sessionCookieName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionCookieNameInput() {
    return this._sessionCookieName;
  }

  // session_timeout - computed: true, optional: true, required: false
  private _sessionTimeout?: number; 
  public get sessionTimeout() {
    return this.getNumberAttribute('session_timeout');
  }
  public set sessionTimeout(value: number) {
    this._sessionTimeout = value;
  }
  public resetSessionTimeout() {
    this._sessionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTimeoutInput() {
    return this._sessionTimeout;
  }

  // token_endpoint - computed: false, optional: false, required: true
  private _tokenEndpoint?: string; 
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }
  public set tokenEndpoint(value: string) {
    this._tokenEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEndpointInput() {
    return this._tokenEndpoint;
  }

  // user_info_endpoint - computed: false, optional: false, required: true
  private _userInfoEndpoint?: string; 
  public get userInfoEndpoint() {
    return this.getStringAttribute('user_info_endpoint');
  }
  public set userInfoEndpoint(value: string) {
    this._userInfoEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInfoEndpointInput() {
    return this._userInfoEndpoint;
  }
}
export interface AlbListenerDefaultActionFixedResponse {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#content_type AlbListener#content_type}
  */
  readonly contentType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#message_body AlbListener#message_body}
  */
  readonly messageBody?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#status_code AlbListener#status_code}
  */
  readonly statusCode?: string;
}

export function albListenerDefaultActionFixedResponseToTerraform(struct?: AlbListenerDefaultActionFixedResponseOutputReference | AlbListenerDefaultActionFixedResponse): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_type: cdktf.stringToTerraform(struct!.contentType),
    message_body: cdktf.stringToTerraform(struct!.messageBody),
    status_code: cdktf.stringToTerraform(struct!.statusCode),
  }
}

export class AlbListenerDefaultActionFixedResponseOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): AlbListenerDefaultActionFixedResponse | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._contentType) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._messageBody) {
      hasAnyValues = true;
      internalValueResult.messageBody = this._messageBody;
    }
    if (this._statusCode) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbListenerDefaultActionFixedResponse | undefined) {
    if (value === undefined) {
      this._contentType = undefined;
      this._messageBody = undefined;
      this._statusCode = undefined;
    }
    else {
      this._contentType = value.contentType;
      this._messageBody = value.messageBody;
      this._statusCode = value.statusCode;
    }
  }

  // content_type - computed: false, optional: false, required: true
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // message_body - computed: false, optional: true, required: false
  private _messageBody?: string; 
  public get messageBody() {
    return this.getStringAttribute('message_body');
  }
  public set messageBody(value: string) {
    this._messageBody = value;
  }
  public resetMessageBody() {
    this._messageBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageBodyInput() {
    return this._messageBody;
  }

  // status_code - computed: true, optional: true, required: false
  private _statusCode?: string; 
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }
  public set statusCode(value: string) {
    this._statusCode = value;
  }
  public resetStatusCode() {
    this._statusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode;
  }
}
export interface AlbListenerDefaultActionForwardStickiness {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#duration AlbListener#duration}
  */
  readonly duration: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#enabled AlbListener#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function albListenerDefaultActionForwardStickinessToTerraform(struct?: AlbListenerDefaultActionForwardStickinessOutputReference | AlbListenerDefaultActionForwardStickiness): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class AlbListenerDefaultActionForwardStickinessOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): AlbListenerDefaultActionForwardStickiness | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._duration) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._enabled) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbListenerDefaultActionForwardStickiness | undefined) {
    if (value === undefined) {
      this._duration = undefined;
      this._enabled = undefined;
    }
    else {
      this._duration = value.duration;
      this._enabled = value.enabled;
    }
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface AlbListenerDefaultActionForwardTargetGroup {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#arn AlbListener#arn}
  */
  readonly arn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#weight AlbListener#weight}
  */
  readonly weight?: number;
}

export function albListenerDefaultActionForwardTargetGroupToTerraform(struct?: AlbListenerDefaultActionForwardTargetGroup): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}

export interface AlbListenerDefaultActionForward {
  /**
  * stickiness block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#stickiness AlbListener#stickiness}
  */
  readonly stickiness?: AlbListenerDefaultActionForwardStickiness;
  /**
  * target_group block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#target_group AlbListener#target_group}
  */
  readonly targetGroup: AlbListenerDefaultActionForwardTargetGroup[];
}

export function albListenerDefaultActionForwardToTerraform(struct?: AlbListenerDefaultActionForwardOutputReference | AlbListenerDefaultActionForward): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stickiness: albListenerDefaultActionForwardStickinessToTerraform(struct!.stickiness),
    target_group: cdktf.listMapper(albListenerDefaultActionForwardTargetGroupToTerraform)(struct!.targetGroup),
  }
}

export class AlbListenerDefaultActionForwardOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): AlbListenerDefaultActionForward | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._stickiness) {
      hasAnyValues = true;
      internalValueResult.stickiness = this._stickiness?.internalValue;
    }
    if (this._targetGroup) {
      hasAnyValues = true;
      internalValueResult.targetGroup = this._targetGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbListenerDefaultActionForward | undefined) {
    if (value === undefined) {
      this._stickiness.internalValue = undefined;
      this._targetGroup = undefined;
    }
    else {
      this._stickiness.internalValue = value.stickiness;
      this._targetGroup = value.targetGroup;
    }
  }

  // stickiness - computed: false, optional: true, required: false
  private _stickiness = new AlbListenerDefaultActionForwardStickinessOutputReference(this as any, "stickiness", true);
  public get stickiness() {
    return this._stickiness;
  }
  public putStickiness(value: AlbListenerDefaultActionForwardStickiness) {
    this._stickiness.internalValue = value;
  }
  public resetStickiness() {
    this._stickiness.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stickinessInput() {
    return this._stickiness.internalValue;
  }

  // target_group - computed: false, optional: false, required: true
  private _targetGroup?: AlbListenerDefaultActionForwardTargetGroup[]; 
  public get targetGroup() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('target_group') as any;
  }
  public set targetGroup(value: AlbListenerDefaultActionForwardTargetGroup[]) {
    this._targetGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetGroupInput() {
    return this._targetGroup;
  }
}
export interface AlbListenerDefaultActionRedirect {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#host AlbListener#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#path AlbListener#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#port AlbListener#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#protocol AlbListener#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#query AlbListener#query}
  */
  readonly query?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#status_code AlbListener#status_code}
  */
  readonly statusCode: string;
}

export function albListenerDefaultActionRedirectToTerraform(struct?: AlbListenerDefaultActionRedirectOutputReference | AlbListenerDefaultActionRedirect): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    query: cdktf.stringToTerraform(struct!.query),
    status_code: cdktf.stringToTerraform(struct!.statusCode),
  }
}

export class AlbListenerDefaultActionRedirectOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): AlbListenerDefaultActionRedirect | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._host) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._path) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._query) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._statusCode) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbListenerDefaultActionRedirect | undefined) {
    if (value === undefined) {
      this._host = undefined;
      this._path = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._query = undefined;
      this._statusCode = undefined;
    }
    else {
      this._host = value.host;
      this._path = value.path;
      this._port = value.port;
      this._protocol = value.protocol;
      this._query = value.query;
      this._statusCode = value.statusCode;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // query - computed: false, optional: true, required: false
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // status_code - computed: false, optional: false, required: true
  private _statusCode?: string; 
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }
  public set statusCode(value: string) {
    this._statusCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode;
  }
}
export interface AlbListenerDefaultAction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#order AlbListener#order}
  */
  readonly order?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#target_group_arn AlbListener#target_group_arn}
  */
  readonly targetGroupArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#type AlbListener#type}
  */
  readonly type: string;
  /**
  * authenticate_cognito block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#authenticate_cognito AlbListener#authenticate_cognito}
  */
  readonly authenticateCognito?: AlbListenerDefaultActionAuthenticateCognito;
  /**
  * authenticate_oidc block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#authenticate_oidc AlbListener#authenticate_oidc}
  */
  readonly authenticateOidc?: AlbListenerDefaultActionAuthenticateOidc;
  /**
  * fixed_response block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#fixed_response AlbListener#fixed_response}
  */
  readonly fixedResponse?: AlbListenerDefaultActionFixedResponse;
  /**
  * forward block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#forward AlbListener#forward}
  */
  readonly forward?: AlbListenerDefaultActionForward;
  /**
  * redirect block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#redirect AlbListener#redirect}
  */
  readonly redirect?: AlbListenerDefaultActionRedirect;
}

export function albListenerDefaultActionToTerraform(struct?: AlbListenerDefaultAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    order: cdktf.numberToTerraform(struct!.order),
    target_group_arn: cdktf.stringToTerraform(struct!.targetGroupArn),
    type: cdktf.stringToTerraform(struct!.type),
    authenticate_cognito: albListenerDefaultActionAuthenticateCognitoToTerraform(struct!.authenticateCognito),
    authenticate_oidc: albListenerDefaultActionAuthenticateOidcToTerraform(struct!.authenticateOidc),
    fixed_response: albListenerDefaultActionFixedResponseToTerraform(struct!.fixedResponse),
    forward: albListenerDefaultActionForwardToTerraform(struct!.forward),
    redirect: albListenerDefaultActionRedirectToTerraform(struct!.redirect),
  }
}

export interface AlbListenerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#read AlbListener#read}
  */
  readonly read?: string;
}

export function albListenerTimeoutsToTerraform(struct?: AlbListenerTimeoutsOutputReference | AlbListenerTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class AlbListenerTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): AlbListenerTimeouts | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._read) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbListenerTimeouts | undefined) {
    if (value === undefined) {
      this._read = undefined;
    }
    else {
      this._read = value.read;
    }
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html aws_alb_listener}
*/
export class AlbListener extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_alb_listener";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html aws_alb_listener} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlbListenerConfig
  */
  public constructor(scope: Construct, id: string, config: AlbListenerConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_alb_listener',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._alpnPolicy = config.alpnPolicy;
    this._certificateArn = config.certificateArn;
    this._loadBalancerArn = config.loadBalancerArn;
    this._port = config.port;
    this._protocol = config.protocol;
    this._sslPolicy = config.sslPolicy;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._defaultAction = config.defaultAction;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alpn_policy - computed: false, optional: true, required: false
  private _alpnPolicy?: string; 
  public get alpnPolicy() {
    return this.getStringAttribute('alpn_policy');
  }
  public set alpnPolicy(value: string) {
    this._alpnPolicy = value;
  }
  public resetAlpnPolicy() {
    this._alpnPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alpnPolicyInput() {
    return this._alpnPolicy;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // certificate_arn - computed: false, optional: true, required: false
  private _certificateArn?: string; 
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }
  public set certificateArn(value: string) {
    this._certificateArn = value;
  }
  public resetCertificateArn() {
    this._certificateArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateArnInput() {
    return this._certificateArn;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // load_balancer_arn - computed: false, optional: false, required: true
  private _loadBalancerArn?: string; 
  public get loadBalancerArn() {
    return this.getStringAttribute('load_balancer_arn');
  }
  public set loadBalancerArn(value: string) {
    this._loadBalancerArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerArnInput() {
    return this._loadBalancerArn;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // ssl_policy - computed: true, optional: true, required: false
  private _sslPolicy?: string; 
  public get sslPolicy() {
    return this.getStringAttribute('ssl_policy');
  }
  public set sslPolicy(value: string) {
    this._sslPolicy = value;
  }
  public resetSslPolicy() {
    this._sslPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslPolicyInput() {
    return this._sslPolicy;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable; 
  public get tagsAll() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags_all') as any;
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // default_action - computed: false, optional: false, required: true
  private _defaultAction?: AlbListenerDefaultAction[]; 
  public get defaultAction() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('default_action') as any;
  }
  public set defaultAction(value: AlbListenerDefaultAction[]) {
    this._defaultAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionInput() {
    return this._defaultAction;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AlbListenerTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AlbListenerTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alpn_policy: cdktf.stringToTerraform(this._alpnPolicy),
      certificate_arn: cdktf.stringToTerraform(this._certificateArn),
      load_balancer_arn: cdktf.stringToTerraform(this._loadBalancerArn),
      port: cdktf.numberToTerraform(this._port),
      protocol: cdktf.stringToTerraform(this._protocol),
      ssl_policy: cdktf.stringToTerraform(this._sslPolicy),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      default_action: cdktf.listMapper(albListenerDefaultActionToTerraform)(this._defaultAction),
      timeouts: albListenerTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
