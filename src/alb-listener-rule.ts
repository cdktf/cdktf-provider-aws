// https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface AlbListenerRuleConfig extends TerraformMetaArguments {
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
export interface AlbListenerRuleActionFixedResponse {
  readonly contentType: string;
  readonly messageBody?: string;
  readonly statusCode?: string;
}
export interface AlbListenerRuleActionForwardStickiness {
  readonly duration: number;
  readonly enabled?: boolean;
}
export interface AlbListenerRuleActionForwardTargetGroup {
  readonly arn: string;
  readonly weight?: number;
}
export interface AlbListenerRuleActionForward {
  /** stickiness block */
  readonly stickiness?: AlbListenerRuleActionForwardStickiness[];
  /** target_group block */
  readonly targetGroup: AlbListenerRuleActionForwardTargetGroup[];
}
export interface AlbListenerRuleActionRedirect {
  readonly host?: string;
  readonly path?: string;
  readonly port?: string;
  readonly protocol?: string;
  readonly query?: string;
  readonly statusCode: string;
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
export interface AlbListenerRuleConditionHostHeader {
  readonly values?: string[];
}
export interface AlbListenerRuleConditionHttpHeader {
  readonly httpHeaderName: string;
  readonly values: string[];
}
export interface AlbListenerRuleConditionHttpRequestMethod {
  readonly values: string[];
}
export interface AlbListenerRuleConditionPathPattern {
  readonly values?: string[];
}
export interface AlbListenerRuleConditionQueryString {
  readonly key?: string;
  readonly value: string;
}
export interface AlbListenerRuleConditionSourceIp {
  readonly values: string[];
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

// Resource

export class AlbListenerRule extends TerraformResource {

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
      listener_arn: this._listenerArn,
      priority: this._priority,
      action: this._action,
      condition: this._condition,
    };
  }
}
