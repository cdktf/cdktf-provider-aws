// https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "arn": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "listener_arn": {
        "type": "string",
        "required": true
      },
      "priority": {
        "type": "number",
        "optional": true,
        "computed": true
      }
    },
    "block_types": {
      "action": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "order": {
              "type": "number",
              "optional": true,
              "computed": true
            },
            "target_group_arn": {
              "type": "string",
              "optional": true
            },
            "type": {
              "type": "string",
              "required": true
            }
          },
          "block_types": {
            "authenticate_cognito": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "authentication_request_extra_params": {
                    "type": [
                      "map",
                      "string"
                    ],
                    "optional": true
                  },
                  "on_unauthenticated_request": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  },
                  "scope": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  },
                  "session_cookie_name": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  },
                  "session_timeout": {
                    "type": "number",
                    "optional": true,
                    "computed": true
                  },
                  "user_pool_arn": {
                    "type": "string",
                    "required": true
                  },
                  "user_pool_client_id": {
                    "type": "string",
                    "required": true
                  },
                  "user_pool_domain": {
                    "type": "string",
                    "required": true
                  }
                }
              },
              "max_items": 1
            },
            "authenticate_oidc": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "authentication_request_extra_params": {
                    "type": [
                      "map",
                      "string"
                    ],
                    "optional": true
                  },
                  "authorization_endpoint": {
                    "type": "string",
                    "required": true
                  },
                  "client_id": {
                    "type": "string",
                    "required": true
                  },
                  "client_secret": {
                    "type": "string",
                    "required": true,
                    "sensitive": true
                  },
                  "issuer": {
                    "type": "string",
                    "required": true
                  },
                  "on_unauthenticated_request": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  },
                  "scope": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  },
                  "session_cookie_name": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  },
                  "session_timeout": {
                    "type": "number",
                    "optional": true,
                    "computed": true
                  },
                  "token_endpoint": {
                    "type": "string",
                    "required": true
                  },
                  "user_info_endpoint": {
                    "type": "string",
                    "required": true
                  }
                }
              },
              "max_items": 1
            },
            "fixed_response": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "content_type": {
                    "type": "string",
                    "required": true
                  },
                  "message_body": {
                    "type": "string",
                    "optional": true
                  },
                  "status_code": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  }
                }
              },
              "max_items": 1
            },
            "forward": {
              "nesting_mode": "list",
              "block": {
                "block_types": {
                  "stickiness": {
                    "nesting_mode": "list",
                    "block": {
                      "attributes": {
                        "duration": {
                          "type": "number",
                          "required": true
                        },
                        "enabled": {
                          "type": "bool",
                          "optional": true
                        }
                      }
                    },
                    "max_items": 1
                  },
                  "target_group": {
                    "nesting_mode": "set",
                    "block": {
                      "attributes": {
                        "arn": {
                          "type": "string",
                          "required": true
                        },
                        "weight": {
                          "type": "number",
                          "optional": true
                        }
                      }
                    },
                    "min_items": 2,
                    "max_items": 5
                  }
                }
              },
              "max_items": 1
            },
            "redirect": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "host": {
                    "type": "string",
                    "optional": true
                  },
                  "path": {
                    "type": "string",
                    "optional": true
                  },
                  "port": {
                    "type": "string",
                    "optional": true
                  },
                  "protocol": {
                    "type": "string",
                    "optional": true
                  },
                  "query": {
                    "type": "string",
                    "optional": true
                  },
                  "status_code": {
                    "type": "string",
                    "required": true
                  }
                }
              },
              "max_items": 1
            }
          }
        },
        "min_items": 1
      },
      "condition": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "field": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "values": {
              "type": [
                "list",
                "string"
              ],
              "optional": true,
              "computed": true
            }
          },
          "block_types": {
            "host_header": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "values": {
                    "type": [
                      "set",
                      "string"
                    ],
                    "optional": true,
                    "computed": true
                  }
                }
              },
              "max_items": 1
            },
            "http_header": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "http_header_name": {
                    "type": "string",
                    "required": true
                  },
                  "values": {
                    "type": [
                      "set",
                      "string"
                    ],
                    "required": true
                  }
                }
              },
              "max_items": 1
            },
            "http_request_method": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "values": {
                    "type": [
                      "set",
                      "string"
                    ],
                    "required": true
                  }
                }
              },
              "max_items": 1
            },
            "path_pattern": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "values": {
                    "type": [
                      "set",
                      "string"
                    ],
                    "optional": true,
                    "computed": true
                  }
                }
              },
              "max_items": 1
            },
            "query_string": {
              "nesting_mode": "set",
              "block": {
                "attributes": {
                  "key": {
                    "type": "string",
                    "optional": true
                  },
                  "value": {
                    "type": "string",
                    "required": true
                  }
                }
              }
            },
            "source_ip": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "values": {
                    "type": [
                      "set",
                      "string"
                    ],
                    "required": true
                  }
                }
              },
              "max_items": 1
            }
          }
        },
        "min_items": 1
      }
    }
  }
}
*/
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

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // listener_arn - computed: false, optional: false, required: true
  private _listenerArn: string;
  public get listenerArn() {
    return this._listenerArn;
  }
  public set listenerArn(value: string) {
    this._listenerArn = value;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number;
  public get priority() {
    return this._priority ?? this.getNumberAttribute('priority');
  }
  public set priority(value: number | undefined) {
    this._priority = value;
  }

  // action - computed: false, optional: false, required: true
  private _action: LbListenerRuleAction[];
  public get action() {
    return this._action;
  }
  public set action(value: LbListenerRuleAction[]) {
    this._action = value;
  }

  // condition - computed: false, optional: false, required: true
  private _condition: LbListenerRuleCondition[];
  public get condition() {
    return this._condition;
  }
  public set condition(value: LbListenerRuleCondition[]) {
    this._condition = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      listener_arn: this._listenerArn,
      priority: this._priority,
      action: this._action,
      condition: this._condition,
    };
  }
}
