// https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbListenerRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#listener_arn LbListenerRule#listener_arn}
  */
  readonly listenerArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#priority LbListenerRule#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#tags LbListenerRule#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#tags_all LbListenerRule#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#action LbListenerRule#action}
  */
  readonly action: LbListenerRuleAction[];
  /**
  * condition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#condition LbListenerRule#condition}
  */
  readonly condition: LbListenerRuleCondition[];
}
export interface LbListenerRuleActionAuthenticateCognito {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#authentication_request_extra_params LbListenerRule#authentication_request_extra_params}
  */
  readonly authenticationRequestExtraParams?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#on_unauthenticated_request LbListenerRule#on_unauthenticated_request}
  */
  readonly onUnauthenticatedRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#scope LbListenerRule#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#session_cookie_name LbListenerRule#session_cookie_name}
  */
  readonly sessionCookieName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#session_timeout LbListenerRule#session_timeout}
  */
  readonly sessionTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#user_pool_arn LbListenerRule#user_pool_arn}
  */
  readonly userPoolArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#user_pool_client_id LbListenerRule#user_pool_client_id}
  */
  readonly userPoolClientId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#user_pool_domain LbListenerRule#user_pool_domain}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#authentication_request_extra_params LbListenerRule#authentication_request_extra_params}
  */
  readonly authenticationRequestExtraParams?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#authorization_endpoint LbListenerRule#authorization_endpoint}
  */
  readonly authorizationEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#client_id LbListenerRule#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#client_secret LbListenerRule#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#issuer LbListenerRule#issuer}
  */
  readonly issuer: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#on_unauthenticated_request LbListenerRule#on_unauthenticated_request}
  */
  readonly onUnauthenticatedRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#scope LbListenerRule#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#session_cookie_name LbListenerRule#session_cookie_name}
  */
  readonly sessionCookieName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#session_timeout LbListenerRule#session_timeout}
  */
  readonly sessionTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#token_endpoint LbListenerRule#token_endpoint}
  */
  readonly tokenEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#user_info_endpoint LbListenerRule#user_info_endpoint}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#content_type LbListenerRule#content_type}
  */
  readonly contentType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#message_body LbListenerRule#message_body}
  */
  readonly messageBody?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#status_code LbListenerRule#status_code}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#duration LbListenerRule#duration}
  */
  readonly duration: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#enabled LbListenerRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

function lbListenerRuleActionForwardStickinessToTerraform(struct?: LbListenerRuleActionForwardStickiness): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export interface LbListenerRuleActionForwardTargetGroup {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#arn LbListenerRule#arn}
  */
  readonly arn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#weight LbListenerRule#weight}
  */
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
  /**
  * stickiness block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#stickiness LbListenerRule#stickiness}
  */
  readonly stickiness?: LbListenerRuleActionForwardStickiness[];
  /**
  * target_group block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#target_group LbListenerRule#target_group}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#host LbListenerRule#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#path LbListenerRule#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#port LbListenerRule#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#protocol LbListenerRule#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#query LbListenerRule#query}
  */
  readonly query?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#status_code LbListenerRule#status_code}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#order LbListenerRule#order}
  */
  readonly order?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#target_group_arn LbListenerRule#target_group_arn}
  */
  readonly targetGroupArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#type LbListenerRule#type}
  */
  readonly type: string;
  /**
  * authenticate_cognito block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#authenticate_cognito LbListenerRule#authenticate_cognito}
  */
  readonly authenticateCognito?: LbListenerRuleActionAuthenticateCognito[];
  /**
  * authenticate_oidc block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#authenticate_oidc LbListenerRule#authenticate_oidc}
  */
  readonly authenticateOidc?: LbListenerRuleActionAuthenticateOidc[];
  /**
  * fixed_response block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#fixed_response LbListenerRule#fixed_response}
  */
  readonly fixedResponse?: LbListenerRuleActionFixedResponse[];
  /**
  * forward block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#forward LbListenerRule#forward}
  */
  readonly forward?: LbListenerRuleActionForward[];
  /**
  * redirect block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#redirect LbListenerRule#redirect}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#values LbListenerRule#values}
  */
  readonly values: string[];
}

function lbListenerRuleConditionHostHeaderToTerraform(struct?: LbListenerRuleConditionHostHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface LbListenerRuleConditionHttpHeader {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#http_header_name LbListenerRule#http_header_name}
  */
  readonly httpHeaderName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#values LbListenerRule#values}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#values LbListenerRule#values}
  */
  readonly values: string[];
}

function lbListenerRuleConditionHttpRequestMethodToTerraform(struct?: LbListenerRuleConditionHttpRequestMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface LbListenerRuleConditionPathPattern {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#values LbListenerRule#values}
  */
  readonly values: string[];
}

function lbListenerRuleConditionPathPatternToTerraform(struct?: LbListenerRuleConditionPathPattern): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface LbListenerRuleConditionQueryString {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#key LbListenerRule#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#value LbListenerRule#value}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#values LbListenerRule#values}
  */
  readonly values: string[];
}

function lbListenerRuleConditionSourceIpToTerraform(struct?: LbListenerRuleConditionSourceIp): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface LbListenerRuleCondition {
  /**
  * host_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#host_header LbListenerRule#host_header}
  */
  readonly hostHeader?: LbListenerRuleConditionHostHeader[];
  /**
  * http_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#http_header LbListenerRule#http_header}
  */
  readonly httpHeader?: LbListenerRuleConditionHttpHeader[];
  /**
  * http_request_method block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#http_request_method LbListenerRule#http_request_method}
  */
  readonly httpRequestMethod?: LbListenerRuleConditionHttpRequestMethod[];
  /**
  * path_pattern block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#path_pattern LbListenerRule#path_pattern}
  */
  readonly pathPattern?: LbListenerRuleConditionPathPattern[];
  /**
  * query_string block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#query_string LbListenerRule#query_string}
  */
  readonly queryString?: LbListenerRuleConditionQueryString[];
  /**
  * source_ip block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#source_ip LbListenerRule#source_ip}
  */
  readonly sourceIp?: LbListenerRuleConditionSourceIp[];
}

function lbListenerRuleConditionToTerraform(struct?: LbListenerRuleCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host_header: cdktf.listMapper(lbListenerRuleConditionHostHeaderToTerraform)(struct!.hostHeader),
    http_header: cdktf.listMapper(lbListenerRuleConditionHttpHeaderToTerraform)(struct!.httpHeader),
    http_request_method: cdktf.listMapper(lbListenerRuleConditionHttpRequestMethodToTerraform)(struct!.httpRequestMethod),
    path_pattern: cdktf.listMapper(lbListenerRuleConditionPathPatternToTerraform)(struct!.pathPattern),
    query_string: cdktf.listMapper(lbListenerRuleConditionQueryStringToTerraform)(struct!.queryString),
    source_ip: cdktf.listMapper(lbListenerRuleConditionSourceIpToTerraform)(struct!.sourceIp),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html aws_lb_listener_rule}
*/
export class LbListenerRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_lb_listener_rule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html aws_lb_listener_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LbListenerRuleConfig
  */
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
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
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
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      action: cdktf.listMapper(lbListenerRuleActionToTerraform)(this._action),
      condition: cdktf.listMapper(lbListenerRuleConditionToTerraform)(this._condition),
    };
  }
}
