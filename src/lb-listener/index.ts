// https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbListenerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#alpn_policy LbListener#alpn_policy}
  */
  readonly alpnPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#certificate_arn LbListener#certificate_arn}
  */
  readonly certificateArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#id LbListener#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#load_balancer_arn LbListener#load_balancer_arn}
  */
  readonly loadBalancerArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#port LbListener#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#protocol LbListener#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#routing_http_request_x_amzn_mtls_clientcert_header_name LbListener#routing_http_request_x_amzn_mtls_clientcert_header_name}
  */
  readonly routingHttpRequestXAmznMtlsClientcertHeaderName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#routing_http_request_x_amzn_mtls_clientcert_issuer_header_name LbListener#routing_http_request_x_amzn_mtls_clientcert_issuer_header_name}
  */
  readonly routingHttpRequestXAmznMtlsClientcertIssuerHeaderName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#routing_http_request_x_amzn_mtls_clientcert_leaf_header_name LbListener#routing_http_request_x_amzn_mtls_clientcert_leaf_header_name}
  */
  readonly routingHttpRequestXAmznMtlsClientcertLeafHeaderName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#routing_http_request_x_amzn_mtls_clientcert_serial_number_header_name LbListener#routing_http_request_x_amzn_mtls_clientcert_serial_number_header_name}
  */
  readonly routingHttpRequestXAmznMtlsClientcertSerialNumberHeaderName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#routing_http_request_x_amzn_mtls_clientcert_subject_header_name LbListener#routing_http_request_x_amzn_mtls_clientcert_subject_header_name}
  */
  readonly routingHttpRequestXAmznMtlsClientcertSubjectHeaderName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#routing_http_request_x_amzn_mtls_clientcert_validity_header_name LbListener#routing_http_request_x_amzn_mtls_clientcert_validity_header_name}
  */
  readonly routingHttpRequestXAmznMtlsClientcertValidityHeaderName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#routing_http_request_x_amzn_tls_cipher_suite_header_name LbListener#routing_http_request_x_amzn_tls_cipher_suite_header_name}
  */
  readonly routingHttpRequestXAmznTlsCipherSuiteHeaderName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#routing_http_request_x_amzn_tls_version_header_name LbListener#routing_http_request_x_amzn_tls_version_header_name}
  */
  readonly routingHttpRequestXAmznTlsVersionHeaderName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#routing_http_response_access_control_allow_credentials_header_value LbListener#routing_http_response_access_control_allow_credentials_header_value}
  */
  readonly routingHttpResponseAccessControlAllowCredentialsHeaderValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#routing_http_response_access_control_allow_headers_header_value LbListener#routing_http_response_access_control_allow_headers_header_value}
  */
  readonly routingHttpResponseAccessControlAllowHeadersHeaderValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#routing_http_response_access_control_allow_methods_header_value LbListener#routing_http_response_access_control_allow_methods_header_value}
  */
  readonly routingHttpResponseAccessControlAllowMethodsHeaderValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#routing_http_response_access_control_allow_origin_header_value LbListener#routing_http_response_access_control_allow_origin_header_value}
  */
  readonly routingHttpResponseAccessControlAllowOriginHeaderValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#routing_http_response_access_control_expose_headers_header_value LbListener#routing_http_response_access_control_expose_headers_header_value}
  */
  readonly routingHttpResponseAccessControlExposeHeadersHeaderValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#routing_http_response_access_control_max_age_header_value LbListener#routing_http_response_access_control_max_age_header_value}
  */
  readonly routingHttpResponseAccessControlMaxAgeHeaderValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#routing_http_response_content_security_policy_header_value LbListener#routing_http_response_content_security_policy_header_value}
  */
  readonly routingHttpResponseContentSecurityPolicyHeaderValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#routing_http_response_server_enabled LbListener#routing_http_response_server_enabled}
  */
  readonly routingHttpResponseServerEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#routing_http_response_strict_transport_security_header_value LbListener#routing_http_response_strict_transport_security_header_value}
  */
  readonly routingHttpResponseStrictTransportSecurityHeaderValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#routing_http_response_x_content_type_options_header_value LbListener#routing_http_response_x_content_type_options_header_value}
  */
  readonly routingHttpResponseXContentTypeOptionsHeaderValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#routing_http_response_x_frame_options_header_value LbListener#routing_http_response_x_frame_options_header_value}
  */
  readonly routingHttpResponseXFrameOptionsHeaderValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#ssl_policy LbListener#ssl_policy}
  */
  readonly sslPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#tags LbListener#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#tags_all LbListener#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#tcp_idle_timeout_seconds LbListener#tcp_idle_timeout_seconds}
  */
  readonly tcpIdleTimeoutSeconds?: number;
  /**
  * default_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#default_action LbListener#default_action}
  */
  readonly defaultAction: LbListenerDefaultAction[] | cdktf.IResolvable;
  /**
  * mutual_authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#mutual_authentication LbListener#mutual_authentication}
  */
  readonly mutualAuthentication?: LbListenerMutualAuthentication;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#timeouts LbListener#timeouts}
  */
  readonly timeouts?: LbListenerTimeouts;
}
export interface LbListenerDefaultActionAuthenticateCognito {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#authentication_request_extra_params LbListener#authentication_request_extra_params}
  */
  readonly authenticationRequestExtraParams?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#on_unauthenticated_request LbListener#on_unauthenticated_request}
  */
  readonly onUnauthenticatedRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#scope LbListener#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#session_cookie_name LbListener#session_cookie_name}
  */
  readonly sessionCookieName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#session_timeout LbListener#session_timeout}
  */
  readonly sessionTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#user_pool_arn LbListener#user_pool_arn}
  */
  readonly userPoolArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#user_pool_client_id LbListener#user_pool_client_id}
  */
  readonly userPoolClientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#user_pool_domain LbListener#user_pool_domain}
  */
  readonly userPoolDomain: string;
}

export function lbListenerDefaultActionAuthenticateCognitoToTerraform(struct?: LbListenerDefaultActionAuthenticateCognitoOutputReference | LbListenerDefaultActionAuthenticateCognito): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_request_extra_params: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.authenticationRequestExtraParams),
    on_unauthenticated_request: cdktf.stringToTerraform(struct!.onUnauthenticatedRequest),
    scope: cdktf.stringToTerraform(struct!.scope),
    session_cookie_name: cdktf.stringToTerraform(struct!.sessionCookieName),
    session_timeout: cdktf.numberToTerraform(struct!.sessionTimeout),
    user_pool_arn: cdktf.stringToTerraform(struct!.userPoolArn),
    user_pool_client_id: cdktf.stringToTerraform(struct!.userPoolClientId),
    user_pool_domain: cdktf.stringToTerraform(struct!.userPoolDomain),
  }
}


export function lbListenerDefaultActionAuthenticateCognitoToHclTerraform(struct?: LbListenerDefaultActionAuthenticateCognitoOutputReference | LbListenerDefaultActionAuthenticateCognito): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_request_extra_params: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.authenticationRequestExtraParams),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    on_unauthenticated_request: {
      value: cdktf.stringToHclTerraform(struct!.onUnauthenticatedRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_cookie_name: {
      value: cdktf.stringToHclTerraform(struct!.sessionCookieName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_timeout: {
      value: cdktf.numberToHclTerraform(struct!.sessionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_pool_arn: {
      value: cdktf.stringToHclTerraform(struct!.userPoolArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_pool_client_id: {
      value: cdktf.stringToHclTerraform(struct!.userPoolClientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_pool_domain: {
      value: cdktf.stringToHclTerraform(struct!.userPoolDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LbListenerDefaultActionAuthenticateCognitoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LbListenerDefaultActionAuthenticateCognito | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationRequestExtraParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationRequestExtraParams = this._authenticationRequestExtraParams;
    }
    if (this._onUnauthenticatedRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.onUnauthenticatedRequest = this._onUnauthenticatedRequest;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._sessionCookieName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionCookieName = this._sessionCookieName;
    }
    if (this._sessionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionTimeout = this._sessionTimeout;
    }
    if (this._userPoolArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPoolArn = this._userPoolArn;
    }
    if (this._userPoolClientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPoolClientId = this._userPoolClientId;
    }
    if (this._userPoolDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPoolDomain = this._userPoolDomain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LbListenerDefaultActionAuthenticateCognito | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
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
      this.isEmptyObject = Object.keys(value).length === 0;
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
  private _authenticationRequestExtraParams?: { [key: string]: string }; 
  public get authenticationRequestExtraParams() {
    return this.getStringMapAttribute('authentication_request_extra_params');
  }
  public set authenticationRequestExtraParams(value: { [key: string]: string }) {
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
export interface LbListenerDefaultActionAuthenticateOidc {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#authentication_request_extra_params LbListener#authentication_request_extra_params}
  */
  readonly authenticationRequestExtraParams?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#authorization_endpoint LbListener#authorization_endpoint}
  */
  readonly authorizationEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#client_id LbListener#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#client_secret LbListener#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#issuer LbListener#issuer}
  */
  readonly issuer: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#on_unauthenticated_request LbListener#on_unauthenticated_request}
  */
  readonly onUnauthenticatedRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#scope LbListener#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#session_cookie_name LbListener#session_cookie_name}
  */
  readonly sessionCookieName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#session_timeout LbListener#session_timeout}
  */
  readonly sessionTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#token_endpoint LbListener#token_endpoint}
  */
  readonly tokenEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#user_info_endpoint LbListener#user_info_endpoint}
  */
  readonly userInfoEndpoint: string;
}

export function lbListenerDefaultActionAuthenticateOidcToTerraform(struct?: LbListenerDefaultActionAuthenticateOidcOutputReference | LbListenerDefaultActionAuthenticateOidc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_request_extra_params: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.authenticationRequestExtraParams),
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


export function lbListenerDefaultActionAuthenticateOidcToHclTerraform(struct?: LbListenerDefaultActionAuthenticateOidcOutputReference | LbListenerDefaultActionAuthenticateOidc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_request_extra_params: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.authenticationRequestExtraParams),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    authorization_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.authorizationEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issuer: {
      value: cdktf.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    on_unauthenticated_request: {
      value: cdktf.stringToHclTerraform(struct!.onUnauthenticatedRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_cookie_name: {
      value: cdktf.stringToHclTerraform(struct!.sessionCookieName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_timeout: {
      value: cdktf.numberToHclTerraform(struct!.sessionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    token_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.tokenEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_info_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.userInfoEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LbListenerDefaultActionAuthenticateOidcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LbListenerDefaultActionAuthenticateOidc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationRequestExtraParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationRequestExtraParams = this._authenticationRequestExtraParams;
    }
    if (this._authorizationEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationEndpoint = this._authorizationEndpoint;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._onUnauthenticatedRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.onUnauthenticatedRequest = this._onUnauthenticatedRequest;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._sessionCookieName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionCookieName = this._sessionCookieName;
    }
    if (this._sessionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionTimeout = this._sessionTimeout;
    }
    if (this._tokenEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenEndpoint = this._tokenEndpoint;
    }
    if (this._userInfoEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.userInfoEndpoint = this._userInfoEndpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LbListenerDefaultActionAuthenticateOidc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
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
      this.isEmptyObject = Object.keys(value).length === 0;
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
  private _authenticationRequestExtraParams?: { [key: string]: string }; 
  public get authenticationRequestExtraParams() {
    return this.getStringMapAttribute('authentication_request_extra_params');
  }
  public set authenticationRequestExtraParams(value: { [key: string]: string }) {
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
export interface LbListenerDefaultActionFixedResponse {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#content_type LbListener#content_type}
  */
  readonly contentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#message_body LbListener#message_body}
  */
  readonly messageBody?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#status_code LbListener#status_code}
  */
  readonly statusCode?: string;
}

export function lbListenerDefaultActionFixedResponseToTerraform(struct?: LbListenerDefaultActionFixedResponseOutputReference | LbListenerDefaultActionFixedResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_type: cdktf.stringToTerraform(struct!.contentType),
    message_body: cdktf.stringToTerraform(struct!.messageBody),
    status_code: cdktf.stringToTerraform(struct!.statusCode),
  }
}


export function lbListenerDefaultActionFixedResponseToHclTerraform(struct?: LbListenerDefaultActionFixedResponseOutputReference | LbListenerDefaultActionFixedResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_type: {
      value: cdktf.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_body: {
      value: cdktf.stringToHclTerraform(struct!.messageBody),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_code: {
      value: cdktf.stringToHclTerraform(struct!.statusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LbListenerDefaultActionFixedResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LbListenerDefaultActionFixedResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._messageBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageBody = this._messageBody;
    }
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LbListenerDefaultActionFixedResponse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contentType = undefined;
      this._messageBody = undefined;
      this._statusCode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface LbListenerDefaultActionForwardStickiness {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#duration LbListener#duration}
  */
  readonly duration: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#enabled LbListener#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function lbListenerDefaultActionForwardStickinessToTerraform(struct?: LbListenerDefaultActionForwardStickinessOutputReference | LbListenerDefaultActionForwardStickiness): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function lbListenerDefaultActionForwardStickinessToHclTerraform(struct?: LbListenerDefaultActionForwardStickinessOutputReference | LbListenerDefaultActionForwardStickiness): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LbListenerDefaultActionForwardStickinessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LbListenerDefaultActionForwardStickiness | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LbListenerDefaultActionForwardStickiness | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
    return this.getBooleanAttribute('enabled');
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
export interface LbListenerDefaultActionForwardTargetGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#arn LbListener#arn}
  */
  readonly arn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#weight LbListener#weight}
  */
  readonly weight?: number;
}

export function lbListenerDefaultActionForwardTargetGroupToTerraform(struct?: LbListenerDefaultActionForwardTargetGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function lbListenerDefaultActionForwardTargetGroupToHclTerraform(struct?: LbListenerDefaultActionForwardTargetGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arn: {
      value: cdktf.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LbListenerDefaultActionForwardTargetGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LbListenerDefaultActionForwardTargetGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LbListenerDefaultActionForwardTargetGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arn = value.arn;
      this._weight = value.weight;
    }
  }

  // arn - computed: false, optional: false, required: true
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class LbListenerDefaultActionForwardTargetGroupList extends cdktf.ComplexList {
  public internalValue? : LbListenerDefaultActionForwardTargetGroup[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LbListenerDefaultActionForwardTargetGroupOutputReference {
    return new LbListenerDefaultActionForwardTargetGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LbListenerDefaultActionForward {
  /**
  * stickiness block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#stickiness LbListener#stickiness}
  */
  readonly stickiness?: LbListenerDefaultActionForwardStickiness;
  /**
  * target_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#target_group LbListener#target_group}
  */
  readonly targetGroup: LbListenerDefaultActionForwardTargetGroup[] | cdktf.IResolvable;
}

export function lbListenerDefaultActionForwardToTerraform(struct?: LbListenerDefaultActionForwardOutputReference | LbListenerDefaultActionForward): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stickiness: lbListenerDefaultActionForwardStickinessToTerraform(struct!.stickiness),
    target_group: cdktf.listMapper(lbListenerDefaultActionForwardTargetGroupToTerraform, true)(struct!.targetGroup),
  }
}


export function lbListenerDefaultActionForwardToHclTerraform(struct?: LbListenerDefaultActionForwardOutputReference | LbListenerDefaultActionForward): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    stickiness: {
      value: lbListenerDefaultActionForwardStickinessToHclTerraform(struct!.stickiness),
      isBlock: true,
      type: "list",
      storageClassType: "LbListenerDefaultActionForwardStickinessList",
    },
    target_group: {
      value: cdktf.listMapperHcl(lbListenerDefaultActionForwardTargetGroupToHclTerraform, true)(struct!.targetGroup),
      isBlock: true,
      type: "set",
      storageClassType: "LbListenerDefaultActionForwardTargetGroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LbListenerDefaultActionForwardOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LbListenerDefaultActionForward | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stickiness?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stickiness = this._stickiness?.internalValue;
    }
    if (this._targetGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetGroup = this._targetGroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LbListenerDefaultActionForward | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._stickiness.internalValue = undefined;
      this._targetGroup.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._stickiness.internalValue = value.stickiness;
      this._targetGroup.internalValue = value.targetGroup;
    }
  }

  // stickiness - computed: false, optional: true, required: false
  private _stickiness = new LbListenerDefaultActionForwardStickinessOutputReference(this, "stickiness");
  public get stickiness() {
    return this._stickiness;
  }
  public putStickiness(value: LbListenerDefaultActionForwardStickiness) {
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
  private _targetGroup = new LbListenerDefaultActionForwardTargetGroupList(this, "target_group", true);
  public get targetGroup() {
    return this._targetGroup;
  }
  public putTargetGroup(value: LbListenerDefaultActionForwardTargetGroup[] | cdktf.IResolvable) {
    this._targetGroup.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetGroupInput() {
    return this._targetGroup.internalValue;
  }
}
export interface LbListenerDefaultActionRedirect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#host LbListener#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#path LbListener#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#port LbListener#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#protocol LbListener#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#query LbListener#query}
  */
  readonly query?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#status_code LbListener#status_code}
  */
  readonly statusCode: string;
}

export function lbListenerDefaultActionRedirectToTerraform(struct?: LbListenerDefaultActionRedirectOutputReference | LbListenerDefaultActionRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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


export function lbListenerDefaultActionRedirectToHclTerraform(struct?: LbListenerDefaultActionRedirectOutputReference | LbListenerDefaultActionRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_code: {
      value: cdktf.stringToHclTerraform(struct!.statusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LbListenerDefaultActionRedirectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LbListenerDefaultActionRedirect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LbListenerDefaultActionRedirect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
      this._path = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._query = undefined;
      this._statusCode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface LbListenerDefaultAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#order LbListener#order}
  */
  readonly order?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#target_group_arn LbListener#target_group_arn}
  */
  readonly targetGroupArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#type LbListener#type}
  */
  readonly type: string;
  /**
  * authenticate_cognito block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#authenticate_cognito LbListener#authenticate_cognito}
  */
  readonly authenticateCognito?: LbListenerDefaultActionAuthenticateCognito;
  /**
  * authenticate_oidc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#authenticate_oidc LbListener#authenticate_oidc}
  */
  readonly authenticateOidc?: LbListenerDefaultActionAuthenticateOidc;
  /**
  * fixed_response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#fixed_response LbListener#fixed_response}
  */
  readonly fixedResponse?: LbListenerDefaultActionFixedResponse;
  /**
  * forward block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#forward LbListener#forward}
  */
  readonly forward?: LbListenerDefaultActionForward;
  /**
  * redirect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#redirect LbListener#redirect}
  */
  readonly redirect?: LbListenerDefaultActionRedirect;
}

export function lbListenerDefaultActionToTerraform(struct?: LbListenerDefaultAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    order: cdktf.numberToTerraform(struct!.order),
    target_group_arn: cdktf.stringToTerraform(struct!.targetGroupArn),
    type: cdktf.stringToTerraform(struct!.type),
    authenticate_cognito: lbListenerDefaultActionAuthenticateCognitoToTerraform(struct!.authenticateCognito),
    authenticate_oidc: lbListenerDefaultActionAuthenticateOidcToTerraform(struct!.authenticateOidc),
    fixed_response: lbListenerDefaultActionFixedResponseToTerraform(struct!.fixedResponse),
    forward: lbListenerDefaultActionForwardToTerraform(struct!.forward),
    redirect: lbListenerDefaultActionRedirectToTerraform(struct!.redirect),
  }
}


export function lbListenerDefaultActionToHclTerraform(struct?: LbListenerDefaultAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    order: {
      value: cdktf.numberToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_group_arn: {
      value: cdktf.stringToHclTerraform(struct!.targetGroupArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authenticate_cognito: {
      value: lbListenerDefaultActionAuthenticateCognitoToHclTerraform(struct!.authenticateCognito),
      isBlock: true,
      type: "list",
      storageClassType: "LbListenerDefaultActionAuthenticateCognitoList",
    },
    authenticate_oidc: {
      value: lbListenerDefaultActionAuthenticateOidcToHclTerraform(struct!.authenticateOidc),
      isBlock: true,
      type: "list",
      storageClassType: "LbListenerDefaultActionAuthenticateOidcList",
    },
    fixed_response: {
      value: lbListenerDefaultActionFixedResponseToHclTerraform(struct!.fixedResponse),
      isBlock: true,
      type: "list",
      storageClassType: "LbListenerDefaultActionFixedResponseList",
    },
    forward: {
      value: lbListenerDefaultActionForwardToHclTerraform(struct!.forward),
      isBlock: true,
      type: "list",
      storageClassType: "LbListenerDefaultActionForwardList",
    },
    redirect: {
      value: lbListenerDefaultActionRedirectToHclTerraform(struct!.redirect),
      isBlock: true,
      type: "list",
      storageClassType: "LbListenerDefaultActionRedirectList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LbListenerDefaultActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LbListenerDefaultAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._targetGroupArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetGroupArn = this._targetGroupArn;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._authenticateCognito?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticateCognito = this._authenticateCognito?.internalValue;
    }
    if (this._authenticateOidc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticateOidc = this._authenticateOidc?.internalValue;
    }
    if (this._fixedResponse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedResponse = this._fixedResponse?.internalValue;
    }
    if (this._forward?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forward = this._forward?.internalValue;
    }
    if (this._redirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirect = this._redirect?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LbListenerDefaultAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._order = undefined;
      this._targetGroupArn = undefined;
      this._type = undefined;
      this._authenticateCognito.internalValue = undefined;
      this._authenticateOidc.internalValue = undefined;
      this._fixedResponse.internalValue = undefined;
      this._forward.internalValue = undefined;
      this._redirect.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._order = value.order;
      this._targetGroupArn = value.targetGroupArn;
      this._type = value.type;
      this._authenticateCognito.internalValue = value.authenticateCognito;
      this._authenticateOidc.internalValue = value.authenticateOidc;
      this._fixedResponse.internalValue = value.fixedResponse;
      this._forward.internalValue = value.forward;
      this._redirect.internalValue = value.redirect;
    }
  }

  // order - computed: true, optional: true, required: false
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // target_group_arn - computed: false, optional: true, required: false
  private _targetGroupArn?: string; 
  public get targetGroupArn() {
    return this.getStringAttribute('target_group_arn');
  }
  public set targetGroupArn(value: string) {
    this._targetGroupArn = value;
  }
  public resetTargetGroupArn() {
    this._targetGroupArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetGroupArnInput() {
    return this._targetGroupArn;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // authenticate_cognito - computed: false, optional: true, required: false
  private _authenticateCognito = new LbListenerDefaultActionAuthenticateCognitoOutputReference(this, "authenticate_cognito");
  public get authenticateCognito() {
    return this._authenticateCognito;
  }
  public putAuthenticateCognito(value: LbListenerDefaultActionAuthenticateCognito) {
    this._authenticateCognito.internalValue = value;
  }
  public resetAuthenticateCognito() {
    this._authenticateCognito.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticateCognitoInput() {
    return this._authenticateCognito.internalValue;
  }

  // authenticate_oidc - computed: false, optional: true, required: false
  private _authenticateOidc = new LbListenerDefaultActionAuthenticateOidcOutputReference(this, "authenticate_oidc");
  public get authenticateOidc() {
    return this._authenticateOidc;
  }
  public putAuthenticateOidc(value: LbListenerDefaultActionAuthenticateOidc) {
    this._authenticateOidc.internalValue = value;
  }
  public resetAuthenticateOidc() {
    this._authenticateOidc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticateOidcInput() {
    return this._authenticateOidc.internalValue;
  }

  // fixed_response - computed: false, optional: true, required: false
  private _fixedResponse = new LbListenerDefaultActionFixedResponseOutputReference(this, "fixed_response");
  public get fixedResponse() {
    return this._fixedResponse;
  }
  public putFixedResponse(value: LbListenerDefaultActionFixedResponse) {
    this._fixedResponse.internalValue = value;
  }
  public resetFixedResponse() {
    this._fixedResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedResponseInput() {
    return this._fixedResponse.internalValue;
  }

  // forward - computed: false, optional: true, required: false
  private _forward = new LbListenerDefaultActionForwardOutputReference(this, "forward");
  public get forward() {
    return this._forward;
  }
  public putForward(value: LbListenerDefaultActionForward) {
    this._forward.internalValue = value;
  }
  public resetForward() {
    this._forward.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardInput() {
    return this._forward.internalValue;
  }

  // redirect - computed: false, optional: true, required: false
  private _redirect = new LbListenerDefaultActionRedirectOutputReference(this, "redirect");
  public get redirect() {
    return this._redirect;
  }
  public putRedirect(value: LbListenerDefaultActionRedirect) {
    this._redirect.internalValue = value;
  }
  public resetRedirect() {
    this._redirect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectInput() {
    return this._redirect.internalValue;
  }
}

export class LbListenerDefaultActionList extends cdktf.ComplexList {
  public internalValue? : LbListenerDefaultAction[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LbListenerDefaultActionOutputReference {
    return new LbListenerDefaultActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LbListenerMutualAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#advertise_trust_store_ca_names LbListener#advertise_trust_store_ca_names}
  */
  readonly advertiseTrustStoreCaNames?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#ignore_client_certificate_expiry LbListener#ignore_client_certificate_expiry}
  */
  readonly ignoreClientCertificateExpiry?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#mode LbListener#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#trust_store_arn LbListener#trust_store_arn}
  */
  readonly trustStoreArn?: string;
}

export function lbListenerMutualAuthenticationToTerraform(struct?: LbListenerMutualAuthenticationOutputReference | LbListenerMutualAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise_trust_store_ca_names: cdktf.stringToTerraform(struct!.advertiseTrustStoreCaNames),
    ignore_client_certificate_expiry: cdktf.booleanToTerraform(struct!.ignoreClientCertificateExpiry),
    mode: cdktf.stringToTerraform(struct!.mode),
    trust_store_arn: cdktf.stringToTerraform(struct!.trustStoreArn),
  }
}


export function lbListenerMutualAuthenticationToHclTerraform(struct?: LbListenerMutualAuthenticationOutputReference | LbListenerMutualAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise_trust_store_ca_names: {
      value: cdktf.stringToHclTerraform(struct!.advertiseTrustStoreCaNames),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_client_certificate_expiry: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreClientCertificateExpiry),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trust_store_arn: {
      value: cdktf.stringToHclTerraform(struct!.trustStoreArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LbListenerMutualAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LbListenerMutualAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertiseTrustStoreCaNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertiseTrustStoreCaNames = this._advertiseTrustStoreCaNames;
    }
    if (this._ignoreClientCertificateExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreClientCertificateExpiry = this._ignoreClientCertificateExpiry;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._trustStoreArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustStoreArn = this._trustStoreArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LbListenerMutualAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._advertiseTrustStoreCaNames = undefined;
      this._ignoreClientCertificateExpiry = undefined;
      this._mode = undefined;
      this._trustStoreArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._advertiseTrustStoreCaNames = value.advertiseTrustStoreCaNames;
      this._ignoreClientCertificateExpiry = value.ignoreClientCertificateExpiry;
      this._mode = value.mode;
      this._trustStoreArn = value.trustStoreArn;
    }
  }

  // advertise_trust_store_ca_names - computed: true, optional: true, required: false
  private _advertiseTrustStoreCaNames?: string; 
  public get advertiseTrustStoreCaNames() {
    return this.getStringAttribute('advertise_trust_store_ca_names');
  }
  public set advertiseTrustStoreCaNames(value: string) {
    this._advertiseTrustStoreCaNames = value;
  }
  public resetAdvertiseTrustStoreCaNames() {
    this._advertiseTrustStoreCaNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseTrustStoreCaNamesInput() {
    return this._advertiseTrustStoreCaNames;
  }

  // ignore_client_certificate_expiry - computed: false, optional: true, required: false
  private _ignoreClientCertificateExpiry?: boolean | cdktf.IResolvable; 
  public get ignoreClientCertificateExpiry() {
    return this.getBooleanAttribute('ignore_client_certificate_expiry');
  }
  public set ignoreClientCertificateExpiry(value: boolean | cdktf.IResolvable) {
    this._ignoreClientCertificateExpiry = value;
  }
  public resetIgnoreClientCertificateExpiry() {
    this._ignoreClientCertificateExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreClientCertificateExpiryInput() {
    return this._ignoreClientCertificateExpiry;
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // trust_store_arn - computed: false, optional: true, required: false
  private _trustStoreArn?: string; 
  public get trustStoreArn() {
    return this.getStringAttribute('trust_store_arn');
  }
  public set trustStoreArn(value: string) {
    this._trustStoreArn = value;
  }
  public resetTrustStoreArn() {
    this._trustStoreArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustStoreArnInput() {
    return this._trustStoreArn;
  }
}
export interface LbListenerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#create LbListener#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#update LbListener#update}
  */
  readonly update?: string;
}

export function lbListenerTimeoutsToTerraform(struct?: LbListenerTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function lbListenerTimeoutsToHclTerraform(struct?: LbListenerTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LbListenerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LbListenerTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LbListenerTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener aws_lb_listener}
*/
export class LbListener extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_lb_listener";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LbListener resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LbListener to import
  * @param importFromId The id of the existing LbListener that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LbListener to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_lb_listener", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lb_listener aws_lb_listener} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LbListenerConfig
  */
  public constructor(scope: Construct, id: string, config: LbListenerConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lb_listener',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.91.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alpnPolicy = config.alpnPolicy;
    this._certificateArn = config.certificateArn;
    this._id = config.id;
    this._loadBalancerArn = config.loadBalancerArn;
    this._port = config.port;
    this._protocol = config.protocol;
    this._routingHttpRequestXAmznMtlsClientcertHeaderName = config.routingHttpRequestXAmznMtlsClientcertHeaderName;
    this._routingHttpRequestXAmznMtlsClientcertIssuerHeaderName = config.routingHttpRequestXAmznMtlsClientcertIssuerHeaderName;
    this._routingHttpRequestXAmznMtlsClientcertLeafHeaderName = config.routingHttpRequestXAmznMtlsClientcertLeafHeaderName;
    this._routingHttpRequestXAmznMtlsClientcertSerialNumberHeaderName = config.routingHttpRequestXAmznMtlsClientcertSerialNumberHeaderName;
    this._routingHttpRequestXAmznMtlsClientcertSubjectHeaderName = config.routingHttpRequestXAmznMtlsClientcertSubjectHeaderName;
    this._routingHttpRequestXAmznMtlsClientcertValidityHeaderName = config.routingHttpRequestXAmznMtlsClientcertValidityHeaderName;
    this._routingHttpRequestXAmznTlsCipherSuiteHeaderName = config.routingHttpRequestXAmznTlsCipherSuiteHeaderName;
    this._routingHttpRequestXAmznTlsVersionHeaderName = config.routingHttpRequestXAmznTlsVersionHeaderName;
    this._routingHttpResponseAccessControlAllowCredentialsHeaderValue = config.routingHttpResponseAccessControlAllowCredentialsHeaderValue;
    this._routingHttpResponseAccessControlAllowHeadersHeaderValue = config.routingHttpResponseAccessControlAllowHeadersHeaderValue;
    this._routingHttpResponseAccessControlAllowMethodsHeaderValue = config.routingHttpResponseAccessControlAllowMethodsHeaderValue;
    this._routingHttpResponseAccessControlAllowOriginHeaderValue = config.routingHttpResponseAccessControlAllowOriginHeaderValue;
    this._routingHttpResponseAccessControlExposeHeadersHeaderValue = config.routingHttpResponseAccessControlExposeHeadersHeaderValue;
    this._routingHttpResponseAccessControlMaxAgeHeaderValue = config.routingHttpResponseAccessControlMaxAgeHeaderValue;
    this._routingHttpResponseContentSecurityPolicyHeaderValue = config.routingHttpResponseContentSecurityPolicyHeaderValue;
    this._routingHttpResponseServerEnabled = config.routingHttpResponseServerEnabled;
    this._routingHttpResponseStrictTransportSecurityHeaderValue = config.routingHttpResponseStrictTransportSecurityHeaderValue;
    this._routingHttpResponseXContentTypeOptionsHeaderValue = config.routingHttpResponseXContentTypeOptionsHeaderValue;
    this._routingHttpResponseXFrameOptionsHeaderValue = config.routingHttpResponseXFrameOptionsHeaderValue;
    this._sslPolicy = config.sslPolicy;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._tcpIdleTimeoutSeconds = config.tcpIdleTimeoutSeconds;
    this._defaultAction.internalValue = config.defaultAction;
    this._mutualAuthentication.internalValue = config.mutualAuthentication;
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

  // routing_http_request_x_amzn_mtls_clientcert_header_name - computed: true, optional: true, required: false
  private _routingHttpRequestXAmznMtlsClientcertHeaderName?: string; 
  public get routingHttpRequestXAmznMtlsClientcertHeaderName() {
    return this.getStringAttribute('routing_http_request_x_amzn_mtls_clientcert_header_name');
  }
  public set routingHttpRequestXAmznMtlsClientcertHeaderName(value: string) {
    this._routingHttpRequestXAmznMtlsClientcertHeaderName = value;
  }
  public resetRoutingHttpRequestXAmznMtlsClientcertHeaderName() {
    this._routingHttpRequestXAmznMtlsClientcertHeaderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingHttpRequestXAmznMtlsClientcertHeaderNameInput() {
    return this._routingHttpRequestXAmznMtlsClientcertHeaderName;
  }

  // routing_http_request_x_amzn_mtls_clientcert_issuer_header_name - computed: true, optional: true, required: false
  private _routingHttpRequestXAmznMtlsClientcertIssuerHeaderName?: string; 
  public get routingHttpRequestXAmznMtlsClientcertIssuerHeaderName() {
    return this.getStringAttribute('routing_http_request_x_amzn_mtls_clientcert_issuer_header_name');
  }
  public set routingHttpRequestXAmznMtlsClientcertIssuerHeaderName(value: string) {
    this._routingHttpRequestXAmznMtlsClientcertIssuerHeaderName = value;
  }
  public resetRoutingHttpRequestXAmznMtlsClientcertIssuerHeaderName() {
    this._routingHttpRequestXAmznMtlsClientcertIssuerHeaderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingHttpRequestXAmznMtlsClientcertIssuerHeaderNameInput() {
    return this._routingHttpRequestXAmznMtlsClientcertIssuerHeaderName;
  }

  // routing_http_request_x_amzn_mtls_clientcert_leaf_header_name - computed: true, optional: true, required: false
  private _routingHttpRequestXAmznMtlsClientcertLeafHeaderName?: string; 
  public get routingHttpRequestXAmznMtlsClientcertLeafHeaderName() {
    return this.getStringAttribute('routing_http_request_x_amzn_mtls_clientcert_leaf_header_name');
  }
  public set routingHttpRequestXAmznMtlsClientcertLeafHeaderName(value: string) {
    this._routingHttpRequestXAmznMtlsClientcertLeafHeaderName = value;
  }
  public resetRoutingHttpRequestXAmznMtlsClientcertLeafHeaderName() {
    this._routingHttpRequestXAmznMtlsClientcertLeafHeaderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingHttpRequestXAmznMtlsClientcertLeafHeaderNameInput() {
    return this._routingHttpRequestXAmznMtlsClientcertLeafHeaderName;
  }

  // routing_http_request_x_amzn_mtls_clientcert_serial_number_header_name - computed: true, optional: true, required: false
  private _routingHttpRequestXAmznMtlsClientcertSerialNumberHeaderName?: string; 
  public get routingHttpRequestXAmznMtlsClientcertSerialNumberHeaderName() {
    return this.getStringAttribute('routing_http_request_x_amzn_mtls_clientcert_serial_number_header_name');
  }
  public set routingHttpRequestXAmznMtlsClientcertSerialNumberHeaderName(value: string) {
    this._routingHttpRequestXAmznMtlsClientcertSerialNumberHeaderName = value;
  }
  public resetRoutingHttpRequestXAmznMtlsClientcertSerialNumberHeaderName() {
    this._routingHttpRequestXAmznMtlsClientcertSerialNumberHeaderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingHttpRequestXAmznMtlsClientcertSerialNumberHeaderNameInput() {
    return this._routingHttpRequestXAmznMtlsClientcertSerialNumberHeaderName;
  }

  // routing_http_request_x_amzn_mtls_clientcert_subject_header_name - computed: true, optional: true, required: false
  private _routingHttpRequestXAmznMtlsClientcertSubjectHeaderName?: string; 
  public get routingHttpRequestXAmznMtlsClientcertSubjectHeaderName() {
    return this.getStringAttribute('routing_http_request_x_amzn_mtls_clientcert_subject_header_name');
  }
  public set routingHttpRequestXAmznMtlsClientcertSubjectHeaderName(value: string) {
    this._routingHttpRequestXAmznMtlsClientcertSubjectHeaderName = value;
  }
  public resetRoutingHttpRequestXAmznMtlsClientcertSubjectHeaderName() {
    this._routingHttpRequestXAmznMtlsClientcertSubjectHeaderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingHttpRequestXAmznMtlsClientcertSubjectHeaderNameInput() {
    return this._routingHttpRequestXAmznMtlsClientcertSubjectHeaderName;
  }

  // routing_http_request_x_amzn_mtls_clientcert_validity_header_name - computed: true, optional: true, required: false
  private _routingHttpRequestXAmznMtlsClientcertValidityHeaderName?: string; 
  public get routingHttpRequestXAmznMtlsClientcertValidityHeaderName() {
    return this.getStringAttribute('routing_http_request_x_amzn_mtls_clientcert_validity_header_name');
  }
  public set routingHttpRequestXAmznMtlsClientcertValidityHeaderName(value: string) {
    this._routingHttpRequestXAmznMtlsClientcertValidityHeaderName = value;
  }
  public resetRoutingHttpRequestXAmznMtlsClientcertValidityHeaderName() {
    this._routingHttpRequestXAmznMtlsClientcertValidityHeaderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingHttpRequestXAmznMtlsClientcertValidityHeaderNameInput() {
    return this._routingHttpRequestXAmznMtlsClientcertValidityHeaderName;
  }

  // routing_http_request_x_amzn_tls_cipher_suite_header_name - computed: true, optional: true, required: false
  private _routingHttpRequestXAmznTlsCipherSuiteHeaderName?: string; 
  public get routingHttpRequestXAmznTlsCipherSuiteHeaderName() {
    return this.getStringAttribute('routing_http_request_x_amzn_tls_cipher_suite_header_name');
  }
  public set routingHttpRequestXAmznTlsCipherSuiteHeaderName(value: string) {
    this._routingHttpRequestXAmznTlsCipherSuiteHeaderName = value;
  }
  public resetRoutingHttpRequestXAmznTlsCipherSuiteHeaderName() {
    this._routingHttpRequestXAmznTlsCipherSuiteHeaderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingHttpRequestXAmznTlsCipherSuiteHeaderNameInput() {
    return this._routingHttpRequestXAmznTlsCipherSuiteHeaderName;
  }

  // routing_http_request_x_amzn_tls_version_header_name - computed: true, optional: true, required: false
  private _routingHttpRequestXAmznTlsVersionHeaderName?: string; 
  public get routingHttpRequestXAmznTlsVersionHeaderName() {
    return this.getStringAttribute('routing_http_request_x_amzn_tls_version_header_name');
  }
  public set routingHttpRequestXAmznTlsVersionHeaderName(value: string) {
    this._routingHttpRequestXAmznTlsVersionHeaderName = value;
  }
  public resetRoutingHttpRequestXAmznTlsVersionHeaderName() {
    this._routingHttpRequestXAmznTlsVersionHeaderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingHttpRequestXAmznTlsVersionHeaderNameInput() {
    return this._routingHttpRequestXAmznTlsVersionHeaderName;
  }

  // routing_http_response_access_control_allow_credentials_header_value - computed: true, optional: true, required: false
  private _routingHttpResponseAccessControlAllowCredentialsHeaderValue?: string; 
  public get routingHttpResponseAccessControlAllowCredentialsHeaderValue() {
    return this.getStringAttribute('routing_http_response_access_control_allow_credentials_header_value');
  }
  public set routingHttpResponseAccessControlAllowCredentialsHeaderValue(value: string) {
    this._routingHttpResponseAccessControlAllowCredentialsHeaderValue = value;
  }
  public resetRoutingHttpResponseAccessControlAllowCredentialsHeaderValue() {
    this._routingHttpResponseAccessControlAllowCredentialsHeaderValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingHttpResponseAccessControlAllowCredentialsHeaderValueInput() {
    return this._routingHttpResponseAccessControlAllowCredentialsHeaderValue;
  }

  // routing_http_response_access_control_allow_headers_header_value - computed: true, optional: true, required: false
  private _routingHttpResponseAccessControlAllowHeadersHeaderValue?: string; 
  public get routingHttpResponseAccessControlAllowHeadersHeaderValue() {
    return this.getStringAttribute('routing_http_response_access_control_allow_headers_header_value');
  }
  public set routingHttpResponseAccessControlAllowHeadersHeaderValue(value: string) {
    this._routingHttpResponseAccessControlAllowHeadersHeaderValue = value;
  }
  public resetRoutingHttpResponseAccessControlAllowHeadersHeaderValue() {
    this._routingHttpResponseAccessControlAllowHeadersHeaderValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingHttpResponseAccessControlAllowHeadersHeaderValueInput() {
    return this._routingHttpResponseAccessControlAllowHeadersHeaderValue;
  }

  // routing_http_response_access_control_allow_methods_header_value - computed: true, optional: true, required: false
  private _routingHttpResponseAccessControlAllowMethodsHeaderValue?: string; 
  public get routingHttpResponseAccessControlAllowMethodsHeaderValue() {
    return this.getStringAttribute('routing_http_response_access_control_allow_methods_header_value');
  }
  public set routingHttpResponseAccessControlAllowMethodsHeaderValue(value: string) {
    this._routingHttpResponseAccessControlAllowMethodsHeaderValue = value;
  }
  public resetRoutingHttpResponseAccessControlAllowMethodsHeaderValue() {
    this._routingHttpResponseAccessControlAllowMethodsHeaderValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingHttpResponseAccessControlAllowMethodsHeaderValueInput() {
    return this._routingHttpResponseAccessControlAllowMethodsHeaderValue;
  }

  // routing_http_response_access_control_allow_origin_header_value - computed: true, optional: true, required: false
  private _routingHttpResponseAccessControlAllowOriginHeaderValue?: string; 
  public get routingHttpResponseAccessControlAllowOriginHeaderValue() {
    return this.getStringAttribute('routing_http_response_access_control_allow_origin_header_value');
  }
  public set routingHttpResponseAccessControlAllowOriginHeaderValue(value: string) {
    this._routingHttpResponseAccessControlAllowOriginHeaderValue = value;
  }
  public resetRoutingHttpResponseAccessControlAllowOriginHeaderValue() {
    this._routingHttpResponseAccessControlAllowOriginHeaderValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingHttpResponseAccessControlAllowOriginHeaderValueInput() {
    return this._routingHttpResponseAccessControlAllowOriginHeaderValue;
  }

  // routing_http_response_access_control_expose_headers_header_value - computed: true, optional: true, required: false
  private _routingHttpResponseAccessControlExposeHeadersHeaderValue?: string; 
  public get routingHttpResponseAccessControlExposeHeadersHeaderValue() {
    return this.getStringAttribute('routing_http_response_access_control_expose_headers_header_value');
  }
  public set routingHttpResponseAccessControlExposeHeadersHeaderValue(value: string) {
    this._routingHttpResponseAccessControlExposeHeadersHeaderValue = value;
  }
  public resetRoutingHttpResponseAccessControlExposeHeadersHeaderValue() {
    this._routingHttpResponseAccessControlExposeHeadersHeaderValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingHttpResponseAccessControlExposeHeadersHeaderValueInput() {
    return this._routingHttpResponseAccessControlExposeHeadersHeaderValue;
  }

  // routing_http_response_access_control_max_age_header_value - computed: true, optional: true, required: false
  private _routingHttpResponseAccessControlMaxAgeHeaderValue?: string; 
  public get routingHttpResponseAccessControlMaxAgeHeaderValue() {
    return this.getStringAttribute('routing_http_response_access_control_max_age_header_value');
  }
  public set routingHttpResponseAccessControlMaxAgeHeaderValue(value: string) {
    this._routingHttpResponseAccessControlMaxAgeHeaderValue = value;
  }
  public resetRoutingHttpResponseAccessControlMaxAgeHeaderValue() {
    this._routingHttpResponseAccessControlMaxAgeHeaderValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingHttpResponseAccessControlMaxAgeHeaderValueInput() {
    return this._routingHttpResponseAccessControlMaxAgeHeaderValue;
  }

  // routing_http_response_content_security_policy_header_value - computed: true, optional: true, required: false
  private _routingHttpResponseContentSecurityPolicyHeaderValue?: string; 
  public get routingHttpResponseContentSecurityPolicyHeaderValue() {
    return this.getStringAttribute('routing_http_response_content_security_policy_header_value');
  }
  public set routingHttpResponseContentSecurityPolicyHeaderValue(value: string) {
    this._routingHttpResponseContentSecurityPolicyHeaderValue = value;
  }
  public resetRoutingHttpResponseContentSecurityPolicyHeaderValue() {
    this._routingHttpResponseContentSecurityPolicyHeaderValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingHttpResponseContentSecurityPolicyHeaderValueInput() {
    return this._routingHttpResponseContentSecurityPolicyHeaderValue;
  }

  // routing_http_response_server_enabled - computed: true, optional: true, required: false
  private _routingHttpResponseServerEnabled?: boolean | cdktf.IResolvable; 
  public get routingHttpResponseServerEnabled() {
    return this.getBooleanAttribute('routing_http_response_server_enabled');
  }
  public set routingHttpResponseServerEnabled(value: boolean | cdktf.IResolvable) {
    this._routingHttpResponseServerEnabled = value;
  }
  public resetRoutingHttpResponseServerEnabled() {
    this._routingHttpResponseServerEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingHttpResponseServerEnabledInput() {
    return this._routingHttpResponseServerEnabled;
  }

  // routing_http_response_strict_transport_security_header_value - computed: true, optional: true, required: false
  private _routingHttpResponseStrictTransportSecurityHeaderValue?: string; 
  public get routingHttpResponseStrictTransportSecurityHeaderValue() {
    return this.getStringAttribute('routing_http_response_strict_transport_security_header_value');
  }
  public set routingHttpResponseStrictTransportSecurityHeaderValue(value: string) {
    this._routingHttpResponseStrictTransportSecurityHeaderValue = value;
  }
  public resetRoutingHttpResponseStrictTransportSecurityHeaderValue() {
    this._routingHttpResponseStrictTransportSecurityHeaderValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingHttpResponseStrictTransportSecurityHeaderValueInput() {
    return this._routingHttpResponseStrictTransportSecurityHeaderValue;
  }

  // routing_http_response_x_content_type_options_header_value - computed: true, optional: true, required: false
  private _routingHttpResponseXContentTypeOptionsHeaderValue?: string; 
  public get routingHttpResponseXContentTypeOptionsHeaderValue() {
    return this.getStringAttribute('routing_http_response_x_content_type_options_header_value');
  }
  public set routingHttpResponseXContentTypeOptionsHeaderValue(value: string) {
    this._routingHttpResponseXContentTypeOptionsHeaderValue = value;
  }
  public resetRoutingHttpResponseXContentTypeOptionsHeaderValue() {
    this._routingHttpResponseXContentTypeOptionsHeaderValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingHttpResponseXContentTypeOptionsHeaderValueInput() {
    return this._routingHttpResponseXContentTypeOptionsHeaderValue;
  }

  // routing_http_response_x_frame_options_header_value - computed: true, optional: true, required: false
  private _routingHttpResponseXFrameOptionsHeaderValue?: string; 
  public get routingHttpResponseXFrameOptionsHeaderValue() {
    return this.getStringAttribute('routing_http_response_x_frame_options_header_value');
  }
  public set routingHttpResponseXFrameOptionsHeaderValue(value: string) {
    this._routingHttpResponseXFrameOptionsHeaderValue = value;
  }
  public resetRoutingHttpResponseXFrameOptionsHeaderValue() {
    this._routingHttpResponseXFrameOptionsHeaderValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingHttpResponseXFrameOptionsHeaderValueInput() {
    return this._routingHttpResponseXFrameOptionsHeaderValue;
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
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
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
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // tcp_idle_timeout_seconds - computed: true, optional: true, required: false
  private _tcpIdleTimeoutSeconds?: number; 
  public get tcpIdleTimeoutSeconds() {
    return this.getNumberAttribute('tcp_idle_timeout_seconds');
  }
  public set tcpIdleTimeoutSeconds(value: number) {
    this._tcpIdleTimeoutSeconds = value;
  }
  public resetTcpIdleTimeoutSeconds() {
    this._tcpIdleTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpIdleTimeoutSecondsInput() {
    return this._tcpIdleTimeoutSeconds;
  }

  // default_action - computed: false, optional: false, required: true
  private _defaultAction = new LbListenerDefaultActionList(this, "default_action", false);
  public get defaultAction() {
    return this._defaultAction;
  }
  public putDefaultAction(value: LbListenerDefaultAction[] | cdktf.IResolvable) {
    this._defaultAction.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionInput() {
    return this._defaultAction.internalValue;
  }

  // mutual_authentication - computed: false, optional: true, required: false
  private _mutualAuthentication = new LbListenerMutualAuthenticationOutputReference(this, "mutual_authentication");
  public get mutualAuthentication() {
    return this._mutualAuthentication;
  }
  public putMutualAuthentication(value: LbListenerMutualAuthentication) {
    this._mutualAuthentication.internalValue = value;
  }
  public resetMutualAuthentication() {
    this._mutualAuthentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mutualAuthenticationInput() {
    return this._mutualAuthentication.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LbListenerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LbListenerTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      load_balancer_arn: cdktf.stringToTerraform(this._loadBalancerArn),
      port: cdktf.numberToTerraform(this._port),
      protocol: cdktf.stringToTerraform(this._protocol),
      routing_http_request_x_amzn_mtls_clientcert_header_name: cdktf.stringToTerraform(this._routingHttpRequestXAmznMtlsClientcertHeaderName),
      routing_http_request_x_amzn_mtls_clientcert_issuer_header_name: cdktf.stringToTerraform(this._routingHttpRequestXAmznMtlsClientcertIssuerHeaderName),
      routing_http_request_x_amzn_mtls_clientcert_leaf_header_name: cdktf.stringToTerraform(this._routingHttpRequestXAmznMtlsClientcertLeafHeaderName),
      routing_http_request_x_amzn_mtls_clientcert_serial_number_header_name: cdktf.stringToTerraform(this._routingHttpRequestXAmznMtlsClientcertSerialNumberHeaderName),
      routing_http_request_x_amzn_mtls_clientcert_subject_header_name: cdktf.stringToTerraform(this._routingHttpRequestXAmznMtlsClientcertSubjectHeaderName),
      routing_http_request_x_amzn_mtls_clientcert_validity_header_name: cdktf.stringToTerraform(this._routingHttpRequestXAmznMtlsClientcertValidityHeaderName),
      routing_http_request_x_amzn_tls_cipher_suite_header_name: cdktf.stringToTerraform(this._routingHttpRequestXAmznTlsCipherSuiteHeaderName),
      routing_http_request_x_amzn_tls_version_header_name: cdktf.stringToTerraform(this._routingHttpRequestXAmznTlsVersionHeaderName),
      routing_http_response_access_control_allow_credentials_header_value: cdktf.stringToTerraform(this._routingHttpResponseAccessControlAllowCredentialsHeaderValue),
      routing_http_response_access_control_allow_headers_header_value: cdktf.stringToTerraform(this._routingHttpResponseAccessControlAllowHeadersHeaderValue),
      routing_http_response_access_control_allow_methods_header_value: cdktf.stringToTerraform(this._routingHttpResponseAccessControlAllowMethodsHeaderValue),
      routing_http_response_access_control_allow_origin_header_value: cdktf.stringToTerraform(this._routingHttpResponseAccessControlAllowOriginHeaderValue),
      routing_http_response_access_control_expose_headers_header_value: cdktf.stringToTerraform(this._routingHttpResponseAccessControlExposeHeadersHeaderValue),
      routing_http_response_access_control_max_age_header_value: cdktf.stringToTerraform(this._routingHttpResponseAccessControlMaxAgeHeaderValue),
      routing_http_response_content_security_policy_header_value: cdktf.stringToTerraform(this._routingHttpResponseContentSecurityPolicyHeaderValue),
      routing_http_response_server_enabled: cdktf.booleanToTerraform(this._routingHttpResponseServerEnabled),
      routing_http_response_strict_transport_security_header_value: cdktf.stringToTerraform(this._routingHttpResponseStrictTransportSecurityHeaderValue),
      routing_http_response_x_content_type_options_header_value: cdktf.stringToTerraform(this._routingHttpResponseXContentTypeOptionsHeaderValue),
      routing_http_response_x_frame_options_header_value: cdktf.stringToTerraform(this._routingHttpResponseXFrameOptionsHeaderValue),
      ssl_policy: cdktf.stringToTerraform(this._sslPolicy),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      tcp_idle_timeout_seconds: cdktf.numberToTerraform(this._tcpIdleTimeoutSeconds),
      default_action: cdktf.listMapper(lbListenerDefaultActionToTerraform, true)(this._defaultAction.internalValue),
      mutual_authentication: lbListenerMutualAuthenticationToTerraform(this._mutualAuthentication.internalValue),
      timeouts: lbListenerTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alpn_policy: {
        value: cdktf.stringToHclTerraform(this._alpnPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_arn: {
        value: cdktf.stringToHclTerraform(this._certificateArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      load_balancer_arn: {
        value: cdktf.stringToHclTerraform(this._loadBalancerArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_http_request_x_amzn_mtls_clientcert_header_name: {
        value: cdktf.stringToHclTerraform(this._routingHttpRequestXAmznMtlsClientcertHeaderName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_http_request_x_amzn_mtls_clientcert_issuer_header_name: {
        value: cdktf.stringToHclTerraform(this._routingHttpRequestXAmznMtlsClientcertIssuerHeaderName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_http_request_x_amzn_mtls_clientcert_leaf_header_name: {
        value: cdktf.stringToHclTerraform(this._routingHttpRequestXAmznMtlsClientcertLeafHeaderName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_http_request_x_amzn_mtls_clientcert_serial_number_header_name: {
        value: cdktf.stringToHclTerraform(this._routingHttpRequestXAmznMtlsClientcertSerialNumberHeaderName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_http_request_x_amzn_mtls_clientcert_subject_header_name: {
        value: cdktf.stringToHclTerraform(this._routingHttpRequestXAmznMtlsClientcertSubjectHeaderName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_http_request_x_amzn_mtls_clientcert_validity_header_name: {
        value: cdktf.stringToHclTerraform(this._routingHttpRequestXAmznMtlsClientcertValidityHeaderName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_http_request_x_amzn_tls_cipher_suite_header_name: {
        value: cdktf.stringToHclTerraform(this._routingHttpRequestXAmznTlsCipherSuiteHeaderName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_http_request_x_amzn_tls_version_header_name: {
        value: cdktf.stringToHclTerraform(this._routingHttpRequestXAmznTlsVersionHeaderName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_http_response_access_control_allow_credentials_header_value: {
        value: cdktf.stringToHclTerraform(this._routingHttpResponseAccessControlAllowCredentialsHeaderValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_http_response_access_control_allow_headers_header_value: {
        value: cdktf.stringToHclTerraform(this._routingHttpResponseAccessControlAllowHeadersHeaderValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_http_response_access_control_allow_methods_header_value: {
        value: cdktf.stringToHclTerraform(this._routingHttpResponseAccessControlAllowMethodsHeaderValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_http_response_access_control_allow_origin_header_value: {
        value: cdktf.stringToHclTerraform(this._routingHttpResponseAccessControlAllowOriginHeaderValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_http_response_access_control_expose_headers_header_value: {
        value: cdktf.stringToHclTerraform(this._routingHttpResponseAccessControlExposeHeadersHeaderValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_http_response_access_control_max_age_header_value: {
        value: cdktf.stringToHclTerraform(this._routingHttpResponseAccessControlMaxAgeHeaderValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_http_response_content_security_policy_header_value: {
        value: cdktf.stringToHclTerraform(this._routingHttpResponseContentSecurityPolicyHeaderValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_http_response_server_enabled: {
        value: cdktf.booleanToHclTerraform(this._routingHttpResponseServerEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      routing_http_response_strict_transport_security_header_value: {
        value: cdktf.stringToHclTerraform(this._routingHttpResponseStrictTransportSecurityHeaderValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_http_response_x_content_type_options_header_value: {
        value: cdktf.stringToHclTerraform(this._routingHttpResponseXContentTypeOptionsHeaderValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_http_response_x_frame_options_header_value: {
        value: cdktf.stringToHclTerraform(this._routingHttpResponseXFrameOptionsHeaderValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_policy: {
        value: cdktf.stringToHclTerraform(this._sslPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags_all: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tcp_idle_timeout_seconds: {
        value: cdktf.numberToHclTerraform(this._tcpIdleTimeoutSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_action: {
        value: cdktf.listMapperHcl(lbListenerDefaultActionToHclTerraform, true)(this._defaultAction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LbListenerDefaultActionList",
      },
      mutual_authentication: {
        value: lbListenerMutualAuthenticationToHclTerraform(this._mutualAuthentication.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LbListenerMutualAuthenticationList",
      },
      timeouts: {
        value: lbListenerTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LbListenerTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
