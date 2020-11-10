// https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface LbListenerRuleConfig extends TerraformMetaArguments {
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
export interface LbListenerRuleActionFixedResponse {
  readonly contentType: string;
  readonly messageBody?: string;
  readonly statusCode?: string;
}
export interface LbListenerRuleActionForwardStickiness {
  readonly duration: number;
  readonly enabled?: boolean;
}
export interface LbListenerRuleActionForwardTargetGroup {
  readonly arn: string;
  readonly weight?: number;
}
export interface LbListenerRuleActionForward {
  /** stickiness block */
  readonly stickiness?: LbListenerRuleActionForwardStickiness[];
  /** target_group block */
  readonly targetGroup: LbListenerRuleActionForwardTargetGroup[];
}
export interface LbListenerRuleActionRedirect {
  readonly host?: string;
  readonly path?: string;
  readonly port?: string;
  readonly protocol?: string;
  readonly query?: string;
  readonly statusCode: string;
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
export interface LbListenerRuleConditionHostHeader {
  readonly values?: string[];
}
export interface LbListenerRuleConditionHttpHeader {
  readonly httpHeaderName: string;
  readonly values: string[];
}
export interface LbListenerRuleConditionHttpRequestMethod {
  readonly values: string[];
}
export interface LbListenerRuleConditionPathPattern {
  readonly values?: string[];
}
export interface LbListenerRuleConditionQueryString {
  readonly key?: string;
  readonly value: string;
}
export interface LbListenerRuleConditionSourceIp {
  readonly values: string[];
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

// Resource

export class LbListenerRule extends TerraformResource {

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
      listener_arn: this._listenerArn,
      priority: this._priority,
      action: this._action,
      condition: this._condition,
    };
  }
}
