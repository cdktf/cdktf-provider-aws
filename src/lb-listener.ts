// https://www.terraform.io/docs/providers/aws/r/lb_listener.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbListenerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#alpn_policy LbListener#alpn_policy}
  */
  readonly alpnPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#certificate_arn LbListener#certificate_arn}
  */
  readonly certificateArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#load_balancer_arn LbListener#load_balancer_arn}
  */
  readonly loadBalancerArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#port LbListener#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#protocol LbListener#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#ssl_policy LbListener#ssl_policy}
  */
  readonly sslPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#tags LbListener#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#tags_all LbListener#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * default_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#default_action LbListener#default_action}
  */
  readonly defaultAction: LbListenerDefaultAction[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#timeouts LbListener#timeouts}
  */
  readonly timeouts?: LbListenerTimeouts;
}
export interface LbListenerDefaultActionAuthenticateCognito {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#authentication_request_extra_params LbListener#authentication_request_extra_params}
  */
  readonly authenticationRequestExtraParams?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#on_unauthenticated_request LbListener#on_unauthenticated_request}
  */
  readonly onUnauthenticatedRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#scope LbListener#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#session_cookie_name LbListener#session_cookie_name}
  */
  readonly sessionCookieName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#session_timeout LbListener#session_timeout}
  */
  readonly sessionTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#user_pool_arn LbListener#user_pool_arn}
  */
  readonly userPoolArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#user_pool_client_id LbListener#user_pool_client_id}
  */
  readonly userPoolClientId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#user_pool_domain LbListener#user_pool_domain}
  */
  readonly userPoolDomain: string;
}

function lbListenerDefaultActionAuthenticateCognitoToTerraform(struct?: LbListenerDefaultActionAuthenticateCognito): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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

export interface LbListenerDefaultActionAuthenticateOidc {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#authentication_request_extra_params LbListener#authentication_request_extra_params}
  */
  readonly authenticationRequestExtraParams?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#authorization_endpoint LbListener#authorization_endpoint}
  */
  readonly authorizationEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#client_id LbListener#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#client_secret LbListener#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#issuer LbListener#issuer}
  */
  readonly issuer: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#on_unauthenticated_request LbListener#on_unauthenticated_request}
  */
  readonly onUnauthenticatedRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#scope LbListener#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#session_cookie_name LbListener#session_cookie_name}
  */
  readonly sessionCookieName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#session_timeout LbListener#session_timeout}
  */
  readonly sessionTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#token_endpoint LbListener#token_endpoint}
  */
  readonly tokenEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#user_info_endpoint LbListener#user_info_endpoint}
  */
  readonly userInfoEndpoint: string;
}

function lbListenerDefaultActionAuthenticateOidcToTerraform(struct?: LbListenerDefaultActionAuthenticateOidc): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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

export interface LbListenerDefaultActionFixedResponse {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#content_type LbListener#content_type}
  */
  readonly contentType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#message_body LbListener#message_body}
  */
  readonly messageBody?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#status_code LbListener#status_code}
  */
  readonly statusCode?: string;
}

function lbListenerDefaultActionFixedResponseToTerraform(struct?: LbListenerDefaultActionFixedResponse): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_type: cdktf.stringToTerraform(struct!.contentType),
    message_body: cdktf.stringToTerraform(struct!.messageBody),
    status_code: cdktf.stringToTerraform(struct!.statusCode),
  }
}

export interface LbListenerDefaultActionForwardStickiness {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#duration LbListener#duration}
  */
  readonly duration: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#enabled LbListener#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

function lbListenerDefaultActionForwardStickinessToTerraform(struct?: LbListenerDefaultActionForwardStickiness): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export interface LbListenerDefaultActionForwardTargetGroup {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#arn LbListener#arn}
  */
  readonly arn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#weight LbListener#weight}
  */
  readonly weight?: number;
}

function lbListenerDefaultActionForwardTargetGroupToTerraform(struct?: LbListenerDefaultActionForwardTargetGroup): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}

export interface LbListenerDefaultActionForward {
  /**
  * stickiness block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#stickiness LbListener#stickiness}
  */
  readonly stickiness?: LbListenerDefaultActionForwardStickiness[];
  /**
  * target_group block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#target_group LbListener#target_group}
  */
  readonly targetGroup: LbListenerDefaultActionForwardTargetGroup[];
}

function lbListenerDefaultActionForwardToTerraform(struct?: LbListenerDefaultActionForward): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    stickiness: cdktf.listMapper(lbListenerDefaultActionForwardStickinessToTerraform)(struct!.stickiness),
    target_group: cdktf.listMapper(lbListenerDefaultActionForwardTargetGroupToTerraform)(struct!.targetGroup),
  }
}

export interface LbListenerDefaultActionRedirect {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#host LbListener#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#path LbListener#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#port LbListener#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#protocol LbListener#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#query LbListener#query}
  */
  readonly query?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#status_code LbListener#status_code}
  */
  readonly statusCode: string;
}

function lbListenerDefaultActionRedirectToTerraform(struct?: LbListenerDefaultActionRedirect): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    query: cdktf.stringToTerraform(struct!.query),
    status_code: cdktf.stringToTerraform(struct!.statusCode),
  }
}

export interface LbListenerDefaultAction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#order LbListener#order}
  */
  readonly order?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#target_group_arn LbListener#target_group_arn}
  */
  readonly targetGroupArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#type LbListener#type}
  */
  readonly type: string;
  /**
  * authenticate_cognito block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#authenticate_cognito LbListener#authenticate_cognito}
  */
  readonly authenticateCognito?: LbListenerDefaultActionAuthenticateCognito[];
  /**
  * authenticate_oidc block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#authenticate_oidc LbListener#authenticate_oidc}
  */
  readonly authenticateOidc?: LbListenerDefaultActionAuthenticateOidc[];
  /**
  * fixed_response block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#fixed_response LbListener#fixed_response}
  */
  readonly fixedResponse?: LbListenerDefaultActionFixedResponse[];
  /**
  * forward block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#forward LbListener#forward}
  */
  readonly forward?: LbListenerDefaultActionForward[];
  /**
  * redirect block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#redirect LbListener#redirect}
  */
  readonly redirect?: LbListenerDefaultActionRedirect[];
}

function lbListenerDefaultActionToTerraform(struct?: LbListenerDefaultAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    order: cdktf.numberToTerraform(struct!.order),
    target_group_arn: cdktf.stringToTerraform(struct!.targetGroupArn),
    type: cdktf.stringToTerraform(struct!.type),
    authenticate_cognito: cdktf.listMapper(lbListenerDefaultActionAuthenticateCognitoToTerraform)(struct!.authenticateCognito),
    authenticate_oidc: cdktf.listMapper(lbListenerDefaultActionAuthenticateOidcToTerraform)(struct!.authenticateOidc),
    fixed_response: cdktf.listMapper(lbListenerDefaultActionFixedResponseToTerraform)(struct!.fixedResponse),
    forward: cdktf.listMapper(lbListenerDefaultActionForwardToTerraform)(struct!.forward),
    redirect: cdktf.listMapper(lbListenerDefaultActionRedirectToTerraform)(struct!.redirect),
  }
}

export interface LbListenerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#read LbListener#read}
  */
  readonly read?: string;
}

function lbListenerTimeoutsToTerraform(struct?: LbListenerTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html aws_lb_listener}
*/
export class LbListener extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_lb_listener";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html aws_lb_listener} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LbListenerConfig
  */
  public constructor(scope: Construct, id: string, config: LbListenerConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lb_listener',
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
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alpn_policy - computed: false, optional: true, required: false
  private _alpnPolicy?: string;
  public get alpnPolicy() {
    return this.getStringAttribute('alpn_policy');
  }
  public set alpnPolicy(value: string ) {
    this._alpnPolicy = value;
  }
  public resetAlpnPolicy() {
    this._alpnPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alpnPolicyInput() {
    return this._alpnPolicy
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
  public set certificateArn(value: string ) {
    this._certificateArn = value;
  }
  public resetCertificateArn() {
    this._certificateArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateArnInput() {
    return this._certificateArn
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // load_balancer_arn - computed: false, optional: false, required: true
  private _loadBalancerArn: string;
  public get loadBalancerArn() {
    return this.getStringAttribute('load_balancer_arn');
  }
  public set loadBalancerArn(value: string) {
    this._loadBalancerArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerArnInput() {
    return this._loadBalancerArn
  }

  // port - computed: false, optional: true, required: false
  private _port?: number;
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number ) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port
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
    return this._protocol
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
    return this._sslPolicy
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
  public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
  }

  // default_action - computed: false, optional: false, required: true
  private _defaultAction: LbListenerDefaultAction[];
  public get defaultAction() {
    return this.interpolationForAttribute('default_action') as any;
  }
  public set defaultAction(value: LbListenerDefaultAction[]) {
    this._defaultAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionInput() {
    return this._defaultAction
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LbListenerTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: LbListenerTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
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
      default_action: cdktf.listMapper(lbListenerDefaultActionToTerraform)(this._defaultAction),
      timeouts: lbListenerTimeoutsToTerraform(this._timeouts),
    };
  }
}
