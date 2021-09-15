// https://www.terraform.io/docs/providers/aws/r/alb_listener.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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

function albListenerDefaultActionAuthenticateCognitoToTerraform(struct?: AlbListenerDefaultActionAuthenticateCognito): any {
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

function albListenerDefaultActionAuthenticateOidcToTerraform(struct?: AlbListenerDefaultActionAuthenticateOidc): any {
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

function albListenerDefaultActionFixedResponseToTerraform(struct?: AlbListenerDefaultActionFixedResponse): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_type: cdktf.stringToTerraform(struct!.contentType),
    message_body: cdktf.stringToTerraform(struct!.messageBody),
    status_code: cdktf.stringToTerraform(struct!.statusCode),
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

function albListenerDefaultActionForwardStickinessToTerraform(struct?: AlbListenerDefaultActionForwardStickiness): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
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

function albListenerDefaultActionForwardTargetGroupToTerraform(struct?: AlbListenerDefaultActionForwardTargetGroup): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  readonly stickiness?: AlbListenerDefaultActionForwardStickiness[];
  /**
  * target_group block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#target_group AlbListener#target_group}
  */
  readonly targetGroup: AlbListenerDefaultActionForwardTargetGroup[];
}

function albListenerDefaultActionForwardToTerraform(struct?: AlbListenerDefaultActionForward): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    stickiness: cdktf.listMapper(albListenerDefaultActionForwardStickinessToTerraform)(struct!.stickiness),
    target_group: cdktf.listMapper(albListenerDefaultActionForwardTargetGroupToTerraform)(struct!.targetGroup),
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

function albListenerDefaultActionRedirectToTerraform(struct?: AlbListenerDefaultActionRedirect): any {
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
  readonly authenticateCognito?: AlbListenerDefaultActionAuthenticateCognito[];
  /**
  * authenticate_oidc block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#authenticate_oidc AlbListener#authenticate_oidc}
  */
  readonly authenticateOidc?: AlbListenerDefaultActionAuthenticateOidc[];
  /**
  * fixed_response block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#fixed_response AlbListener#fixed_response}
  */
  readonly fixedResponse?: AlbListenerDefaultActionFixedResponse[];
  /**
  * forward block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#forward AlbListener#forward}
  */
  readonly forward?: AlbListenerDefaultActionForward[];
  /**
  * redirect block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#redirect AlbListener#redirect}
  */
  readonly redirect?: AlbListenerDefaultActionRedirect[];
}

function albListenerDefaultActionToTerraform(struct?: AlbListenerDefaultAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    order: cdktf.numberToTerraform(struct!.order),
    target_group_arn: cdktf.stringToTerraform(struct!.targetGroupArn),
    type: cdktf.stringToTerraform(struct!.type),
    authenticate_cognito: cdktf.listMapper(albListenerDefaultActionAuthenticateCognitoToTerraform)(struct!.authenticateCognito),
    authenticate_oidc: cdktf.listMapper(albListenerDefaultActionAuthenticateOidcToTerraform)(struct!.authenticateOidc),
    fixed_response: cdktf.listMapper(albListenerDefaultActionFixedResponseToTerraform)(struct!.fixedResponse),
    forward: cdktf.listMapper(albListenerDefaultActionForwardToTerraform)(struct!.forward),
    redirect: cdktf.listMapper(albListenerDefaultActionRedirectToTerraform)(struct!.redirect),
  }
}

export interface AlbListenerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#read AlbListener#read}
  */
  readonly read?: string;
}

function albListenerTimeoutsToTerraform(struct?: AlbListenerTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
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
  private _defaultAction: AlbListenerDefaultAction[];
  public get defaultAction() {
    return this.interpolationForAttribute('default_action') as any;
  }
  public set defaultAction(value: AlbListenerDefaultAction[]) {
    this._defaultAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionInput() {
    return this._defaultAction
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AlbListenerTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: AlbListenerTimeouts ) {
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
      default_action: cdktf.listMapper(albListenerDefaultActionToTerraform)(this._defaultAction),
      timeouts: albListenerTimeoutsToTerraform(this._timeouts),
    };
  }
}
