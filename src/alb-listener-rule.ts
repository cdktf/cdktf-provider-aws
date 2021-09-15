// https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlbListenerRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#listener_arn AlbListenerRule#listener_arn}
  */
  readonly listenerArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#priority AlbListenerRule#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#tags AlbListenerRule#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#tags_all AlbListenerRule#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#action AlbListenerRule#action}
  */
  readonly action: AlbListenerRuleAction[];
  /**
  * condition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#condition AlbListenerRule#condition}
  */
  readonly condition: AlbListenerRuleCondition[];
}
export interface AlbListenerRuleActionAuthenticateCognito {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#authentication_request_extra_params AlbListenerRule#authentication_request_extra_params}
  */
  readonly authenticationRequestExtraParams?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#on_unauthenticated_request AlbListenerRule#on_unauthenticated_request}
  */
  readonly onUnauthenticatedRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#scope AlbListenerRule#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#session_cookie_name AlbListenerRule#session_cookie_name}
  */
  readonly sessionCookieName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#session_timeout AlbListenerRule#session_timeout}
  */
  readonly sessionTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#user_pool_arn AlbListenerRule#user_pool_arn}
  */
  readonly userPoolArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#user_pool_client_id AlbListenerRule#user_pool_client_id}
  */
  readonly userPoolClientId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#user_pool_domain AlbListenerRule#user_pool_domain}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#authentication_request_extra_params AlbListenerRule#authentication_request_extra_params}
  */
  readonly authenticationRequestExtraParams?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#authorization_endpoint AlbListenerRule#authorization_endpoint}
  */
  readonly authorizationEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#client_id AlbListenerRule#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#client_secret AlbListenerRule#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#issuer AlbListenerRule#issuer}
  */
  readonly issuer: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#on_unauthenticated_request AlbListenerRule#on_unauthenticated_request}
  */
  readonly onUnauthenticatedRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#scope AlbListenerRule#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#session_cookie_name AlbListenerRule#session_cookie_name}
  */
  readonly sessionCookieName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#session_timeout AlbListenerRule#session_timeout}
  */
  readonly sessionTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#token_endpoint AlbListenerRule#token_endpoint}
  */
  readonly tokenEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#user_info_endpoint AlbListenerRule#user_info_endpoint}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#content_type AlbListenerRule#content_type}
  */
  readonly contentType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#message_body AlbListenerRule#message_body}
  */
  readonly messageBody?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#status_code AlbListenerRule#status_code}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#duration AlbListenerRule#duration}
  */
  readonly duration: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#enabled AlbListenerRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

function albListenerRuleActionForwardStickinessToTerraform(struct?: AlbListenerRuleActionForwardStickiness): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export interface AlbListenerRuleActionForwardTargetGroup {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#arn AlbListenerRule#arn}
  */
  readonly arn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#weight AlbListenerRule#weight}
  */
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
  /**
  * stickiness block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#stickiness AlbListenerRule#stickiness}
  */
  readonly stickiness?: AlbListenerRuleActionForwardStickiness[];
  /**
  * target_group block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#target_group AlbListenerRule#target_group}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#host AlbListenerRule#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#path AlbListenerRule#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#port AlbListenerRule#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#protocol AlbListenerRule#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#query AlbListenerRule#query}
  */
  readonly query?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#status_code AlbListenerRule#status_code}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#order AlbListenerRule#order}
  */
  readonly order?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#target_group_arn AlbListenerRule#target_group_arn}
  */
  readonly targetGroupArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#type AlbListenerRule#type}
  */
  readonly type: string;
  /**
  * authenticate_cognito block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#authenticate_cognito AlbListenerRule#authenticate_cognito}
  */
  readonly authenticateCognito?: AlbListenerRuleActionAuthenticateCognito[];
  /**
  * authenticate_oidc block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#authenticate_oidc AlbListenerRule#authenticate_oidc}
  */
  readonly authenticateOidc?: AlbListenerRuleActionAuthenticateOidc[];
  /**
  * fixed_response block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#fixed_response AlbListenerRule#fixed_response}
  */
  readonly fixedResponse?: AlbListenerRuleActionFixedResponse[];
  /**
  * forward block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#forward AlbListenerRule#forward}
  */
  readonly forward?: AlbListenerRuleActionForward[];
  /**
  * redirect block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#redirect AlbListenerRule#redirect}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#values AlbListenerRule#values}
  */
  readonly values: string[];
}

function albListenerRuleConditionHostHeaderToTerraform(struct?: AlbListenerRuleConditionHostHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface AlbListenerRuleConditionHttpHeader {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#http_header_name AlbListenerRule#http_header_name}
  */
  readonly httpHeaderName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#values AlbListenerRule#values}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#values AlbListenerRule#values}
  */
  readonly values: string[];
}

function albListenerRuleConditionHttpRequestMethodToTerraform(struct?: AlbListenerRuleConditionHttpRequestMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface AlbListenerRuleConditionPathPattern {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#values AlbListenerRule#values}
  */
  readonly values: string[];
}

function albListenerRuleConditionPathPatternToTerraform(struct?: AlbListenerRuleConditionPathPattern): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface AlbListenerRuleConditionQueryString {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#key AlbListenerRule#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#value AlbListenerRule#value}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#values AlbListenerRule#values}
  */
  readonly values: string[];
}

function albListenerRuleConditionSourceIpToTerraform(struct?: AlbListenerRuleConditionSourceIp): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface AlbListenerRuleCondition {
  /**
  * host_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#host_header AlbListenerRule#host_header}
  */
  readonly hostHeader?: AlbListenerRuleConditionHostHeader[];
  /**
  * http_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#http_header AlbListenerRule#http_header}
  */
  readonly httpHeader?: AlbListenerRuleConditionHttpHeader[];
  /**
  * http_request_method block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#http_request_method AlbListenerRule#http_request_method}
  */
  readonly httpRequestMethod?: AlbListenerRuleConditionHttpRequestMethod[];
  /**
  * path_pattern block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#path_pattern AlbListenerRule#path_pattern}
  */
  readonly pathPattern?: AlbListenerRuleConditionPathPattern[];
  /**
  * query_string block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#query_string AlbListenerRule#query_string}
  */
  readonly queryString?: AlbListenerRuleConditionQueryString[];
  /**
  * source_ip block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#source_ip AlbListenerRule#source_ip}
  */
  readonly sourceIp?: AlbListenerRuleConditionSourceIp[];
}

function albListenerRuleConditionToTerraform(struct?: AlbListenerRuleCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host_header: cdktf.listMapper(albListenerRuleConditionHostHeaderToTerraform)(struct!.hostHeader),
    http_header: cdktf.listMapper(albListenerRuleConditionHttpHeaderToTerraform)(struct!.httpHeader),
    http_request_method: cdktf.listMapper(albListenerRuleConditionHttpRequestMethodToTerraform)(struct!.httpRequestMethod),
    path_pattern: cdktf.listMapper(albListenerRuleConditionPathPatternToTerraform)(struct!.pathPattern),
    query_string: cdktf.listMapper(albListenerRuleConditionQueryStringToTerraform)(struct!.queryString),
    source_ip: cdktf.listMapper(albListenerRuleConditionSourceIpToTerraform)(struct!.sourceIp),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html aws_alb_listener_rule}
*/
export class AlbListenerRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_alb_listener_rule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html aws_alb_listener_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlbListenerRuleConfig
  */
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
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      action: cdktf.listMapper(albListenerRuleActionToTerraform)(this._action),
      condition: cdktf.listMapper(albListenerRuleConditionToTerraform)(this._condition),
    };
  }
}
