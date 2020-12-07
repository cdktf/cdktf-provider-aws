// https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbListenerRuleConfig extends cdktf.TerraformMetaArguments {
  readonly listenerArn: string;
  readonly priority?: number;
  /** action block */
  readonly action: LbListenerRuleAction[];
  /** condition block */
  readonly condition: LbListenerRuleCondition[];
}
export interface LbListenerRuleActionAuthenticateCognito {
  readonly authenticationRequestExtraParams?: { [key: string]: string };
  readonly onUnauthenticatedRequest?: string;
  readonly scope?: string;
  readonly sessionCookieName?: string;
  readonly sessionTimeout?: number;
  readonly userPoolArn: string;
  readonly userPoolClientId: string;
  readonly userPoolDomain: string;
}

function lbListenerRuleActionAuthenticateCognitoToTerraform(struct?: LbListenerRuleActionAuthenticateCognito): any {
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

export interface LbListenerRuleActionAuthenticateOidc {
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

function lbListenerRuleActionAuthenticateOidcToTerraform(struct?: LbListenerRuleActionAuthenticateOidc): any {
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

export interface LbListenerRuleActionFixedResponse {
  readonly contentType: string;
  readonly messageBody?: string;
  readonly statusCode?: string;
}

function lbListenerRuleActionFixedResponseToTerraform(struct?: LbListenerRuleActionFixedResponse): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_type: cdktf.stringToTerraform(struct!.contentType),
    message_body: cdktf.stringToTerraform(struct!.messageBody),
    status_code: cdktf.stringToTerraform(struct!.statusCode),
  }
}

export interface LbListenerRuleActionForwardStickiness {
  readonly duration: number;
  readonly enabled?: boolean;
}

function lbListenerRuleActionForwardStickinessToTerraform(struct?: LbListenerRuleActionForwardStickiness): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export interface LbListenerRuleActionForwardTargetGroup {
  readonly arn: string;
  readonly weight?: number;
}

function lbListenerRuleActionForwardTargetGroupToTerraform(struct?: LbListenerRuleActionForwardTargetGroup): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}

export interface LbListenerRuleActionForward {
  /** stickiness block */
  readonly stickiness?: LbListenerRuleActionForwardStickiness[];
  /** target_group block */
  readonly targetGroup: LbListenerRuleActionForwardTargetGroup[];
}

function lbListenerRuleActionForwardToTerraform(struct?: LbListenerRuleActionForward): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    stickiness: cdktf.listMapper(lbListenerRuleActionForwardStickinessToTerraform)(struct!.stickiness),
    target_group: cdktf.listMapper(lbListenerRuleActionForwardTargetGroupToTerraform)(struct!.targetGroup),
  }
}

export interface LbListenerRuleActionRedirect {
  readonly host?: string;
  readonly path?: string;
  readonly port?: string;
  readonly protocol?: string;
  readonly query?: string;
  readonly statusCode: string;
}

function lbListenerRuleActionRedirectToTerraform(struct?: LbListenerRuleActionRedirect): any {
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

export interface LbListenerRuleAction {
  readonly order?: number;
  readonly targetGroupArn?: string;
  readonly type: string;
  /** authenticate_cognito block */
  readonly authenticateCognito?: LbListenerRuleActionAuthenticateCognito[];
  /** authenticate_oidc block */
  readonly authenticateOidc?: LbListenerRuleActionAuthenticateOidc[];
  /** fixed_response block */
  readonly fixedResponse?: LbListenerRuleActionFixedResponse[];
  /** forward block */
  readonly forward?: LbListenerRuleActionForward[];
  /** redirect block */
  readonly redirect?: LbListenerRuleActionRedirect[];
}

function lbListenerRuleActionToTerraform(struct?: LbListenerRuleAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    order: cdktf.numberToTerraform(struct!.order),
    target_group_arn: cdktf.stringToTerraform(struct!.targetGroupArn),
    type: cdktf.stringToTerraform(struct!.type),
    authenticate_cognito: cdktf.listMapper(lbListenerRuleActionAuthenticateCognitoToTerraform)(struct!.authenticateCognito),
    authenticate_oidc: cdktf.listMapper(lbListenerRuleActionAuthenticateOidcToTerraform)(struct!.authenticateOidc),
    fixed_response: cdktf.listMapper(lbListenerRuleActionFixedResponseToTerraform)(struct!.fixedResponse),
    forward: cdktf.listMapper(lbListenerRuleActionForwardToTerraform)(struct!.forward),
    redirect: cdktf.listMapper(lbListenerRuleActionRedirectToTerraform)(struct!.redirect),
  }
}

export interface LbListenerRuleConditionHostHeader {
  readonly values?: string[];
}

function lbListenerRuleConditionHostHeaderToTerraform(struct?: LbListenerRuleConditionHostHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface LbListenerRuleConditionHttpHeader {
  readonly httpHeaderName: string;
  readonly values: string[];
}

function lbListenerRuleConditionHttpHeaderToTerraform(struct?: LbListenerRuleConditionHttpHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    http_header_name: cdktf.stringToTerraform(struct!.httpHeaderName),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface LbListenerRuleConditionHttpRequestMethod {
  readonly values: string[];
}

function lbListenerRuleConditionHttpRequestMethodToTerraform(struct?: LbListenerRuleConditionHttpRequestMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface LbListenerRuleConditionPathPattern {
  readonly values?: string[];
}

function lbListenerRuleConditionPathPatternToTerraform(struct?: LbListenerRuleConditionPathPattern): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface LbListenerRuleConditionQueryString {
  readonly key?: string;
  readonly value: string;
}

function lbListenerRuleConditionQueryStringToTerraform(struct?: LbListenerRuleConditionQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface LbListenerRuleConditionSourceIp {
  readonly values: string[];
}

function lbListenerRuleConditionSourceIpToTerraform(struct?: LbListenerRuleConditionSourceIp): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface LbListenerRuleCondition {
  readonly field?: string;
  readonly values?: string[];
  /** host_header block */
  readonly hostHeader?: LbListenerRuleConditionHostHeader[];
  /** http_header block */
  readonly httpHeader?: LbListenerRuleConditionHttpHeader[];
  /** http_request_method block */
  readonly httpRequestMethod?: LbListenerRuleConditionHttpRequestMethod[];
  /** path_pattern block */
  readonly pathPattern?: LbListenerRuleConditionPathPattern[];
  /** query_string block */
  readonly queryString?: LbListenerRuleConditionQueryString[];
  /** source_ip block */
  readonly sourceIp?: LbListenerRuleConditionSourceIp[];
}

function lbListenerRuleConditionToTerraform(struct?: LbListenerRuleCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
    host_header: cdktf.listMapper(lbListenerRuleConditionHostHeaderToTerraform)(struct!.hostHeader),
    http_header: cdktf.listMapper(lbListenerRuleConditionHttpHeaderToTerraform)(struct!.httpHeader),
    http_request_method: cdktf.listMapper(lbListenerRuleConditionHttpRequestMethodToTerraform)(struct!.httpRequestMethod),
    path_pattern: cdktf.listMapper(lbListenerRuleConditionPathPatternToTerraform)(struct!.pathPattern),
    query_string: cdktf.listMapper(lbListenerRuleConditionQueryStringToTerraform)(struct!.queryString),
    source_ip: cdktf.listMapper(lbListenerRuleConditionSourceIpToTerraform)(struct!.sourceIp),
  }
}


// Resource

export class LbListenerRule extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: LbListenerRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lb_listener_rule',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._listenerArn = config.listenerArn;
    this._priority = config.priority;
    this._action = config.action;
    this._condition = config.condition;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // listener_arn - computed: false, optional: false, required: true
  private _listenerArn: string;
  public get listenerArn() {
    return this.getStringAttribute('listener_arn');
  }
  public set listenerArn(value: string) {
    this._listenerArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerArnInput() {
    return this._listenerArn
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number;
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority
  }

  // action - computed: false, optional: false, required: true
  private _action: LbListenerRuleAction[];
  public get action() {
    return this.interpolationForAttribute('action') as any;
  }
  public set action(value: LbListenerRuleAction[]) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action
  }

  // condition - computed: false, optional: false, required: true
  private _condition: LbListenerRuleCondition[];
  public get condition() {
    return this.interpolationForAttribute('condition') as any;
  }
  public set condition(value: LbListenerRuleCondition[]) {
    this._condition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      listener_arn: cdktf.stringToTerraform(this._listenerArn),
      priority: cdktf.numberToTerraform(this._priority),
      action: cdktf.listMapper(lbListenerRuleActionToTerraform)(this._action),
      condition: cdktf.listMapper(lbListenerRuleConditionToTerraform)(this._condition),
    };
  }
}
