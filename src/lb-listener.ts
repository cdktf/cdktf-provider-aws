// https://www.terraform.io/docs/providers/aws/r/lb_listener.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbListenerConfig extends cdktf.TerraformMetaArguments {
  readonly certificateArn?: string;
  readonly loadBalancerArn: string;
  readonly port: number;
  readonly protocol?: string;
  readonly sslPolicy?: string;
  /** default_action block */
  readonly defaultAction: LbListenerDefaultAction[];
  /** timeouts block */
  readonly timeouts?: LbListenerTimeouts;
}
export interface LbListenerDefaultActionAuthenticateCognito {
  readonly authenticationRequestExtraParams?: { [key: string]: string };
  readonly onUnauthenticatedRequest?: string;
  readonly scope?: string;
  readonly sessionCookieName?: string;
  readonly sessionTimeout?: number;
  readonly userPoolArn: string;
  readonly userPoolClientId: string;
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
  readonly authenticationRequestExtraParams?: { [key: string]: string };
  readonly authorizationEndpoint: string;
  readonly clientId: string;
  readonly clientSecret: string;
  readonly issuer: string;
  readonly onUnauthenticatedRequest?: string;
  readonly scope?: string;
  readonly sessionCookieName?: string;
  readonly sessionTimeout?: number;
  readonly tokenEndpoint: string;
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
  readonly contentType: string;
  readonly messageBody?: string;
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
  readonly duration: number;
  readonly enabled?: boolean;
}

function lbListenerDefaultActionForwardStickinessToTerraform(struct?: LbListenerDefaultActionForwardStickiness): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export interface LbListenerDefaultActionForwardTargetGroup {
  readonly arn: string;
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
  /** stickiness block */
  readonly stickiness?: LbListenerDefaultActionForwardStickiness[];
  /** target_group block */
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
  readonly host?: string;
  readonly path?: string;
  readonly port?: string;
  readonly protocol?: string;
  readonly query?: string;
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
  readonly order?: number;
  readonly targetGroupArn?: string;
  readonly type: string;
  /** authenticate_cognito block */
  readonly authenticateCognito?: LbListenerDefaultActionAuthenticateCognito[];
  /** authenticate_oidc block */
  readonly authenticateOidc?: LbListenerDefaultActionAuthenticateOidc[];
  /** fixed_response block */
  readonly fixedResponse?: LbListenerDefaultActionFixedResponse[];
  /** forward block */
  readonly forward?: LbListenerDefaultActionForward[];
  /** redirect block */
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
  readonly read?: string;
}

function lbListenerTimeoutsToTerraform(struct?: LbListenerTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


// Resource

export class LbListener extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    this._certificateArn = config.certificateArn;
    this._loadBalancerArn = config.loadBalancerArn;
    this._port = config.port;
    this._protocol = config.protocol;
    this._sslPolicy = config.sslPolicy;
    this._defaultAction = config.defaultAction;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // port - computed: false, optional: false, required: true
  private _port: number;
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string;
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string ) {
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
      certificate_arn: cdktf.stringToTerraform(this._certificateArn),
      load_balancer_arn: cdktf.stringToTerraform(this._loadBalancerArn),
      port: cdktf.numberToTerraform(this._port),
      protocol: cdktf.stringToTerraform(this._protocol),
      ssl_policy: cdktf.stringToTerraform(this._sslPolicy),
      default_action: cdktf.listMapper(lbListenerDefaultActionToTerraform)(this._defaultAction),
      timeouts: lbListenerTimeoutsToTerraform(this._timeouts),
    };
  }
}
