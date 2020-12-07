// https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlbListenerRuleConfig extends cdktf.TerraformMetaArguments {
  readonly listenerArn: string;
  readonly priority?: number;
  /** action block */
  readonly action: AlbListenerRuleAction[];
  /** condition block */
  readonly condition: AlbListenerRuleCondition[];
}
export interface AlbListenerRuleActionAuthenticateCognito {
  readonly authenticationRequestExtraParams?: { [key: string]: string };
  readonly onUnauthenticatedRequest?: string;
  readonly scope?: string;
  readonly sessionCookieName?: string;
  readonly sessionTimeout?: number;
  readonly userPoolArn: string;
  readonly userPoolClientId: string;
  readonly userPoolDomain: string;
}

function albListenerRuleActionAuthenticateCognitoToTerraform(struct?: AlbListenerRuleActionAuthenticateCognito): any {
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

export interface AlbListenerRuleActionAuthenticateOidc {
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

function albListenerRuleActionAuthenticateOidcToTerraform(struct?: AlbListenerRuleActionAuthenticateOidc): any {
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

export interface AlbListenerRuleActionFixedResponse {
  readonly contentType: string;
  readonly messageBody?: string;
  readonly statusCode?: string;
}

function albListenerRuleActionFixedResponseToTerraform(struct?: AlbListenerRuleActionFixedResponse): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_type: cdktf.stringToTerraform(struct!.contentType),
    message_body: cdktf.stringToTerraform(struct!.messageBody),
    status_code: cdktf.stringToTerraform(struct!.statusCode),
  }
}

export interface AlbListenerRuleActionForwardStickiness {
  readonly duration: number;
  readonly enabled?: boolean;
}

function albListenerRuleActionForwardStickinessToTerraform(struct?: AlbListenerRuleActionForwardStickiness): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export interface AlbListenerRuleActionForwardTargetGroup {
  readonly arn: string;
  readonly weight?: number;
}

function albListenerRuleActionForwardTargetGroupToTerraform(struct?: AlbListenerRuleActionForwardTargetGroup): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}

export interface AlbListenerRuleActionForward {
  /** stickiness block */
  readonly stickiness?: AlbListenerRuleActionForwardStickiness[];
  /** target_group block */
  readonly targetGroup: AlbListenerRuleActionForwardTargetGroup[];
}

function albListenerRuleActionForwardToTerraform(struct?: AlbListenerRuleActionForward): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    stickiness: cdktf.listMapper(albListenerRuleActionForwardStickinessToTerraform)(struct!.stickiness),
    target_group: cdktf.listMapper(albListenerRuleActionForwardTargetGroupToTerraform)(struct!.targetGroup),
  }
}

export interface AlbListenerRuleActionRedirect {
  readonly host?: string;
  readonly path?: string;
  readonly port?: string;
  readonly protocol?: string;
  readonly query?: string;
  readonly statusCode: string;
}

function albListenerRuleActionRedirectToTerraform(struct?: AlbListenerRuleActionRedirect): any {
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

export interface AlbListenerRuleAction {
  readonly order?: number;
  readonly targetGroupArn?: string;
  readonly type: string;
  /** authenticate_cognito block */
  readonly authenticateCognito?: AlbListenerRuleActionAuthenticateCognito[];
  /** authenticate_oidc block */
  readonly authenticateOidc?: AlbListenerRuleActionAuthenticateOidc[];
  /** fixed_response block */
  readonly fixedResponse?: AlbListenerRuleActionFixedResponse[];
  /** forward block */
  readonly forward?: AlbListenerRuleActionForward[];
  /** redirect block */
  readonly redirect?: AlbListenerRuleActionRedirect[];
}

function albListenerRuleActionToTerraform(struct?: AlbListenerRuleAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    order: cdktf.numberToTerraform(struct!.order),
    target_group_arn: cdktf.stringToTerraform(struct!.targetGroupArn),
    type: cdktf.stringToTerraform(struct!.type),
    authenticate_cognito: cdktf.listMapper(albListenerRuleActionAuthenticateCognitoToTerraform)(struct!.authenticateCognito),
    authenticate_oidc: cdktf.listMapper(albListenerRuleActionAuthenticateOidcToTerraform)(struct!.authenticateOidc),
    fixed_response: cdktf.listMapper(albListenerRuleActionFixedResponseToTerraform)(struct!.fixedResponse),
    forward: cdktf.listMapper(albListenerRuleActionForwardToTerraform)(struct!.forward),
    redirect: cdktf.listMapper(albListenerRuleActionRedirectToTerraform)(struct!.redirect),
  }
}

export interface AlbListenerRuleConditionHostHeader {
  readonly values?: string[];
}

function albListenerRuleConditionHostHeaderToTerraform(struct?: AlbListenerRuleConditionHostHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface AlbListenerRuleConditionHttpHeader {
  readonly httpHeaderName: string;
  readonly values: string[];
}

function albListenerRuleConditionHttpHeaderToTerraform(struct?: AlbListenerRuleConditionHttpHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    http_header_name: cdktf.stringToTerraform(struct!.httpHeaderName),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface AlbListenerRuleConditionHttpRequestMethod {
  readonly values: string[];
}

function albListenerRuleConditionHttpRequestMethodToTerraform(struct?: AlbListenerRuleConditionHttpRequestMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface AlbListenerRuleConditionPathPattern {
  readonly values?: string[];
}

function albListenerRuleConditionPathPatternToTerraform(struct?: AlbListenerRuleConditionPathPattern): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface AlbListenerRuleConditionQueryString {
  readonly key?: string;
  readonly value: string;
}

function albListenerRuleConditionQueryStringToTerraform(struct?: AlbListenerRuleConditionQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface AlbListenerRuleConditionSourceIp {
  readonly values: string[];
}

function albListenerRuleConditionSourceIpToTerraform(struct?: AlbListenerRuleConditionSourceIp): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface AlbListenerRuleCondition {
  readonly field?: string;
  readonly values?: string[];
  /** host_header block */
  readonly hostHeader?: AlbListenerRuleConditionHostHeader[];
  /** http_header block */
  readonly httpHeader?: AlbListenerRuleConditionHttpHeader[];
  /** http_request_method block */
  readonly httpRequestMethod?: AlbListenerRuleConditionHttpRequestMethod[];
  /** path_pattern block */
  readonly pathPattern?: AlbListenerRuleConditionPathPattern[];
  /** query_string block */
  readonly queryString?: AlbListenerRuleConditionQueryString[];
  /** source_ip block */
  readonly sourceIp?: AlbListenerRuleConditionSourceIp[];
}

function albListenerRuleConditionToTerraform(struct?: AlbListenerRuleCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
    host_header: cdktf.listMapper(albListenerRuleConditionHostHeaderToTerraform)(struct!.hostHeader),
    http_header: cdktf.listMapper(albListenerRuleConditionHttpHeaderToTerraform)(struct!.httpHeader),
    http_request_method: cdktf.listMapper(albListenerRuleConditionHttpRequestMethodToTerraform)(struct!.httpRequestMethod),
    path_pattern: cdktf.listMapper(albListenerRuleConditionPathPatternToTerraform)(struct!.pathPattern),
    query_string: cdktf.listMapper(albListenerRuleConditionQueryStringToTerraform)(struct!.queryString),
    source_ip: cdktf.listMapper(albListenerRuleConditionSourceIpToTerraform)(struct!.sourceIp),
  }
}


// Resource

export class AlbListenerRule extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AlbListenerRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_alb_listener_rule',
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
  private _action: AlbListenerRuleAction[];
  public get action() {
    return this.interpolationForAttribute('action') as any;
  }
  public set action(value: AlbListenerRuleAction[]) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action
  }

  // condition - computed: false, optional: false, required: true
  private _condition: AlbListenerRuleCondition[];
  public get condition() {
    return this.interpolationForAttribute('condition') as any;
  }
  public set condition(value: AlbListenerRuleCondition[]) {
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
      action: cdktf.listMapper(albListenerRuleActionToTerraform)(this._action),
      condition: cdktf.listMapper(albListenerRuleConditionToTerraform)(this._condition),
    };
  }
}
