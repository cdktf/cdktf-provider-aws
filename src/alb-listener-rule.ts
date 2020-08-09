// https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html
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
  private _action: AlbListenerRuleAction[];
  public get action() {
    return this._action;
  }
  public set action(value: AlbListenerRuleAction[]) {
    this._action = value;
  }

  // condition - computed: false, optional: false, required: true
  private _condition: AlbListenerRuleCondition[];
  public get condition() {
    return this._condition;
  }
  public set condition(value: AlbListenerRuleCondition[]) {
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
